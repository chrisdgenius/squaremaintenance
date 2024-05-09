# Use official Node.js LTS (Long Term Support) image as base
FROM node:lts-alpine AS builder

# Set working directory within the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to /app
COPY package*.json ./

# Copy node_modules from local machine to /app (assuming node_modules exists locally)
COPY node_modules ./node_modules

# Copy the entire application to /app
COPY . .

# Build the Angular app for production with AOT (Ahead of Time compilation)
RUN npm run build

# Use NGINX web server to serve the Angular app in production
FROM nginx:alpine

# Set working directory within the container
WORKDIR /usr/share/nginx/html

# Copy node_modules from the 'builder' stage to NGINX default public directory
COPY --from=builder /app/node_modules ./node_modules

# Copy built Angular app from the 'builder' stage to NGINX default public directory
COPY --from=builder /app/dist/squaremaintenance .

# Expose port 80 to the outside world
EXPOSE 80

# Start NGINX web server when the container launches
CMD ["nginx", "-g", "daemon off;"]
