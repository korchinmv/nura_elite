let center = [51.13123946154467, 71.42470809339174];
let markerOne = [51.13123946154467, 71.42470809339174];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 15,
	});

	let placemark = new ymaps.Placemark(markerOne, {
		balloonContentHeader: 'Айболит на Автозаводской',
		balloonContentBody: 'Телефон: +7 495-999-66-32',
		balloonContentFooter: 'Работаем круглосуточно'
	}, {
		iconLayout: 'default#image',
		iconImageHref: '../images/icons/icon-marker.svg',
		iconImageSize: [40, 40],
		iconImageOffset: [-20, -20]
	});

	map.controls.remove('geolocationControl');
	map.controls.remove('searchControl');
	map.controls.remove('trafficControl');
	map.controls.remove('typeSelector');
	map.controls.remove('fullscreenControl');
	map.controls.remove('rulerControl');
	map.behaviors.disable(['scrollZoom']);

	map.geoObjects.add(placemark);
}
ymaps.ready(init);