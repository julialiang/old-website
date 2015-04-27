$(document).ready(function(){

	$('#content').waypoint(function(direction){
		if (direction == "down") {
			$('#nav').addClass('sticky');
		} else {
			$('#nav').removeClass('sticky');
		}
	});

	$(window).scroll(function() {
		var height = $(window).scrollTop();
		var el;

		if (height > 0 && height < 641) {
			$('#home-nav').css("color", "white");
			$('#about-nav').css("color", "#CBD8D7");
			$('#portfolio-nav').css("color", "#CBD8D7");
			$('#contact-nav').css("color", "#CBD8D7");

		} else if (height > 641 && height < 1191) {
			$('#home-nav').css("color", "#CBD8D7");
			$('#about-nav').css("color", "white");
			$('#portfolio-nav').css("color", "#CBD8D7");
			$('#contact-nav').css("color", "#CBD8D7");

		} else if (height > 1191 && height < 1784) {
			$('#home-nav').css("color", "#CBD8D7");
			$('#about-nav').css("color", "#CBD8D7");
			$('#portfolio-nav').css("color", "white");
			$('#contact-nav').css("color", "#CBD8D7");
		} else {
			$('#home-nav').css("color", "#CBD8D7");
			$('#about-nav').css("color", "#CBD8D7");
			$('#portfolio-nav').css("color", "#CBD8D7");
			$('#contact-nav').css("color", "white");
		}
	});

	// $(window).scroll(function() {
	// 	var height = $(window).scrollTop();
	// 	var navPoint = 646;
	// 	if (height >= navPoint) {
	// 		$('#nav').addClass('sticky');
	// 	} else {
	// 		$('#nav').removeClass('sticky');
	// 	}
	// });

	// $(document).ready(function(){
	
	$(".thumbnail").click(function() {
		$("#modal-container").show();
		$("#carousel-container").show();
		$("#art-carousel-container").hide();

	});


	$(".art-thumbnail").click(function() {
		$("#modal-container").show();
		$("#carousel-container").hide();
		$("#art-carousel-container").show();

	});


	$(".exit").click(function() {
		$("#modal-container").hide();
	});


	$("#modal-overlay").click(function() {
		$("#modal-container").hide();
	});

	//Implement the "slide to left" when the user clicks on #carousel-next here
    $('#carousel-next').click(function() {
        var cur = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if (cur === -2800) {
            return false;
        } else {
            $('#carousel').css("margin-left", cur - 560);
        }
    });
  //Implement the "slide to right" when the user clicks on #carousel-prev here
    $('#carousel-prev').click(function() {
        var cur = parseInt($('#carousel').css('margin-left').replace("px", ""));
        if (cur === 0) {
            return false;
        } else {
            $('#carousel').css("margin-left", cur + 560);
        }
    });

    $('#art-carousel-next').click(function() {
        var cur = parseInt($('#art-carousel').css('margin-left').replace("px", ""));
        if (cur === -2800) {
            return false;
        } else {
            $('#art-carousel').css("margin-left", cur - 560);
        }
    });
  //Implement the "slide to right" when the user clicks on #carousel-prev here
    $('#art-carousel-prev').click(function() {
        var cur = parseInt($('#art-carousel').css('margin-left').replace("px", ""));
        if (cur === 0) {
            return false;
        } else {
            $('#art-carousel').css("margin-left", cur + 560);
        }
    });

	// $(window).resize(function() {
	// 	vertCenter();
	// });

	// function vertCenter() {
	// 	var newHeight = $('#me').parent('#about-content-container').height();
	// 	$('#photo').height(newHeight);
	// 	$('#text').height(newHeight);
	// }

	$('#home-nav').click(function() {
		$(window).scrollTop(0);
	});

	$('#about-nav').click(function() {
		$(window).scrollTop(641);
	});

	$('#portfolio-nav').click(function() {
		$(window).scrollTop(1243);
	});

	$('#contact-nav').click(function() {
		$(window).scrollTop(1785);
	});

	$('#fine-art-nav').click(function() {
		$(this).parent().css("background-color", "white");
		$(this).parent().css("color", "#DDC144");
		$("#design-nav").parent().css("background-color", "transparent");
		$("#design-nav").parent().css("color", "white");
		// var el = document.getElementById("fine-art-nav").parent();
		// el.style.backgroundColor = "white";
		//el.style.color = "#DDC144"
		// $(this).css("background-color", "white");
		// $(this).css("color", "#DDC144");
		// &(this).style.background-color = white;
		$('#design').hide();
		$('#fine-art').show();

	});

	$('#design-nav').click(function() {
		$(this).parent().css("background-color", "white");
		$(this).parent().css("color", "#DDC144");
		$("#fine-art-nav").parent().css("background-color", "transparent");
		$("#fine-art-nav").parent().css("color", "white");
		// var el = document.getElementById("design-nav");
		// el.style.backgroundColor = "white";
		// el.style.color = "#DDC144"
		$('#fine-art').hide();
		$('#design').show();
	});

});