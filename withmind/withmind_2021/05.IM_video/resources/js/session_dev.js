$(document).ready(function() {
	let my_conn_id;

	/* 전역으로 사용될 OpenVidu , Session  */
	let session;
	let OV;
	
	
	let screensharing = false;
	let subscriber;


	/* 일부 태그들 기초 작업 */
	initialize_element();
	
	/* 팝오버 동작 설정 */
	setting_popover()
	
	//setting_session();
	

	setting_chat_signal();


	document.getElementById('chat-input').addEventListener('keydown',function(event){
		if(event.keyCode ==13){
        event.preventDefault();
            send_msg();
        }
    });

});


function initialize_element(){
	
	/* 최초알림창 숨기기 */
	$('#session-start-alert').hide();
	

	
	/* 좌측 사이드메뉴 위치 조정 */
	var h_root_element = document.getElementById("mgr-func-cover").offsetHeight;
	var gap_height = document.getElementById("left-side-menu").offsetHeight;
	var target_side_menu = $('#left-side-menu');
	
	target_side_menu.css('top', (h_root_element - gap_height)/2);
	
	/* 팝오버 숨기기 */
	$('#wrapper-popover').hide();
	console.log('###@#@#@##@#@#@ offsetoffsetoffsetoffset ->', (h_root_element - gap_height)/2);
	$('#wrapper-popover').offset({ top: (h_root_element - gap_height)/2 + 50});
	
	
	/* 좌측 사이드메뉴 일부 태그 css 강제 적용 */
	var w_mother = document.getElementById("left-side-menu").offsetWidth;
	document.getElementById("btn-out-cover").style.width = w_mother + 'px';
	
	/* 우측 사이드 메뉴 초기 설정 */
	$('#queslist-tap-ai-recomd').hide();	
	document.onkeydown = noEvent;
}


function noEvent(){
   if (event.keyCode == 116) {
	    event.keyCode= 2;
        return false;
    }

    else if(event.ctrlKey && (event.keyCode==78 || event.keyCode == 82)){
        return false;
    }
}

