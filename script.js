const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const menuOverlay = document.querySelector('.menu-overlay');

// Toggle the navbar visibility
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  menuIcon.classList.toggle('active');
});

// Close the menu when overlay is clicked
menuOverlay.addEventListener('click', () => {
  navbar.classList.remove('active');
  menuOverlay.classList.remove('active');
  menuIcon.classList.remove('active');
});
