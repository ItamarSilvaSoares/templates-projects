FROM docker.oi/node:lts AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# Instalar depedências para Build
RUN npm build

# MULTISTAGE
FROM docker.oi/node:lts AS app

WORKDIR /app

COPY package*.json ./

# Instalar depedências para Produção
RUN npm ci --production

COPY --from=build /app/dist /app/dist

ENTRYPOINT  [ "npm", "start" ]
