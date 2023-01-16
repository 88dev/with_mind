function fnNav() {
    const nav = document.getElementById("nav");
    const gnb = document.getElementById("gnb");
    if (nav.checked == true){
        gnb.style.display = "block";
        $('header').addClass("on");
        $('header').removeClass("off");
        $( 'body' ).css("overflow-y", "hidden");
        $('header').css('transition', '0s');
    } else {
        gnb.style.display = "none";
        $('header').addClass("off");
        $('header').removeClass("on");
        $( 'body' ).css("overflow-y", "auto");
        $('header').css('transition', '0s');
    }
}

$( window ).resize( function() {

    $('header').addClass("off");
    $('header').removeClass("on");
    $('#nav').prop('checked', false);
    $('#gnb').css("display", "none");

    if($(window).width() > 1024) { 	
        $('#gnb').css("display", "flex");
    } else if($(window).scrollTop()) {
        $('header').removeClass("on");
        $('header').addClass("off");
        $('header').css('transition', '1s');
    } 

    
});

// menu
$(document).ready(function() {
    $('#gnb li').click(function(){
        $( 'body' ).css("overflow-y", "auto");
        $('#nav').prop('checked', false);
        $('#gnb').css("display", "none");
        if($(window).width() > 1024) { 	
            $('#gnb').css("display", "flex");
        } 
    });
    $('.h1').click(function(){
        var offset = $('#main').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('.btn_company').click(function(){
        var offset = $('#company').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('.btn_technology').click(function(){
        var offset = $('#technology').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('.btn_service').click(function(){
        var offset = $('#service').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('.btn_news').click(function(){
        var offset = $('#news').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });
    $('.btn_contact').click(function(){
        var offset = $('#contact').offset();
        $('html').animate({scrollTop : offset.top}, 400);
    });

    

});