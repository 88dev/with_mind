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


    $(".slider_main").slick({
        dots: true,
        fade: true,
        pauseOnHover: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        draggable : true,
    });

    $(".slider_product").slick({
        dots: false,
        pauseOnHover: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        adaptiveHeight: false,
        draggable : true,
        prevArrow : "<button type='button' class='slick-prev'></button>",		// 이전 화살표 모양 설정
        nextArrow : "<button type='button' class='slick-next'></button>",		// 다음 화살표 모양 설정
        responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            },
        ]
    });

    $(".slider_video").slick({
        dots: false,
        pauseOnHover: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 1500,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        draggable : true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                prevArrow : "<button type='button' class='slick-prev'></button>",		// 이전 화살표 모양 설정
                nextArrow : "<button type='button' class='slick-next'></button>",		// 다음 화살표 모양 설정
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow : "<button type='button' class='slick-prev'></button>",		// 이전 화살표 모양 설정
                nextArrow : "<button type='button' class='slick-next'></button>",		// 다음 화살표 모양 설정
            }
            },
        ]
    });

    $('#slick_toggle').click( function() {
        if ($(this).hasClass("dot_pause")){
            $('.slider_main').slick('slickPause');
            $(this).removeClass("dot_pause");
            $(this).addClass("dot_play");
        } else {
        $('.slider_main').slick('slickPlay')  
            $(this).removeClass("dot_play");
            $(this).addClass("dot_pause");
        }  
    });

    function fnClose(){
        console.log("click");
        $("#popup").css("display", "none");
    }