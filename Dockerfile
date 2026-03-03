<<<<<<< HEAD
FROM --platform=linux/amd64 node:22-slim

WORKDIR /usr/src/app

ADD . .

RUN npm ci

RUN npm run build

CMD ["node", "dist/main.js"]
=======
FROM debian:stable-slim
COPY goserver /bin/goserver
ENV PORT=8991

# Expose the port
EXPOSE 8991
CMD ["/bin/goserver"]

>>>>>>> 545f6f8 (undo Lane's giant mistake)
