import '../css/style.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
	duration: 1000,
	offset: 100,
})

// Scroll to top functionality
const scrollTopButton = document.getElementById(
	'scroll-top',
) as HTMLButtonElement

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
	if (window.scrollY > 300) {
		scrollTopButton.classList.add('show')
	} else {
		scrollTopButton.classList.remove('show')
	}
})

// Scroll to top when button is clicked
scrollTopButton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})
