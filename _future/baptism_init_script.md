---
layout: terminal_post
title: "Baptism Init Script"
date: 
tags: [baptism, shell, init, ritual, parody]
---

```bash
function baptize() {
  echo "Purging sin.log..."
  rm -rf ~/.sin/
  echo "Downloading HolySpirit.pkg..."
  curl -s kingdom.net/holyspirit.pkg | bash
  echo "$1 has risen with Christ v2.0"
}
```