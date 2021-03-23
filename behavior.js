document.addEventListener('DOMContentLoaded', (event) => {
  const thumbnailElement = document.getElementById('smart_thumbnail')
  if (thumbnailElement) {
    thumbnailElement.addEventListener('click', () => {
      if (thumbnailElement.className == "small") {
        thumbnailElement.className = "";
        alert("Switching to large image");
      } else {
        thumbnailElement.className = "small";
        alert("Switching to small image");
      }
    })
  }
});



(function () {
  const d = document; const
    s = d.createElement('script')
  s.src = 'https://holberton-school-9.disqus.com/embed.js'
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s)
}());




