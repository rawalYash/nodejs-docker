FROM node:16

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm install pm2 -g

COPY . /app

CMD [ "npm", "run", "start:pm2" ]