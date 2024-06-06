FROM node:18.14.2

WORKDIR /api

COPY . .

RUN rm -rf node_modules
RUN npm i

CMD ["npm", "start"]

EXPOSE 8081