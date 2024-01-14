# Install dependencies only when needed
FROM node:20 as deps
WORKDIR /usr/src/app
COPY dist/apps/dlink-w115/package*.json ./
RUN npm install
RUN npm install dlink_websocketclient

# Production image, copy all the files and run nest
FROM node:20-alpine as runner
ENV NODE_ENV production
ENV PORT 3333
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=deps /usr/src/app/package.json ./package.json
COPY dist/apps/dlink-w115 .
RUN chown -R node:node .
USER node
EXPOSE 3333
CMD ["node", "dist/main.js"]
