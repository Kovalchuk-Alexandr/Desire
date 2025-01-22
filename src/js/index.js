// Галерея и лайтбоксы от Fancybox
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Fancybox.bind('[data-fancybox]', {
// 	// Your custom options
// });

import $ from "jquery";
import "slick-carousel";

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
var mixer = mixitup(containerEl, {
    classNames: {
        block: "gallery",               // название кастомного блока
        elementFilter: "btn",           // название кастомного элемента
        delineatorElement: "__",        // разделитель элемента
        delineatorModifier: "--",       // разделитель модификатора
    },
    load: {
        filter: ".category-living",     // активный таб при загрузке
    },
    // selectors: {
    //     control: ".gallery__btn",
    // },
});