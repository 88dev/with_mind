<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/myGrade.css"> 
	<script src="${pageContext.request.contextPath}/resources/js/myGrade.js"></script>
	<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<head>

</head>
<body>
	<article id="my_grade">
		<section class="wrap_page page_1">
			<p class="time">2022년 1월 30일 13시 12분 분석차트</p>
            <div style="width: 100%;"></div>
            <div id="particles"></div>
            <div class="particle_bg"></div>
            <div class="wrap_contents">
                <div class="title">
                    <img src="${pageContext.request.contextPath}/resources/images/myGrade/img_grade_title.svg">
                    <p>
						나의 마지막 모의면접 진행 날짜는 <span>2022년 03월 25일</span> 입니다.<br>
						인터뷰마스터 IM으로 면접마스터가 되어보세요!
                    </p>
                </div>
                <span></span>
            </div>
            <div class="icon_scroll">
            	<a class="mouse_scroll" title="Scroll">
                    <span id="circle"></span>
                </a>
                <p>스크롤</p> 
			</div>
		</section>
	    <section class="wrap_page page_2">
            <div class="wrap_flex">
                <div class="wrap_contents">
                    <h3>나의 면접 키워드</h3>
                    <div class="wrap_typing">
                        <div class="typing_txt">
                            <ul>
                                <li>#나는 면접 마스터</li>
                                <li>#오늘은 취준생, 내일은 직장인</li>
                            </ul>
                        </div>
                        <div class="typing">
                            <ul>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrap_circle">
                <div class="outline center flex">
                    <div class="waves waves1 center"></div>
                    <div class="waves waves2 center"></div>
                </div>
            </div>
        </section>
        <section class="wrap_page page_3">
            <div class="background">
                <img src="${pageContext.request.contextPath}/resources/images/myGrade/ellipse1.svg" />
                <img src="${pageContext.request.contextPath}/resources/images/myGrade/ellipse2.svg" />
                <img src="${pageContext.request.contextPath}/resources/images/myGrade/ellipse3.svg" />
                <img src="${pageContext.request.contextPath}/resources/images/myGrade/ellipse4.svg" />
            </div>
            <div class="wrap_flex">
                <div class="wrap_contents">
                    <div class="result wrap_grade">
                        <h3>나의 모의면접 점수 추이는</h3>
                        <p>최근 10건의 모의면접 진행 결과</p>
                        <div class="wrap_graph">
                            <div>
	                            <div class="wrap_bar">
	                                <div class="bar">
	                                    <div class="progress grade_progress" style="height: 0%;"></div>
	                                </div>
	                                <div class="font">
	                                    2022. 01. 19<br>
	                                    09:56 AM
	                                </div>
	                            </div>
	                            <div class="wrap_bar">
	                                <div class="wrap_max">
	                                    <div class="max grade_max" style="bottom: 0%">최고점수<br><b>100점</b></div>
	                                </div>
	                                <div class="bar">
	                                    <div class="progress grade_progress hit" style="height: 0%;"></div>
	                                </div>
	                                <div class="font">
	                                    2022. 01. 19<br>
	                                    09:56 AM
	                                </div>
	                            </div>
	                            <div class="wrap_bar">
	                                <div class="bar">
	                                    <div class="progress grade_progress" style="height: 0%;"></div>
	                                </div>
	                                <div class="font">
	                                    2022. 01. 19<br>
	                                    09:56 AM
	                                </div>
	                            </div>
	                            <div class="wrap_bar">
	                                <div class="bar">
	                                    <div class="progress grade_progress" style="height: 0%;"></div>
	                                </div>
	                                <div class="font">
	                                    2022. 01. 19<br>
	                                    09:56 AM
	                                </div>
	                            </div>
	                            <div class="wrap_bar">
	                                <div class="bar">
	                                    <div class="progress grade_progress" style="height: 0%;"></div>
	                                </div>
	                                <div class="font">
	                                    2022. 01. 19<br>
	                                    09:56 AM
	                                </div>
	                            </div> 
	                            <div class="wrap_bar">
	                                <div class="bar">
	                                    <div class="progress grade_progress" style="height: 0%;"></div>
	                                </div>
	                                <div class="font">
	                                    2022. 01. 19<br>
	                                    09:56 AM
	                                </div>
	                            </div> 
                            </div>
                            <div class="wrap_card">
                                <div class = "card1 card">
                                    <div class = "front">
						                                        다음 모의면접 <br>
						                                        결과는 <br>
						                                        어떻게 나올까?
                                    </div>
                                    <div class= "back">
                                        <a href="https://interviewmaster.kr/ai/"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="result wrap_rank">
                        <h3>나의 모의면접 랭킹 지수는</h3>
                        <p>최근 10건의 모의면접 진행 결과</p>
                        <div class="wrap_graph">
                        	<div>
	                            <div class="wrap_bar">
	                                <div class="wrap_max">
	                                    <div class="max rank_max" style="bottom: 0%">최고순위<br><b>1위</b></div>
	                                </div>
	                                <div class="bar">
	                                    <div class="progress rank_progress hit" style="height: 0%;"></div>
	                                </div>
	                                <div class="font">
	                                    2022. 01. 19<br>
	                                    09:56 AM
	                                </div>
	                            </div>
	                            <div class="wrap_bar">
	                                <div class="bar">
	                                    <div class="progress rank_progress" style="height: 0%;"></div>
	                                </div>
	                                <div class="font">
	                                    2022. 01. 19<br>
	                                    09:56 AM
	                                </div>
	                            </div>
	                            <div class="wrap_bar">
	                                <div class="bar">
	                                    <div class="progress rank_progress" style="height: 0%;"></div>
	                                </div>
	                                <div class="font">
	                                    2022. 01. 19<br>
	                                    09:56 AM
	                                </div>
	                            </div>
	                            <div class="wrap_bar">
	                                <div class="bar">
	                                    <div class="progress rank_progress" style="height: 0%;"></div>
	                                </div>
	                                <div class="font">
	                                    2022. 01. 19<br>
	                                    09:56 AM
	                                </div>
	                            </div>
	                            <div class="wrap_bar">
	                                <div class="bar">
	                                    <div class="progress rank_progress" style="height: 0%;"></div>
	                                </div>
	                                <div class="font">
	                                    2022. 01. 19<br>
	                                    09:56 AM
	                                </div>
	                            </div>
	                            <div class="wrap_bar">
	                                <div class="bar">
	                                    <div class="progress rank_progress" style="height: 0%;"></div>
	                                </div>
	                                <div class="font">
	                                    2022. 01. 19<br>
	                                    09:56 AM
	                                </div>
	                            </div>
                            </div>
                            <div class="wrap_card">
                                <div class = "card2 card">
                                    <div class = "front">
						                                        다음 모의면접 <br>
						                                        결과는 <br>
						                                        어떻게 나올까?
                                    </div>
                                    <div class= "back">
                                        <a href="https://interviewmaster.kr/ai/"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="wrap_page page_4">
                <div class="wrap_flex">
                    <div class="wrap_contents">
                        <div>
                            <div class="title">가장 높은 점수의 면접은</div>
                            <p class="sub_title">전체 모의면접 진행 결과</p>
                            <a>결과리포트 소환!</a>
                        </div>
                        <div>
                            <p class="result">2022년 03월 25일 / <span class="count count_num">0</span>점</p>
                        </div>
                    </div>
                </div>
                <div class="wrap_flex">
                    <div class="wrap_contents">
                        <div>
                            <div class="title">가장 활발히 <br>모의면접을 진행한 월은</div>
                            <p class="sub_title">전체 모의면접 진행 결과</p>
                        </div>
                        <div>
                            <p class="result">2022년 02월 / <span class="count count_num2">0</span>회</p>
                        </div>
                    </div>
                    <div class="wrap_dounut">
                        <img src="${pageContext.request.contextPath}/resources/images/myGrade/section04_dounut1.png" />
                        <img src="${pageContext.request.contextPath}/resources/images/myGrade/section04_dounut2.png" />
                        <img src="${pageContext.request.contextPath}/resources/images/myGrade/section04_dounut3.png" />
                    </div>
                </div>
        </section>
        <section class="wrap_page page_5">
            <div class="wrap_flex">
                <div class="wrap_contents">
                    <div class="interview_num">
                        <div class="title">나의 모의면접 진행 횟수는</div>
                        <p class="sub_title">최근 1년동안의 모의면접 진행 횟수</p>
                        <div class="my_num"><span>16</span>회</div>
                        <p class="max_num">최다 진행 마스터 <span>54회</span></p>
                    </div>
                    <div class="interview_time">
                        <div class="title">나의 모의면접 진행 횟수는</div>
                        <p class="sub_title">최근 1년동안의 모의면접 진행 횟수</p>
                        <div class="my_num"><span>345</span>분</div>
                        <p class="max_num">최다 진행 마스터 <span>567분</span></p>
                    </div>
                </div>
                <div class="top">
                    <div class="inner">
                        <div class="stars">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s1.png" class="c1_s1" style="top:142px;left:0;">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s2.png" class="c1_s2" style="top:252px;left:157px;">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s3.png" class="c1_s3" style="top:218px;left:320px;">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s4.png" class="c1_s4" style="top:0;left:397px;">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s5.png" class="c1_s5" style="top:110px;left:598px;">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s6.png" class="c1_s6" style="top:292px;left:713px;">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s7.png" class="c1_s7" style="top:143px;left:805px;">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s8.png" class="c1_s8" style="top:136px;left:900px;">
                        </div>
                        <div class="stars" style="position:absolute;top:0;left:50%;width:1253px;height:417px;margin:400px 0px 0px -408px;transform:scale(1.3)">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s1.png" class="c1_s1" style="top:142px;left:0;">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s2.png" class="c1_s2" style="top:252px;left:157px;">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s3.png" class="c1_s3" style="top:218px;left:320px;">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s4.png" class="c1_s4" style="top:0;left:397px;">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s5.png" class="c1_s5" style="top:200px;left:1200px;">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s6.png" class="c1_s6" style="top:292px;left:713px;">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s7.png" class="c1_s7" style="top:143px;left:805px;">
                            <img src="http://img247.etoos.com/web/w247/images/cnt/recruit/early2021/c1_s8.png" class="c1_s8" style="top:136px;left:900px;">
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrap_flex">
                <div class="wrap_contents">
                    <div>
                        <div class="title">나와 동일 직군을 선택한<br>성별 비율</div>
                        <p class="sub_title">최근 1년동안의 모의면접 진행 결과</p>
                        <div class="job">
                            <p>나의 선호 직군</p>
                            <span>디자인/ 경험 디자인</span>
                        </div>
                    </div>
                    <div class="percent">
                        <div class="wrap_blue">
                            <div class="progress_bar progress_blue" role="progressbar" style="height: 0%; overflow: hidden;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            <img src="${pageContext.request.contextPath}/resources/images/myGrade/section05_frame2.png" />
                        </div>
                        <span>30%</span>
                        <div class="wrap_red">
                            <div class="progress_bar progress_red" role="progressbar" style="height: 0%; overflow: hidden;" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                            <img src="${pageContext.request.contextPath}/resources/images/myGrade/section05_frame1.png" />
                        </div>
                        <span>70%</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="wrap_page page_6">
            <div class="wrap_flex">
                <div class="wrap_contents">
                    <div class="title">내가 자주 사용하는 단어는 </div>
                    <p class="sub_title">최근 1년동안 모의면접 진행 결과</p>
                    <div class="wrap_word">
                        <div class="word">
                            <span>1</span>
                            <p>기회글자수 최대 몇자까지 가능할까요?</p>
                            <span>(55회)</span>
                        </div>
                        <div class="word">
                            <span>2</span>
                            <p>20자</p>
                            <span>(53회)</span>
                        </div>
                        <div class="word">
                            <span>3</span>
                            <p>이용자</p>
                            <span>(45회)</span>
                        </div>
                        <div class="word">
                            <span>4</span>
                            <p>커스텀</p>
                            <span>(25회)</span>
                        </div>
                        <div class="word">
                            <span>5</span>
                            <p>인증번호</p>
                            <span>(5회)</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="wrap_flex">
                <div class="wrap_contents">
                    <img src="${pageContext.request.contextPath}/resources/images/myGrade/btn_txt.png"> 
                    <img src="${pageContext.request.contextPath}/resources/images/myGrade/btn_arrow.png"> 
                    <a class="btn_purple">모의면접 시작</a>
                </div>
            </div>
        </section>
	    <a href="#" class="goto_start"></a>
	</article>
        
</body>
<script>    

    $( document ).ready( function() {
        fnWidth();
    	fnParticle(); 
    	fnScrollTyping(); 
    	fnHover();
        fnCard();
        fnCount();
        fnGender();
        fnWord();
    });
	
</script>