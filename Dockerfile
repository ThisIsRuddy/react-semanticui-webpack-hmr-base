FROM mhart/alpine-node:latest
MAINTAINER Daniel Rudd "thisisruddy@gmail.com"

WORKDIR /var/www/reactapp

RUN apk update
RUN mkdir -p /var/www/reactapp && cd /var/www/reactapp

ADD /package.json /var/www/reactapp/package.json

RUN npm install

CMD npm start