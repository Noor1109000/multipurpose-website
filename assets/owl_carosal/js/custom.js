$(document).ready(function(){



/* .............carousal-1............ */
	
	$(".our-team").owlCarousel({
	
	//autoPlay: 3000, //set autoPlay to 3 seconds
	navigation : true,
	navigationText: ["<span class='glyphicon glyphicon-chevron-left'></span>","<span class=' glyphicon glyphicon-chevron-right'></span>"],
	items : 4,
	itemsDesktop: [1199,4],
	itemDesktopSmall : [979,3]
	
	
	
	
	});
	
	
	
	
	/* ---------carousal-1----------- */
	
	$(".link_1").fadeOut();
	$(".link_1:hover").fadeIn(500)
			
	
$(".target_button").fadeOut();

$(window).scroll(function(){
	
	
	if ($(this).scrollTop()>300) {

		$(".target_button").fadeIn();


	} 

	else{

		$(".target_button").fadeOut();
	}


	$("#targetElement").click(function(){

		$("html,body").animate({scrollTop: 0}, 500).clear();

	});
	
	
	
	/* -----------Our Work------------ */
	
	//$("#web_app").fadeOut();
	
	if($(this).scrollTop()> 900){
	
		$("#web_app").fadeIn().clear();
	}
	
	else{
		$("#web_app").fadeIn();
	}
	
	
	
	
	
	
});



});



	/* -------- target_button---------- */
	



