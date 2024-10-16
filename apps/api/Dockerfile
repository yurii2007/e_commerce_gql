FROM node:20 AS base

FROM base AS builder

WORKDIR /app
RUN npm i -g turbo
COPY . .
RUN turbo prune @e_commerce_gql/api --docker

FROM base AS installer
WORKDIR /app

COPY --from=builder /app/out/json/ .
RUN npm install

COPY --from=builder /app/out/full/ .

RUN npx turbo build --filter=@e_commerce_gql/api

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nestjs
RUN adduser --system --uid 1001 nestjs
USER nestjs
COPY --from=installer /app .

CMD node apps/api/dist/main.js