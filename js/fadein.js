const fadeImages = document.querySelectorAll('.fade-in');

function handleScroll() {
  const windowBottom = window.innerHeight + window.scrollY;

  fadeImages.forEach(img => {
    const imageTop = img.offsetTop;
    if(windowBottom > imageTop + 50 && !img.classList.contains('visible')) {
      const delay = parseInt(img.dataset.delay) || 0;
      setTimeout(() => {
        img.classList.add('visible');
      }, delay);
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
