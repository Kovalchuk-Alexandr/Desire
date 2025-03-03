// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Проверка корректности установки Fancybox
// const fancybox = document.querySelectorAll("[data-fancybox]");
// console.log('fancybox :');
// console.log(fancybox);
// console.log(Fancybox);

function fancyboxFunc() {
    Fancybox.bind('[data-fancybox]', {
        // Your custom options
    });
}

export default fancyboxFunc;
