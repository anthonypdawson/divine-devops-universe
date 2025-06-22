---
layout: terminal_post
title: "Categories"
---

<h1>Categories</h1>
<ul>
  {% for category in site.categories %}
    <li>
      <a href="{{ site.baseurl }}/topics/{{ category[0] | slugify }}">{{ category[0] }}</a> ({{ category[1].size }})
    </li>
  {% endfor %}
</ul>