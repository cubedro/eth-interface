//https://github.com/wagerfield/parallax

$('.main-container').parallax();
    
$('.window-icon').on('click', function(evt){
    evt.stopPropagation();
    var id = 'w_'+parseInt(1000000*Math.random()),
          poz = $(this).offset();
    $('.main-container').append('<div class="window" id="' + id + '"><div class="window-bg"></div><div class="topbar"></div><div class="closer">X</div></div>');
    $('.main-container #'+ id).data('scale', 1).css({
        top: poz.top,
        left: poz.left
    }).animate({
        top: '200px',
        left: '100px',
        width: '500px',
        height: '400px'
    });
});

$(document.body).on('click', '.closer', function(){
    $(this).parent('.window').remove();
});

$('.main-container').on('mousewheel', '.window', function(event) {
        updateScaleOne($(this), event.deltaFactor * event.deltaY / 20);
});

function updateScaleOne(element, scale){
        var size = element.data('scale') + 0.1 * scale;
        if(size < 0.5){
                size = 0.5;
        }

        if(size > 1.5){
                size = 1.5;
        }

        element.data('scale', size);
        element.stop(true);
        element.animate({transform: 'scale(' + size + ',' + size + ')'});
}