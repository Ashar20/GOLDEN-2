var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  direction: "vertical",
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
  mousewheel: {
    invert: false,
  },
  autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});
