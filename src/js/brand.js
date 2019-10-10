document.addEventListener('DOMContentLoaded', function(){

    var brand_slides_count = 4;
    var brand_slides_gap = 30;
    var client_width = document.documentElement.clientWidth;


    if(+client_width <= 1024) {
      brand_slides_count = 3;
    }

    if(+client_width <= 768) {
      brand_slides_count = 2;
    }

    if(+client_width <= 500) {
      brand_slides_count = 1;
      brand_slides_gap = 100;
    }


    var same_slider = new Swiper('.brand-list-slider__wrap', {
    
      init: true,
      slidesPerView: brand_slides_count,
      speed: 600,
      spaceBetween: brand_slides_gap,
    
      loop: true,
    
      navigation: {
          prevEl: '[prev]',
          nextEl: '[next]',
      },
    
    });


});