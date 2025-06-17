const backToTopButton = document.querySelector('.back-to-top');
const onPageScroll = () => {
  window.scrollY >= 300 && window.screen.width <= 768
    ? backToTopButton.classList.remove('hidden')
    : backToTopButton.classList.add('hidden');

}

const onWindowResize = () => {
  if (window.screen.width > 768) {
    backToTopButton.classList.add('hidden');
  }
}
const onBackToTopClick = () => window.scrollTo(0,0);

window.addEventListener('scroll', onPageScroll);
window.addEventListener('scroll', onWindowResize);
backToTopButton.addEventListener('click', onBackToTopClick);