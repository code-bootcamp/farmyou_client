FROM node:16

WORKDIR /farmyou_FE/
COPY . /farmyou_FE/

RUN yarn install
RUN yarn build
CMD yarn start
