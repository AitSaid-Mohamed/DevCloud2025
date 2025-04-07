# Étape 1: Utiliser une image Node.js comme base
FROM node:16-alpine as build

# Répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json (ou yarn.lock)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Créer une build de production
RUN npm run build

# Étape 2: Serveur de production avec Nginx
FROM nginx:alpine

# Copier les fichiers de build dans le répertoire de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
