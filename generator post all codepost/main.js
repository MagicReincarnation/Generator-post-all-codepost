// function memposting ke Blogger
async function postToBlogger(title, labels, content) {
  const blogId = configAPIKey.blogger.blogId; // ID Blog
  const apiKey = configAPIKey.blogger.apiKey; // API Key Blogger
  
if (blogId && apiKey){
  const post = {
    kind: "blogger#post",
    blog: {
      id: blogId
    },
    title: title,
    labels: labels.split(',').map(label => label.trim()),
    content: content
  };

  const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(post)
  });

  if (response.ok) {
    alert('berhasil dipublikasikan ke Blogger!');
  } else {
    alert('Gagal mempublikasikan post: ' + response.statusText);
  }
   }else{ 
alert('IdBlog dan API belum dipasang');
  }
}

document.getElementById('post-button').addEventListener('click', () => {
  const title = document.getElementById('blogger-title').value;
  const labels = document.getElementById('blogger-labels').value;
  const content = document.getElementById('blogger-content').value;

  postToBlogger(title, labels, content);
});
