const phoneInputs = document.querySelectorAll('input[name="user_phone"]');

phoneInputs.forEach(item => {
    item.addEventListener('input', () => {
        item.value = item.value.replace(/\D/, '');
    });
});

