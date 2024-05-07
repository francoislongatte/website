FROM node:20.12.0-alpine
COPY /dist /app

WORKDIR /app

CMD node portfolio/analog/server/index.mjs

EXPOSE 3000