import './style.css';

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header2');
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
    if (scrollPosition > viewportHeight) {
      header.classList.add('visible');
    } else {
      header.classList.remove('visible');
    }
  });