#!/bin/bash

mkdir -p /cache/
mkdir -p /output/

# chmod -R 777 /output/*

ls -lh /cache/*.sqlite

# tor --version
# service tor start
#curl --socks5 localhost:9050 --socks5-hostname localhost:9050 -s https://check.torproject.org/ | cat | grep -m 1 Congratulations | xargs
node /app/index.js