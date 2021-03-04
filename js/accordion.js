$( function() {
  $( ".tabs" ).tabs({
    hide: { effect: "fade", duration: 300 },
    show: { effect: "blind", duration: 300 }
  });
  $("#accordion1").accordion({ 
    heightStyle: "content" 
  });  
  $("#accordion2").accordion({ 
    heightStyle: "content" 
  });  
  $("#accordion3").accordion({ 
    heightStyle: "content" 
  });  
  $("#accordion4").accordion({ 
    heightStyle: "content" 
  });  
  $("#accordion5").accordion({ 
    heightStyle: "content" 
  });  
});

catalogLink = document.querySelectorAll('.catalog__header_link');

for (let i = 0; i < catalogLink.length; i++) {
  catalogLink[i].addEventListener('click', function() {
    for (let el of catalogLink) {
      if (el !== catalogLink[i])
        el.classList.remove('catalog__header_link_active');
    }
    catalogLink[i].classList.add('catalog__header_link_active');
  });
}

const authorLink = document.querySelectorAll('.catalog__author_link');
const authorContainer = document.querySelector('.catalog__description');

for (let i = 0; i < authorLink.length; i++) {
  authorLink[i].addEventListener('click', function(ev){
    ev.preventDefault();
    authorLink[i].classList.add('catalog__author_link_active');
    for (let j = 0; j < authorLink.length; j++) {
	if (i !== j) authorLink[j].classList.remove('catalog__author_link_active');
    }
    authorContainer.innerHTML = `<img src="img/catalog_img2.jpg" alt="${authorLink[i].textContent}" class="catalog__description_img">
    <h3 class="catalog__description_title">${authorLink[i].textContent}</h3>
    <p class="catalog__description_date">Тут годы жизни.</p>
    <p class="catalog__description_info">
        Реальный такой художник!!!!! 
    </p>`;
    window.scrollBy({
      top: document.querySelector('.catalog__description').getBoundingClientRect().top - document.querySelector('.header__top_container').offsetHeight,
      behavior: 'smooth'
    });
  })
}