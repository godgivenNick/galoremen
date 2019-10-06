document.addEventListener('DOMContentLoaded', function(){


  //  [1] Инициализация табов
  var active_tab_id = 1;
  var product_tabs = Array.from(document.querySelectorAll('.product-card-tab'));
  var product_sections = Array.from(document.querySelectorAll('.product-card-section'));

  // var active_height = window.getComputedStyle(document.querySelector('[product-section="' + active_tab_id + '"]')).height;
  // console.log(document.querySelector('[product-section="' + active_tab_id + '"]'));

  // alert(active_height);
  Array.from(document.querySelectorAll('[product-tab="' + active_tab_id + '"], [product-section="' + active_tab_id + '"]')).forEach(function(each){
    each.classList.add('_active');
    // each.style.minHeight = active_height;
  });

  // alert(active_height);


  //  [2] Переклчюение табов
  var product_card_content = document.querySelector('.product-card-content');

  product_card_content.addEventListener('click', function (e) {

    if(e.target.closest('.product-card-tab')){

      var product_tab = e.target.closest('.product-card-tab');
      var tab_id = product_tab.getAttribute('product-tab');

      // сами табы
      product_tabs.forEach(function(each){
        each.classList.remove('_active');
      });
      product_tab.classList.add('_active');

      // секции, включая активную
      product_sections.forEach(function(each){
        
        each.classList.remove('_active');
        if(each.getAttribute('product-section') == tab_id){
          each.classList.add('_active');
        }

      });

    }
    
  });



  //  [ 3 ]  Калькуляция и добавление в корзину
  var counter_field = document.querySelector('.field-counter');
  counter_field.addEventListener('click', function(e){

    var input = counter_field.querySelector('input');
    var input_value = parseInt(input.value, 10);

    if(e.target.closest('.field-counter__plus')){
      input.value = input_value + 1;
    }

    else if(e.target.closest('.field-counter__minus')){
      if(input_value >= 1){
        input.value = input_value - 1;
      }
    }

  });


  var counter_input = counter_field.querySelector('input');
  var input_value = 0;
  counter_input.addEventListener('input', function(e){

    input_value = parseInt(e.target.value, 10);
    // console.log('1) ' + input_value + ', ' + typeof input_value);
    if(typeof input_value == String){
      input_value = 0;
    }

  });

  counter_input.addEventListener('change', function(e){

    if(typeof parseInt(e.target.value, 10) != Number){

      // console.log('2) ' + parseInt(e.target.value, 10) + ', ' + typeof parseInt(e.target.value, 10));
      counter_input.value = input_value;
    }
  });


  // [ 4 ]  Слайдер "Так же покупают"
  var same_slider = new Swiper('.product-same-slider__wrap', {

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


  // [ 5 ] слайдер Галерея товара
  var galery_tumbs = new Swiper('.product-card-galery__tumbs', {
    spaceBetween: 30,
    slidesPerView: 5,
    loop: false,
    // freeMode: true,
    // loopedSlides: 5, //looped slides should be the same
    // watchSlidesVisibility: true,
    // watchSlidesProgress: true,

    slideThumbActiveClass: '_active',
  });

  var galery__main = new Swiper('.product-card-galery__main', {
    spaceBetween: 100,
    loop: false,
    slidesPerView: 1,

    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    thumbs: {
      swiper: galery_tumbs,
    },

  });
















// end
});