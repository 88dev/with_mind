/* 회의세션 버튼 JS */

/* 임시 변수 반드시 제거 */
var isProceeding = false;

document.getElementById('session-modal-confirm').addEventListener('click',set_interview_status);

$(document).on('click', '.btn-remote-video', function() {
	$(this).toggleClass('on');
	if ($(this).hasClass('on')) {
		$(this).find('.remote-video-on').css('display', 'inline-block');
		$(this).find('.remote-video-off').css('display', 'none');
	}
	else {
		$(this).find('.remote-video-on').css('display', 'none');
		$(this).find('.remote-video-off').css('display', 'inline-block');
	}
})

$(document).on('click', '.btn-remote-mic', function() {
	$(this).toggleClass('on');
	if ($(this).hasClass('on')) {
		$(this).find('.remote-mic-on').css('display', 'inline-block');
		$(this).find('.remote-mic-off').css('display', 'none');
	}
	else {
		$(this).find('.remote-mic-on').css('display', 'none');
		$(this).find('.remote-mic-off').css('display', 'inline-block');
	}
})


$('#btn-session-start').on('click',function(){
	
	/* 면접세션 진행 확인 및 처리 모달 오픈 */
	open_interview_session_chk_modal()
	
	/* ajax 서버 처리 작성되어야함 */
});

/* 면접 진행 중인지 확인하고 모달 컨텐츠 설정 및 모달 오픈
   현재는 단순 스크립트변수로 제어되고있으나 이후에는 세션이 진행 중 인지 
   서버에서 값을 받아 확인하고 처리 하도록 변경 반드시 해주어야함.
  */
function open_interview_session_chk_modal(){
	/* 진행 중 일경우 :: 진행 -> 종료, 대기 */
	if(isProceeding){
		// 
		$('#session-modal-title').html('<b style="color : red;">면접이 진행</b> 중 입니다.');
		$('#session-modal-contents').text('면접을 종료하시겠습니까 ?');
		
		$('#session-modal').modal();
		
	}
	/* 대기 중 일경우 :: 대기 -> 시작 */
	else{
		// 
		$('#session-modal-title').html('<b style="color : blue;">면접대기</b> 중 입니다.');
		$('#session-modal-contents').text('면접을 시작하시겠습니까 ?');
		
		$('#session-modal').modal();
	}
}

/* 면접 진행 및 종료 알림 창 */
function session_status_alert(contents){
	var target_modal = $('#session-start-alert');
	var contents_value =  target_modal.find('#session-alert-contents');
	
	contents_value.text(contents)
		target_modal.fadeIn();
		setTimeout(function(){
			target_modal.fadeOut();
		}, 3000);
}
/* 
면접 진행 상태에 따라 분기처리
진행상태에 따라서 제어버튼의 명시상태 변경
및 임시제어변수 변경
 */
function set_interview_status(){
	if(isProceeding){
		session_status_alert('면접이 종료 되었습니다. 수고하셨습니다.');
		isProceeding = false;
		$('#btn-session-start').removeClass('btn-danger');
		$('#btn-session-start').addClass('btn-success');
		$('#btn-inner-txt').text('면접시작');
	}else{
		session_status_alert('면접이 시작 되었습니다. 녹화를 시작합니다.');
		isProceeding = true;
		$('#btn-session-start').removeClass('btn-success');
		$('#btn-session-start').addClass('btn-danger');
		$('#btn-inner-txt').text('면접중..');
	}
}


$(document).on({
	mouseenter: function() {
		if ($(this).hasClass('on')) {
			$(this).find('.remote-video-on').css('display', 'none');
			$(this).find('.remote-video-off').css('display', 'inline-block');
		} else {
			$(this).find('.remote-video-on').css('display', 'inline-block');
			$(this).find('.remote-video-off').css('display', 'none');
		}
	},

	mouseleave: function() {
		if ($(this).hasClass('on')) {
			$(this).find('.remote-video-on').css('display', 'inline-block');
			$(this).find('.remote-video-off').css('display', 'none');
		} else {
			$(this).find('.remote-video-on').css('display', 'none');
			$(this).find('.remote-video-off').css('display', 'inline-block');
		}

	}
}, '.btn-remote-video');

$(document).on({
	mouseenter: function() {
		if ($(this).hasClass('on')) {
			$(this).find('.remote-mic-on').css('display', 'none');
			$(this).find('.remote-mic-off').css('display', 'inline-block');
		} else {
			$(this).find('.remote-mic-on').css('display', 'inline-block');
			$(this).find('.remote-mic-off').css('display', 'none');
		}
	},

	mouseleave: function() {
		if ($(this).hasClass('on')) {
			$(this).find('.remote-mic-on').css('display', 'inline-block');
			$(this).find('.remote-mic-off').css('display', 'none');
		} else {
			$(this).find('.remote-mic-on').css('display', 'none');
			$(this).find('.remote-mic-off').css('display', 'inline-block');
		}

	}
}, '.btn-remote-mic');


$('.questions-tap').on('click', function(e) {
	$('.questions-tap').removeClass('on');
	$(this).parents('.ai-questions').find('.question-body');
	$(this).addClass('on');
});

$('.btn-reload-questions').on('click', function(e) {
	e.stopPropagation();
});