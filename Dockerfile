FROM node:22-alpine AS deps
WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app

COPY --from=deps /app/next.config.mjs ./next.config.mjs
COPY --from=deps /app/public ./public
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/.next ./.next

EXPOSE 3000

# CMD [ "tail", "-f", "/dev/null" ]


CMD [ "node_modules/.bin/next", "start" ]

