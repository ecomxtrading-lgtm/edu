
/*----------theme js-----------------*/


(function ($) {
  "use strict";

	// hero slider all js
	const sliderswiper = new Swiper('.consalt-slider-active', {
		// Optional parameters
		speed:3000,
		loop: true,
		slidesPerView: 1,
		autoplay: false,
		effect:'fade',
		breakpoints: {
			'1600': {
				slidesPerView:1,
			},
			'1400': {
				slidesPerView:1,
			},
			'1200': {
				slidesPerView:1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},

			a11y: false,
		},

		// Navigation arrows
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },

    pagination: {
			el: ".slider-dots",
			clickable:true,
		},

	});


  // home-1 testi active js
	var slider = new Swiper('.slider-active', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

    // Navigation arrows
    navigation: {
      nextEl: ".testi-next",
      prevEl: ".testi-prev",
    },
	pagination: {
		el: ".slider-dotss",
		clickable:true,
	},
	});

    // home-2 testimonial active js
	var slider = new Swiper('.testimonial-active', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

    // Navigation arrows
    navigation: {
      nextEl: ".testimonial-next",
      prevEl: ".testimonial-prev",
    },
	});

      // home-1 wedding active js
	var slider = new Swiper('.wedding-active', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},

    // Navigation arrows
    navigation: {
      nextEl: ".wedding-next",
      prevEl: ".wedding-prev",
    },
	});

  // home-1 band-active js
	var slider = new Swiper('.band-active', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
    autoplay: true,
		breakpoints: {
      '1920': {
				slidesPerView: 5,
			},
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},

    // Navigation arrows
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
	});


 

  
})(jQuery);
