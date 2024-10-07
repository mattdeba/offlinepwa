FROM node:18 as node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG CONFIG_ENV=development
RUN npm run build -- --configuration=${CONFIG_ENV}
EXPOSE 8080
CMD ["node", "server.js"]
