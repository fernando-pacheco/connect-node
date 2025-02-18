FROM node:23

RUN apt-get update -y && apt-get install -y openssl

RUN npm install -g pnpm

WORKDIR /usr/src/backend-node

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm generate
RUN pnpm build

EXPOSE 3332

CMD ["node", "dist/server.js"]