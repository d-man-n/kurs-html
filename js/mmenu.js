let keys = {
    ESC: 27,
};

const menuBtn = document.querySelector('.header__burger');
const menu = document.querySelector('.mob-menu');
const menuClose = document.querySelector('.mob-menu__close')

function showMenu() {
    menu.classList.toggle('mob-menu__open');
    document.addEventListener('keydown', function(e) {
        if (e.keyCode === keys.ESC) {
            closeMenu();
        }
    });
}

function closeMenu() {
    menu.classList.remove('mob-menu__open');
}

menuBtn.addEventListener('click', showMenu);
menuClose.addEventListener('click', closeMenu);