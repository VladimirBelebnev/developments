// Вводим в переменную все формы
const forms = document.querySelectorAll('form');

// Сообщеине после отпрки
const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...',
};

// Отпрвка на сервер данных всех форм
forms.forEach((item) => {
    bindpostData(item);
});

// Настройки для сервера
const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        body: data,
        headers: { 'Content-type': 'application/json' },
    });

    return await res.json();
};

// Отправка на сервер
function bindpostData(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        // Спинер
        statusMessage.style.cssText = `
                display: block;
                margin: 0 auto; 
            `;
        // Добавляем после формы
        form.insertAdjacentElement('afterend', statusMessage);

        const formData = new FormData(form);
        // Переводим в JSON
        const json = JSON.stringify(Object.fromEntries(formData.entries()));

        // Сервер JSON
        postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });

    });
}

// Окно благодарности (модальное окно)
function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    // openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>&times;</div>
                <div class="modal__title" data-close>${message}</div>
            </div>
        `;

    document.querySelector('.modal').append(thanksModal);

    // Через 4 секунды будет закрываться
    setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add('show');
        prevModalDialog.classList.remove('hide');
        // closeModal();
    }, 4000);
}