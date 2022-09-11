// console.log("hello");

$(document).ready(function(){

	// Start Header

	// Start Banner

	//JQ
	$(".carousel").carousel({
		interval:1000
	});


	
	// End Banner



	// End Header

	/*Start Info Appo*/

	$(window).scroll(function(){
		let getscrollpoint = $(this).scrollTop();
		console.log(getscrollpoint);

		if(getscrollpoint >= 220){
			$(".infotexts").addClass("fromlefts");
			$(".infoimgs").addClass("fromrights");
		}else{
			$(".infotexts").removeClass("fromlefts");
			$(".infoimgs").removeClass("fromrights");
		}
	});

	/*End Info Appo*/

	//Start Ads
	$("#videos").click(function(){
		var getmodal = $(this).data("bs-target");
		var getvideosrc = $(this).data("video");
		var videourlwithauto = getvideosrc+"?auotplay=1";

		$(getmodal + " iframe").attr("src",videourlwithauto);
		$(getmodal + " button.btn-close").click(function(){
			$(getmodal+ "iframe").attr("src",getvideosrc);
		});

		$(getmodal).click('hidden.bs.modal',function(){
			$(getmodal+ " iframe").attr("src",getvideosrc);
		});
	});
	//End Ads


	// Start Premises

	$("#lightslider").lightSlider({
		item:4,
		// auto:true,
        loop:true,
        slideMove:1,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
	}).play();



	// End Premises

	// Start Pricing
	$(window).scroll(function(){
		let getscroll = $(this).scrollTop();
		// console.log(getscroll);
		if(getscroll >= 2450){
			$(".cardones").addClass("movelefts");
			$(".cardtwos").addClass("movebottoms");
			$(".cardthrees").addClass("moverights");
		}else{
			$(".cardones").removeClass("movelefts");
			$(".cardtwos").removeClass("movebottoms");
			$(".cardthrees").removeClass("moverights");
		}
	})



	// End Pricing



	//Start Join Us

		$("#accordion").accordion();


	//End Join Us


	$("#getyear").text(new Date().getUTCFullYear());


	//Start Progress

	$(window).scroll(function(){
		var getprogress = $("#progress");
		var getprogressval = $("#progressvalues");
		var getscroltop = $(this).scrollTop();
		console.log(getscroltop);

		
		//scrolltop * 100 / [project all height - vh(current view height)]
	
	//JQery

		// var getscrollheight = $(document).height();
		// console.log(getscrollheight);

		// var getclientheight = $(window).height();
		// console.log(getclientheight);

		// var calcheight = getscrollheight - getclientheight;

		// var getfinalheight =Math.round(getscroltop * 100 / calcheight);
		// console.log(getfinalheight);




	//By JS

		var getscrollheight =document.documentElement.scrollHeight;
		console.log(getscrollheight);
		var getclientheight =document.documentElement.clientHeight;
		console.log(getclientheight);
		var calcheight = getscrollheight - getclientheight;

		var getfinalheight =Math.round(getscroltop * 100 / calcheight);
		console.log(getfinalheight);






		getprogressval.text(`${getfinalheight}%`);

		getprogress.css({
			"background":`conic-gradient(steelblue ${getfinalheight}%,#eee ${getfinalheight}%)`
		})


	})

	//End Progress


});

// https://satoemoblie-mm.herokuapp.com/
