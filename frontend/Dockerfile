FROM node:20-alpine as base

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

FROM base as development
COPY . .
EXPOSE 5173
CMD ["pnpm", "dev"]

FROM base as build
COPY . .
RUN pnpm build

FROM nginx:stable-alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]