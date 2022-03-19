const accordion = () => {
    const accordeon = document.querySelector('.feature-list'),
        accordeonBtn = accordeon.querySelectorAll('.feature__link');

    accordeonBtn.forEach(item => {
        item.addEventListener('click', () => {
            accordeonBtn.forEach(btn => {
                if (item !== btn) {
                    btn.classList.remove('feature__link_active');
                    btn.nextElementSibling.classList.add('hidden');
                }
            });

            item.classList.toggle('feature__link_active');
            item.nextElementSibling.classList.toggle('hidden');
        });
    });
};

accordion();
