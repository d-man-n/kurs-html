let keys = {
    ESC: 27,
};

const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const menuClose = document.querySelector('.menu__close')

function showMenu() {
    menu.classList.toggle('header__menu_open');
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === keys.ESC) {
            closeMenu();
        }
    });
}

function closeMenu() {
    menu.classList.remove('header__menu_open');
}

menuBtn.addEventListener('click', showMenu);
menuClose.addEventListener('click', closeMenu);