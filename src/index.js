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

const images = document.querySelectorAll('.foodImage');
let currentIndex = 0;
images[currentIndex].classList.add('show');

setInterval(() => {
  images[currentIndex].classList.remove('show');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('show');
}, 9250);
const menuHeader = document.querySelector('.menuHeader');
const sideButtons = document.querySelectorAll('.menuSideButtons');
const dinnerMenu = document.querySelector('.dinnerMenu');
const lunchMenu = document.querySelector('.lunchMenu');
const brunchMenu = document.querySelector('.brunchMenu');
const menuOptions = ['dinner menu', 'lunch menu', 'brunch menu'];
let currentMenuIndex = getCurrentMenuIndex();

sideButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    if(button.classList.contains('left')) {
      changeMenuHeaderLeft();
    }
    if(button.classList.contains('right')) {
      changeMenuHeaderRight();
    }
  });
});

function getCurrentMenuIndex() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  // Define the time ranges for each menu option
  const dinnerTimeStart = 16;  // 4 PM
  const brunchTimeStart = 8;  // 8 AM
  const lunchTimeStart = 11;   // 11 AM
  
  // Determine the current menu based on the time
  if (currentHour >= dinnerTimeStart || currentHour < brunchTimeStart) {
    showMenu(dinnerMenu);
    hideMenu(lunchMenu);
    hideMenu(brunchMenu);
    return 0;  // Dinner menu
  } else if (currentHour >= lunchTimeStart && currentHour < dinnerTimeStart) {
    hideMenu(dinnerMenu);
    hideMenu(brunchMenu);
    showMenu(lunchMenu);
    return 1;  // Lunch menu
  } else {
    hideMenu(dinnerMenu);
    hideMenu(lunchMenu);
    showMenu(brunchMenu);
    return 2;  // Brunch menu
  }
}

function changeMenuHeaderLeft() {
  currentMenuIndex = (currentMenuIndex + 1) % menuOptions.length;
  menuHeader.innerHTML = menuOptions[currentMenuIndex];
  updateMenuVisibility();
}

function changeMenuHeaderRight() {
  currentMenuIndex = (currentMenuIndex + 2) % menuOptions.length;
  menuHeader.innerHTML = menuOptions[currentMenuIndex];
  updateMenuVisibility();
}

function showMenu(menu) {
  menu.style.display = 'flex';
}

function hideMenu(menu) {
  menu.style.display = 'none';
}

function updateMenuVisibility() {
  if (currentMenuIndex === 0) {
    showMenu(dinnerMenu);
    hideMenu(lunchMenu);
    hideMenu(brunchMenu);
  } else if (currentMenuIndex === 1) {
    hideMenu(dinnerMenu);
    hideMenu(brunchMenu);
    showMenu(lunchMenu);
  } else if (currentMenuIndex === 2) {
    hideMenu(dinnerMenu);
    hideMenu(lunchMenu);
    showMenu(brunchMenu);
  }
}

// Set the initial Header based on the current time
menuHeader.innerHTML = menuOptions[currentMenuIndex];
