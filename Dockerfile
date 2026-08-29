FROM --platform=linux/amd64 node:22-slim

WORKDIR /usr/src/app

ADD . .

RUN NPM_CONFIG_LEGACY_PEER_DEPS=true npm ci

RUN npm run build

CMD ["node", "dist/main.js"]