function setting_session(){
	
OV = new OpenVidu();
OV_screen = new OpenVidu();



/*
OV.setAdvancedConfiguration({
	publisherSpeakingEventsOptions: {
		interval: 100,   // Frequency of the polling of audio streams in ms (default 100)
		threshold: -65  // Threshold volume in dB (default -50)
	}
});
*/

// --- 2) Init a session ---
session = OV.initSession();
session_screen = OV_screen.initSession();
// --- 3) Specify the actions when events take place in the session ---

// On every new Stream received...
session.on('streamCreated', (event) => {
	console.log('')
	// Subscribe to the Stream to receive it
	// HTML video will be appended to element with 'video-container' id
	
	
	let data = JSON.parse(event.stream.connection.data.split('%/%')[0])
	let clientData = data.clientData;
	console.log('새로운 유저가 들어왔어요! ->>>' , clientData)
	console.log('새로운 유저가 들어왔어요! ->>>' , clientData.endsWith("_SCREEN"))
	// When the HTML video has been appended to DOM...
	if (!clientData.endsWith("_SCREEN") || clientData.endsWith("_SCREEN") == false || clientData.endsWith("_SCREEN") == 'false') {
		subscriber = session.subscribe(event.stream, 'video-container');
		subscriber.on('videoElementCreated', (event) => {
			// Add a new HTML element for the user's name and nickname over its video
			console.log('subscriber.stream.connection - >>>' , subscriber.stream.connection);
			appendUserData(event.element, subscriber.stream.connection);
		});
	}
	
});
session_screen.on('streamCreated', (event) => {
	console.log('1299999999',event.stream.connection);
	let data = JSON.parse(event.stream.connection.data.split('%/%')[0]);
	console.log('1299999999' , data)
	let clientData = data.clientData;
	console.log('1299999999' , clientData)
	// Subscribe to the Stream to receive it
	// HTML video will be appended to element with 'video-container' id
	console.log('공유된 스크린을 붙이겠어요!', clientData);
	console.log('공유된 스크린을 붙이겠어요!', clientData.endsWith("_SCREEN"));
	if (clientData.endsWith("_SCREEN") && clientData == nickName + "_SCREEN"){
		let subscriber_screen = session_screen.subscribe(event.stream, 'container-screenshare');

	// When the HTML video has been appended to DOM...
	subscriber_screen.on('videoElementCreated', (event) => {
		// Add a new HTML element for the user's name and nickname over its video
		appendScreenShare(event.element, subscriber_screen.stream.connection);
	});
	}
	
});

// On every Stream destroyed...
session.on('streamDestroyed', (event) => {
	// Delete the HTML element with the user's name and nickname
	removeUserData(event.stream.connection);
});

// On every asynchronous exception...
session.on('exception', (exception) => {
	console.warn(exception);
});


// --- 4) Connect to the session passing the retrieved token and some more data from
//        the client (in this case a JSON with the nickname chosen by the user) ---

session.connect(token, { clientData: nickName })
	.then(() => {
		console.log('session info ->>>. !!!',session)
		
		my_conn_id = session.connection.connectionId;
		console.log(' my_conn_id - >>>' , my_conn_id);
		
		// --- 5) Set page layout for active call ---

		$('#session-title').text(sessionName);
		$('#join').hide();
		$('#session').show();
		// Here we check somehow if the user has 'PUBLISHER' role before
		// trying to publish its stream. Even if someone modified the client's code and
		// published the stream, it wouldn't work if the token sent in Session.connect
		// method is not recognized as 'PUBLIHSER' role by OpenVidu Server
		if (isPublisher()) {
			/* bucks ::  audio/video source 부분은 navigator 의 mediaDevices.enumerateDevices() 
			   를 이용해서 할당 가능한 입/출력 장치목록을 받아와서 deviceId 를 넣어주면 된다. 
			   해당 session 페이지 이전에 wowza publish 초기 페이지를 참조해서 사전에 입력 디바이스를 테스트하는 페이지를 작성하면됨. 
			*/
			
			//2e8abd98aba3d71806a84ec9ec6188c5a8674c522a16dfd0a36fb5ab243258b3
			// --- 6) Get your own camera stream ---
			var publisher = OV.initPublisher('video-container', {
				audioSource: audioSource_value, // The source of audio. If undefined default microphone
				videoSource: videoSource_value, // The source of video. If undefined default webcam
				publishAudio: true,  	// Whether you want to start publishing with your audio unmuted or not
				publishVideo: true,  	// Whether you want to start publishing with your video enabled or not
				resolution: '1280x480',  // The resolution of your video
				frameRate: 30,			// The frame rate of your video
				insertMode: 'APPEND',	// How the video is inserted in the target element 'video-container'
				mirror: false       	// Whether to mirror your local video or not
			});
			console.log('1644444 publisher ->>', publisher);
			// --- 7) Specify the actions when events take place in our publisher ---

			// When our HTML video has been added to DOM...
			
			publisher.on('videoElementCreated', (event) => {
				// Init the main video with ours and append our data
				var userData = {
					nickName: nickName,
					userName: userName
				};


				//initMainVideo(event.element, userData);
				appendUserData(event.element, userData);
				$(event.element).prop('muted', true); // Mute local video
			});
			
			
				$('.controll-mic').on('click', function(){
					$(this).toggleClass('on');
					
					if(!$(this).hasClass('on')){
						send_audio_mute(true)
						$('#mic-on').css('display','none');
						$('#mic-off').css('display','inline-block');
					}	
					else{
						send_audio_mute(false)
						$('#mic-off').css('display','none');
						$('#mic-on').css('display','inline-block');
					}	
				})
			
				
				$('.controll-video').on('click', function(){
					$(this).toggleClass('on');
					
					if(!$(this).hasClass('on')){
						$('#video-on').css('display','none');
						$('#video-off').css('display','inline-block');
						console.log('session info222 ->>>. !!!',session)
						send_video_mute(true);
						publisher.publishVideo(false);
					}	
					else{
						$('#video-off').css('display','none');
						$('#video-on').css('display','inline-block');
						send_video_mute(false);
						publisher.publishVideo(true);
					}
					
						
				})

			//var publisher_screen = OV.initPublisherAsync("screenshare", { videoSource: "screen" });
			$('#btnScreenShare').on('click', function() {
				publishScreenShare();
			});
			
			
			/* 화면 송출 시작 */
			session.publish(publisher);
			
			getToken(sessionID).then((tokenScreen) => {
					// Create a token for screenshare
					session_screen.connect(tokenScreen, { clientData: nickName + "_SCREEN" }).then(() => {
						//document.getElementById('buttonScreenShare').style.visibility = 'visible';
						console.log("Session screen connected");
					}).catch((error => {
						console.warn('There was an error connecting to the session for screenshare:', error.code, error.message);
					}));;
				})
				
				
		} else {
			console.warn('You don\'t have permissions to publish');
			initMainVideoThumbnail(); // Show SUBSCRIBER message in main video
		}
	})
	.catch(error => {
		console.warn('There was an error connecting to the session:', error.code, error.message);
	});
}



