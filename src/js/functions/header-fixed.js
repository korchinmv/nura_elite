const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
	if (scrollDistance >= 1) {
		header.classList.add('header--fixed');
	} else {
		header.classList.remove('header--fixed');
	}
});

