FROM node:lts-alpine3.16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container's workspace
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the local files to the container's workspace
COPY . .

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the API service
CMD ["npm", "start"]
