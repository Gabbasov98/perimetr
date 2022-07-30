function variantsSlider() {
    var swiper = new Swiper('.variants .swiper-container', {
        navigation: {
            nextEl: '.variants .swiper-button-next',
            prevEl: '.variants .swiper-button-prev',
        },
        breakpoints: {
            320: {
                spaceBetween: 20
            },
            576: {
                slidesPerView: "auto",
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        },
        // on: {
        //     init: function () {
        //         console.log('swiper initialized');
        //         // setSecondSlide()
        //     },
        // },
    })
    swiper.on('init', function () {
        // const hash = window.location.hash
        // const slideIndex = parseInt(hash.replace('#slide', ''), 10)
        swiper.slideTo(1) // либо slideToLoop, если у вас включен loop
    })
}

function gallerySlider() {
    var swiper = new Swiper('.gallery .swiper-container', {
        centeredSlides: true,
        initialSlide: 1,
        navigation: {
            nextEl: '.gallery .swiper-button-next',
            prevEl: '.gallery .swiper-button-prev',
        },
        breakpoints: {
            320: {
                spaceBetween: 20,
                slidesPerView: 1.05,
                centeredSlides: false,
            },
            992: {
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: true,
            },
        }
    })
}

variantsSlider()
gallerySlider()

$(".materials__tab").click(function () {
    let path = $(this).attr("data-tabs-path")
    console.log(path)
    $(".materials__tab").removeClass("materials__tab--active")
    $(this).addClass("materials__tab--active")
    $(".materials__tab-content").removeClass("materials__tab-content--active")
    $(`.materials__tab-content[data-tabs-path="${path}"]`).addClass("materials__tab-content--active")
})
