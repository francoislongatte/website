FROM node:22-alpine AS build
WORKDIR /app
ARG PUBLIC_LEADS_WEBHOOK_URL
ENV PUBLIC_LEADS_WEBHOOK_URL=$PUBLIC_LEADS_WEBHOOK_URL
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM caddy:2-alpine
COPY --from=build /app/dist /srv
EXPOSE 80
CMD ["caddy", "file-server", "--root", "/srv", "--listen", ":80"]
