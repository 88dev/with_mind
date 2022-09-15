/* 토글 모바일 메뉴 버튼 관련 */
$('.btn_menu').click(function(){
    var $clicked = $(this);
    var nowAnimating = $clicked.attr('data-ico-now-animating');
    if ( nowAnimating == "Y" ){
        return;
    }
    if ( $clicked.hasClass('active') ){
        hideMobileMenu();
        $("html").css('overflow','').css('display','');
    }
    else {
        showMobileMenu();
        $("html").css('overflow','hidden').css('display','fixed');
    }
    $clicked.toggleClass('active');
});
function showMobileMenu(){
    $('.wrap_nav').addClass('active');
};
function hideMobileMenu(){
    $('.wrap_nav').removeClass('active');
};
$('.wrap_nav').click(function(){
    $('.btn_menu').click();
});
$('#nav > li').click(function(e){
    e.stopPropagation();
});