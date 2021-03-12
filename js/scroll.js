const scrollLink = document.querySelectorAll('.menu_link');
const scrollBtn = document.querySelector('.hero__description_btn');
const topOffset = document.querySelector('.header__top_container').offsetHeight;
const mobMenu = document.querySelector('.header__menu');

for (let i = 0; i < scrollLink.length; i++) {
    if (scrollLink[i].hash) {
		scrollLink[i].addEventListener('click', function(ev) {
			ev.preventDefault();
			mobMenu.classList.remove('header__menu_open');
			const blockID = this.hash;
			const elementPosition = document.querySelector(blockID).getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;
			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			});	
		});
    }
}

scrollBtn.addEventListener('click', function() {
	const elementPosition = document.querySelector('#contacts').getBoundingClientRect().top;
	const offsetPosition = elementPosition - topOffset;
	window.scrollBy({
		top: offsetPosition,
		behavior: 'smooth'
	});
})
