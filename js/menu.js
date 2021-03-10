const menuLink = document.querySelectorAll('.header__catalog_btn');
const menuBlock = document.querySelectorAll('.header__catalog_menu');

for (let i=0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function() {
        for (let el of menuBlock) {
            if (el !== menuBlock[i])
                el.classList.remove('header__catalog_menu_visible');
        }
        for (let el of menuLink) {
            if (el !== menuLink[i])
                el.classList.remove('header__catalog_btn_up');
        }
        menuBlock[i].classList.toggle('header__catalog_menu_visible');
        menuLink[i].classList.toggle('header__catalog_btn_up');
    })
}


document.onclick = function(e){
    if ( e.target.className.indexOf('header__catalog_') === -1 ) {
	for (let i=0; i < menuLink.length; i++) {
	    menuBlock[i].classList.remove('header__catalog_menu_visible');
	    menuLink[i].classList.remove('header__catalog_btn_up');
	}
    };
};
