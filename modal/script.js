// Создаем переменные ([data-modal] – кнопка вызова)
const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');

// Функция открытия модального окна
function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden'; // Чтобы окно не пролистовалось
    clearInterval(modalTimerId); // Открытие модального окна через время
}

// Вешаем на кнопки обработчик события
modalTrigger.forEach((btn) => {
    btn.addEventListener('click', openModal);
});

// Функция закрытия модального окна
function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Убираем
}

// Закрытия окна если кликнуть вне модального окна
modal.addEventListener('click', (event) => {
    if (event.target == modal || event.target.getAttribute('data-close') == '') {
        closeModal();
    }
});

// Закрытие модального окна по клавише  esc 
document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Открытие модального окна по времени
const modalTimerId = setTimeout(openModal, 50000);

// Открытие модального окна, если пользователь долистал до конца страницы
function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        openModal();
        window.removeEventListener('scroll', showModalByScroll);
    }
}

window.addEventListener('scroll', showModalByScroll);