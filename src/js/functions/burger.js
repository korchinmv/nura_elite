const buttonMenu = document.querySelector('.burger');
const menuActive = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu__link');
const bodyLock = document.querySelector('body');

buttonMenu.onclick = function () {
	menuActive.classList.toggle('menu--active');
	buttonMenu.classList.toggle('burger--active');
	bodyLock.classList.toggle('lock');
};

menuLink.forEach(el => {
	el.addEventListener('click', (e) => {
		menuActive.classList.remove('menu--active');
		buttonMenu.classList.remove('burger--active');
		bodyLock.classList.remove('lock');
	});
});
