
//Gallery section swiper
const swiper = new Swiper('.myswiper', {
    slidesPerColumnFill: 'row',
    setWrapperSize: true,
    spaceBetween: 50,

    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        grid: {
          rows: 1
        },
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      500: {
        slidesPerView: 2,
        grid: {
          rows: 2
        },
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2
        },
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
      1920: {
        slidesPerView: 3,
        grid: {
          rows: 2
        },
        slidesPerGroup: 3,
        spaceBetween: 50,
      }  
    },

    pagination: {
      el: '.swiper__pagination1',
      type: 'fraction',
    },
  
    navigation: {
      nextEl: '.swiper__button-next1',
      prevEl: '.swiper__button-prev2',
    }
  });

//Events swiper for mobile version
let btn = document.querySelector('.events__btn');
const slider = document.querySelector('#newSwiper');
let allitems = document.querySelectorAll('.events__item');
btn.addEventListener("click", function() {
  allitems.forEach(item => {
    item.style.display = "block";
  })
  
  this.style.display = "none";
  
})

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			slideClass: 'swiper-slide',

			pagination: {
				el: '.newSwiper-pagination',
				clickable: true,
			},
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 767 && slider.dataset.mobile == 'true') {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});

//Publication section swiper
const publicationSwiper = new Swiper ('.publications-swiper', {
  slidesPerColumnFill: 'row',
    setWrapperSize: true,

    breakpoints: {
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
      1400: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 29,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 0,
      },
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      590: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
    },

    pagination: {
      el: '.swiper-pagination2',
      type: 'fraction',
    },
  
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev4',
    }
});