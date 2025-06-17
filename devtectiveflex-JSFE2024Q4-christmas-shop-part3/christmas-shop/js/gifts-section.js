const tabs = document.querySelector('.tabs');
const mainTab = document.querySelector('.tab--all');

tabs.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('tab') && !evt.target.classList.contains('tab--active')) {
    
    const activeTab = document.querySelector('.tab--active');
    activeTab.classList.remove('tab--active');
    evt.target.classList.add('tab--active');

    const isMainTab = evt.target.classList.contains('tab--all');
    const cards = document.querySelectorAll('.card');
    if (isMainTab) {
      cards.forEach ( (card) => {
        card.classList.remove('hidden');
      });
    } else {
      const tabName = evt.target.textContent.slice(4);
      cards.forEach( (card) => {
        const cardCategory = card.querySelector('.card__category');
        cardCategory.classList.contains(`card__category--${tabName}`)
          ? card.classList.remove('hidden')
          : card.classList.add('hidden');
      });
    }
  }
});