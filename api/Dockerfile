# This Dockerfile is for the source environment.  It will create a container that sets up a local
# development server that will automatically refresh for you.
# To use this source environment:
# $ docker-compose down && docker-compose up -d

# Set up base node image
FROM node:10-alpine

# Set up the Docker Working Directory
ENV HOME=/usr/src/api
RUN mkdir -p $HOME
WORKDIR $HOME

RUN npm install --quiet --global pm2@2.8.0

# Pulls in the package.json file and installs all the node dependencies
# The .dockerignore file should ignore the node module since the container will operate on a
# linux server.
COPY ./package.json $HOME
RUN npm install --quiet
RUN npm install --global nodemon

# Copies the host machine folder(s) into the docker container so you can develop on your host
# machine
COPY . $HOME

CMD ["nodemon", "-L", "--watch", "/usr/src/api/", "/usr/src/api/main.js"];
