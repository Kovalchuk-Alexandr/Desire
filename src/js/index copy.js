// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Проверка корректности установки Fancybox
// const fancybox = document.querySelectorAll("[data-fancybox]");
// console.log('fancybox :');
// console.log(fancybox);
// console.log(Fancybox);

Fancybox.bind('[data-fancybox]', {
	// Your custom options
});

// import $ from "jquery";
// import "slick-carousel";

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// Slick slider
import slickSlider from './modules/slider.js';
slickSlider();


// mixItUP
import mixitup from "mixitup";

/*Creating a mixer instance with an element reference*/
var containerEl = document.querySelector(".gallery__inner");

if (containerEl) {
                     var mixer = mixitup(containerEl, {
                         classNames: {
                             block: "gallery", // название кастомного блока
                             elementFilter: "btn", // название кастомного элемента
                             delineatorElement: "__", // разделитель элемента
                             delineatorModifier: "--", // разделитель модификатора
                         },
                         load: {
                             filter: ".category-living", // активный таб при загрузке
                         },
                         // selectors: {
                         //     control: ".gallery__btn",
                         // },
                     });
                 }


import initMap from "./modules/map.js";
initMap();

// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 20,
//         // 37.797822, -122.422611
//         center: { lat: 37.797822, lng: -122.422611 },
//         mapTypeControl: true,
//         mapTypeControlOptions: {
//             style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
//             position: google.maps.ControlPosition.TOP_CENTER,
//         },
//         zoomControl: true,
//         zoomControlOptions: {
//             position: google.maps.ControlPosition.LEFT_CENTER,
//         },
//         scaleControl: true,
//         streetViewControl: true,
//         streetViewControlOptions: {
//             position: google.maps.ControlPosition.LEFT_BOTTOM,
//         },
//         fullscreenControl: true,
//     });
// }

window.initMap = initMap;
