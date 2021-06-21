var swiper = new Swiper(".swiper-process", {
  speed: 400,
  initialSlide: 1,
  direction: "horizontal",
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
  },

  breakpoints: {
    // when window width is >= 767px
    768: {
      slidesPerView: 1,
      initialSlide: 0,
      speed: 400,
      autoplay: {
        delay: 3000,
      },
      direction: "horizontal",
    },
  },
});
