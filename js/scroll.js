const images = document.querySelectorAll('.scroll-effect');

function handleScroll() {
  const windowBottom = window.innerHeight + window.scrollY;

  images.forEach(img => {
    const imageTop = img.offsetTop;
    if(windowBottom > imageTop + 10){ // 少し手前で発火
      img.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // ページロード時にもチェック
