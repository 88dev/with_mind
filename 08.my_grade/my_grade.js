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
    let pageHeight = $(".wrap_page").height();
    // console.log(pageHeight + " << page11");

    $(window).scroll(function () {
        if ($(window).scrollTop() > pageHeight ) {
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

    // 타이핑될 텍스트를 가져온다 
    var typingTxt = ""; 
    
    typingTxt =	$(".typing_txt>ul>li").eq(liIndex).text(); 
    typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
        typingBool=true; 

        refreshIntervalId3 = setInterval(function() {typing();}, 100);
    } 
        
    function typing(){ 
        // $(".typing ul li").removeClass("on");
        // $(".typing ul li").eq(liIndex).addClass("on");
        if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
            $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            typingIdx++; 
        } else { if(liIndex<liLength-1){
            //다음문장으로  가기위해 인덱스를 1증가
            liIndex++; 
            //다음문장을 타이핑하기위한 셋팅  
            typingIdx=0;
            typingBool = false; 
            // typingTxt.str.substr(0.2).css("color","red");
            // $(".typing-txt>ul>li").eq(0).css("color","red");
            typingTxt = $(".typing_txt>ul>li").eq(liIndex).text(); 
        
            //다음문장 타이핑전 1초 쉰다
            clearInterval(refreshIntervalId3);
            //타이핑종료
        
            setTimeout(function(){
            //1초후에 다시 타이핑 반복 시작
                refreshIntervalId3 = setInterval(function() {typing();}, 100);
                }, 400);
            } else if(liIndex==liLength-1){
            
            //마지막 문장까지 써지면 반복종료
                clearInterval(refreshIntervalId3);
            }
        } 
    }  
}

function fnWidth(){
    let num = $('.wrap_grade').children(".wrap_graph").children(".wrap_bar").length;

    console.log("몇개" + num);

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