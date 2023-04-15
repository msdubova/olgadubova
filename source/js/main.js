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
let closeBtn = block.querySelector('.menu__close');
const WIDTH = 770;
let isOpen = false;

let openModal = () => {
  block.classList.add('menu__block--active');
  isOpen = true;
};

let closeModal = () => {
  block.classList.remove('menu__block--active');
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

let onCloseBtnClick = () => {
  closeModal();
};

btn.addEventListener('click', onClickBtn);
closeBtn.addEventListener('click', onCloseBtnClick);

