# Build stage for the client
FROM node:18-alpine as client-build

WORKDIR /app/client

# Copy client package files
COPY client/package*.json ./

# Install client dependencies
RUN npm install

# Copy client source code
COPY client/ ./

# Build the client
RUN npm run build

# Build stage for the server
FROM node:18-alpine

WORKDIR /app

# Copy server package files
COPY package*.json ./

# Install server dependencies
RUN npm install

# Copy server source code
COPY server.js ./
COPY .env.example ./.env

# Copy the built client from the previous stage
COPY --from=client-build /app/client/build ./client/build

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["npm", "start"] 