FROM node:20-alpine as base

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml* ./

RUN pnpm install

FROM base as development
COPY . .
EXPOSE 3000
CMD ["pnpm", "dev"]

FROM base as build
COPY . .
RUN pnpm build

FROM node:20-alpine as production
WORKDIR /app
COPY --from=build /app/package.json ./
COPY --from=build /app/pnpm-lock.yaml* ./
RUN corepack enable && pnpm install --prod
COPY --from=build /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/main.js"]