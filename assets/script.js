$(document).ready(function(){

	// $('#content').waypoint(function(direction){
	// 	if (direction == "down") {
	// 		$('#nav').addClass('sticky');
	// 	} else {
	// 		$('#nav').removeClass('sticky');
	// 	}
	// });

	$(window).scroll(function() {
		var height = $(window).scrollTop();
		var navPoint = 780;
		if (height >= navPoint) {
			$('#nav').addClass('sticky');
		} else {
			$('#nav').removeClass('sticky');
		}
	});

	// $(document).ready(function(){
	
	$(".thumbnail").click(function() {
		$("#modal-container").show();
	});

	$("#exit").click(function() {
		$("#modal-container").hide();
	});


	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
	});


	$(window).resize(function() {
		vertCenter();
	});

	// function vertCenter() {
	// 	var newHeight = $('#me').parent('#about-content-container').height();
	// 	$('#photo').height(newHeight);
	// 	$('#text').height(newHeight);
	// }

});