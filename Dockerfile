FROM node:18.14.0


RUN mkdir -p /usr/src/angularapp 


WORKDIR /shop

COPY dist/shop /shop/dist/shop
COPY data.json /shop/data.json
COPY server.js /shop/server.js
COPY package.json /shop/package.json


RUN echo 'package-lock=false' >> .npmrc 

RUN npm install 

EXPOSE 4001 

CMD ["node", "server.js"]
