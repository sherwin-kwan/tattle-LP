import Typed from 'typed.js';
$(document).ready(function () {
	console.log(Typed)
	console.log("jquery loaded!!!");

  $("#js-signUpForm").click(() => {
    console.log('clicked!')
    $("#js-formContent").slideToggle();
	})

	$("#c-hero__learnMore").click(function () {
		$('html,body').animate({
			scrollTop: $(".valuePropSection__header").offset().top
		},
			'slow');
	});

	var typed = new Typed('#js-typed', {
		strings: ["you've got your passion.^1000\n you've got your city.^300\n^300\n^300\n now share it with the world."],
		typeSpeed: 30,
		backSpeed: 40,
		// loop: true
	});

});