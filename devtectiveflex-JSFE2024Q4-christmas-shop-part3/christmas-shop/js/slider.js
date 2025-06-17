const nextSlide = document.querySelector('.slider__button[name="next-button"]');
const prevSlide = document.querySelector('.slider__button[name="prev-button"]');
const slider = document.querySelector('.slider');


const sliderSection = document.querySelector('.slider-section');
const sliderWrapper = document.querySelector('.slider__wrapper');

let counter = 0;
let numOfClicks = 0;

const getNumOfClicks = () => {
  const availableScreenWidth = window.screen.availWidth;
  availableScreenWidth > 768
    ? numOfClicks = 3
    : numOfClicks = 6;
}

const resetSlider = () => {
  counter = 0;
  slider.removeAttribute('style');
  
  prevSlide.setAttribute('disabled', 'disabled');
  
  nextSlide.removeAttribute('disabled');
  nextSlide.addEventListener('click', onNextSlideClick);
  prevSlide.removeEventListener('click', onPrevSlideClick);
}

const onResizeWindow = () => {
  resetSlider();
  getNumOfClicks();
}

window.addEventListener('resize', onResizeWindow);

const onNextSlideClick = () => {
  counter += 1;
  const sliderMargin = (sliderSection.offsetWidth - sliderWrapper.offsetWidth) / 2;
  const sliderStep = (slider.offsetWidth - sliderSection.offsetWidth + sliderMargin) / numOfClicks;
  
  slider.style.transform = `translateX(-${sliderStep * counter}px)`;
  if (counter === 1) {
    prevSlide.addEventListener('click', onPrevSlideClick);
    prevSlide.removeAttribute('disabled');
  }
  if (numOfClicks <= counter) {
    nextSlide.setAttribute('disabled', 'disabled');
    prevSlide.removeAttribute('disabled');

    nextSlide.removeEventListener('click', onNextSlideClick)
    prevSlide.addEventListener('click', onPrevSlideClick)
    counter = numOfClicks;
  } 
}

const onPrevSlideClick = () => {
  counter -= 1;
  const sliderMargin = (sliderSection.offsetWidth - sliderWrapper.offsetWidth) / 2;
  const sliderStep = (slider.offsetWidth - sliderSection.offsetWidth + sliderMargin) / numOfClicks;
  
  slider.style.transform = `translateX(-${sliderStep * counter}px)`;

  if (counter === numOfClicks - 1) {
    nextSlide.addEventListener('click', onNextSlideClick);
    nextSlide.removeAttribute('disabled');
  }
  if (counter <= 0) {
   resetSlider();
  } 
}

nextSlide.addEventListener('click', onNextSlideClick)
getNumOfClicks();