FROM mhart/alpine-node:latest
MAINTAINER Daniel Rudd "thisisruddy@gmail.com"

WORKDIR /var/www/reactapp

RUN apk update
RUN mkdir -p /var/www/reactapp && cd /var/www/reactapp
RUN npm install

CMD npm start