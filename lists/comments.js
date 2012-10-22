function(head, req) {
  // !json templates.comments
  // !code lib/mustache.js
  start({"headers":{"Content-Type":"text/html;charset=utf-8"}});
  var post_name = 'undefined';
  
  
  var data = {
  	post: post_name,
    comments: []
  };
  var i = 0;
  while (row = getRow()) {
    data.comments.push({
      order: ++i,
      text: row.value["text"],
    });
  }
  return Mustache.to_html(templates.comments, data);
}