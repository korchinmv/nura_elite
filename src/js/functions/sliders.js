import Swiper, { Navigation, Pagination } from 'swiper';
function initSliders() {
	if (document.querySelector('.slider')) {
		new Swiper('.slider', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
		});
	}
}
window.addEventListener("load", function (e) {
	initSliders();
});