FROM node:22-alpine AS build

WORKDIR /app

COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

FROM nginx:alpine AS prod

COPY --from=build /app/out /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
