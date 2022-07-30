function gallery() {
    var swiper = new Swiper(".catalog-gallery .mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
        loop: true,
    });
    var swiper2 = new Swiper(".catalog-gallery .mySwiper2", {
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".catalog-gallery .swiper-button-next",
            prevEl: ".catalog-gallery .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.05,
            },
            576: {
                slidesPerView: 1,
            },
        }
    });
}

gallery()
