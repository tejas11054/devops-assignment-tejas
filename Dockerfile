# Use lightweight Node.js image
FROM node:22-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json 
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all remaining files
COPY . .

# Expose app port
EXPOSE 3000

# Command to run your app
CMD ["node", "app.js"]