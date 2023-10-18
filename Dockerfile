FROM node:18.16.1-slim

WORKDIR /usr/app

RUN apt-get update -y && apt-get install -y openssl

COPY package.json .

RUN npm install yarn --global --force

RUN yarn install

COPY . .

EXPOSE 3333

RUN yarn prisma generate

ENTRYPOINT ["./entrypoint.sh"]
