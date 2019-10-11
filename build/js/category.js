document.addEventListener('DOMContentLoaded', function(){

    var filters = Array.from(document.querySelectorAll('.category-catalog-filter__filters'));
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

    var tabs = Array.from(document.querySelectorAll('.category-catalog-filter__tab'));
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


    // ползунок
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

});