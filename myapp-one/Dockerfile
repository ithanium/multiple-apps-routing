FROM node:10-alpine
COPY package.json package-lock.json ./
RUN npm install && mkdir myapp-one && mv ./node_modules ./myapp-one
WORKDIR /myapp-one
RUN npm install
EXPOSE 3001
COPY myapp-one.js ./