function send_video_mute(status) {
	
	var send_obj = new Object();
 	send_obj.conn_id = my_conn_id;
 	send_obj.target = 'video';
 	send_obj.status = status;

	session.signal({
		sendor: nickName,
		data:  JSON.stringify(send_obj),  // Any string (optional)
		to: [],                     // Array of Connection objects (optional. Broadcast to everyone if empty)
		type: 'common'             // The type of message (optional)
	})
		.then(() => {
			console.log('Message successfully sent');

		})
		.catch(error => {
			console.error(error);
		});
}
function send_audio_mute(status) {
	var send_obj = new Object();
 	send_obj.conn_id = my_conn_id;
 	send_obj.target = 'audio';
 	send_obj.status = status;

	session.signal({
		sendor: nickName,
		data: JSON.stringify(send_obj),  // Any string (optional)
		to: [],                     // Array of Connection objects (optional. Broadcast to everyone if empty)
		type: 'common'             // The type of message (optional)
	})
		.then(() => {
			console.log('Message successfully sent');

		})
		.catch(error => {
			console.error(error);
		});
}
function confirm_leaveSession() {
	
	$('#msg-box').text('면접실에서 퇴장하시겠습니까?');
	$('#alertModal').modal();
}

function leaveSession() {
	// --- 9) Leave the session by calling 'disconnect' method over the Session object ---
	session.disconnect();
	var leaveFrm = document.frm_leaveSession;
	leaveFrm.submit();
}

function appendScreenShare(videoElement, connection){
	let userData;
	let nodeId;
	if (typeof connection === "string") {
		userData = connection;
		nodeId = connection;
	} else {
		userData = JSON.parse(connection.data).clientData;
		nodeId = connection.connectionId;
	}
	let dataNode = document.createElement('div');
	dataNode.className = "data-node";
	dataNode.id = "data-" + nodeId;
	dataNode.innerHTML = "<p>" + userData + "</p>";
	console.log('스크린 부모모드 ->>>',videoElement.parentNode)
	videoElement.parentNode.insertBefore(dataNode, videoElement.nextSibling);
	//addClickListener(videoElement, userData);
}

function appendUserData(videoElement, connection) {
	
	var clientData;
	var serverData;
	var interViewee;
	var nodeId;
	
	console.log('connection !!!!!! 374 >>>' , connection);
	
	if (connection.nickName) { // Appending local video data
		clientData = connection.nickName;
		serverData = connection.userName;
		interViewee = isInterviewee_local;
		nodeId = 'main-videodata';
	} else{
		clientData = JSON.parse(connection.data.split('%/%')[0]).clientData;
		serverData = JSON.parse(connection.data.split('%/%')[1]).serverData;
		interViewee = JSON.parse(connection.data.split('%/%')[3]).interViewee;
		nodeId = connection.connectionId;
	}

	console.log('30222 Usr connection  ---> ', connection);
	console.log('connected usr id ---> ' + clientData);

	var func_node = document.createElement('div'); 
	func_node.className = "func-node";
	func_node.id = "func-" + nodeId;
	func_node.innerHTML = '<button type="button" class="btn-remote-video on btn btn-default">' +
							'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="remote-video-on bi bi-camera-video-fill" viewBox="0 0 16 16">'+
							  '<path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"/>'+
							'</svg>'+
							
							'<svg style="display:none;" xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="remote-video-off bi bi-camera-video-off-fill" viewBox="0 0 16 16">'+
							  '<path fill-rule="evenodd" d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l6.69 9.365zm-10.114-9A2.001 2.001 0 0 0 0 5v6a2 2 0 0 0 2 2h5.728L.847 3.366zm9.746 11.925-10-14 .814-.58 10 14-.814.58z"/>'+
							'</svg>'+
						  '</button>';
				
	func_node.innerHTML += '<button type="button" class="btn-remote-mic on btn btn-default">' +
							'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="remote-mic-on bi bi-mic-fill" viewBox="0 0 16 16">'+
							  '<path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z"/>'+
							  '  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z"/>'+
							'</svg>'+
							
							'<svg style="display:none;"  xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="remote-mic-off bi bi-mic-mute-fill" viewBox="0 0 16 16">'+
							  '<path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0 0 12 8V7a.5.5 0 0 1 1 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3z"/>'+
							  '<path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607zm-7.84-9.253 12 12 .708-.708-12-12-.708.708z"/>'+
							'</svg>'+
						  '</button>';
	
	var dataNode = document.createElement('div');
	dataNode.className = "data-node";
	dataNode.id = "data-" + nodeId;
	dataNode.innerHTML = '<p class="nickName">' + clientData + '</p><p class="userName">' + serverData + '</p>';

	console.log('비디오가 붙을 타겟 객체 ->>', videoElement.parentNode);

	// 면접자 일때
	if (interViewee == true || interViewee == 'true') {
		// var target_node = $('#video-container_2');
		document.getElementById('video-container').insertBefore(dataNode, videoElement.nextSibling);
		//document.getElementById('video-container').insertBefore(func_node, videoElement.nextSibling);
	
	}
	
	// 면접관 일때
	else {
		
		
		var list_elemnet = $('.participnat-info').clone();
		list_elemnet.find('.participant-name').text(nickName);
		list_elemnet.appendTo('.participants-list');
		
		
		var video_cover = document.createElement('div');

		video_cover.id += videoElement.id;
		video_cover.className += 'video_cover';
		video_cover.className += ' col-xs-2';
		video_cover.appendChild(videoElement)
		video_cover.appendChild(dataNode)
		video_cover.appendChild(func_node)

		document.getElementById('video-container_2').appendChild(video_cover);
	}

}

