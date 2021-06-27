var swiper = new Swiper(".swiper-process", {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: "fade",
  loop: true,
  speed: 300,
  mousewheel: {
    invert: false,
  },
  loop: true,
  // delay between transitions in ms
  autoplay: {
    delay: 3000,
    loop: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
