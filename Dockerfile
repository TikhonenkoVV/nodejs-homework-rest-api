FROM node:16.18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5000

CMD ["node", "server"]