function removeUserData(connection) {
	console.log('userData를 지울게요!');
	var userNameRemoved = $("#data-" + connection.connectionId);
	if ($(userNameRemoved).find('p.userName').html() === $('#main-video p.userName').html()) {
		cleanMainVideo(); // The participant focused in the main video has left
	}
	$("#data-" + connection.connectionId).parent().remove();
}

function removeAllUserData() {
	$(".data-node").remove();
}

function cleanMainVideo() {
	$('#main-video video').get(0).srcObject = null;
	$('#main-video p').each(function() {
		$(this).html('');
	});
}

function addClickListener(videoElement, clientData, serverData) {
	videoElement.addEventListener('click', function() {
		var mainVideo = $('#main-video video').get(0);
		if (mainVideo.srcObject !== videoElement.srcObject) {
			$('#main-video').fadeOut("fast", () => {
				$('#main-video p.nickName').html(clientData);
				$('#main-video p.userName').html(serverData);
				mainVideo.srcObject = videoElement.srcObject;
				$('#main-video').fadeIn("fast");
			});
		}
	});
}

function initMainVideo(videoElement, userData) {
	console.log('videoElement.srcObject -->>>', videoElement.srcObject);
	$('#main-video video').get(0).srcObject = videoElement.srcObject;
	$('#main-video p.nickName').html(userData.nickName);
	$('#main-video p.userName').html(userData.userName);
	$('#main-video video').prop('muted', true);
}

function initMainVideoThumbnail() {
	$('#main-video video').css("background", "url('/resources/images/subscriber-msg.jpg') round");
}

function isPublisher() {
	if (isMgr == 'true' || isMgr == true)
		return true;
}

function getContents() {
	var contents = new Date() + '<br>'
		+ '면접순서 : 1번 면접(대기)<br>'
		+ '면접일정 : 2021-08-23 09:00<br>'
		+ '이름 : 홍길동<br>'
		+ '이메일 : aaa@withmind.net<br>'
		+ '면접코드 : 123456<br>'
		+ '채용명 : (주)이노비즈 서비스 기획 채용 면접<br>'
		+ '응시분야 : 사무/기획<br>';

	return contents;
}

function publishScreenShare() {
	let publisher_screen = OV_screen.initPublisher("container-screenshare", {
		 videoSource: "screen", // The source of video. If undefined default webcam
		 publishAudio: false,  	// Whether you want to start publishing with your audio unmuted or not
		 //publishVideo: true,  	// Whether you want to start publishing with your video enabled or not
		 //resolution: '640x480',  // The resolution of your video
		// frameRate: 30,			// The frame rate of your video
		// insertMode: 'APPEND',	// How the video is inserted in the target element 'video-container'
		// mirror: false       	// Whether to mirror your local video or not
	 });
	publisher_screen.once('accessAllowed', (event) => {
		console.log("screen accessAllowed");
		//document.getElementById('buttonScreenShare').style.visibility = 'hidden';
		screensharing = true;
		publisher_screen.stream.getMediaStream().getVideoTracks()[0].addEventListener('ended', () => {
			console.log('User pressed the "Stop sharing" button');
			session_screen.unpublish(session_screen.connection);
			removeScreenShareLocalData(userName + "_SCREEN");
			//document.getElementById('buttonScreenShare').style.visibility = 'visible';
			screensharing = false;
		});
		session_screen.publish(publisher_screen);

	});

	publisher.on('videoElementCreated', function (event) {
		console.warn('videoElementCreated :: ' + userName +' :: ->> ', event);
		appendScreenShare(event.element, userName + "_SCREEN");
		event.element['muted'] = true;
	});

	publisher.once('accessDenied', (event) => {
		console.warn('ScreenShare: Access Denied', event);
	});
	console.log("Screen shared");
}

function removeScreenShareLocalData(clienData) {
	console.log("Removing Screen Share..." + clienData)
	let dataNode = document.getElementById("data-" + clienData);
	videoElement = document.getElementById("data-" + clienData).previousSibling;
	parentNode = dataNode.parentNode;
	parentNode.removeChild(videoElement);
	parentNode.removeChild(dataNode);
}

