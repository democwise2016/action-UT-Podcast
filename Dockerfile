#Specify the version of nodejs.
#FROM buildkite/puppeteer:10.0.0
#FROM dayyass/muse_as_service:1.1.2
FROM apify/actor-node-puppeteer-chrome:18-20.4.0-beta

# RUN wget http://ftp.us.debian.org/debian/pool/main/y/youtube-dl/youtube-dl_2021.12.17-2_all.deb
# RUN apt-get install -y ./youtube-dl_2021.12.17-2_all.deb
USER root
RUN apt update
RUN apt install python3-pip ffmpeg -y
RUN pip3 install youtube-dl

RUN npm link iconv-lite@0.6.3

RUN npm link sequelize@6.7.0
RUN npm link sqlite3@5.0.2

RUN npm link papaparse@5.3.2

RUN npm link jquery@3.6.3

CMD ["node", "/app/index.js"]

RUN npm link node-gyp
# RUN node-gyp configure

# RUN npm link jsdom@22.1.0

RUN npm link rss-parser@3.13.0
RUN npm link feed@4.2.2
RUN npm link @extractus/feed-extractor@6.2.2

RUN npm link typescript
RUN npm link husky@7
RUN npm link axios@1.4.0
RUN npm link cheerio@1.0.0-rc.12

RUN npm link htmlentities@1.0.0

# RUN sed -i s/deb.debian.org/archive.debian.org/g /etc/apt/sources.list
# RUN sed -i 's|security.debian.org|archive.debian.org/|g' /etc/apt/sources.list
# RUN sed -i '/stretch-updates/d' /etc/apt/sources.list
# RUN ls /etc/apt/sources.list.d
# RUN rm -rf /etc/apt/sources.list.d/*
# RUN cat /etc/os-release
# RUN cat /etc/apt/sources.list



# RUN echo "deb http://archive.debian.org/debian stretch main contrib non-free" > /etc/apt/sources.list



# RUN pip3 -v
# RUN apt update
# RUN wget http://ftp.us.debian.org/debian/pool/main/y/youtube-dl/youtube-dl_2021.12.17-2_all.deb
# RUN apt-get install -y ./youtube-dl_2021.12.17-2_all.deb
# RUN pip install youtube-dl

USER myuser