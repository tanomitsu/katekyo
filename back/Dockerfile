FROM bitnami/node:18.16.1
WORKDIR /home/node/app

RUN apt-get update && apt-get install -y locales curl
RUN locale-gen ja_JP.UTF-8
ENV LANG=ja_JP.UTF-8