/* 팝오버 JS */
function setting_popover(){
	$('.btn-left-func:not(#btnScreenShare)').on('click', function() {
		$('#wrapper-popover').addClass('on')
		$('#wrapper-popover').show();
		setTimeout(function(){
			$('#wrapper-popover').removeClass('on')
		}, 400);
	});
	
	$('#btn-close-popover').on('click',function(){
		$('#wrapper-popover').addClass('off')
		setTimeout(function(){
			$('#wrapper-popover').hide()
			$('#wrapper-popover').removeClass('off')
		}, 400);
	});


	$(document).on('click', '#btn-close-popover', function() {
		$('.btn-left-func').popover('hide');
	})
}