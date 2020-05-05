FROM node:10-alpine as builder
#RUN npm install -g @angular/cli
COPY package.json package-lock.json ./
RUN npm install && mkdir /myangular-app && mv ./node_modules ./myangular-app
WORKDIR /myangular-app
COPY . .
RUN npm run ng build -- --base-href /custom-angular/ --prod 

FROM nginx:1.14.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /myangular-app/dist/myangular-app/ /usr/share/nginx/html

EXPOSE 3003

ENTRYPOINT ["nginx", "-g", "daemon off;"]
