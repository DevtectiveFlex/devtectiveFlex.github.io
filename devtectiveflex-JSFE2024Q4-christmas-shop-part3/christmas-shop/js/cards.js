import { getUniqueArrayValues } from './util.js';
import {getData} from  './network-api.js';
const cardTemplate = document
.querySelector('#card-template')
.content;

const container = document.querySelector('.card-list');

const renderCards = (gifts) => {
  const cardsContainer = document.createDocumentFragment();
  gifts.forEach((gift)  => {
    const card = cardTemplate.cloneNode(true);
    
    const cardName = card.querySelector('.card__name');
    const cardCategory = card.querySelector('.card__category');
    const cardImage = card.querySelector('.card__image');
    const categoryName = gift.category.toLowerCase().slice(4);
    
    cardName.textContent = gift.name;
    cardCategory.textContent = gift.category;
    cardCategory.classList.add(`card__category--${categoryName}`);
    cardImage.src = `./img/cards/gift-for-${categoryName}.png`;
    cardsContainer.append(card);
  });
  return cardsContainer;
}

const renderBestGifts = (gifts) => {
  const NumberOfCards = 4;
  const randomCards = getUniqueArrayValues(gifts, NumberOfCards);
  container.append(renderCards(randomCards, 4));
}
const renderGiftsSection = (gifts) => {
  container.append(renderCards(gifts));
}

const onModalWrapperClick = (evt) => {
  if(evt.target.classList.contains('modal__wrapper')){
    const modalWrapper = document.querySelector('.modal__wrapper');
    modalWrapper.remove();
    document.body.removeAttribute('style');
  }
}
const onCloseModalClick = (evt) => {
  if (evt.target.closest('.close-button--modal')){
    const modalWrapper = document.querySelector('.modal__wrapper');
    modalWrapper.remove();
    document.body.removeAttribute('style');
  }
}

const renderModal = (gift) => {
  const template = document.querySelector('#modal-template').content;
  const modal = template.cloneNode(true);
  const modalName = modal.querySelector('.card__name');
  const modalCategory = modal.querySelector('.card__category');
  const modalImage = modal.querySelector('.card__image');
  const modalDescription = modal.querySelector('.card__description');
  const categoryName = gift.category.toLowerCase().slice(4);
 
  for (let key in gift.superpowers) {
    const superpower = gift.superpowers[key];
    const currentSuperpower = modal.querySelector(`.superpower--${key}`)
    const currentValue = currentSuperpower.querySelector('.superpower__value');
    const ValueStrength = superpower.slice(1,2);
    const snowlakes = currentSuperpower.querySelectorAll('.snowlake');
    
    for (let i = 5; i > ValueStrength; i--){
      snowlakes[i - 1].classList.add('snowlake--inactive');
    }
    currentValue.textContent = gift.superpowers[key];
  }

  modalName.textContent = gift.name;
  modalCategory.textContent = gift.category;
  modalDescription.textContent = gift.description;
  modalCategory.classList.add(`card__category--${categoryName}`);
  modalImage.src = `./img/cards/gift-for-${categoryName}.png`;


  document.body.append(modal);
  const modalWrapper = document.querySelector('.modal__wrapper');
  const modalCloseButton = document.querySelector('.close-button--modal');
  document.body.style.overflow = 'hidden';
  modalCloseButton.addEventListener('click', onCloseModalClick);
  modalWrapper.addEventListener('click', onModalWrapperClick);
};

const getCardname = (cardName) => {
  return () => cardName
  }

const onCardClick = (evt) => {
  if (evt.target.closest('.card')){
    const card = evt.target.closest('.card');
    const cardName = card.querySelector('.card__name').textContent;
   const getCard = getCardname(cardName);
   const showModal = (gifts) => {
    const name = getCard();
    const gift = gifts.find((gift) => {
      if (gift.name === name){
        return gift
      }
    })
    renderModal(gift);
  }
  getData(showModal,(v) => v);
  }  
}

container.addEventListener('click', onCardClick);
export {renderGiftsSection, renderBestGifts};