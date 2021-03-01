const publications = document.querySelectorAll('.publications__filter_item');

for (let i = 0; i < publications.length; i++) {
    publications[i].addEventListener('click', function(ev){
        if (ev.target.tagName === 'INPUT') {
            publications[i].classList.toggle('publications__filter_item_checked');
        }
    });
}

const publicationsHeader = document.querySelector('.publications__filter_title');
const publicationsList = document.querySelector('.publications__filter_list');

publicationsHeader.addEventListener('click', function() {
    publicationsHeader.classList.toggle('publications__filter_title_on');
    publicationsList.classList.toggle('publications__filter_list_open');
})