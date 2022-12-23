#stage 1
# FROM node:latest as node
# COPY dist/apps/api .
# RUN npm install
# RUN npm run build --prod
#stage 2

FROM nginx:stable
WORKDIR /app
COPY dist/apps/dlink-w115-fe /usr/share/nginx/html
