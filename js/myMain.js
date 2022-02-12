const slides = document.querySelectorAll('.slide');
const auto = false;
const interVal = 5000;
let slideInterval;

const nextSlide = () => {
	// get current class
	const current = document.querySelector('.current');
	// remove current class
	current.classList.remove('current');
	// get slide of current's sibling
	if(current.nextElementSibling) {
		// add current to next sibling
		current.nextElementSibling.classList.add('current');
	} else {
		// add current to slide 1
		slides[0].classList.add('current');
	}
	
	setTimeout(() => current.classList.remove('current'))
}

setInterval(function() {
	nextSlide();
}, interVal)