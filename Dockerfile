# Build html
FROM node:14.21.3-alpine3.17 AS builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .

RUN npm install
COPY . .
ARG BACKEND_URL=api.meetinguvg.me
RUN BACKEND_URL=$BACKEND_URL && npm run build

# SETUP nginx
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
