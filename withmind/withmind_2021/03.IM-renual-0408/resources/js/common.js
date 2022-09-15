$(function(){

	$(document).ready(function(){
		$("#header").load("/resources/html/header.html")
	 /* id 지정을 통해서도 가능합니다. 
		$("#header").load("header.html #navbar")
		*/       
	});
	$(function(){

	// $('#slider-div').slick("unslick");
	$(document).ready(function(){

	$('#slider-div').slick({
		slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
		infinite : true, 	//무한 반복 옵션	 
		slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
		slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
		speed : 200,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
		arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
		dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
		autoplay : true,			// 자동 스크롤 사용 여부
		autoplaySpeed : 3000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
		pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
		vertical : false,		// 세로 방향 슬라이드 옵션
		prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
		nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
		dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
		draggable : true, 	//드래그 가능 여부 
		
		responsive: [ // 반응형 웹 구현 옵션
			{  
				breakpoint: 960, //화면 사이즈 960px
				settings: {
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:3 
				} 
			},
			{ 
				breakpoint: 768, //화면 사이즈 768px
				settings: {	
					//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
					slidesToShow:2 
				} 
			}
		]

	});
	});
});
	$(document).ready(function(){
		$("#footer").load("/resources/html/footer.html")
	 /* id 지정을 통해서도 가능합니다. 
		$("#header").load("header.html #navbar")
		*/       
	});

	AOS.init();

	//메뉴
	$('nav h2').on('click', function(){
		$('nav > ul, .util').toggleClass('mb_hidden');
		$(this).parents('nav').toggleClass('open');
	});
	
	//메뉴
	var $win = $(window),
		menuLi = $('header .main > li'),
		menuBg = $('.menu_bg'),
		subMenu = $('.submenu');
	var hide = $('.hidden_mymenu');

	menuLi.on({
		'mouseenter':function(){
			if ($win.width() > 890){
				subMenu.stop().slideDown();
				menuBg.stop().slideDown();
				hide.hide();
			}

			
		},
		'mouseleave':function(){
			if ($win.width() > 890){
				subMenu.stop().slideUp();
				menuBg.stop().slideUp();
			}
		}
	});

	menuLi.on('click', function(){
		if ($win.width() < 891){ 
			var thisSub = $(this).find(subMenu);

			if ($(this).is('.open')){
				$(this).removeClass('open');
				thisSub.stop().slideUp();
				return false;
			}else{
				menuLi.removeClass('open');
				$(this).addClass('open');
				subMenu.stop().slideUp();
				thisSub.stop().slideDown();
			}
		}
	});

	$win.on('resize', function(){
		if ($win.width() > 890){
			menuLi.removeClass('open');
			subMenu.stop().slideUp();
		}
	});




//MY IM 
	var hide = $('.hidden_mymenu').hide();
	$('.util').on('click',function(){
		$(hide).stop().slideToggle();
	})

//pagination
	$('.page_num').on('click',function(e){
		e.preventDefault();
	$('.page_num').removeClass('chk');
	$(this).addClass('chk')
})

//morepage
$('.slideToggle_p').hide();
$('.div_wrapper').on('click',function(){
	$(this).parent().find('.slideToggle_p').stop().slideToggle("fast");
	$(this).children().find('.toggle_a').toggleClass('up')
	$(this).toggleClass('addBorder')
})


//selectbox custom
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	console.log(selElmnt.options[selElmnt.selectedIndex].innerHTML);
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
						h.innerHTML = '<span class="on">'+this.innerHTML+'</span>';
						console.log(this.innerHTML)
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

});


