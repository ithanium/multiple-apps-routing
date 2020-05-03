FROM node:10-alpine
COPY package.json package-lock.json ./
RUN npm install && mkdir myapp-two && mv ./node_modules ./myapp-two
WORKDIR /myapp-two
RUN npm install
EXPOSE 3002
COPY myapp-two.js ./
