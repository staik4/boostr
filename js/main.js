$(document).ready(function(){
	// var syntheticEvent = new WheelEvent("syntheticWheel", {"deltaY": 4, "deltaMode": 0});

	$("a[href^='#']").click(function(){
		let top = $(this).attr('href');
        $('html, body').stop().animate({scrollTop: $(top).offset().top}, 1000);
				// console.log('kus');
	});

	$('#join-us').on('click', function(){
		let top = $('#form');
		$('html, body').stop().animate({scrollTop: $(top).offset().top}, 1000);
	});

	$('#presentation').on('click', function(){
		document.location.href = '../presentation/WS_ENG.pdf';
	});

	$('#tel').inputmask("+9(999)-999-9999");

	$("nav ul li").each(function(){
		$(this).click(function(){
			$("nav ul").children().removeClass("active-nav");
			$(this).addClass("active-nav");
		});
	});
	setTimeout(function(){
		console.log("kuku");
		$(".content-layout").css({"width":"100%"});

	},500);

	var touch = $('.burger');
	var menu = $("nav ul");
	// console.log(touch, menu);
	$(touch).on('click', function(e){
		e.preventDefault();
		$('nav').css({"margin-top":"70px"});
		menu.slideToggle();
	});

	$(window).resize(function(){
		var wid = $(window).width();
		if (wid > 960){
		    menu.removeAttr('style');
		    $('nav').removeAttr('style');
		}
	});

	$(".title-gl").each(function(){
		let heightWindow = $(window).height();
		$(this).on('click', function(){
			$(this).parent().children().removeClass('active-gl');
			$(this).addClass('active-gl');
			console.log($(this).data('choice'));
			if($(this).data('choice') == 0){
				$('.wrapper').animate({'margin-top': -heightWindow*$(this).data('choice')}, 1500);
			}else if($(this).data('choice') == 1) {
				$('.wrapper').animate({'margin-top': -heightWindow*$(this).data('choice')}, 1500);
			} else if($(this).data('choice') == 2){
					$('.wrapper').animate({'margin-top': -heightWindow*$(this).data('choice')}, 1500);
			}
		});
	});
	window.onscroll = function() {
		let scrolled = window.pageYOffset;
		console.log(scrolled);
		if(scrolled > 90) {
			$(".public-venture").addClass('movePublick');
			$(".anim_").addClass('movePublickPicture');
			setTimeout(function(){
				$(".public-venture").css({"opacity":"1"})
			},2000)
		}
	}
	// 	if (scrolled > 1300 && scrolled < 1800){
	// 		let top = $("#glob-mark");
	// 		$('html, body').stop().animate({scrollTop: $(top).offset().top});
	// 		$(".global-marketing").mouseover(function(){
	// 			let is_scrolling = false;
	// 			$(this).on('mousewheel', function(e) {
	// 				e.preventDefault();
	// 				console.log(event.deltaY);
	//
	// 			});
	// 		});
	//
	// 	}
	// }



	setTimeout(function(){
		$(".banner").css({"opacity":"1"});

	},3000);

	setTimeout(function() {
		let heightWindow = $(window).height();
		$("#glob-mark").css({"height":heightWindow});
		// console.log(heightWindow);
		let wrapperWidth = $(".visible-part").height()*3;
		$(".wrapper").css({"height": wrapperWidth});
		// let ulWidth = wrapperWidth/3;
		let hhh = $(".titles-gls").height();
		$(".ul-width").css({"height": heightWindow});
		$(".ul-width ul").css({"height": hhh});
		$(".list-img").css({"height":heightWindow});
		$(".img-circ").css({"height":heightWindow});
		$(".img-part").css({"height":hhh});
		//$(".titles-gls").css({"height":ulWidth})
	}, 500);



	let owl = $('.owl-carousel');
	owl.owlCarousel({
	    loop:true,
	    margin:13,
	    nav:false,
			// autoplay: true,
			// smartSpeed: 1000,
			responsive:{
				0:{
						items:1,
				},
				600:{
						items:1,
				},
				1000:{
						items:3,
				}
		}
	});

	let kDeltaX = 0;
	let jDeltaX = 0;
	let kDeltaY = 0;
	let jDeltaY = 0;
	owl.on('mousewheel', '.owl-stage', function (e) {
		e.preventDefault();
		// console.log(e.deltaY, e.deltaX, e.deltaFactor);
	    if (e.deltaX < 0 ) {
				kDeltaX+=1;
				if (kDeltaX >= 20){
					owl.trigger('prev.owl');
					kDeltaX = 0
					// 	console.log("k", kDeltaX);
				} else {
					$.noop;
				}

	    } else if(e.deltaX > 0) {
				// console.log(e.deltaX, e.deltaY);
				jDeltaX+=1;
				console.log(jDeltaX);
				if (jDeltaX >= 20){
					owl.trigger('next.owl');
					jDeltaX = 0;
					jDeltaY = 0;
					// 	console.log("j",jDeltaX);
				} else {
					$.noop;
				}

			} else if (e.deltaY < 0){
				kDeltaY +=1;
				if (kDeltaY >= 5){
					owl.trigger('prev.owl');
					kDeltaY = 0;
					// 	console.log("k", kDeltaX);
				} else {
					$.noop;
				}
			} else  if(e.deltaY > 0) {
				jDeltaY +=1;
				console.log(jDeltaX);
				if (jDeltaY >= 5){
					owl.trigger('next.owl');
					jDeltaY = 0;
					// 	console.log("j",jDeltaX);
				} else {
					$.noop;
				}
			}
			// 	if (e.deltaY < 0) {
			// 		kDeltaY+=1;
			// 		if (kDeltaY >= 4){
			// 			owl.trigger('prev.owl');
			// 			kDeltaY = 0
			// 			// console.log("k", kDeltaY);
			// 		} else {
			// 			$.noop;
			// 		}
			//
		  //   } else {
			// 		jDeltaY+=1;
			// 		if (jDeltaY >= 4){
			// 			owl.trigger('next.owl');
			// 			jDeltaY = 0;
			// 			// console.log("j",jDeltaY);
			// 		} else {
			// 			$.noop;
			// 		}
	    // }

	});

	$('.arrow-team').mouseover(function(){
		console.log('arrow');
		let pos = $(this).data('arrow');
		let url = $(this).children('img').attr('src').slice(0,-4);
		console.log(url);
		$(this).children('img').attr('src',url + "-hover.svg")
		$(this).click(function(){
			if (pos == "top") {
				$('html, body').stop().animate({scrollTop: $("#industry-focus").offset().top}, 1000);
			} else {
				$('html, body').stop().animate({scrollTop: $("#form").offset().top}, 1000);
			}

		})
	});

	$('.arrow-team').mouseout(function(){
		console.log('arrow');
		let url = $(this).children('img').attr('src').slice(0,-10);
		$(this).children('img').attr('src',url + ".svg")
	});

});
