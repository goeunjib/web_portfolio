
// 첫페이지 움직임 코드
const news = document.querySelector("main .first-page-container .txt-wrapper");
const fp = document.querySelector("main .first-page-container");
const fph = document.querySelector("main .first-page-container").clientHeight;
const fpo = document.querySelector("main .first-page-container").offsetTop;
// const spo = document.querySelector("main .second-page-container").offsetTop;
const tpo = document.querySelector("main .third-page-container").offsetTop;




const scrolled = () => {
  const fpsh = fph - scrollY;
  if(scrollY > 100) {
    news.style.transform = `translate(-50% , ${scrollY-100}%)`;
  } else {
    news.style.transform = `translate(-50%, 0)`
  }
};
addEventListener("scroll", scrolled);

