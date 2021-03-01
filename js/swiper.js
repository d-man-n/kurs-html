var mySwiper = new Swiper('.galery__swiper_container', {
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
    nextEl: '.gallery__img_rarrow',
    prevEl: '.gallery__img_larrow',
  },
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
      nextEl: '.publications__list_rarrow',
      prevEl: '.publications__list_larrow',
    },
  })
}

var mySwiper3 = new Swiper('.project__swiper_container', {
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
    nextEl: '.project__swiper_larrow',
    prevEl: '.project__swiper_rarrow',
  },
})


if(document.documentElement.scrollWidth <= 600) {
  var mySwiper4 = new Swiper('.events__swiper', {
    slidesPerView: 1,
    spaceBetween: 34,
    pagination: {
      el: '.events__swiper-pagination'
    },
  })
}

