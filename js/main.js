document.addEventListener('DOMContentLoaded', function() {
  const headerBtn = document.querySelector('.header__btn-open');
  const closeBtn = document.querySelector('.header__btn-close');
  const navMenu = document.querySelector('.nav-menu');
  
headerBtn.addEventListener('click', function() {
    navMenu.classList.add('show');
    closeBtn.style.display = 'block';
});
closeBtn.addEventListener('click', function() {
    navMenu.classList.remove('show');
});
document.addEventListener('click', function(event) {
  if (!navMenu.contains(event.target) && !headerBtn.contains(event.target)) {
      navMenu.classList.remove('show');
      closeBtn.style.display = 'none';
  }
});
});
