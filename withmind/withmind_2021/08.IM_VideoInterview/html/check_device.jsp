
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/video_popup.css">

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
	<div id="check_device_test" class="device_test" style="display: block;">
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

<script>
    $('#check_device').show();
</script>