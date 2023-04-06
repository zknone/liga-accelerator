import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {
  onAboutButtonClick,
  moreAboutButton,
  linksButton,
  linksHeader,
  addressButton,
  addressHeader,
  onFooterLinksClick,
  onFooterAddressClick
} from './modules/open-element';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------
  moreAboutButton.addEventListener('click', onAboutButtonClick);
  linksButton.addEventListener('click', onFooterLinksClick);
  linksHeader.addEventListener('click', onFooterLinksClick);
  addressButton.addEventListener('click', onFooterAddressClick);
  addressHeader.addEventListener('click', onFooterAddressClick);
  // // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    
    const lockBtnElement = document.querySelector('.lock');
    lockBtnElement.addEventListener('click', () => window.focusLock.lock('.lock-block'));
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
