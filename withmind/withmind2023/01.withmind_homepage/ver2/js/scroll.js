
$(document).ready(function() {

    $('.company').click(function(){
        var offset = $('#company').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('.technology').click(function(){
        var offset = $('#technology').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('.service').click(function(){
        var offset = $('#service').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('.news').click(function(){
        var offset = $('#news').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('.contact').click(function(){
        var offset = $('#contact').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });


});