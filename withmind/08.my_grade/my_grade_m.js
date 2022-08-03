/* main 1 */
function fnParticle(){
    particlesJS("particles", {
        "particles": {
            "number": {
                "value": 25,
                "density": {
                    "enable": true,
                    "value_area": 500
                }
            },
            "color": {
                "value": ["#84C78A", "#8B79FF", "#FFD058", "#FF5384"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 200
                }
            },
            "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1.5,
                    "opacity_min": 0.15,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.15,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#89BBDB",
                "opacity": 0.8,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1.6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

// 타이핑 스크롤
function fnScrollTyping(){
    let runTyping = true;
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200 ) {
            if(runTyping == true) {
                fnTyping();
                runTyping = false;
            }
        }
    });
}

//타이핑
function fnTyping(){    
    var typingBool = false; 
    var typingIdx = 0; 
    var liIndex = 0;
    var liLength = $(".typing_txt>ul>li").length;
    var typingTxt = ""; 
    typingTxt =	$(".typing_txt>ul>li").eq(liIndex).text(); 
    typingTxt = typingTxt.split(""); 
    if(typingBool==false){
        typingBool=true; 
        refreshIntervalId3 = setInterval(function() {typing();}, 100);
    } 
    function typing(){ 
        if(typingIdx<typingTxt.length){ 
            $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); 
            typingIdx++; 
        } else { if(liIndex<liLength-1){
            liIndex++; 
            typingIdx=0;
            typingBool = false; 
            typingTxt = $(".typing_txt>ul>li").eq(liIndex).text(); 
            clearInterval(refreshIntervalId3);        
            setTimeout(function(){
                refreshIntervalId3 = setInterval(function() {typing();}, 100);
                }, 400);
            } else if(liIndex==liLength-1){
                clearInterval(refreshIntervalId3);
            }
        } 
    }  
}

function fnWidth(){
    let num = $('.wrap_grade').children(".wrap_graph").children(".wrap_bar").length;
    if(num < 3) {
        console.log("1,2개");
        $(".wrap_graph").css("width", "240px");
    } else if(num > 2 && num < 5 ){
        console.log("3,4개");
        $(".wrap_graph").css("width", "280px");
    } else if(num == 5 ){
        console.log("5개");
        $(".wrap_graph").css("width", "100%");
    }
}
function fnScroll() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
        
        if ($(this).scrollTop() > 650) {
            $(".grade_progress").eq(0).animate({
                height: "15%"
            });
            $(".grade_progress").eq(1).animate({
                height: "15%"
            });
            $(".grade_progress").eq(2).animate({
                height: "15%"
            });
            $(".grade_max").animate({
                opacity: "1",
                bottom: "15%"
            });
        }
        if ($(this).scrollTop() > 900) {
            $(".rank_progress").eq(0).animate({
                height: "15%"
            });
            $(".rank_progress").eq(1).animate({
                height: "15%"
            });
            $(".rank_progress").eq(2).animate({
                height: "15%"
            });
            $(".rank_max").animate({
                opacity: "1",
                bottom: "15%"
            });
        }
        if ( $(window).scrollTop() > 2100 ) {
            $(".progress_blue").animate({
                height: "30%"
            });
            $(".progress_red").animate({
                height: "70%"
            });
        }
        if ( $(window).scrollTop() > 2300 ) {
            $('.word').each(function(index){
                $(this)
                    .delay(index*500)
                    .animate({
                        opacity: '1'
                }, 'slow')
            });
        }
    });

}
$(".slider").slick({
    dots: true,
    fade: true,
    pauseOnHover: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: false,
    draggable : true,
});
// 숫자 카운트
function fnCount(){
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
}
        
$("#top").click( function() {
    var htmloffset = jQuery( 'html' ).offset();
    jQuery( 'html, body' ).animate( { scrollTop : htmloffset.top }, 400 );
});