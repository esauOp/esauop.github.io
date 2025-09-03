// Carousel Animation
class TextCarousel {
	constructor() {
		this.items = document.querySelectorAll('.carousel-item');
		this.currentIndex = 0;
		this.interval = null;
		this.init();
	}

	init() {
		if (this.items.length === 0) return;
		
		// Show first item
		this.showItem(0);
		
		// Start auto-rotation
		this.startAutoRotation();
		
		// Add hover pause functionality
		this.addHoverPause();
	}

	showItem(index) {
		// Remove active class from all items
		this.items.forEach(item => {
			item.classList.remove('active');
		});
		
		// Add active class to current item
		this.items[index].classList.add('active');
	}

	nextItem() {
		this.currentIndex = (this.currentIndex + 1) % this.items.length;
		this.showItem(this.currentIndex);
	}

	startAutoRotation() {
		this.interval = setInterval(() => {
			this.nextItem();
		}, 3000); // Change every 3 seconds
	}

	stopAutoRotation() {
		if (this.interval) {
			clearInterval(this.interval);
			this.interval = null;
		}
	}

	addHoverPause() {
		const carouselContainer = document.querySelector('.carousel-container');
		
		if (carouselContainer) {
			carouselContainer.addEventListener('mouseenter', () => {
				this.stopAutoRotation();
			});
			
			carouselContainer.addEventListener('mouseleave', () => {
				this.startAutoRotation();
			});
		}
	}
}

// Smooth scroll for social links
function initSmoothScroll() {
	const socialLinks = document.querySelectorAll('.social-link');
	
	socialLinks.forEach(link => {
		link.addEventListener('click', (e) => {
			// Add a subtle click effect
			link.style.transform = 'scale(0.95)';
			setTimeout(() => {
				link.style.transform = '';
			}, 150);
		});
	});
}

// Add subtle animations on page load
function initPageAnimations() {
	const elements = document.querySelectorAll('.social-link, .skill-item, .title, .carousel-container');
	
	elements.forEach((element, index) => {
		element.style.opacity = '0';
		element.style.transform = 'translateY(20px)';
		
		setTimeout(() => {
			element.style.transition = 'all 0.6s ease';
			element.style.opacity = '1';
			element.style.transform = 'translateY(0)';
		}, index * 100);
	});
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	// Initialize carousel
	new TextCarousel();
	
	// Initialize smooth scroll
	initSmoothScroll();
	
	// Initialize page animations
	initPageAnimations();
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
	const carousel = document.querySelector('.carousel-container');
	
	if (carousel && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
		e.preventDefault();
		
		// Pause auto-rotation temporarily
		if (window.textCarousel) {
			window.textCarousel.stopAutoRotation();
			
			// Restart after 5 seconds of inactivity
			setTimeout(() => {
				window.textCarousel.startAutoRotation();
			}, 5000);
		}
	}
});

// Add touch support for mobile devices
function initTouchSupport() {
	let touchStartY = 0;
	let touchEndY = 0;
	
	document.addEventListener('touchstart', (e) => {
		touchStartY = e.changedTouches[0].screenY;
	});
	
	document.addEventListener('touchend', (e) => {
		touchEndY = e.changedTouches[0].screenY;
		handleSwipe();
	});
	
	function handleSwipe() {
		const swipeThreshold = 50;
		const diff = touchStartY - touchEndY;
		
		if (Math.abs(diff) > swipeThreshold) {
			// Swipe detected - could be used for carousel navigation
			// For now, just add a subtle visual feedback
			const carousel = document.querySelector('.carousel-container');
			if (carousel) {
				carousel.style.transform = 'scale(0.98)';
				setTimeout(() => {
					carousel.style.transform = '';
				}, 200);
			}
		}
	}
}

// Initialize touch support
if ('ontouchstart' in window) {
	initTouchSupport();
}
