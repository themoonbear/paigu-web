FROM sean119/alpine
MAINTAINER D119 <contact@moonbear.cn>

COPY . /src

RUN cd /src \
    && yarn install && yarn build \
    && mv /src/dist /www && mv /src/Caddyfile /etc/Caddyfile \
    && rm -rf /src

VOLUME ["/root/.caddy"]

EXPOSE 80
EXPOSE 443

WORKDIR /www

ENTRYPOINT caddy -conf /etc/Caddyfile