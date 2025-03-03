// Галерея и лайтбоксы от Fancybox
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Проверка корректности установки Fancybox
// const fancybox = document.querySelectorAll("[data-fancybox]");
// console.log('fancybox :');
// console.log(fancybox);
// console.log(Fancybox);

// Fancybox.bind('[data-fancybox]', {
// 	// Your custom options
// });

import fancyboxFunc from "./fancy-box.js";
fancyboxFunc();

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

// Slick slider
import slickSlider from './modules/slider.js';
slickSlider();


// mixItUP
import mixitupFunc from "./modules/mixit-up.js";
mixitupFunc();

import initMap from "./modules/map.js";
initMap();

window.initMap = initMap;
