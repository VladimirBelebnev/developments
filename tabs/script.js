// Переменные
const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');

// Скрываем контент табов и класс активности
function hideTabsContent() {
    tabsContent.forEach((item) => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active');
    });
}

// Показываем первый таб по умолчанию
function showTabsContent(i = 0) {
    tabsContent[i].classList.remove('hide');
    tabsContent[i].classList.add('show', 'fade');
    tabs[i].classList.add('tabheader__item_active');
}

hideTabsContent();
showTabsContent();

// Вешаем обработчик события на родителя табов и отслеживаем нажатие на определенный таб.
tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((event, i) => {
            if (target == event) {
                hideTabsContent();
                showTabsContent(i);
            }
        });
    }
});
