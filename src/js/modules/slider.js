import $ from "jquery";
import "slick-carousel"

function slickSlider() {
    $(".hero__slider").slick({
        dots: true,
        arrows: false,
        fade: true,
        // autoplay: true,
        autoplaySpeed: 4000,
        draggable: true,
        speed: 2000,
        // cssEase: "liner",
    });

    $(".blog-item__slider").slick({
        dots: true,
        arrows: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        speed: 300,
        // adaptiveHeight: true,
    });

    $(".contact-slider").slick({
        dots: true,
        arrows: false,
        slidesToShow: 10,
        slidesToScroll: 5,
        draggable: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 1220,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                },
            },
            // {
            //     breakpoint: 340,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1,
            //     },
            // },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
}

export default slickSlider;
