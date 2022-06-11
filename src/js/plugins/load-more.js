document.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('.services')) {
		let currentItem = 3;
		const loadMoreBtn = document.getElementById('load-more');
		const item = document.querySelectorAll('.services-list__item').length;

		loadMoreBtn.addEventListener('click', () => {
			currentItem += 6;
			const box = Array.from(document.querySelector('.services-list').children).slice(0, currentItem);
			box.forEach(currentItem => currentItem.style.display = 'block');
			if (box.length === item) {
				loadMoreBtn.style.display = 'none';
			}
		});
	}
});