// Создаем переменную
const slides = document.querySelectorAll('.offer__slide'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');
let slideIndex = 1; // Изначальное значение, индекс

showSlides(slideIndex);

// Проерка на 0 total
if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
} else {
    total.textContent = slides.length;
}

// Функция показа слайдера
function showSlides(n) {
    // Если больше чем колличество слайдов
    if (n > slides.length) {
        slideIndex = 1;
    }

    // Если меньше чем колличество слайдов
    if (n < 1) {
        slideIndex = 4;
    }

    // Скрываем слайдры
    slides.forEach(item => item.style.display = 'none');

    // Показываем первый слайд
    slides[slideIndex - 1].style.display = 'block';

    // Проверяем на 0 current
    if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }
}

// Функция переключения слайдов
function plusSlides(n) {
    showSlides(slideIndex +=n);
}

// Стрелка назад
prev.addEventListener('click', () => {
    plusSlides(-1);
});

// Стрелка вперед
next.addEventListener('click', () => {
    plusSlides(+1);
});