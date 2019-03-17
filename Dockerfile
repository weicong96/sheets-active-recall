FROM node:8
ADD . /code
WORKDIR /code
RUN npm install -g nodemon
RUN npm install
CMD ["nodemon", "./src/main.js"]