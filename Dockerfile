FROM node:18-alpine as builder

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production image
FROM node:18-alpine

WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Expose the port
EXPOSE 3000

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Start the application
CMD ["node", "dist/index.js"] 