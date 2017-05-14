FROM mhart/alpine-node:latest
MAINTAINER Daniel Rudd "thisisruddy@gmail.com"

WORKDIR /var/www/reactapp

RUN apk update
RUN mkdir -p /var/www/reactapp && cd /var/www/reactapp

ADD /src /var/www/reactapp/src
ADD /dist /var/www/reactapp/dist
ADD /.babelrc /var/www/reactapp/.babelrc
ADD /package.json /var/www/reactapp/package.json
ADD /semantic.json /var/www/reactapp/semantic.sjon
ADD /webpack.config.js /var/www/reactapp/webpack.config.js

RUN npm install

CMD npm start