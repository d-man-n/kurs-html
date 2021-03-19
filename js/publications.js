const publications = document.querySelectorAll('.pub-filter__item');

for (let i = 0; i < publications.length; i++) {
    publications[i].addEventListener('click', function(ev){
        if (ev.target.tagName === 'INPUT') {
            publications[i].classList.toggle('pub-filter__item_checked');
        }
    });
}

const publicationsHeader = document.querySelector('.pub-filter__title');
const publicationsList = document.querySelector('.pub-filter__list');

publicationsHeader.addEventListener('click', function() {
    publicationsHeader.classList.toggle('pub-filter__title_on');
    publicationsList.classList.toggle('pub-filter__list_open');
})