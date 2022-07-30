function mainSlider() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop:true,
        autoplay: {
            delay: 5000,
        },
        speed: 2000,
        navigation: {
            nextEl: '.main .swiper-button-next',
            prevEl: '.main .swiper-button-prev',
        },
        pagination: {
            el: '.main .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}

function modelSlider() {
    var swiper = new Swiper('.models .swiper-container', {
        navigation: {
            nextEl: '.models .swiper-button-next',
            prevEl: '.models .swiper-button-prev',
        },
        breakpoints: {
            320: {
                spaceBetween: 20
            },
            480: {
                slidesPerView: "auto",
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            },
        }
    })
}

function feedbackSlider() {
    var swiper = new Swiper('.feedback .swiper-container', {
        navigation: {
            nextEl: '.feedback .swiper-button-next',
            prevEl: '.feedback .swiper-button-prev',
        },
        breakpoints: {
            320: {
                spaceBetween: 20
            },
            480: {
                slidesPerView: "auto",
                spaceBetween: 30
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30
            },
        }
    })
}

mainSlider()
modelSlider()
feedbackSlider()
