document.addEventListener('DOMContentLoaded', function(){


    var same_slider = new Swiper('.brand-list-slider__wrap', {
    
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