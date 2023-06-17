import './style.css';
import './logo.svg';
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header2');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
    if (scrollPosition > viewportHeight) {
      header.classList.add('visible');
    } else {
      header.classList.remove('visible');
    }
  });