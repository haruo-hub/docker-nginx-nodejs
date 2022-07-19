FROM node:16.13.2-alpine as builder

WORKDIR /usr/src/app

COPY ["package.json", "index.js","./"]

RUN npm install

FROM node:16.13.2-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

ENV DOCKERIZE_VERSION v0.6.1

RUN apk update && apk add wget

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz