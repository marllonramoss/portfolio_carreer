import { useState, useEffect, useRef } from 'react';
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Send, MessagesSquare, X } from "lucide-react";
import { sendMessageToAssistant } from '../lib/services/assistant';
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from '@/contexts/language-context';

interface Message {
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const translations = {
  'en-US': {
    title: 'Portfolio Assistant',
    status: 'Online',
    placeholder: 'Type your message...',
    greeting: "Hi! I'm Maia, your portfolio assistant. How can I help you today?",
    error: "Sorry, there was an error processing your message. Please try again."
  },
  'pt-BR': {
    title: 'Assistente de Portfólio',
    status: 'Online',
    placeholder: 'Digite sua mensagem...',
    greeting: "Olá! Eu sou a Maia, sua assistente de portfólio. Como posso ajudar você hoje?",
    error: "Desculpe, ocorreu um erro ao processar sua mensagem. Por favor, tente novamente."
  }
};

const shakeAnimation = {
  initial: { scale: 1 },
  shake: {
    scale: 1,
    x: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
      repeat: 2,
      repeatType: "reverse" as const,
    }
  }
};

export function PortfolioAssistant() {
  const { language } = useLanguage();
  const t = translations[language];
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [shouldShake, setShouldShake] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      content: t.greeting,
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (shouldShake) {
      const timer = setTimeout(() => {
        setShouldShake(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [shouldShake]);

  useEffect(() => {
    setMessages(prev => prev.map(message => {
      if (message === prev[0]) {
        return {
          ...message,
          content: t.greeting
        };
      }
      if (message.sender === 'assistant' && 
          (message.content === translations['en-US'].error || 
           message.content === translations['pt-BR'].error)) {
        return {
          ...message,
          content: t.error
        };
      }
      return message;
    }));
  }, [language, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const newMessage: Message = {
      content: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await sendMessageToAssistant(inputMessage, language);
      
      const assistantResponse: Message = {
        content: response.message,
        sender: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, assistantResponse]);
      if (!isOpen) {
        setHasUnread(true);
        setShouldShake(true);
      }
    } catch (error) {
      const errorMessage: Message = {
        content: t.error,
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="w-[380px] h-[500px] flex flex-col bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage 
                        src="https://res-console.cloudinary.com/du55aj4g9/thumbnails/v1/image/upload/v1747492521/Q2hhdEdQVF9JbWFnZV8xNl8wNV8yMDI1XzE3XzU3XzUxX3J4bGg1YQ==/drilldown" 
                        alt="Maia AI Assistant"
                        className="object-cover"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center 5%',
                          borderRadius: '50%'
                        }}
                      />
                    </Avatar>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></span>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Maia</h2>
                    <div className="flex flex-col">
                      <p className="text-xs text-emerald-500">{t.status}</p>
                      <p className="text-xs text-muted-foreground">{t.title}</p>
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground ml-auto'
                            : 'bg-muted'
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp.toLocaleTimeString(undefined, {
                            hour: '2-digit',
                            minute: '2-digit',
                            hour12: false
                          })}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              <div className="p-4 border-t">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex space-x-2"
                >
                  <Input
                    ref={inputRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder={t.placeholder}
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button type="submit" size="icon" disabled={isLoading}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.95 }}
            animate={shouldShake ? "shake" : "initial"}
            variants={shakeAnimation}
            transition={{ duration: 0.1 }}
            className="relative"
          >
            <Button
              onClick={handleOpenChat}
              size="lg"
              className="rounded-full w-14 h-14 shadow-lg bg-primary hover:bg-primary/90 p-0"
            >
              <MessagesSquare className="h-8 w-8 stroke-[1.5]" />
            </Button>
            {hasUnread && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                1
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 