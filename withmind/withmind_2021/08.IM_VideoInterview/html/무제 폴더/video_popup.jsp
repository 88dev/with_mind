<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<head>
	<link rel="stylesheet" href="../css/video_popup.css">
	<script src="../js/jquery-3.1.1.js"></script>
	<!--  summernote 에디터  -->
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/summernote/summernote-lite.css">
	<!-- summernote 에디터  -->
	<script src="${pageContext.request.contextPath}/resources/summernote/summernote-lite.js"></script>
	<script src="${pageContext.request.contextPath}/resources/summernote/lang/summernote-ko-KR.js"></script>
</head>

<!-- 면접장 이동 전 장치 테스트 모달창 화면 전체 -->
<div id="check_device">
	<div class="black_box"></div>
	<div id="no_device_guide" class="no_device_guide">
		<span class="title">장치 반영이 안될 시 진행 방법 순서</span>
		<span class="explain">
			1. 브라우저가 크롬인지 확인<br>
			2. 왼쪽 브라우저 상단 자물쇠(<img src="${pageContext.request.contextPath}/resources/images/video/img_lock.svg">)클릭 후 장치 승인<br>
			3. 윈도우에서 카메라 또는 마이크 작동 확인<br>
			4. 인터뷰마스터 고객센터로 기술문의
		</span>
	</div>
	<div id="check_device_test" class="device_test">
		<div class="title">
			<span>장치 테스트</span>
			<p>카메라, 마이크, 스피커 상태를 확인해주세요.</p>
		</div>
		<div class="device">
			<span><img src="${pageContext.request.contextPath}/resources/images/video/icon_cam.svg">카메라</span>
			<select></select>
			<p class="device_yes"><img src="${pageContext.request.contextPath}/resources/images/video/icon_summit_device.svg">카메라 영상이 정상적으로 작동하고 있습니다.</p>
			<p class="device_no"><img src="${pageContext.request.contextPath}/resources/images/video/icon_error_device.svg">카메라 영상이 정상적이지 않습니다.</p>
		</div>
		<div class="device">
			<span><img src="${pageContext.request.contextPath}/resources/images/video/icon_mic.svg">마이크</span>
			<select></select>
			<p class="device_yes"><img src="${pageContext.request.contextPath}/resources/images/video/icon_summit_device.svg">마이크 소리가 정상적으로 감지되고 있습니다.</p>
			<p class="device_no"><img src="${pageContext.request.contextPath}/resources/images/video/icon_error_device.svg">마이크 소리가 감지되지 않습니다.</p>
		</div>
		<div class="device">
			<span><img src="${pageContext.request.contextPath}/resources/images/video/icon_sound.svg">스피커</span>
			<select></select>
			<p class="device_yes"><img src="${pageContext.request.contextPath}/resources/images/video/icon_summit_device.svg">스피커 소리가 정상적으로 감지되고 있습니다.</p>
			<p class="device_no"><img src="${pageContext.request.contextPath}/resources/images/video/icon_error_device.svg">스피커 소리가 감지되지 않습니다.</p>
		</div>
		<div class="footer_btn">
			<button class="btn_cancel" onclick="device_error()">취소</button>
			<button class="btn_enter" onclick="loading()">참여</button>
		</div>
	</div>
	<div id="device_error">
		<img src="${pageContext.request.contextPath}/resources/images/video/icon_alert_modal.svg">
		<span>장치 테스트를 재 설정한 후 참여해 주세요.</span>
		<button>확인</button>
	</div>
</div>

<!-- 면접방 이동 전 대기 페이지 -->
<div id="loading_page" class="background_black">
	<div>
		<img src="${pageContext.request.contextPath}/resources/images/video/video_loading.gif">
		<span>잠시만 기다려 주세요. 승인 대기 중 입니다.</span>
	</div>
</div>






