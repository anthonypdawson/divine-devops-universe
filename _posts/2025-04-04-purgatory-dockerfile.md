---
layout: terminal_post
title: "Purgatory in a Dockerfile"
---

This is required middleware

```Dockerfile
FROM node:latest
WORKDIR /purgatory
COPY . .
RUN npm install && npm run penance
CMD ["npm", "start", "--", "--repent"]
```

Your logs will be monitored. Eternally.