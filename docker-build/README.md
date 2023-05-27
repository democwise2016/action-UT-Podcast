# Dockerhub

- https://docs.docker.com/get-started/04_sharing_app/
- `docker image ls` 找出合適的名稱，例如「html-webpage-dashboard_app」
- 建立合適的repo https://hub.docker.com/
- `docker tag action-ut-podcast_app pudding/github-action-app:puppeteer-python-14`
- `docker push pudding/github-action-app:puppeteer-python-14`
- 修改Dockerfile `FROM pudding/github-action-app:puppeteer-python-14`