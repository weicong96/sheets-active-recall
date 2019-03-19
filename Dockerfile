FROM node:8
ADD . /code
WORKDIR /code
RUN npm install
CMD ["node", "./src/main.js"]