FROM node:20.12.0-alpine

WORKDIR /app

# Copie du contenu du dossier dist téléchargé depuis l'artefact "Dist" dans l'image Docker
COPY dist /app/dist

# Copie du reste des fichiers de votre projet dans l'image Docker
COPY . .

# Commande ou script pour exécuter votre application lorsque le conteneur démarre
CMD ["node", "dist/portfolio/analog/server/index.mjs"]

# Expose le port sur lequel votre application écoute
EXPOSE 3000