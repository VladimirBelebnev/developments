const burger = document.querySelector('.burger'),
      mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('hidden');
});