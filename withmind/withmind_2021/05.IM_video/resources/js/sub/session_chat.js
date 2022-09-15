 $("#chat-field").on("dragenter", function(e){
        e.preventDefault();
        e.stopPropagation();
    }).on("dragover", function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).css("background-color", "#FFD8D8");
    }).on("dragleave", function(e){
        e.preventDefault();
        e.stopPropagation();
        $(this).css("background-color", "#FFF");
    }).on("drop", function(e){
        e.preventDefault();
		alert('업로드 하실 ?')	
		/*
        var files = e.originalEvent.dataTransfer.files;
        if(files != null && files != undefined){
            var tag = "";
            for(i=0; i<files.length; i++){
                var f = files[i];
                fileList.push(f);
                var fileName = f.name;
                var fileSize = f.size / 1024 / 1024;
                fileSize = fileSize < 1 ? fileSize.toFixed(3) : fileSize.toFixed(1);
                tag += 
                        "<div class='fileList'>" +
                            "<span class='fileName'>"+fileName+"</span>" +
                            "<span class='fileSize'>"+fileSize+" MB</span>" +
                            "<span class='clear'></span>" +
                        "</div>";
            }
            $(this).append(tag);
        }
		*/
        $(this).css("background-color", "#FFF");
    });


function setting_chat_signal() {
	session.on('signal:common', (event) => {
		var sendor = JSON.parse(event.from.data.split('%/%')[0]).clientData;
		var msg_element =JSON.parse(event.data);
		
		var conn_id = msg_element.conn_id;
		var mute_target = msg_element.target;
		var mute_status = msg_element.status;
		
		if(my_conn_id != conn_id){
			console.log('msg_element.conn_id -->>' + msg_element.conn_id)
			console.log('msg_element.target -->>' + msg_element.target)
			console.log('msg_element.status -->>' + msg_element.status)
			
			if(mute_target == 'video'){
				console.log('conn_id ->>' + conn_id + ' video mute status ->>' + mute_status)
			}
			
			else if(mute_target == 'audio'){
				console.log('conn_id ->>' + conn_id + 'audio mute status ->>' + mute_status)
			}
		}
		 
	});
	
	if (isInterviewee_local != 'true' || isInterviewee_local != true) {
		session.on('signal:mgr', (event) => {
		var sendor = JSON.parse(event.from.data.split('%/%')[0]).clientData;
		var msg_element = '<div id="msg-box-other" class="box-message msg-other">' +
			'<span class="others-id"> ' + sendor + ' </span>' +
			'<div class="chat-balloon">' +
			'<p class="balloon-contents balloon-left balloon-other">' + event.data + '</p>' +
			'</div>' +
			'</div>';
		if (sendor != nickName)
			$('#chat-field').append(msg_element);
		});
		
	};
	
}
function send_msg() {
	var contents = $('#chat-input').val();
	
	if(contents == null || contents == '' || !contents){
		alert('내용을 입력해 주세요.');
	}
	
	else{
		session.signal({
		sendor: nickName,
		data: contents,  // Any string (optional)
		to: [],                     // Array of Connection objects (optional. Broadcast to everyone if empty)
		type: 'mgr'             // The type of message (optional)
	})
		.then(() => {
			console.log('Message successfully sent');
			var msg_tag = '<div  class="box-message msg-my">' +
				'<div class="chat-balloon">' +
				'<p class="balloon-contents balloon-right balloon-my">' + $('#chat-input').val() + '</p>' +
				'</div>' +
				'</div>';
			$('#chat-field').append(msg_tag);
			$('#chat-input').val('');

		})
		.catch(error => {
			console.error(error);
		});
	}
}



