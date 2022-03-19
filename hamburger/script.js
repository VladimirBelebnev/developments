const menu = () => {
    const humburgerMenu = document.querySelector('.humburger-menu'),
        menu = document.querySelector('.menu'),
        menuLinks = document.querySelectorAll('.menu-list__item');

    humburgerMenu.addEventListener('click', () => {
        menu.classList.toggle('menu-active');
    });

    document.addEventListener('click', (event) => {
        if (!(event.target.closest('.menu') || event.target.closest('.humburger-menu'))) {
            menu.classList.remove('menu-active');
        }
    });

    menuLinks.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('menu-active');
        });
    });
};

menu();