$(document).ready(function () {
  console.log("jquery loaded!!!");

  $("#js-signUpForm").click(() => {
    console.log('clicked!')
    $("#js-formContent").slideToggle();
	})

	// var element_position = $('#js-signUpForm').offset().top;
	// $(window).on('scroll', function () {
	// 	var y_scroll_pos = window.pageYOffset;
	// 	var scroll_pos_test = element_position;
	// 	console.log(scroll_pos_test);
	// 	// console.log(y_scroll_pos);
	// 	if (y_scroll_pos > scroll_pos_test) {
	// 		//do stuff
	// 	}
	// });

	$.fn.isInViewport = function () {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$(function () {
		// var eTop = $('signUpForm').offset().top; //get the offset top of the element
		// log(eTop - $(window).scrollTop()); //position of the ele w.r.t window

		$(window).scroll(function () { //when window is scrolled
			// log(eTop - $(window).scrollTop());
			// eTop <= $(window).scrollTop() && shrink();
			console.log($(this).isInViewport())
		});
	});

});