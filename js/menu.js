const menuLink = document.querySelectorAll('.menu2__btn');
const menuBlock = document.querySelectorAll('.submenu');

for (let i=0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function() {
        for (let el of menuBlock) {
            if (el !== menuBlock[i])
                el.classList.remove('submenu-visible');
        }
        for (let el of menuLink) {
            if (el !== menuLink[i])
                el.classList.remove('menu2__btn_up');
        }
        menuBlock[i].classList.toggle('submenu-visible');
        menuLink[i].classList.toggle('menu2__btn_up');
    })
}


document.onclick = function(e){
    if ( e.target.className.indexOf('menu2__') === -1 ) {
	for (let i=0; i < menuLink.length; i++) {
	    menuBlock[i].classList.remove('submenu-visible');
	    menuLink[i].classList.remove('menu2__btn_up');
	}
    };
};
