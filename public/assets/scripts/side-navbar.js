(function () {
  var menu = document.querySelector('.side-navbar__container'),
    burgerMenu = document.querySelector('.side-navbar__button'),
    content = document.querySelector('.main');

  function toggleClass(element, className) {
    var classes = element.className.split(/\s+/),
      length = classes.length;

    for (var i = 0; i < length; i++) {
      if (classes[i] === className) {
        classes.splice(i, 1);
        break;
      }
    }
    if (length === classes.length) {
      classes.push(className);
    }

    element.className = classes.join(' ');
  }

  function toggleAll() {
    var active = 'is-active';
    toggleClass(menu, active);
    toggleClass(burgerMenu, active);
  }

  burgerMenu.onclick = function (el) {
    toggleAll(el);
  };

  content.onclick = function (el) {
    if (menu.className.indexOf('is-active') !== -1) {
      toggleAll(el);
    }
  };
}());