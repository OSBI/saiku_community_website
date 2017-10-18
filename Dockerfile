FROM node

MAINTAINER Meteorite BI <info@meteorite.bi>

WORKDIR /usr/share/nginx/html

RUN \
  apt-get update && apt-get install -y \
  unzip \
  wget \
  nginx && \
  npm i -g gulp && \
  wget https://github.com/OSBI/saiku_community_website/archive/master.zip && \
  unzip master.zip && \
  rm -f master.zip && \
  cd saiku_community_website-master && \
  npm i && \
  gulp build && \
  cp -R build/* /usr/share/nginx/html && \
  cd ../ && rm -R saiku_community_website-master && \
  apt-get remove --auto-remove -y \
  unzip \
  wget && \
  npm un -g gulp && \
  echo "daemon off;" >> /etc/nginx/nginx.conf

COPY nginx.conf /etc/nginx/sites-enabled/default

EXPOSE 8080

CMD service nginx start
