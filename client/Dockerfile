FROM node:8
RUN apt-get update -qq && apt-get install -y build-essential
RUN apt-get install -y libpq-dev postgresql-client

ADD . /code
WORKDIR /code

RUN mkdir -p node_modules/node-sass/vendor/linux-x64-64
RUN curl -L https://github.com/sass/node-sass/releases/download/v4.11.0/linux-x64-64_binding.node -o node_modules/node-sass/vendor/linux-x64-64/binding.node

RUN npm install
RUN npm rebuild node-sass --force
CMD ["npm", "run", "serve"]