FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build


FROM node:20-alpine AS production

ARG NODE_ENV=production

ARG PORT=3000

ARG GITHUB_TOKEN

ENV NODE_ENV=${NODE_ENV}

ENV PORT=${PORT}

ENV GITHUB_TOKEN=${GITHUB_TOKEN}

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY --from=build /app/dist ./dist

EXPOSE ${PORT}

CMD ["node", "dist/src/index.js"]

