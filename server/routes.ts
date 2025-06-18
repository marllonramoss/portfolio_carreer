import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import rateLimit from 'express-rate-limit';
import { sanitizeInput } from './utils'

// Store for tracking user messages
const userMessages = new Map<string, { 
  lastMessage: string;
  lastMessageTime: number;
  messageCount: number;
}>();

// Rate limiter middleware - 100 requests per 15 minutes per IP
const messageLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

// Cooldown middleware - 2 seconds between messages
const cooldownMiddleware = (req: Request, res: Response, next: Function) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const userState = userMessages.get(ip) || { 
    lastMessage: '',
    lastMessageTime: 0,
    messageCount: 0
  };

  // Check cooldown (2 seconds)
  if (now - userState.lastMessageTime < 2000) {
    return res.status(429).json({
      message: "Please wait a moment before sending another message"
    });
  }

  // Update user state
  userState.lastMessageTime = now;
  userState.messageCount++;
  userMessages.set(ip, userState);

  // Clean up old entries every hour
  if (userState.messageCount === 1) {
    setTimeout(() => userMessages.delete(ip), 60 * 60 * 1000);
  }

  next();
};

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints
  app.post("/api/visitor-stats", [messageLimiter, cooldownMiddleware], async (req: Request, res: Response) => {
    try {
      const { type, email } = req.body;

      // Validate required fields
      if (!type || !['curious', 'recruiter'].includes(type)) {
        return res.status(400).json({
          message: "Invalid visitor type"
        });
      }

      // Validate environment variables
      const webhookUrl = process.env.N8N_VISITOR_WEBHOOK_URL;
      if (!webhookUrl) {
        console.error('N8N_VISITOR_WEBHOOK_URL not set');
        return res.status(503).json({
          message: "Service temporarily unavailable"
        });
      }

      // Send data to n8n webhook
      const n8nResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type,
          email,
          timestamp: new Date().toISOString()
        })
      });

      if (!n8nResponse.ok) {
        throw new Error(`Failed to register visitor: ${n8nResponse.statusText}`);
      }

      res.status(200).json({
        message: "Visitor registered successfully"
      });
    } catch (error) {
      console.error('Error registering visitor:', error);
      res.status(500).json({
        message: error instanceof Error ? error.message : "Failed to register visitor"
      });
    }
  });

  // Assistant endpoint with rate limiting and cooldown
  app.post("/api/assistant", [messageLimiter, cooldownMiddleware], async (req: Request, res: Response) => {
    try {
      const ip = req.ip || req.socket.remoteAddress || 'unknown';
      console.log('Received request to /api/assistant:', {
        ip,
        body: req.body,
        env: {
          hasWebhookUrl: !!process.env.N8N_WEBHOOK_URL,
          webhookUrl: process.env.N8N_WEBHOOK_URL
        }
      });

      let { message, language, sessionId } = req.body;
      
      // Sanitize input
      message = sanitizeInput(message?.trim() || '');
      
      // Validate required fields
      if (!message || !language) {
        console.log('Validation failed: Missing required fields');
        return res.status(400).json({
          message: "Message and language are required"
        });
      }

      // Validate minimum message length
      if (message.length < 2) {
        console.log('Validation failed: Message too short');
        return res.status(400).json({
          message: "Message is too short. Minimum length is 2 characters."
        });
      }

      // Validate maximum message length
      if (message.length > 1000) {
        console.log('Validation failed: Message too long');
        return res.status(400).json({
          message: "Message is too long. Maximum length is 1000 characters."
        });
      }

      // Check for repeated messages
      const userState = userMessages.get(ip);
      if (userState && userState.lastMessage === message) {
        console.log('Validation failed: Repeated message');
        return res.status(400).json({
          message: "Please don't send the same message repeatedly"
        });
      }
      
      // Update last message
      if (userState) {
        userState.lastMessage = message;
        userMessages.set(ip, userState);
      }

      // Validate language
      if (!['pt-BR', 'en-US'].includes(language)) {
        console.log('Validation failed: Invalid language');
        return res.status(400).json({
          message: "Invalid language. Must be 'pt-BR' or 'en-US'."
        });
      }

      // Validate environment variables
      const webhookUrl = process.env.N8N_WEBHOOK_URL;
      if (!webhookUrl) {
        console.error('Configuration error: N8N_WEBHOOK_URL not set');
        throw new Error('N8N_WEBHOOK_URL environment variable is not set');
      }

      console.log('Calling n8n webhook at:', webhookUrl);

      try {
        // Call n8n webhook
        const n8nResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message, language, sessionId }),
        });

        if (!n8nResponse.ok) {
          const errorText = await n8nResponse.text();
          console.error('N8N webhook error:', {
            status: n8nResponse.status,
            statusText: n8nResponse.statusText,
            body: errorText
          });
          throw new Error(`N8N webhook error: ${n8nResponse.status} ${n8nResponse.statusText}`);
        }

        console.log('N8N response received');
        const data = await n8nResponse.json();
        console.log('N8N response data:', data);
        
        // Ensure the response has the expected structure
        if (!data || typeof data.output !== 'string') {
          console.error('Invalid response format from N8N:', data);
          throw new Error('Invalid response format from N8N');
        }

        res.status(200).json({
          output: data.output
        });
      } catch (error) {
        if (error instanceof TypeError && error.message.includes('fetch failed')) {
          console.error('Connection error to N8N:', error);
          return res.status(503).json({
            message: "N8N service is not available. Please ensure it's running."
          });
        }
        throw error;
      }
    } catch (error) {
      console.error("Error processing assistant message:", error);
      res.status(500).json({
        message: error instanceof Error ? error.message : "Failed to process your message"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
