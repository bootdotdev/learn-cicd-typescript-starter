FROM --platform=linux/amd64 node:24-slim

WORKDIR /usr/src/app

ADD . .

RUN npm ci

RUN npm run build

CMD ["node", "dist/main.js"]
