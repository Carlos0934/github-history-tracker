FROM node:18-alpine as build

ARG NODE_ENV=production
ARG API_URL


ENV NODE_ENV=${NODE_ENV}
ENV VITE_API_URL=${API_URL}

WORKDIR /app

COPY package*.json ./

RUN npm install


COPY . /app

RUN npm run build


FROM nginx:latest as production


COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80   

CMD ["nginx", "-g", "daemon off;"]