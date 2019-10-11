document.addEventListener('DOMContentLoaded', function(){

//  [ Общие переменные ]


var client_width = document.documentElement.clientWidth; //     ширина окна



//  стр. БРЕНДЫ
if(document.querySelector('.brands-list__n-container')){

    if(+client_width > 1024){

        var container = document.querySelector('.brands-list__n-container');
        var items = Array.from(container.querySelectorAll('.brands-list-item'));
    
        var ost_3 = +items.length % 3;
    
        var default_item_html = `
          <div class="brands-list-item _empty">
            <div class="x-mark-160"></div>
          </div>
        `;
    
        if(ost_3 == 1){
            container.innerHTML += default_item_html;
            container.innerHTML += default_item_html;
        } else if (ost_3 == 2){
            container.innerHTML += default_item_html;
        }
    }
}


//  стр. БРЕНД
if(document.querySelector('.brand-list-slider__wrap')){

    var brand_slides_count = 4;
    var brand_slides_gap = 30;

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


    var brand_slider = new Swiper('.brand-list-slider__wrap', {
    
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

}


//  стр. КАТЕГОРИЯ
if(document.querySelector('.brand-list-slider__wrap')){


    // [ 1 ]    Переключение фильтров
    var filters = Array.from(document.querySelectorAll('.category-catalog-filter__filters'));
    var tabs = Array.from(document.querySelectorAll('.category-catalog-filter__tab'));
    function close_all_filters(){
        filters.forEach(function(each){
            each.classList.remove('_active');
        });
    };
    function close_all_tabs(){
        tabs.forEach(function(each){
            each.classList.remove('_active');
        });
    };

    tabs.forEach(function(each){
        each.addEventListener('click', function(){

            var tab_id = each.getAttribute('filter-tab');

            if(!each.classList.contains('_active')){
                close_all_tabs();
                each.classList.add('_active');
                close_all_filters();
                document.querySelector('[filter-id="' + tab_id + '"]').classList.add('_active');

            } else {
                close_all_filters();
                close_all_tabs();
                each.classList.remove('_active');
            }
        });
    });


    // [ 2 ] ползунок для цен
    var max_price = document.querySelector('[max-price]').getAttribute('max-price');
    $( ".category-catalog-filter-range__range" ).slider({
        range: true,
        min: 0,
        max: max_price,
        values: [ 0, max_price ],
        slide: function( event, ui ) {
          $( "#min_price" ).val(ui.values[ 0 ]);
          $( "#max_price" ).val(ui.values[ 1 ]);
        }
      });

      $( "#min_price" ).val( $( ".category-catalog-filter-range__range" ).slider( "values", 0 ) );
      $( "#max_price" ).val($( ".category-catalog-filter-range__range" ).slider( "values", 1 ) );

    //   $( "#min_price" ).on('change', function(e){

    //   });

}



//  стр. БИЗНЕС
if(document.querySelector('.business-q')){

    Array.from(document.querySelectorAll('.business-q-item__content')).forEach(function(each){

        var each_height = window.getComputedStyle(each).height;
        var each_patop = window.getComputedStyle(each).paddingTop;
        each.classList.add('_close');
        each.setAttribute('own_height', each_height);
        each.setAttribute('own_patop', each_patop);

    });


    Array.from(document.querySelectorAll('.business-q-item')).forEach(function(each){

        each.addEventListener('click', function(e){

            if(e.target.closest('.business-q-item__header')){

                var tumbler = e.target.closest('.business-q-item__header');
                var content = e.target.closest('.business-q-item').querySelector('.business-q-item__content');
                var x_mark = e.target.closest('.business-q-item').querySelector('.business-q-item__icon');

                if(!tumbler.classList.contains('_show')){

                    tumbler.classList.remove('_close');
                    content.classList.remove('_close');
                    x_mark.classList.remove('_close');

                    tumbler.classList.add('_show');
                    content.classList.add('_show');
                    x_mark.classList.add('_show');

                    content.setAttribute('style', 'height: ' + content.getAttribute('own_height') + '; ' + 'padding-top: ' + content.getAttribute('own_pato'));

                } else {
                    tumbler.classList.remove('_show');
                    content.classList.remove('_show');
                    x_mark.classList.remove('_show');

                    tumbler.classList.add('_close');
                    content.classList.add('_close');
                    x_mark.classList.add('_close');

                    content.setAttribute('style', 'height: 0px; padding-top: 0px;');

                }

            }

        });

    });


}










































});