document.addEventListener('DOMContentLoaded', function(){

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