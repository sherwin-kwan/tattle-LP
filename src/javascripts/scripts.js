import Typed from 'typed.js';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Granim from 'granim'
import rallax from 'rallax.js'
import HeroImage from '../images/hero2.jpg'
AOS.init();

$(document).ready(function () {

	//Create hero image with javascript
	var HeroImageNode = document.getElementById('heroImage')
	HeroImageNode.style.backgroundImage = `url(${HeroImage})`

	//* TYPED.js
	var typed = new Typed('#js-typed', {
		strings: ["you've got your passion.^1000\n you've got your city.^300\n^300\n^300\n now, ^500 let's share it with the world^500."],
		typeSpeed: 30,
		backSpeed: 40,
	});

	//* GRANIM.js
	var granimInstance = new Granim({
		element: '#granim-canvas',
		name: 'granim',
		opacity: [1, 1],
		states: {
			"default-state": {
				gradients: [
					['#00FFC6', '#1B67DA'],
					['#002D77', '#4E72C6']
				]
			}
		}
	});

	//* RALLAX.js
	const heroImage = document.querySelector('.c-hero')
	const parallax = rallax(heroImage, {
		speed: 0.1
	})
});