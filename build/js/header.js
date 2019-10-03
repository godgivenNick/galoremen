document.addEventListener('DOMContentLoaded', function () {

    var dropdowns = Array.from(document.querySelectorAll('.header-menu-item [dropdown]'));

    document.addEventListener('click', function(e){

        // итемы менюшки
        if(e.target.closest('.header-menu-item__toggler')){

            var toggler = e.target.closest('.header-menu-item__toggler');
            var dropdown = toggler.closest('.header-menu-item').querySelector('[dropdown]');

            if(!dropdown.classList.contains('_show')){
                dropdown.classList.add('_show');
            } else {
                dropdown.classList.remove('_show');
            }

        }

        else if(!e.target.closest('.header-menu-item [dropdown]')){
            dropdowns.forEach(function(each){
                each.classList.remove('_show');
            });
        }


        // бургер
        var burger = document.querySelector('[burger]');
        var menu = document.querySelector('.header-menu');
        if(e.target.closest('[burger]')){

            if(!menu.classList.contains('_show')){
                menu.classList.add('_show');
                burger.classList.add('_show');
            } else {
                menu.classList.remove('_show');
                burger.classList.remove('_show');
            }

        } else if(!e.target.closest('.header-menu')){
            
            menu.classList.remove('_show');
            burger.classList.remove('_show');
        }

    });






    // мои popup окна
    if (document.querySelector('.trawl-popup')) {
        var overlay = document.querySelector('.main-overlay');
        var smbd_opened = 0;

        Array.from(document.querySelectorAll('.trawl-popup')).forEach(function (popup) {
            // (1) задаем left в завис-ти от ширины контента внутри

            var popup_width = parseInt(getComputedStyle(popup).width, 10);
            var popup_id = popup.getAttribute('[popup-id]');
            var close_btn = popup.querySelector('[close]');

            popup.style.left = 'calc(50% - ' + popup_width / 2 + 'px )';


            // (2)  смотрим че по высоте, если дохрена --> добавляем соответвующий класс для overflow & height
            var popup_height = parseInt(getComputedStyle(popup).height, 10);
            var screen_height = document.documentElement.clientHeight;
            if(popup_height >= screen_height){
                popup.classList.add('crm-popup--max-height');
                if(popup.classList.contains('crm-popup--content-h')){
                    popup.classList.remove('crm-popup--content-h')
                }
            }


            // (3) close
            close_btn.addEventListener('click', function (e) {
                if (smbd_opened !== 0) {
                    close_popup(smbd_opened);
                }
            });
            popup.querySelector('._cancel').addEventListener('click', function (e) {
                if (smbd_opened !== 0) {
                    close_popup(smbd_opened);
                }
            });
        });


        // Закрыть через overlay
        overlay.addEventListener('click', function () {
            if (smbd_opened !== 0) {
                close_popup(smbd_opened);
            }
        });


        // открытие для всех кнопок
        Array.from(document.querySelectorAll('[open-popup]')).forEach(function (btn) {

            btn.addEventListener('click', function (e) {
                var popup_id = e.target.getAttribute('open-popup');
                open_popup(popup_id);
            });

        });


        function open_popup(id) {
            var popup_id = '';
            popup_id = id;
            smbd_opened = popup_id;

            var overlay = document.querySelector('.main-overlay');
            var target_popup = document.querySelector('[popup-id="' + popup_id + '"]');

            overlay.classList.add('_show');
            target_popup.classList.add('_show');
        };

        function close_popup(id) {
            var popup_id = '';
            popup_id = id;
            smbd_opened = 0;

            var overlay = document.querySelector('.main-overlay');
            var target_popup = document.querySelector('[popup-id="' + popup_id + '"]');

            overlay.classList.remove('_show');
            target_popup.classList.remove('_show');
        };
    }




});

