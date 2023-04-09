const adjustFooter = () => {
  const footerList = document.querySelector('[data-footer-navigation-list]');
  const footerListElements = footerList.querySelectorAll('li');
  if (footerListElements.length > 8 && footerListElements.length <= 12) {
    footerList.style.maxHeight = '250px';
    footerListElements.forEach((el) => el.style.maxWidth = '160px');
  } else if (footerListElements.length > 12) {
    footerList.style.maxHeight = '300px';
    footerListElements.forEach((el) => el.style.maxWidth = '130px');
  }
};

export {adjustFooter};
