const searchFld = document.querySelector('.header__search_field_desc');
const searchFldMob = document.querySelector('.header__search_field_mob');
const searchBtnMob = document.querySelector('.header__search_btn_mob');

searchFld.addEventListener('input', function() {
    searchFld.classList.add('header__search_field_nofocus');
})

searchFld.addEventListener('blur', function() {
    searchFld.classList.remove('header__search_field_nofocus');
})

searchFldMob.addEventListener('input', function() {
    searchFldMob.classList.add('header__search_field_nofocus');
})

searchFldMob.addEventListener('blur', function() {
    searchFldMob.classList.remove('header__search_field_nofocus');
})

searchBtnMob.addEventListener('click', function(){
    searchFldMob.classList.toggle('header__search_field_mob_active');
})