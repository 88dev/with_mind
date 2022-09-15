$(document).ready(function(){

	/* initialize .. */
	get_interview_room_lst();
	
	
	if(!server_msg && server_msg =='notfound'){
		
		alert('존재하지 않는 방 입니다.');
		
	}
		
	$('#btn-room-list-refresh').on('click',function(){
		get_interview_room_lst();
	});
	/*
		$(window).on('unload',function() { 
			alert('Handler for .unload() called.'); 
			});
	*/
	$('#btn-create-new-room').on('click',function(){
		
		$.ajax({
			url		:	'/addRoomSession',
			type	:	'POST',
			dataType	:	"json",
			data	:	{
				'roomname' :	$('#input_roomname').val(),
			},
			success	:	function(response){
				
				if(response.code =='E00')
					already_exist_room(response.message);
				else if(response.code =='E02')
					already_exist_room(response.message);
			},
			error : function(error){
				console.log('room create error' , error);
			},
			complete:function(data, textStatus) {
			  	get_interview_room_lst();
			    $('#input_roomname').val('');
			  }
			
		});
		
	});
	
});


/*

window.onpageshow = function(event) {
if ( event.persisted || (window.performance && window.performance.navigation.type == 2)) {
		// Back Forward Cache로 브라우저가 로딩될 경우 혹은 브라우저 뒤로가기 했을 경우
		alert("히스토리백!!!!");
        }
}
window.onbeforeunload = function (e) {
	return '정말 벗어나시겠어요 ???';
};

*/



function set_reamin_time( target, duration ){
	
	let seconedsReamin = duration; 
	let minute = 0;
	let second = 0;
	
	/* interval 은 변수로 두면 모두 하나의 변수로 처리되니까 주의 */	
	setInterval(function(){
		minute = parseInt(seconedsReamin / 60);
		second = parseInt(seconedsReamin % 60);
		
		if(minute < 10) $('#' + target).css("color" , "red");
			
		minute = minute < 10 ? "0" + minute : minute;
		second = second < 10 ? "0" + second : second;
		
		
		
		document.getElementById(target).innerHTML = minute + ":" + second;
		
		seconedsReamin = seconedsReamin - 1;
		
		//if(seconedsReamin < 0 ) clearInterval(countinterval);
		
	},1000);
}

/* alert :: already exist room! */
function already_exist_room(message){
	
	$('#msg-box').text(message);
	$('#alertModal').modal();
}

/* 개설된 방 목록 받아 테이블 새로 구성 */
function get_interview_room_lst(){
	
	var target_body = $('#table_rooms_seesions #tbody_room_sessions');
	
	$.ajax({
		url			:	"/interview_rooms",
		type		:	"GET",
		dataType	:	"json",
		success		:	function(rooms){
			
			console.log('rooms ->>> ',rooms);
			var roomLst = rooms.roomInfo;
			target_body.empty();
			if(!rooms || roomLst.length == 0){
				var append_value = '<tr>' +
								   '<td></td>' +
								   '<td>개설된 방이 없습니다.</td>' +
								   '<td></td>'
								   '</tr>';
				
				target_body.append(append_value);
			}
			else{
				//console.log(roomLst);
				for( i=0; i<roomLst.length; i++){
					var split_time = roomLst[i].remain.split(":");
					
					var _tmpM = Number(split_time[0]) < 10 ? "0" + Number(split_time[0]) : Number(split_time[0]);
					var _tmpS = Number(split_time[1]) < 10 ? "0" + Number(split_time[1]) : Number(split_time[1]);
		
					var append_value = '<tr>' +
									   '<td>' + (Number(i)+1)+ '</td>' +
									   '<td><a href="javascript:enter_interviewRoom(\''+ roomLst[i].roomname.trim()+  '\')"><span class="session-info">' + roomLst[i].roomname + '</span></a></td>' +
									   '<td>' + roomLst[i].current_members + ' / 6 </td>'+
									   '<td id="slot_remain'+ i +'">'+ _tmpM + ':' + _tmpS + '</td>'+
									   '</tr>';
					target_body.append(append_value);
					
					console.log('times- ....>>>' ,Number(split_time[0])*60 + Number(split_time[1]));
					set_reamin_time('slot_remain'+i, Number(split_time[0])*60 + Number(split_time[1]));
					
					
				}
			}
			
		}
		
	});
}

function enter_interviewRoom(session){
	
	var nick = $('#nickname').val();
	$('#target_session_name').val(session);
	var target_frm = document.getElementById('enter_session_frm');
	target_frm.action = '/device_test';
	
	console.log(session);
	if(nick && nick !=''){
		target_frm.submit();
	}
	else{
		alert('닉네임을 설정 해 주세요.');
	}
}