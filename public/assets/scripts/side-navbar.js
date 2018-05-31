(function (window, document) {

  var menu       = document.querySelector('.side-navbar__container'),
      burgerMenu = document.querySelector('.side-navbar__button'),
      content    = document.querySelector('.main');

  function toggleClass(element, className) {
    var classes = element.className.split(/\s+/),
      length = classes.length,
      i = 0;

    for (; i < length; i++) {
      if (classes[i] === className) {
        classes.splice(i, 1);
        break;
      }
    }
    // The className is not found
    if (length === classes.length) {
      classes.push(className);
    }

    element.className = classes.join(' ');
  }

  function toggleAll(e) {
    var active = 'is-active';

    e.preventDefault();
    toggleClass(menu, active);
    toggleClass(burgerMenu, active);
  }

  burgerMenu.onclick = function (e) {
    toggleAll(e);
  };

  content.onclick = function (e) {
    if (menu.className.indexOf('is-active') !== -1) {
      toggleAll(e);
    }
  };

}(this, this.document));