let code = document.querySelectorAll('code');

if (code) {
  code.forEach(function(e) {
    e.addEventListener('click', function() {
      navigator.clipboard.writeText(e.textContent);

      e.classList.add('code--copied');
      setTimeout(function() {
        e.classList.remove('code--copied');
      }, 100);
    });
  });
}