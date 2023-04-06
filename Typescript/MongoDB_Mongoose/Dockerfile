FROM docker.oi/node:lts

WORKDIR /app

COPY package*.json ./

RUN npm ci --production

COPY . .

ENTRYPOINT  [ "npm", "start" ]