<!-- 면접관 면접 이용 전 기능설명 화면 2 -->
<div id="nav_guide_page" class="background_black">
	<section class="video_nav">
		<div class="btn_info_box dashed_border">
			<img class="line_img_8 line_img" src="${pageContext.request.contextPath}/resources/images/video/img_line_8.svg" />
			<span class="line_text_8 line_text">공고 내용을 확인 하는 기능입니다.</span>
			<button id="btn_info"><img src="${pageContext.request.contextPath}/resources/images/video/btn_toggle_open.svg" /></button>
		</div>
		<div class="nav_btn dashed_border">
			<!-- 버튼 클릭시 "active" class 추가	   -->
			<button class="btn_home"></button>
			<img class="line_img_9 line_img" src="${pageContext.request.contextPath}/resources/images/video/img_line_9.svg" />
			<span class="line_text_9 line_text">기본화면으로 되돌아 가는 기능입니다.</span>
			<button id="btn_schedule" class="btn_schedule"></button>
			<img class="line_img_10 line_img" src="${pageContext.request.contextPath}/resources/images/video/img_line_9.svg" />
			<span class="line_text_10 line_text">면접 전체 일정을 확인하는 기능입니다.</span>
			<button class="btn_screenshare"></button>
			<img class="line_img_11 line_img" src="${pageContext.request.contextPath}/resources/images/video/img_line_9.svg" />
			<span class="line_text_11 line_text">화면을 공유할 수 있는 기능입니다.</span>
			<button class="btn_memo"></button>
			<img class="line_img_12 line_img" src="${pageContext.request.contextPath}/resources/images/video/img_line_9.svg" />
			<span class="line_text_12 line_text">면접 중 워드 필기가 가능합니다.</span>
			<button class="btn_waiting"></button>
			<img class="line_img_13 line_img" src="${pageContext.request.contextPath}/resources/images/video/img_line_9.svg" />
			<span class="line_text_13 line_text">
				권한 승인 전 대기 현황을 표시하는 기능입니다. <br>
				(대표자 고유권한)
			</span>
		</div>	
		<div class="nav_exit">
			<button class="btn_exit"><img src="${pageContext.request.contextPath}/resources/images/video/icon_logout.svg" /></button>
		</div>	
	</section>
	<div class="guide_page_footer">
		<p>
			<img src="${pageContext.request.contextPath}/resources/images/video/img_bubble_deco.svg">
			<span>인터뷰 마스터IM 화상면접 서비스의 자세한 기능을 설명 드립니다.</span>
		</p>
		<span>
			<button class="dont_watch">다시 보지 않기</button>
			<button class="next_page" onclick="close_page()">닫기</button>
		</span>
	</div>
</div>









<!-- 현 진행하고 있는 면접에 대한 정보 -->
<div id="interview_info" class="interview_info toggle_contents">
	<div class="transparent">
		<div><span>&#183; 면접순서</span><span>1번 면접 (대기)</span></div>
		<div><span>&#183; 면접일정</span><span>2021-08-23 09:00</span></div>
		<div><span>&#183; 이름</span><span>홍길동</span></div>
		<div><span>&#183; 이메일</span><span>aaa@withmind.net</span></div>
		<div><span>&#183; 면접코드</span><span>123456</span></div>
		<div class="employ_name"><span>&#183; 채용명</span><span>㈜ 위드마인드 서비스 기획 채용 면접</span></div>
		<div><span>&#183; 응시분야</span><span>사무/기획</span></div>
		<button class="btn_info" onclick="info()"><img src="${pageContext.request.contextPath}/resources/images/video/btn_toggle_close.svg" /></button>
	</div>
</div>

<!-- 현재까지 면접을 본 지원자의 리스트 -->
<div id="schedule" class="toggle_contents">
	<div class="transparent">
		<span class="toggle_title">현재까지 면접을 본 지원자의 리스트입니다.</span>
		<button class="btn_close" onclick="schedule()"><img src="${pageContext.request.contextPath}/resources/images/video/btn_close.svg" /></button>
		<section class="table_section scroll scroll_ver">
			<table>
				<tr>
					<th>번호</th>
					<th>아이디(이메일)</th>
					<th>이름</th>
					<th>면접일정</th>
					<th>면접시간</th>
					<th>입장시간</th>
					<th>총 면접시간</th>
					<th>면접여부</th>
				</tr>
				<tr>
					<td>1</td>
					<td>aaa@withmind.net</td>
					<td>홍길동</td>
					<td>09:30</td>
					<td>60분</td>
					<td>09:30</td>
					<td>45분</td>
					<td class="red">진행완료</td>
				</tr>
				<tr>
					<td>2</td>
					<td>aaa@withmind.net</td>
					<td>홍길동</td>
					<td>09:30</td>
					<td>60분</td>
					<td>09:30</td>
					<td>45분</td>
					<td class="red">진행완료</td>
				</tr>
				<tr>
					<td>5</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
					<td>-</td>
					<td class="blue">진행대기</td>
				</tr>
			</table>
		</section>
		<button class="btn_blue">엑셀 다운로드</button>
	</div>
