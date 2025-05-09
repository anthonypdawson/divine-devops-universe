[
{% assign pages = site.posts | concat: site.pages %}
{% for page in pages %}
  {
    "title": {{ page.title | jsonify }},
    "url": "{{ page.url | relative_url }}",
    "content": {{ page.content | strip_html | normalize_whitespace | jsonify }}
  }{% unless forloop.last %},{% endunless %}
{% endfor %}
]
