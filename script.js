// Select elements
const toggleBtn = document.getElementById('toggleBtn');
const navMenu = document.getElementById('navMenu');

// Toggle mobile navigation menu visibility
toggleBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
