import Swiper from 'https://github.com/AliScripter/digikala/tree/master/node_modules/swiper/swiper-bundle.min.mjs';

//!----------- Story Slider
const swiper = new Swiper('.mySwiper', {
  freeMode: true,
  breakpoints: {
    // اضافه کردن breakpoint برای محاسبه تعداد اسلایدها بر اساس اندازه صفحه
    0: {
      slidesPerView: 3,
    },
    360: {
      slidesPerView: 4,
    },
    639: {
      slidesPerView: 6,
    },
    767: {
      slidesPerView: 7,
    },
    900: {
      slidesPerView: 8,
    },
    1000: {
      slidesPerView: 9,
    },
    1024: {
      slidesPerView: 10,
    },
  },
});

//!----------- Top images slider swiper

const main_slider_images = new Swiper('.top_slider_swiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//!----------- Amazing images slider swiper
const amazing_slider_swiper = new Swiper('.amazing_slider_swiper', {
  slidesPerView: 'auto',
  freeMode: true,
  loop: false,
});

//!----------- Category images slider swiper

const category_swiper = new Swiper('.category_swiper', {
  slidesPerView: 5,
  direction: 'horizontal',
  centeredSlides: false,
  freeMode: true,
  loop: false,
  grid: {
    rows: 3,
    fill: 'row',
  },
  breakpoints: {
    1025: {
      spaceBetween: 10,
      slidesPerView: 7,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },
});

//!--------------------------- Mahbob tarin ha digikala
const container_img = new Swiper('.container_img', {
  slidesPerView: 'auto',
  loop: false,
});
