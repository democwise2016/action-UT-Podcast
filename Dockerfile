FROM pudding/github-action-app:puppeteer-python-14

RUN pip install pytube
ENTRYPOINT ["python3"]
CMD [ "/app/python/ub.py", "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "/output/my_song.mp3" ]