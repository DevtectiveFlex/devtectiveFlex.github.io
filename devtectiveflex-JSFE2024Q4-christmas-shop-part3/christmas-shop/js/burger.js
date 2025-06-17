const burger = document.querySelector('.burger');
const siteNavigation = document.querySelector('.site-navigation');

const onNavigationItemClick = (evt) => {
  if(evt.target.closest('.site-navigation__item')){
    evt.preventDefault();
    hideBurger();
    setTimeout(() => {
      if (evt.target.href){
        window.location = evt.target.href;
      }
    }, 310);
  };
}

const showBurger = () => {
  setTimeout(()=> siteNavigation.style.left = '0', 1);
  siteNavigation.style.display = 'flex';
  document.body.classList.add('unscrollable');

  burger.classList.add('burger--opened');
  burger.removeEventListener('click', showBurger)
  burger.addEventListener('click', hideBurger);
  siteNavigation.addEventListener('click', onNavigationItemClick);
}

const hideBurger = () => {
  setTimeout(()=> {
    document.body.classList.remove('unscrollable')

    siteNavigation.removeAttribute('style');

    burger.addEventListener('click', showBurger)
  }, 300);
  siteNavigation.style.left = '100%';

  burger.classList.remove('burger--opened');
  
  burger.removeEventListener('click', hideBurger)
  siteNavigation.removeEventListener('click', onNavigationItemClick);
}

burger.addEventListener('click', showBurger);