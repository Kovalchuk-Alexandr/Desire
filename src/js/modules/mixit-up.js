// mixItUP
import mixitup from "mixitup";

/*Creating a mixer instance with an element reference*/
var containerEl = document.querySelector(".gallery__inner");

function mixitupFunc() {
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
}

export default mixitupFunc;