</div>

<!-- 면접실 접속 요청 대기자 목록 -->
<div id="waiting" class="toggle_contents">
	<div class="transparent">
		<button class="btn_close" onclick="waiting()"><img src="${pageContext.request.contextPath}/resources/images/video/btn_close.svg" /></button>
		<span class="toggle_title">면접실 접속 요청 대기자 목록</span>
		<section class="table_section scroll scroll_ver">
			<table>
				<tr>
					<th>번호</th>
					<th>이름</th>
					<th>요청시간</th>
					<th>카메라</th>
					<th>마이크</th>
					<th>입장요청</th>
					<th>상태</th>
					<th>승인</th>
				</tr>
				<tr>
					<td>1</td>
					<td>홍길동</td>
					<td>09:30</td>
					<td>O</td>
					<td>O</td>
					<td>O</td>
					<td>완료</td>
					<td class="green">승인</td>
				</tr>
				<tr>
					<td>2</td>
					<td>홍길동</td>
					<td>11:30</td>
					<td>O</td>
					<td>O</td>
					<td>O</td>
					<td>대기</td>
					<td class=""><button class="btn_ok">승인</button></td>
				</tr>
				<tr>
					<td>3</td>
					<td>홍길동</td>
					<td>12:30</td>
					<td>O</td>
					<td>O</td>
					<td>O</td>
					<td>취소</td>
					<td>-</td>
				</tr>
				
			</table>
		</section>
		<section class="toggle_radio">
			<input type="radio" id="enter_after" class="enter" name="enter" value="Y">
			<label for="enter_after">승인 후 입장</label>
			<input type="radio" id="enter_now" class="enter" name="enter" value="N">
			<label for="enter_now">바로 입장</label>
		</section>
		<section class="toggle_fotter">
			<button class="btn_blue">확인</button>
		</section>
	</div>
</div>

<!-- 필기를 할 수 있는 기능 -->
<div id="memo" class="toggle_contents">
	<div class="transparent">
		<textarea id="summernote"></textarea>
	</div>
</div>

<div id="setting" class="device_test toggle_contents">
	<div class="transparent">
		<div class="title">
			<span>장치 테스트</span>
			<p>카메라, 마이크, 스피커 상태를 확인해주세요.</p>
		</div>
		<div class="device">
			<span><img src="${pageContext.request.contextPath}/resources/images/video/icon_cam.svg">카메라</span>
			<select></select>
			<p class="device_yes"><img src="${pageContext.request.contextPath}/resources/images/video/icon_summit_device.svg">카메라 영상이 정상적으로 작동하고 있습니다.</p>
			<p class="device_no"><img src="${pageContext.request.contextPath}/resources/images/video/icon_error_device.svg">카메라 영상이 정상적이지 않습니다.</p>
		</div>
		<div class="device">
			<span><img src="${pageContext.request.contextPath}/resources/images/video/icon_mic.svg">마이크</span>
			<select></select>
			<p class="device_yes"><img src="${pageContext.request.contextPath}/resources/images/video/icon_summit_device.svg">마이크 소리가 정상적으로 감지되고 있습니다.</p>
			<p class="device_no"><img src="${pageContext.request.contextPath}/resources/images/video/icon_error_device.svg">마이크 소리가 감지되지 않습니다.</p>
		</div>
		<div class="device">
			<span><img src="${pageContext.request.contextPath}/resources/images/video/icon_sound.svg">스피커</span>
			<select></select>
			<p class="device_yes"><img src="${pageContext.request.contextPath}/resources/images/video/icon_summit_device.svg">스피커 소리가 정상적으로 감지되고 있습니다.</p>
			<p class="device_no"><img src="${pageContext.request.contextPath}/resources/images/video/icon_error_device.svg">스피커 소리가 감지되지 않습니다.</p>
		</div>
		<div class="footer_btn">
			<button class="btn_blue">확인</button>
		</div>
		<div class="footer_btn display_none">
			<button class="btn_cancel">취소</button>
			<button class="btn_enter">참여</button>
		</div>
	</div>
</div>

