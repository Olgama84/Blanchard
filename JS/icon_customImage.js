// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
        // Создание карты.
           var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.758468, 37.601088],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 13.5,
            controls: [],
        });

        myMap.controls.add("zoomControl", {
            size: 'small',
            float: 'none',
            position: {
                bottom: '350px',
                right: '30px'
            }
        } );

        myMap.controls.add("geolocationControl", {
            float: 'none',
            position: {
                bottom: '300px',
                right: '30px'
            }
        });

        var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
                 iconLayout: 'default#image',
                 iconImageHref: '/IMG/Contacts/Ellipse2.svg',
                 iconImageSize: [20, 20],
                 iconOffset: [-3, -42]
               });      
        myMap.geoObjects.add(myPlacemark);
}