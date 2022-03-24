const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 20,
    slidesPerView: 'auto',
    watchOverflow: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    breakpoints: {
        420: {
            centeredSlides: false,
        },

        0: {
            centeredSlides: true,
        }
    },

    // If we need pagination


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});