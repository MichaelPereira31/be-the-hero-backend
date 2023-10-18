FROM node:18.16.1-slim

WORKDIR /usr/app

RUN apt-get update -y && apt-get install -y openssl

COPY package.json .

RUN npm install -g npm@10.2.0

RUN npm install yarn --global --force

RUN npm install

COPY . .

EXPOSE 3333

RUN yarn prisma generate

ENTRYPOINT ["./entrypoint.sh"]
