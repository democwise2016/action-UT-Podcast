#!/bin/bash

service tor start
curl --socks5-hostname 127.0.0.1:9050 -s https://ipinfo.io/ip