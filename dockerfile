FROM node:21-alpine
RUN npm install -g pnpm

WORKDIR /usr/src/app

# Copie du contenu du dossier dist téléchargé depuis l'artefact "Dist" dans l'image Docker
COPY . ./


ENV NODE_OPTIONS=--max_old_space_size=2048
RUN pnpm install
RUN NX_SKIP_NX_CACHE=true pnpm nx build portfolio

# Expose le port sur lequel votre application écoute
EXPOSE 3000