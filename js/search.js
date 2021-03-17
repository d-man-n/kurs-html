const searchFld = document.querySelector('.search__field_desc');
const searchFldMob = document.querySelector('.search__field_mob');
const searchBtnMob = document.querySelector('.search__btn_mob');

searchFld.addEventListener('input', function() {
    searchFld.classList.add('search__field_nofocus');
})

searchFld.addEventListener('blur', function() {
    searchFld.classList.remove('search__field_nofocus');
})

searchFldMob.addEventListener('input', function() {
    searchFldMob.classList.add('search__field_nofocus');
})

searchFldMob.addEventListener('blur', function() {
    searchFldMob.classList.remove('search__field_nofocus');
})

searchBtnMob.addEventListener('click', function(){
    searchFldMob.classList.toggle('search__field_mob_active');
})