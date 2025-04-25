---
layout: terminal_post
title: "Purgatory in a Dockerfile"
tags: [devops, parody, docker, containers, middleware, logs]
---

<p class='center'>This is required middleware</p>

```Dockerfile
FROM node:latest
WORKDIR /purgatory
COPY . .
RUN npm install && npm run penance
CMD ["npm", "start", "--", "--repent"]
```

Your logs will be monitored. Eternally.