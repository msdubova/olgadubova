import { iosVhFix } from './utils/ios-vh-fix';
import { initModals } from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

let btn = document.querySelector('.menu__button');
let block = document.querySelector('.menu__block');
const WIDTH = 770;
let isOpen = false;

let openModal = () => {
  block.classList.add('menu__block--active');
  btn.classList.add('menu__button--opened');
  document.body.classList.add('modal-open');
  isOpen = true;
};

let closeModal = () => {
  block.classList.remove('menu__block--active');
  btn.classList.remove('menu__button--opened');
  document.body.classList.remove('modal-open');
  isOpen = false;
};

let onClickBtn = (evt) => {
  if (window.innerWidth < WIDTH) {
    evt.preventDefault();
    if (isOpen) {
      closeModal();
    } else {
      openModal();
    }
  }
};


btn.addEventListener('click', onClickBtn);


function checkFunction(element, doIt) {
  if (element) {
    element.addEventListener('click', doIt);
  }
}

function setColorMode() {
  const page = document.querySelector('.page');
  const buttonNight = document.querySelector('.toggle-switch');

  function applyNightTheme() {
    if (page.classList.contains('page--day')) {
      page.classList.remove('page--day');
      page.classList.add('page--night');
      localStorage.setItem('theme', 'dark');
    } else {
      page.classList.add('page--day');
      page.classList.remove('page--night');
      localStorage.removeItem('theme');
    }
  }

  buttonNight.addEventListener('click', applyNightTheme);

  if (localStorage.getItem('theme') === 'dark') {
    page.classList.add('page--night');
  } else {
    page.classList.add('page--day');
  }
}

function shuffleList() {
  const list = document.querySelector('.skills');
  const items = Array.from(list.children);
  items.sort(() => Math.random() - 0.5);
  items.forEach(item => {
    list.appendChild(item);
    item.style.transform = `translateY(${Math.random() * -200}px)`;
    item.style.opacity = 0;
    if (Math.random() < 0.5) {
      item.classList.add('skills__item--faded');
    }
    setTimeout(() => {
      item.style.transform = 'translateY(0)';
      item.style.opacity = 1;
    }, Math.random() * 1000);
  });
}
function setSwitchState() {
  const switchInput = document.querySelector('.toggle-switch');
  const theme = localStorage.getItem('theme');

  if (theme === 'dark') {
    switchInput.checked = true;
  } else {
    switchInput.checked = false;
  }
}
checkFunction(document.querySelector('.toggle-switch'), setColorMode());
checkFunction(document.querySelector('.skills__shuffle'), shuffleList);


checkFunction(document.querySelector('.toggle-switch'), setSwitchState());
