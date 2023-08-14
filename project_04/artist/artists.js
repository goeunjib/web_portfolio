function Parallax() {
  scrollPos = $(this).scrollTop();
  $("main").css({
    "background-position": "80% " + -scrollPos / 4 + "px",
  });
  $("main h3").css({
    "margin-top": scrollPos / 4 + "px",
    opacity: 1 - scrollPos / 250,
  });
}
$(window).scroll(function () {
  Parallax();
});

$(window).on("scroll", () => {
  if (scrollY > 1) {
    $("main h3").css({ bottom: 0 });
  } else {
    $("main h3").css({ bottom: "6.375rem" });
  }
});

const fouro = document.querySelector(".article3 .article3-container").clientHeight;

const circle = document.querySelector('.article2 .third-page-container .circle-wrapper');
const scc = circle.scroll({ behavior: "smooth" })

const cs = () => {
  if (scrollY > circle.offsetTop) {
    circle.style.opacity = 1;
    circle.style.width = scrollY - 700 + 'px';
  } else {
    circle.style.opacity = 0;
    circle.style.width = 0 + 'px';
  }
}
const effect = document.querySelectorAll('.effect');
const ef1 = document.querySelectorAll('.ef1');
const ef2 = document.querySelectorAll('.ef2');
const ef3 = document.querySelectorAll('.ef3');
const ef4 = document.querySelectorAll('.ef4');
const ef5 = document.querySelectorAll('.ef5');
const ef6 = document.querySelectorAll('.ef6');
const ef7 = document.querySelectorAll('.ef7');
const eftext = document.querySelector('.article2 .third-page-container .text-wrapper')
const fe = () => {
  if (scrollY < 1200 || scrollY > fouro - 200) {
    effect.forEach((a) => {
      a.style.opacity = 0;
    });
    eftext.style.opacity = 0;
  } else if ((scrollY > 1200) && (scrollY < 1500)) {
    effect.forEach((a, idx, arr) => {
      arr[0].style.opacity = 1;
    });
    eftext.style.opacity = 1;
  } else if ((scrollY > 1500) && (scrollY < 1800)) {
    effect.forEach((a, idx, arr) => {
      arr[1].style.opacity = 1;
    });
    eftext.style.opacity = 1;
  } else if ((scrollY > 1800) && (scrollY < 2100)) {
    effect.forEach((a, idx, arr) => {
      arr[2].style.opacity = 1;
    });
    eftext.style.opacity = 1;
  } else if ((scrollY > 2100) && (scrollY < 2400)) {
    effect.forEach((a, idx, arr) => {
      arr[3].style.opacity = 1;
    });
    eftext.style.opacity = 1;
  } else {
    effect.forEach((a) => {
      a.style.opacity = 1;
    });
  }
}
addEventListener('scroll', cs);
addEventListener('scroll', fe);
/* 
https://gahyun-web-diary.tistory.com/34
https://wit.nts-corp.com/2022/10/26/6595
*/
