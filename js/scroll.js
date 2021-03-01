const scrollLink = document.querySelectorAll('.menu_link');
const scrollBtn = document.querySelector('.header__description_btn');
const topOffset = document.querySelector('.header__top_container').offsetHeight;
const mobMenu = document.querySelector('.mob-menu');

for (let i = 0; i < scrollLink.length; i++) {
    if (scrollLink[i].hash) {
		scrollLink[i].addEventListener('click', function(ev) {
			ev.preventDefault();
			mobMenu.classList.remove('mob-menu__open');
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
