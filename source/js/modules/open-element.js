const openElement = (elements, event) => {
  event.preventDefault();
  [...elements].forEach(function (element) {
    element.classList.toggle("is-active");
  });
};

const openAccordeonElement = (element, surplus) => {
  element.classList.toggle("is-deactivate");
  surplus.classList.toggle("is-lost");
};

const aboutExtra = document.querySelectorAll("[data-about-extra]");
const moreAboutButton = document.querySelector("[data-about-button]");

const onAboutButtonClick = () => {
  openElement(aboutExtra, event);
};

const modalFrame = document.querySelectorAll("[data-modal]");
const callButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-button]");

const onModalButtonClick = () => {
  openElement(modalFrame, event);
  const wholeBody = document.querySelector("body")
  wholeBody.classList.toggle("has-open-modal");
};

const addressList = document.querySelector("[data-footer-address-list]");
const addressButton = document.querySelector("[data-footer-address-button]");
const addressSign = document.querySelector(["[data-address-sign]"]);
console.log(addressSign);

const onFooterAddressClick = () => {
  openAccordeonElement(addressList, addressSign);
};

const linksButton = document.querySelector("[data-footer-navigation-button]");
const linksList = document.querySelector("[data-footer-navigation-list]");
const linksSign = document.querySelector("[data-navigation-sign]");
console.log(linksSign);

const onFooterLinksClick = () => {
  openAccordeonElement(linksList, linksSign);
};

export {
  linksButton,
  addressButton,
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
};