<!-- side nav exit -->
<div id="exit">
	<div>
		<button class="btn_exit_red">예, 방을 종료하겠습니다.</button>
		<button class="btn_exit_blue" onclick="exit()">아니요, 좀 더 참여하겠습니다.</button>
	</div>
</div>


<script>
	
	/* 환경 테스트하기 버튼 클릭 */
	function btn_test(){
		$('#interview_code').hide();
		$('#interviewee_code').hide();
		// if($('#video_test').css('display') == 'none'){
		// 	$('#video_test').show();
	    // }
		$('#check_device_test').show();
    }
	
	function use_guide(){
		$('#interview_code').hide();
		$('#interviewee_code').hide();
		if($('#interview_guide_page').css('display') == 'none'){
			$('#interview_guide_page').show();
	    }
    }
	
	function device_error(){
		$('#check_device_test').hide();
		$('#device_error').show();
	}
	
	function loading(){
		$('#interview_code').hide();
		$('#interviewee_code').hide();
		$('#check_device_test').hide();
		$('#check_device').hide();
		if($('#loading_page').css('display') == 'none'){
			$('#loading_page').show();
			if($('#loading_page').css('display') == 'block'){
				/* 임시로 닫게 함 */
				setTimeout(loading_close, 1000);
				/* setTimeout(function() {
					$('#interview_guide_page').show();
				}, 1000); */
			}
	    }
    }
	
	function loading_close(){
		$('#loading_page').hide();
	}
	
	function next_page(){
		$('#interview_guide_page').hide();
		if($('#nav_guide_page').css('display') == 'none'){
			$('#nav_guide_page').show();
	    }
    }
	
	function close_page(){
		$('#nav_guide_page').hide();
		$('#check_device').hide();
    }
	
	function info(){
		if($('#interview_info').css('display') == 'none'){
			$('#interview_info').show();
	    }else{
			$('#interview_info').hide();
	    }
    }
	
	function schedule(){
		if($('#schedule').css('display') == 'none' && $('#schedule').hasClass('active') == false ){
	    	console.log("schedule open click");
			$(".btn_schedule").addClass("active");
			/* $('#schedule').show(); */
			$('#schedule').css('display', 'block');
	    } else if($('#schedule.toggle_contents').css('display') == 'block') {
	    	console.log("schedule close click");
			$(".btn_schedule").removeClass("active");
			/* $('#schedule').hide(); */
			$('#schedule').css('display', 'none');
	    } else if($('.btn_schedule').hasClass('active')){
	    	$('.toggle_contents').css('display', 'none');
			$(".btn_schedule").removeClass("active");
	    }
    }
	
	function waiting(){
		if($('#waiting').css('display') == 'none'){
			$(".btn_waiting").addClass("active");
			$('#waiting').show();
	    }else{
			$(".btn_waiting").removeClass("active");
			$('#waiting').hide();
	    }
    }
	
	function memo(){
		if($('#memo').css('display') == 'none'){
			$(".btn_memo").addClass("active");
			$('#memo').show();
	    }else{
			$(".btn_memo").removeClass("active");
			$('#memo').hide();
	    }
    }
	
	function setting(){
		if($('#setting').css('display') == 'none'){
			$(".setting").addClass("on");
			$('#setting').show();
	    }else{
			$(".setting").removeClass("on");
			$('#setting').hide();
	    }
    }
	
	function exit(){
		if($('#exit').css('display') == 'none'){
			$('#exit').show();
	    }else{
			$('#exit').hide();
	    }
    }
	
	$(document).ready(function(){
		
		/* summerNote설정  */
	    $('#summernote').summernote({
	    	toolbar: [
	                  ['style', ['borderBtn', 'style']],
	                  ['fontsize', ['fontsize']],
	                  ['font', ['bold','italic', 'underline','strikethrough', 'clear']],
	                  ['height', ['height']],
	                  ['color', ['forecolor','backcolor']],
	                  ['para', ['paragraph']],
	                  ['table', ['table']],
	              ],   
			height: 300,                 // 에디터 높이
			minHeight: null,             // 최소 높이
			maxHeight: null,             // 최대 높이
			focus: true,                  // 에디터 로딩후 포커스를 맞출지 여부
			lang: "ko-KR",					// 한글 설정
			placeholder: '내용입력'	//placeholder 설정
		});	
		
	});
	
   
    $('.note-toolbar').bind('click',function(){
    	$('.note-modal-backdrop').remove();
    });
	
</script>