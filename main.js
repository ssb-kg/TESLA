const open = document.querySelector('.container');
		const close = document.querySelector('.close');
		var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
		open.addEventListener('click', () => {
			if (tl.reversed()) {
				tl.play();
			} else {
				tl.to('nav', { right: 0 })
					.to('nav', { height: '100vh' }, '-=.1')
					.to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
					.to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
					.to('nav h2', { opacity: 1 }, '-=1');
			}
		});

		close.addEventListener('click', () => {
			tl.reverse();
		});













		$(document).ready(function() {
			$('.header-video').each(function(i, elem) {
				headerVideo = new HeaderVideo({
				  element: elem,
				  media: '.header-video__media',
				  playTrigger: '.header-video__play-trigger',
				  closeTrigger: '.header-video__close-trigger'
				});
			});
		  });















		  var swiper = new Swiper('.product-slider', {
			spaceBetween: 30,
			effect: 'fade',
			// initialSlide: 2,
			loop: false,
			navigation: {
				nextEl: '.next',
				prevEl: '.prev'
			},
			// mousewheel: {
			//     // invert: false
			// },
			on: {
				init: function(){
					var index = this.activeIndex;
		
					var target = $('.product-slider__item').eq(index).data('target');
		
					console.log(target);
		
					$('.product-img__item').removeClass('active');
					$('.product-img__item#'+ target).addClass('active');
				}
			}
		
		});
		
		swiper.on('slideChange', function () {
			var index = this.activeIndex;
		
			var target = $('.product-slider__item').eq(index).data('target');
		
			console.log(target);
		
			$('.product-img__item').removeClass('active');
			$('.product-img__item#'+ target).addClass('active');
		
			if(swiper.isEnd) {
				$('.prev').removeClass('disabled');
				$('.next').addClass('disabled');
			} else {
				$('.next').removeClass('disabled');
			}
		
			if(swiper.isBeginning) {
				$('.prev').addClass('disabled');
			} else {
				$('.prev').removeClass('disabled');
			}
		});
		
		$(".js-fav").on("click", function() {
			$(this).find('.heart').toggleClass("is-active");
		});