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


    var main_promo_slider = new Swiper('.main-first', {
    
        init: true,
        slidesPerView: 1,
        speed: 1000,
        spaceBetween: 0,
    
        loop: true,
        autoplay: {
            delay: 8000,
        },
    
        navigation: {
            prevEl: '[prev]',
            nextEl: '[next]',
        },
    
    });

    main_promo_slider.on('slideChange', function () {

        var current_counter = document.querySelector('.main-first__counter--current');

        setTimeout(function(){

            var prev_count = document.querySelector('.swiper-slide-active').getAttribute('counter');
            current_counter.innerHTML = prev_count;
            console.log(prev_count)

        }, 5);

    });




});