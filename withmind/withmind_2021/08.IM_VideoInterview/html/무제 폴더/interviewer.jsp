<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/video.css">
</head>
<body id="interviewer">
	<section class="video_header">
		<div class="logo"> 
			<img class="im_logo" src="${pageContext.request.contextPath}/resources/images/video/logo_im.svg" />
			<span class="biz_name">(주)위드마인드</span>
			<span>면접실</span>
		</div>
		<div class="top_btn">
			<!-- " " / "off" -->
			<button class="cam"></button>
			<button class="mic off"></button>
			<button class="sound"></button>
			<!-- " " / "on" -->
			<button class="setting btn_toggle_contents" onclick="setting()"></button>
			<!-- " " / "full" -->
			<button class="screen full"></button>
		</div>
		<div class="top_info btn_toggle_contents">
			<button class=""><img src="${pageContext.request.contextPath}/resources/images/video/icon_handup_topbar.svg" />우선 발언권</button>
			<div>
				<button class="top_rec">
					<!-- " " / "on" -->
					<span class="rec_img on"></span>
					<span>Rec</span>
				</button>
				<!-- " " / "yellow" / "red" -->
				<p class="top_time red">
					<span class="time_img"></span>
					<span>00 : 48 : 12</span>
				</p>
			</div>
		</div>
	</section>
	<section class="video_nav">
		<button id="btn_info" class="btn_toggle_contents" onclick="info()"><img src="${pageContext.request.contextPath}/resources/images/video/btn_toggle_open.svg" /></button>
		<div class="nav_btn">
			<!-- 버튼 클릭시 "active" class 추가	   -->
			<button class="btn_home" class="btn_toggle_contents" onclick="location.href='${pageContext.request.contextPath}/video/interviewer'"></button>
			<button id="btn_schedule" class="btn_schedule btn_toggle_contents" onclick="schedule()"></button>
			<button class="btn_screenshare"></button> 
			<button class="btn_memo btn_toggle_contents" onclick="memo()"></button>
			<button class="btn_waiting btn_toggle_contents" onclick="waiting()"></button>
		</div>	
		<div class="nav_exit">
			<button class="btn_exit" onclick="exit()"><img src="${pageContext.request.contextPath}/resources/images/video/icon_logout.svg" /></button>
		</div>	
	</section>
	
	<!-- 본문 -->
	<section class="video_contents">
		<section>
			<section class="part1 contents_part scroll scroll_hor">
				<div class="biz_people king"><span class="king_img"></span><span class="king_label">(주)위드마인드</span><span class="biz_mic"></span></div>
				<div class="biz_people"><span class="biz_mic"></span></div>
				<div class="biz_people"><span class="biz_mic"></span></div>
				<div class="biz_people"><span class="biz_mic"></span></div>
				<div class="biz_people"><span class="biz_mic"></span></div>
			</section>
			<section class="part2 contents_part">
				<span>참여자</span>
				<div class="background scroll scroll_ver">
					<div class="member">
						<span>대표자</span>
						<!-- " " / "off" -->
						<button class="cam"></button>
						<button class="mic off"></button>
						<button class="sound"></button>
						
						<button class="leave" onclick="leave()"></button>
						<button class="key"></button>
					</div>
					<div class="member">
						<span>면접관 1</span>
						<!-- " " / "off" -->
						<button class="cam"></button>
						<button class="mic off"></button>
						<button class="sound"></button>
						
						<button class="leave" onclick="leave()"></button>
					</div>
				</div>
			</section>
		</section>
		<section>
			<section class="part3 contents_part">
			    <video></video>
				<img class="default_profile" src="${pageContext.request.contextPath}/resources/images/video/img_profile.svg">
				<span class="enter">지원자가 입장했습니다.</span>
				<div id="word_bubble">
					<span class="word_1"><em>단어</em></span>
					<span class="word_2"><em>단어</em></span>
					<span class="word_3"><em>단어</em></span>
					<span class="word_4"><em>단어</em></span>
					<span class="word_5"><em>단어</em></span>
					<span class="word_6"><em>단어</em></span>
					<span class="word_7"><em>단어</em></span>
				</div>
				<div id="heart">
					<span><img src="${pageContext.request.contextPath}/resources/images/video/img_heartrate.svg">조금 높은 긴장도</span>
					<span class="rate"><em>130</em>bpm</span>
				</div>
			</section>
			<section class="part4 contents_part">
				<!-- 질문 -->
				<section class="part4_1">
					
					<section id="tab">
			            <ul class="tab_lst">
			                <li class="on"><a href="">기본질문</a></li>
			                <li><a href="">AI 추천질문</a></li>
			            </ul>
			            <div class="group">
			                <div class="question_basic question tab_1 on">
			                    <section class="scroll scroll_ver">
			                    	<button class="reset"><img src="${pageContext.request.contextPath}/resources/images/video/btn_reset.svg" /></button>
			                   		<!-- 기본질문 -->
			                   		<div class="no_data" style="display: none">분석된 정보 없음</div>
			                   		<div class="ques_lst">
			                   			<span>직무관련 질문 리스트</span>
			                   			<div>1. Ai 서비스를 설명해보세요.<em class="red">New</em></div>
			                   			<div>2. Ai 서비스를 설명해보세요.<em class="red">New</em></div>
			                   		</div>
			                    </section>
			                </div>
			                <div class="question_ai question tab_2">					
			                    <section class="scroll scroll_ver">
			                    	<!-- AI 추천질문 -->
			                        <div class="no_data">(ai)분석된 정보 없음</div>
			                   		<div class="ques_lst" style="display: none">
			                   			<span>(ai)직무관련 질문 리스트</span>
			                   			<div>1. Ai 서비스를 설명해보세요.<em class="red">New</em></div>
			                   			<div>2. Ai 서비스를 설명해보세요.<em class="red">New</em></div>
			                   		</div>
			                    </section>
			                </div>
						</div>
					</section>
				
				</section>
				<!-- 채팅 -->
				<section class="part4_2">
					<span>채팅</span>
					<div class="background">
						<section id="chatting" class="chatting scroll scroll_ver">
						
							<div class="chat_box left">
							    <div class="message">
							    	<span class="nickname">대표자</span>
							        <p>안녕하세요. 면접관님.</p>
							        <span class="time-right">오전 11:01</span>
							    </div>
							</div>
							
							<div class="chat_box right">
							    <div class="message">
							        <p>안녕하십니까.</p>
							        <span class="time-left">오전 11:02</span>
							    </div>
							</div>
							
							<div class="chat_box right">
							    <div class="message">
							        <p>이번 면접자는 홍길동 입니다. 장비 테스트 정상이며, 면접을 시작하겠습니다.</p>
							        <span class="time-left">오전 11:02</span>
							    </div>
							</div>
							
							<div class="chat_box right">
							    <div class="message">
							    <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
							    <span class="time-left">오전 11:05</span>
							    </div>
							</div>
							
							<!-- 파일첨부 -->
							<div class="chat_box left">
							    <div class="message">
							    	<span class="nickname">대표자</span>
							        <p>
							        	<span class="file_name">IM 화상면접 서비스_web</span>
							        	<!-- 저장 안한 파일 다운로드 버튼 -->
							        	<!-- 저장 X "file_btn" / 저장 O "file_btn saved" 둘 다 있어야 함  -->
							        	<button class="file_btn saved"></button>
							        	<span class="file_size">24.32 MB</span>
							        	<span class="file_down_box">
							        		<button class="file_download">저장</button>
							        		<span>&#183;</span>
							        		<button class="file_download_other">다른 이름으로 저장</button>
							        	</span>
						        	</p>
							        <span class="time-right">오전 11:01</span>
							    </div>
							</div>
							<div class="chat_box right">
							    <div class="message">
							    <p>
						        	<span class="file_name">IM 화상면접 서비스_web</span>
						        	<button class="file_btn"></button>
						        	<span class="file_size">24.32 MB</span>
						        	<span class="file_down_box">
						        		<button class="file_download">저장</button>
						        		<span>&#183;</span>
						        		<button class="file_download_other">다른 이름으로 저장</button>
						        	</span>
					        	</p>
							    <span class="time-left">오전 11:05</span>
							    </div>
							</div>
							
						</section>
						<section class="chat_input">
							<textarea class="scroll scroll_ver" placeholder="메세지를 입력하세요."></textarea>
							<div class="chat_btn">
								<button><img src="${pageContext.request.contextPath}/resources/images/video/icon_link.svg" /></button>
								<span></span>
								<button><img src="${pageContext.request.contextPath}/resources/images/video/btn_send.svg" /></button>
							</div>
						</section>
					</div>
				</section>
			</section>
		</section>
	</section>
	<%@ include file="video_popup.jsp" %>
	
	<!-- popup -->
	
	<!-- 면접방 입장 전 체크 페이지(xd2/p18) -->
	<div id="interview_code" class="interview_common_code background_black">
		<div class="black_box"></div>
		<div class="input_info">
			<span class="title">
				참여 전 원하는 닉네임과 참여를 위해 부여 받은 <br>면접 코드를 입력해 주세요.
			</span>
			<div class="nickname">
				<span>닉네임<em class="red">*</em></span>
				<input class="name" placeholder="면접에 맞는 기업 아이디를 입력하세요." />
			</div>
			<div class="code">
				<span>면접코드<em class="red">*</em></span>
				<input class="name" placeholder="면접코드를 입력하세요." />
			</div>
			<div class="footer_btn">
				<button class="btn_cancel">취소</button>
				<button class="btn_enter" onclick="loading()">참여</button>
			</div>
		</div>
		<div class="btn_codePage">
			<span class="explain">‘환경 테스트 하기 버튼’을 통해 <em class="red">면접 전<br> 미리 장비 테스트</em>를 진행하실 수 있습니다.</span>
			<button class="btn_test" id="btn_test" onclick="location.href='${pageContext.request.contextPath}/video/video_test'">환경 테스트 하기</button>
			<button class="btn_guide" onclick="use_guide()">화상면접 이용 가이드</button>
		</div>
	</div>
	
	<!-- 면접관 면접 이용 전 기능설명 화면 1 -->
	<div id="interview_guide_page" class="interview_guide_page">
		<section class="video_header interview_guide_header">
			<div class="logo"> 
				<img class="im_logo" src="${pageContext.request.contextPath}/resources/images/video/logo_im.svg" />
				<span class="biz_name">(주)위드마인드</span>
				<span>면접실</span>
			</div>
			<div class="top_btn">
				<!-- " " / "off" -->
				<div class="dashed_border">
					<button class="cam" disabled></button>
					<button class="mic"></button>
					<button class="sound"></button>
					<img class="line_img_1 line_img" src="${pageContext.request.contextPath}/resources/images/video/img_line_1.svg" />
					<span class="line_text_1 line_text">기본적인 장비 사용유무를 결정합니다.</span>
				</div>
				<!-- " " / "on" -->
				<div class="dashed_border">
					<button class="setting"></button>
					<img class="line_img_2 line_img" src="${pageContext.request.contextPath}/resources/images/video/img_line_2.svg" />
					<span class="line_text_2 line_text">화면이나 소리가 나오지 않을 시 체크 및 설정 하세요.</span>
				</div>
				<!-- " " / "full" -->
				<button class="screen full"></button>
			</div>
			<div class="top_info">
				<div class="dashed_border">
					<button class=""><img src="${pageContext.request.contextPath}/resources/images/video/icon_handup_topbar.svg" />우선 발언권</button>
					<img class="line_img_3 line_img" src="${pageContext.request.contextPath}/resources/images/video/img_line_3.svg" />
					<span class="line_text_3 line_text">면접관 또는 지원자에게 우선질문하기 위한 요청이 가능합니다.</span>
				</div>
				<div class="dashed_border">
					<button class="top_rec">
						<!-- " " / "on" -->
						<span class="rec_img"></span>
						<span>Rec</span>
					</button>
					<!-- " " / "yellow" / "red" -->
					<p class="top_time">
						<span class="time_img"></span>
						<span>00 : 48 : 12</span>
					</p>
					<img class="line_img_4 line_img" src="${pageContext.request.contextPath}/resources/images/video/img_line_4.svg" />
					<span class="line_text_4 line_text">녹화하기 및 시간을 확인하실 수 있습니다.</span>
				</div>
			</div>
		</section>
		<section id="interview_guide_body">
			<div class="screen_contents">
				<div id="word_bubble" class="dashed_border">
					<span class="word_1"><em>단어</em></span>
					<span class="word_2"><em>단어</em></span>
					<span class="word_3"><em>단어</em></span>
					<span class="word_4"><em>단어</em></span>
					<span class="word_5"><em>단어</em></span>
					<span class="word_6"><em>단어</em></span>
					<span class="word_7"><em>단어</em></span>
					<img class="line_img_5 line_img" src="${pageContext.request.contextPath}/resources/images/video/img_line_5.svg" />
					<span class="line_text_5 line_text">지원자의 빈도 높은 사용 단어를 분석합니다.</span>
				</div>
				<div id="heart" class="dashed_border">
					<span><img src="${pageContext.request.contextPath}/resources/images/video/img_heartrate.svg">조금 높은 긴장도</span>
					<span class="rate"><em>130</em>bpm</span>
					<img class="line_img_6 line_img" src="${pageContext.request.contextPath}/resources/images/video/img_line_6.svg" />
					<span class="line_text_6 line_text">지원자의 긴장도를 참고하실 수 있습니다.</span>
				</div>
			</div>
			<div>
				<div class="guide_question dashed_border">
					<div class="guide_tab">
						<span>기본질문</span>
						<span>AI 추천질문</span>
					</div>
					<div class="guide_question_list">
						<span>직무관련 질문 리스트</span>
	           			<div>1. Ai 서비스를 설명해보세요.<em class="red">New</em></div>
	           			<div>2. Ai 서비스를 설명해보세요.<em class="red">New</em></div>
	           			<div>3. Ai 서비스를 설명해보세요.<em class="red">New</em></div>
	           			<div>4. Ai 서비스를 설명해보세요.<em class="red">New</em></div>
	           			<div>5. Ai 서비스를 설명해보세요.<em class="red">New</em></div>
					</div>
					<img class="line_img_7 line_img" src="${pageContext.request.contextPath}/resources/images/video/img_line_7.svg" />
					<span class="line_text_7 line_text">
						기본 또는 AI분석 질문 리스트를 통해 손쉬운 면접 진행이 가능합니다. <br>
						새로 고침 버튼을 통해 분석된 AI 추천 질문을 확인할 수 있습니다.
					</span>
				</div>
			</div>
			<div class="guide_page_footer">
				<p>
					<img src="${pageContext.request.contextPath}/resources/images/video/img_bubble_deco.svg">
					<span>인터뷰 마스터IM 화상면접 서비스의 자세한 기능을 설명 드립니다.</span>
				</p>
				<span>
					<button class="dont_watch">다시 보지 않기</button>
					<button class="next_page" onclick="next_page()">다음 화면</button>
				</span>
			</div>
		</section>
	</div>
	
	<!-- 퇴장 -->
	<div id="let_leave" class="background_black">
		<div id="leave_check">
			<span></span>
			<p>정말 퇴장 시키겠습니까?</p>
			<div class="btn_box">
				<button class="btn_no">아니요</button>
				<button class="btn_yes">예</button>
			</div>
		</div>
	</div>
		
	
	<script src="${pageContext.request.contextPath}/resources/js/tab.js"></script> 
	<script>
		$('#chatting').scrollTop($('#chatting')[0].scrollHeight);
		
		$(document).ready(function() {
			$('#interview_code').show();
		});
		
		function leave(){
			$('#let_leave').show();
		}
		
		/* $(document).mouseup(function (e){
			var LayerPopup = $(".toggle_contents");
			if(LayerPopup.has(e.target).length === 0){
				LayerPopup.css('display', 'none');
				$('.btn_toggle_contents').removeClass("active");
				$('.btn_toggle_contents').removeClass("on");
			}
		}); */
		
	</script>
</body>
</html>