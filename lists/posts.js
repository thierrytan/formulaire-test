function(head, req) {
  // !json templates.posts
  // !code lib/mustache.js
  start({"headers":{"Content-Type":"text/html;charset=utf-8"}});
  var data = {
    posts: []
  };
  var i = 0;
  while (row = getRow()) {
    data.posts.push({
      order: ++i,
      id: row.id,
      title: row.value,
    });
  }
  return Mustache.to_html(templates.posts, data);
}