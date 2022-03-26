const links = () => {
    const links = document.querySelectorAll('.');

    links.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();

            const id = item.getAttribute('href').substring(1);
            const section = document.getElementById(id);

            if (section) {
                seamless.scrollIntoView(section, {
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }
        });
    });
};

links();