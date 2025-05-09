
fetch('/divine-devops/search.json')
  .then(response => response.json())
  .then(data => {
    const idx = lunr(function () {
      this.ref('url');
      this.field('title');
      this.field('content');

      data.forEach(doc => this.add(doc));
    });

    document.getElementById('search-box').addEventListener('input', function () {
      const query = this.value;
      const results = idx.search(query);
      const list = document.getElementById('search-results');
      list.innerHTML = '';

      results.forEach(result => {
        const item = data.find(d => d.url === result.ref);
        const li = document.createElement('li');
        li.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        list.appendChild(li);
      });
    });
  });
