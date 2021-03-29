var mySwiper = new Swiper('.galery__swiper-container', {
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      spaceBetween: 10,
      initialSlide: 13,
      },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      initialSlide: 6,
      },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      initialSlide: 6,
      },
  },

  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.gallery__rarrow',
    prevEl: '.gallery__larrow',
  },
})


mySwiper.on('slideChange', function() {
    if (mySwiper.realIndex === 0) document.querySelector('.gallery__larrow').disabled = true;
    else  document.querySelector('.gallery__larrow').disabled = false;
    if (mySwiper.realIndex === 12) document.querySelector('.gallery__rarrow').disabled = true;
    else  document.querySelector('.gallery__rarrow').disabled = false;
})

if(document.documentElement.scrollWidth > 600) {
  var mySwiper2 = new Swiper('.publications__swiper', {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        },
      600: {
        slidesPerView: 2,
        spaceBetween: 34,
        },
      1500: {
        slidesPerView: 3,
        spaceBetween: 50,
        },
    },

    pagination: {
      el: '.publications__swiper-pagination',
      type: 'fraction',
    },

    navigation: {
      nextEl: '.publications__rarrow',
      prevEl: '.publications__larrow',
    },
  })
}

var mySwiper3 = new Swiper('.project__swiper-container', {
  loop: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 50,
      },
    600: {
      slidesPerView: 2,
      spaceBetween: 34,
      },
    1500: {
      slidesPerView: 3,
      spaceBetween: 50,
      },
  },

  navigation: {
    nextEl: '.project__larrow',
    prevEl: '.project__rarrow',
  },
})




if(document.documentElement.scrollWidth <= 600) {
    document.querySelector('#events__swiper').classList.add('swiper-container');
    document.querySelector('#events__swiper').classList.add('events__swiper');
    document.querySelector('.event').classList.add('swiper-wrapper');
    document.querySelector('.events__list').style.flexWrap = 'nowrap';
    const slides = document.querySelectorAll('.event__container');
    for (let i=0; i<slides.length; i++) {
	slides[i].classList.add('swiper-slide');
    }

  var mySwiper4 = new Swiper('.events__swiper', {
    slidesPerView: 1,
    spaceBetween: 34,
    pagination: {
      el: '.events__swiper-pagination'
    },
  })
}

