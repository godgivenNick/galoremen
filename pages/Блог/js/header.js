document.addEventListener('DOMContentLoaded', function(){

    var main_dds = Array.from(document.querySelectorAll('.header-nav > .header-nav-item._dd'));
    var sub_dds = Array.from(document.querySelectorAll('.nav-item-dropdown:not(._sub) > .nav-item-dropdown__item'));

    function close_all_mains(){
        main_dds.forEach(function(each){
            each.classList.remove('_show');
        });
    };

    function close_all_subs(){
        sub_dds.forEach(function(each){
            each.classList.remove('_show');
        });
    };


    document.addEventListener('click', function(e){


        //  основной дропдаун
        if(e.target.classList.contains('header-nav-item__name') && e.target.closest('.header-nav-item._dd')){

            var main_dd_btn = e.target.closest('.header-nav-item._dd');
            

            if(!main_dd_btn.classList.contains('_show')){
                // чтоб оффнуть другие раскрытые дд
                close_all_mains();

                main_dd_btn.classList.add('_show');

            } else {
                main_dd_btn.classList.remove('_show');
            }

        }


        // внутренний дд
        if(e.target.closest('.nav-item-dropdown__item') && e.target.closest('.nav-item-dropdown:not(._sub)')){

            var sub_dd_btn = e.target.closest('.nav-item-dropdown__item');

            if(!sub_dd_btn.classList.contains('_show')){
                // чтоб оффнуть другие раскрытые дд
                close_all_subs();

                sub_dd_btn.classList.add('_show');

            } else {
                sub_dd_btn.classList.remove('_show');
            }

        }



        // клик вне выпадашки
        else if(!e.target.closest('.header-nav-item._dd')){

            close_all_mains();

        }

    });


    var client_width = document.documentElement.clientWidth;

    if(+client_width <= 768){
        
        // мобилка
        var burger = document.querySelector('.header__burger');
        var overlay = document.querySelector('.main-overlay');
        var main_menu = document.querySelector('.header-main');
    
        burger.addEventListener('click', function(e){
            if(!burger.classList.contains('_show')){
                burger.classList.add('_show');
                main_menu.classList.add('_show');
                overlay.classList.add('_show');
            } else {
                burger.classList.remove('_show');
                main_menu.classList.remove('_show');
                overlay.classList.remove('_show');
            }
        });
    
        overlay.addEventListener('click', function(e){
            burger.classList.remove('_show');
            main_menu.classList.remove('_show');
            overlay.classList.remove('_show');
        });
    }



});
