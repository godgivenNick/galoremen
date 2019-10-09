document.addEventListener('DOMContentLoaded', function(){

    var main_brands_slider = new Swiper('.main-brands__wrap', {
    
        init: true,
        slidesPerView: 4,
        speed: 600,
        spaceBetween: 30,
    
        loop: true,
    
        navigation: {
            prevEl: '[prev]',
            nextEl: '[next]',
        },
    
    });


    var main_sale_slider = new Swiper('.main-sale-slider__wrap', {
    
        init: true,
        slidesPerView: 4,
        speed: 600,
        spaceBetween: 30,
    
        loop: true,
    
        navigation: {
            prevEl: '[prev]',
            nextEl: '[next]',
        },
    
    });

});