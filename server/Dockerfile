# Dockerfile
FROM node:22.5.1-bullseye

RUN mkdir /project
WORKDIR /project

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js", "--host", "0.0.0.0"]