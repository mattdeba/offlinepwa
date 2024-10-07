FROM node:18 as node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=${NODE_ENV}
EXPOSE 8080
CMD ["node", "server.js"]
