import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

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


// let greenBtn = document.getElementById("green-btn");
// let redBtn = document.getElementById("red-btn");
// let myToast = document.getElementById("toast");
// let myHandler = document.getElementById("handler");
// greenBtn.addEventListener("click", () => {
// 	myHandler.classList.add("anmi-handler");
// 	myToast.classList.add("anmi-toast");
// 	document.getElementById("smoak-1").classList.add("anmi-smoak");
// 	document.getElementById("smoak-2").classList.add("anmi-smoak");
// });
// redBtn.addEventListener("click", () => {
// 	myHandler.classList.remove("anmi-handler");
// 	myToast.classList.remove("anmi-toast");
// 	document.getElementById("smoak-1").classList.remove("anmi-smoak");
// 	document.getElementById("smoak-2").classList.remove("anmi-smoak");
// });


let btn = document.querySelector('.menu__button');
let block = document.querySelector('.menu__block');
// let closeBtn = block.querySelector('.menu__close');
const WIDTH = 770;
let isOpen = false;

let openModal = () => {
  block.classList.add('menu__block--active');
  btn.classList.add('menu__button--opened');
  document.body.classList.add('modal-open'); // добавляем класс для запрещения скролла страницы
  isOpen = true;
};

let closeModal = () => {
  block.classList.remove('menu__block--active');
  btn.classList.remove('menu__button--opened');
  document.body.classList.remove('modal-open'); // удаляем класс для разрешения скролла страницы
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

// let onCloseBtnClick = () => {
//   closeModal();
// };

btn.addEventListener('click', onClickBtn);
// closeBtn.addEventListener('click', onCloseBtnClick);


// function shuffleList() {
//   const list = document.querySelector('.skills');
//   const items = Array.from(list.children);
//   items.sort(() => Math.random() - 0.5);
//   items.forEach(item => {
//     list.appendChild(item);
//     item.style.transform = `translateY(${Math.random() * -200}px)`;
//     item.style.opacity = 0;
//     setTimeout(() => {
//       item.style.transform = 'translateY(0)';
//       item.style.opacity = 1;
//     }, Math.random() * 1000);
//   });
// }

// window.onload = shuffleList;

// let shuffle = document.querySelector('.skills__shuffle');

// shuffle.addEventListener('click', function () {
//   shuffleList();
// });


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

  window.onload = shuffleList;

  let shuffle = document.querySelector('.skills__shuffle');

  shuffle.addEventListener('click', function () {
  shuffleList();
  });
// function shuffleList() {
//   const list = document.querySelector('.skills');
//   const items = Array.from(list.children);
//   items.sort(() => Math.random() - 0.5);
//   items.forEach((item, index) => {
//   list.appendChild(item);
//   const delay = index * 100;
//   item.style.transform = translateY(-100%);
//   item.style.opacity = 0;
//   setTimeout(() => {
//   item.style.transform = 'translateY(0)';
//   item.style.opacity = 1;
//   }, delay);
//   });
//   }

//   window.onload = shuffleList;


// const button = document.getElementById('night-mode-button');

// button.addEventListener('click', function () {
// alert('toggle');
//   document.body.classList.toggle('night-theme');

// });
