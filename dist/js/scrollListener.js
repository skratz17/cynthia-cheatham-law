window.addEventListener("scroll", function() {
  if(window.scrollY >= 100) {
    var hamburger = document.querySelector('.hamburger');
    if(hamburger) hamburger.classList.add('transparent');
  }
  else if(window.scrollY < 100) {
    var hamburger = document.querySelector('.hamburger');
    if(hamburger) hamburger.classList.remove('transparent');
  }
});