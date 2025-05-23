---
layout: terminal_post
title: 'Post Archive'
permalink: /archive/
---

<div>
  Search through all posts by tag
</div>
<hr />

{% capture tags %}
{% for tag in site.tags %}
{{ tag[1].size | minus: 10000 }}#{{ tag[0] }}#{{ tag[1].size }}
{% endfor %}
{% endcapture %}

{% assign tagsBySize = tags | split: " " | sort %}

<div class='archive'>
  {% for tagEntry in tagsBySize %}    
      {% assign tagArray = tagEntry | split: "#" %}
      {% assign tag_name = tagArray[1] %}
      <div>
        <div>
          <a class='archive-tag' href="#{{ tag_name }}">{{ tag_name }}({{ tagArray[2] }})</a>
        </div>
        <p></p>
      </div>
  {% endfor %}
</div>
<hr />
<br />
<div id="tags-list">
  {% for tagEntry in tagsBySize %}
    {% assign tagArray = tagEntry | split: "#" %}
    {% assign tag_name = tagArray[1] %}
    {% assign tag_name_pretty = tag_name | replace: "_", " " | capitalize %}
    <div class="tag-list">
      <h2 class="post-list-heading line-bottom">
        #{{ tag_name }} [{{ tagArray[2] }}]:
      </h2>
      <a name="{{ tag_name | slugize }}"></a>
      <ul class="post-list post-list-narrow">
        {% for post in site.tags[tag_name] %}
          <li>
            {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
            <b>
              <a href="{{ post.url | relative_url }}">
                {{ post.title | escape }}
              </a>
            </b><br /><i>{{ post.date | date: date_format }}</i>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>
