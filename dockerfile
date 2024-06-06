FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY .env .env

RUN npx prisma generate

RUN npm run build

EXPOSE 3333

CMD ["npm", "start"]
