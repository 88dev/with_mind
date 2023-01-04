const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const objectWidth = ref.scrollWidth;
    return objectWidth - vw + vh + 20;
}

window.addEventListener('scroll', () => {
    const sticky = document.querySelector('.sticky');
    horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});
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