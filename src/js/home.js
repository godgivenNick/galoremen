document.addEventListener('DOMContentLoaded', function () {

    // развернуть карточку с версиями обнов
    Array.from(document.querySelectorAll('.updates-item__btn')).forEach(function (each) {
        var each_item = each.closest('.updates-item');
        var each_list = each_item.querySelector('.updates-item__list');

        each.addEventListener('click', function (e) {

            if (!each_list.classList.contains('_show')) {
                each_list.classList.add('_show');
                each_item.classList.add('_show');
                each.innerHTML = 'Скрыть';
            } else {
                each_list.classList.remove('_show');
                each_item.classList.remove('_show');
                each.innerHTML = 'Развернуть';
            }

        });
    });


    // инициализация слайдера
    var swiper_rewies = new Swiper('.rewies-slider', {

        init: true,
        slidesPerView: 1,
        speed: 650,
        spaceBetween: 100,

        loop: true,
        // бесконечная прокрутка

        navigation: {
            nextEl: '.rewies-slider-next',
            prevEl: '.rewies-slider-prev',
        },

    });

});