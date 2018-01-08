$(document).ready(function() {
	$('#fullpage').fullpage({
    navigation: true,
		navigationPosition: 'right'
  });
});

$(function(){ // this replaces document.ready
	$(window).on("load", function(){
		$('.se-pre-con').fadeOut('slow', function() {
			$(this).remove();
		});
	});
});
