let map;
ymaps.ready(function(){
    if ($(document).width() >= 1700) {
    	map = new ymaps.Map("map", {
        	center: [55.759100, 37.643977],
	        controls: [],
        	zoom: 14
    	});	
	}
	else if ($(document).width() >= 1100 && $(document).width() < 1700) {
    	map = new ymaps.Map("map", {
        	center: [55.759700, 37.597300],
	        controls: [],
        	zoom: 14
    	});	
	}
    else if ($(document).width() >= 850 && $(document).width() < 1100) {
    	map = new ymaps.Map("map", {
        	center: [55.759700, 37.617300],
	        controls: [],
        	zoom: 14
    	});	
	}
	else {
    	map = new ymaps.Map("map", {
        	center: [55.759700, 37.607300],
	        controls: [],
        	zoom: 14
    	});	
	}

    map.controls.add('zoomControl');
    map.controls.add('typeSelector');

    const myPlacemark = new ymaps.Placemark([55.758064, 37.600697], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -3]
    });

    map.geoObjects.add(myPlacemark);
})