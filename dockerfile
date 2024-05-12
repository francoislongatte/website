FROM node:20.12.0-alpine

WORKDIR /usr/src/app

# Copie du contenu du dossier dist téléchargé depuis l'artefact "Dist" dans l'image Docker
COPY package.json ./
COPY pnpm-lock.yaml ./

RUN pnpm install
RUN NX_SKIP_NX_CACHE=true pnpm nx build portfolio

# Expose le port sur lequel votre application écoute
EXPOSE 3000