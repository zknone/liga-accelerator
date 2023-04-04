const openElement = (elements, event) => {
  event.preventDefault();
  [...elements].forEach(function (element) {
    element.classList.toggle('is-active');
  });
};

const openAccordeonElement = (element, surplus) => {
  element.classList.toggle('is-deactivate');
  surplus.classList.toggle('is-lost');
};

const aboutExtra = document.querySelectorAll('[data-about-extra]');
const moreAboutButton = document.querySelector('[data-about-button]');

const onAboutButtonClick = () => {
  openElement(aboutExtra, event);
  if (moreAboutButton.dataset.aboutButton === 'more') {
    moreAboutButton.innerHTML = 'Свернуть';
    moreAboutButton.dataset.aboutButton = 'less';
  } else {
    moreAboutButton.innerHTML = 'Подробнее';
    moreAboutButton.dataset.aboutButton = 'more';
  }
};

const modalFrame = document.querySelectorAll('[data-modal]');
const callButton = document.querySelector('[data-open-modal]');
const closeButton = document.querySelector('[data-close-button]');
const overlay = document.querySelector('[data-close-modal]');

const onModalButtonClick = () => {
  openElement(modalFrame, event);
  const wholeBody = document.querySelector('body');
  wholeBody.classList.toggle('has-open-modal');
  // document.querySelector("[data-input-name]").focus({ focusVisible: true });
};

const addressList = document.querySelector('[data-footer-address-list]');
const addressHeader = document.querySelector('[data-footer-address-header]');
const addressButton = document.querySelector('[data-footer-address-button]');
const addressSign = document.querySelector(['[data-address-sign]']);

const onFooterAddressClick = () => {
  openAccordeonElement(addressList, addressSign);
};

const linksButton = document.querySelector('[data-footer-navigation-button]');
const linksHeader = document.querySelector('[data-footer-navigation-header]');
const linksList = document.querySelector('[data-footer-navigation-list]');
const linksSign = document.querySelector('[data-navigation-sign]');

const onFooterLinksClick = () => {
  openAccordeonElement(linksList, linksSign);
};

export {
  linksButton,
  addressButton,
  linksHeader,
  addressHeader,
  onFooterAddressClick,
  onFooterLinksClick,
  openElement,
  onModalButtonClick,
  onAboutButtonClick,
  moreAboutButton,
  aboutExtra,
  modalFrame,
  callButton,
  closeButton,
  overlay
};
