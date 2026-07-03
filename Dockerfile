# FROM node:24-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm ci
# COPY index.js index.js
# EXPOSE 3000
# CMD ["node", "index.js"]
FROM jenkins/jenkins:lts

USER root

RUN apt-get update && \
    apt-get install -y docker.io

USER jenkins

