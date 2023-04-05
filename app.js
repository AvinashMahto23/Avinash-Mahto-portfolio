const barBtn = document.querySelector('.bars-btn');
const closeBtn = document.querySelector('.close-btn');

const navbar = document.querySelector('.navbar');
barBtn.addEventListener('click', function () {
  navbar.classList.toggle('active');
});
closeBtn.addEventListener('click', function () {
  navbar.classList.remove('active');
});
