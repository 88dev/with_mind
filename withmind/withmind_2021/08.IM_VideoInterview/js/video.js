
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