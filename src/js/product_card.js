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



  var client_width = document.documentElement.clientWidth; //     ширина окна
  var same_slider_slides_count = 4;
  var viewed_list_items_count = 3;
  var galery_tumbs_count = 5;

  if(+client_width <= 1800){
    galery_tumbs_count = 4;
  }

  if(+client_width <= 1300){
    viewed_list_items_count = 2;
  }

  if(+client_width <= 1024){
    same_slider_slides_count = 3;
  }


  if(+client_width <= 768){
    same_slider_slides_count = 2;
    viewed_list_items_count = 1;
  }

  if(+client_width <= 640){
    galery_tumbs_count = 3;
  }

  if(+client_width <= 425){
    same_slider_slides_count = 1;
    galery_tumbs_count = 2;
  }

  // [ 4 ]  Слайдер "Так же покупают"
  var same_slider = new Swiper('.product-same-slider__wrap', {

    init: true,
    slidesPerView: same_slider_slides_count,
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
    slidesPerView: galery_tumbs_count,
    loop: false,

    slideThumbActiveClass: '_active',
  });

  var galery__main = new Swiper('.product-card-galery__main', {
    spaceBetween: 100,
    loop: false,
    slidesPerView: 1,

    thumbs: {
      swiper: galery_tumbs,
    },

  });




  //  [ 6 ] Просмотренные товары 

  var viewed_list = document.querySelector('.product-viewed__list');
  var viewed_list_items = Array.from(viewed_list.querySelectorAll('.product-viewed-item'));

  if(viewed_list_items.length < +viewed_list_items_count){

    var default_item_html = `
      <div class="product-viewed-item _empty">
        <div class="x-mark-160"></div>
      </div>
    `;

    for(let i=0; i < +viewed_list_items_count - +viewed_list_items.length; i++){
      viewed_list.innerHTML += default_item_html;
    }

  }





  // if(+client_width <= 1800){
  //   galery_tumbs_count = 4;
  // }






// end
});