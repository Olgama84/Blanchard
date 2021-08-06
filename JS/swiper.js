
//Gallery section swiper
const swiper = new Swiper('.myswiper', {
    slidesPerColumnFill: 'row',
    setWrapperSize: true,
    spaceBetween: 50,

    breakpoints: {
      1920: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
      1500: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 34,
      },
      1024: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 34,
      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
      700: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
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
  const eventsSwiper = new Swiper('.events-swiper', {
    direction: 'horizontal',
    pagination: {
      el: '.events-pagination',
      type: 'bullets',
      clickable: true,
    }
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