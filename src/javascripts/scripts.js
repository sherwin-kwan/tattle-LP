import Typed from 'typed.js';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Granim from 'granim'
AOS.init();

$(document).ready(function () {
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

	//TYPED.js
	var typed = new Typed('#js-typed', {
		strings: ["you've got your passion.^1000\n you've got your city.^300\n^300\n^300\n now, ^500 let's share it\n with the world^500."],
		typeSpeed: 30,
		backSpeed: 40,
	});

	//GRANIM.js
	var granimInstance = new Granim({
		element: '#granim-canvas',
		name: 'granim',
		opacity: [1, 1],
		states: {
			"default-state": {
				gradients: [
					['#834D9B', '#D04ED6'],
					['#1CD8D2', '#93EDC7']
				]
			}
		}
	});


});