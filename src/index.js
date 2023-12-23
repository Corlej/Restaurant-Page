import './style.css';

window.addEventListener('scroll', function() {
  var header = document.querySelector('.secondHeader');
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
}, 5000);
const menuHeader = document.querySelector('.menuHeaderTitle');
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
  const dinnerTimeStart = 14;  // 2 PM
  const brunchTimeStart = 8;  // 8 AM
  const lunchTimeStart = 10;   // 10 AM
  
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

menuHeader.innerHTML = menuOptions[currentMenuIndex];

//instagram display api//

const accessToken = 'IGQWRPVkhqcE16SXZAQQnJ0bW0tc3AxdnA4SlVLZA19weVpvVTNqOVg2ZAHBjUUFwMmEwSWdpRzYwU2ExMU5NR2RRTWdQYzFHaVlNQldEOU1GdDZAvQ2xlRjBZAc0Q3RWdtZAG5IcXgtWG84LU5JOER1RV9XRXNGT3M3OFUZD';
const captionLimit = 60;

fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url&access_token=${accessToken}&limit=6`)
.then(response => response.json())
.then(data => {
  const postsContainer = document.getElementById('posts');

  data.data.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const imageElement = document.createElement('img');
    imageElement.src = post.media_url;
    imageElement.alt = post.caption || '';

    const captionElement = document.createElement('div');
    captionElement.classList.add('caption');
    const captionText = post.caption || '';
    captionElement.innerText = captionText.length > captionLimit ? captionText.slice(0, captionLimit) + '...' : captionText;

    postElement.appendChild(imageElement);
    postElement.appendChild(captionElement);
    postsContainer.appendChild(postElement);

    postElement.addEventListener('click', () => {
      openModal(post);
    });
  });
})

.catch(error => {
  console.error('Error fetching Instagram posts:', error);
});

//instagram modal//
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const modalComments = document.getElementById('modal-comments');
const closeBtn = document.querySelector('.close');

  
// Open the modal with the full post and comments
function openModal(post) {
  modal.style.display = 'block';
  modalImage.innerHTML = `<img src="${post.media_url}" alt="${post.caption || ''}">`;

  // Fetch the comments for the post
  fetch(`https://graph.instagram.com/${post.id}/comments?access_token=${accessToken}`)
    .then(response => response.json())
    .then(commentsData => {
      let commentsHTML = '';
      commentsData.data.forEach(comment => {
        commentsHTML += `<p>${comment.text}</p>`;
      });
      modalComments.innerHTML = commentsHTML;
    })
    .catch(error => {
      console.error('Error fetching Instagram comments:', error);
      modalComments.innerHTML = '<p>Error loading comments</p>';
    });
}
  
// Close the modal
function closeModal() {
  modal.style.display = 'none';
  modalImage.innerHTML = '';
  modalComments.innerHTML = '';
}

// Event listener to close modal on close button click
closeBtn.addEventListener('click', closeModal);

// Event listener to close modal on outside click
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

const openModalButton = document.getElementById('openModalButton');
openModalButton.addEventListener('click', () => {
// Replace with the desired post object
const post = {
  media_url: 'https://example.com/image.jpg',
  caption: 'Example caption'
};

openModal(post);
});
