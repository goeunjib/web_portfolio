// swiper

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const footer1 = document.querySelector('footer');
const footerscroll2 = () => {
  if(scrollY > 4800) { /* spo 부분에는 자신이 원하는 크기 */
    footer1.style.opacity = 1;
  }else {
    footer1.style.opacity = 0;
  }
}

addEventListener('scroll',footerscroll2)