$(document).ready(function(){
    $('.botao-menu').click(function() {
        $('.menu-lateral').animate({
            top: parseInt($('.menu-lateral').css('top'),10) == 0 ? 40-$('.menu-lateral').outerHeight() : 0
        });
    });
});