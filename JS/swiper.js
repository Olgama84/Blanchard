const swiper = new Swiper('.myswiper', {
    slidesPerColumnFill: 'row',
    setWrapperSize: true,
    spaceBetween: 15,

    breakpoints: {
      1920: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
      },
      1400: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
      },
      1024: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 3,

      },
      768: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
      },
      320: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
      }
    },

    pagination: {
      el: '.swiper-pagination1',
      type: 'fraction',
    },
  
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev2',
    }
  });