(function () {
  var error;
  var formButton = document.querySelector('.contact__submit');

  function showError(htmlClass, message) {
    var errorMessage = document.querySelector('.js-message'),
      errorHandling = document.querySelector('#js-error-hadling'),
      closeError = document.querySelector('.contact__close-error');

    errorHandling.className = htmlClass;
    errorHandling.style.display = 'flex';
    errorMessage.innerHTML = message;

    closeError.addEventListener('click', function () {
      errorHandling.style.display = 'none';
    });
  }

  // FORM SUBMIT
  function sendForm() {
    var form = document.getElementById('contact-form');
    var XHR = new XMLHttpRequest();
    var FD = new FormData(form);

    XHR.addEventListener('load', function (event) {
      if (event.target.responseText === '1') {
        showError(
          'contact__error--success',
          'Thanks for being awesome! I will get back to you as soon as possible.'
        );
      } else {
        showError('contact__error', 'Oups! Something went wrong. Please try again.');
      }
      form.reset();
    });

    XHR.addEventListener('error', function () {
      showError(
        'contact__error',
        'Something went wrong. Please check your internet connection and try again.'
      );
    });

    XHR.open('POST', 'https://vladbogdan.com/form_submit.php');
    XHR.send(FD);
  }

  // FORM VALIDATION
  function validateEmail(email) {
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
  }

  // CHECK FORM FOR ERRORS AND THEN SUBMIT
  formButton.addEventListener('click', function (event) {
    event.preventDefault();
    var nameInput = document.querySelector('input[name=username]').value,
      emailInput = document.querySelector('input[name=email]').value,
      messageInput = document.querySelector('textarea[name=message]').value;

    if (!nameInput) {
      error = '<u>Name</u> field can\'t be empty!';
    } else if (!emailInput) {
      error = '<u>Email</u> address is required!';
    } else if (!validateEmail(emailInput)) {
      error = '<u>Email</u> address is not valid!';
    } else if (!messageInput) {
      error = 'You\'ll have to write a <u>Message</u> too!';
    } else {
      error = '';
    }

    if (error !== '') {
      showError('contact__error', error);
    } else {
      sendForm();
    }
  });
})();