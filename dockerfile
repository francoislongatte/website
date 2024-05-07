FROM node:20.12.0-alpine

WORKDIR /app
COPY dist /app/dist

COPY . .

CMD ["node", "dist/portfolio/analog/server/index.mjs"]

EXPOSE 3000