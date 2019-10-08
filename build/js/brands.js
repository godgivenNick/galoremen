document.addEventListener('DOMContentLoaded', function(){

    var container = document.querySelector('.brands-list__n-container');
    var items = Array.from(container.querySelectorAll('.brands-list-item'));

    var ost_3 = +items.length % 3;
    // console.log(items.length);
    // console.log(ost_3);

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


});