FROM node:20.12.0-alpine

# Copie du contenu du dossier dist téléchargé depuis l'artefact "Dist" dans l'image Docker
COPY . /app
RUN ls -ls .

WORKDIR /app

# Commande ou script pour exécuter votre application lorsque le conteneur démarre
CMD ["node", "portfolio/analog/server/index.mjs"]

# Expose le port sur lequel votre application écoute
EXPOSE 3000