FROM node:9.2.1

ADD yarn.lock /yarn.lock
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
ENV CHOKIDAR_USEPOLLING=true

RUN yarn

WORKDIR /app
ADD . /app

EXPOSE 7770

CMD ["yarn", "start"]