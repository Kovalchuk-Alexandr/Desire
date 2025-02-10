import $ from "jquery";
import "slick-carousel"

function slickSlider() {
    // console.log($(".hero__slider"));

    $(".hero__slider").slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        draggable: true,
        speed: 2000
        // cssEase: "liner",
    });

    $(".contact-slider").slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 5,
        // fade: true,
        // autoplay: true,
        // autoplaySpeed: 4000,
        draggable: true,
        speed: 500
        // cssEase: "liner",
    });

}

export default slickSlider;
