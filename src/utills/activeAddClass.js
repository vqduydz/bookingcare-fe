export const activeAddClass = (className = '') => {
    let buttons = document.querySelectorAll(`.${className}`);
    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            buttons.forEach((btn) => btn.classList.remove('active'));
            this.classList.add('active');
            localStorage.setItem(className, this.innerText);
        });
    });

    var item = localStorage.getItem(className);

    if (item) {
        buttons.forEach((button) => {
            if (button.innerText === item) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
};
