// Form submit.
window.addEventListener('load', function () {
  var form = document.getElementById('contact-form');
  function sendData() {
    var XHR = new XMLHttpRequest();
    var FD = new FormData(form);
    XHR.addEventListener('load', function(event) {
      if (event.target.responseText === '1') {
        window.alert('Thanks for being awesome! I will get back to you as soon as possible.');
      } else {
        window.alert('Oups! Something went wrong. Please try again.');
      }
      form.reset();
    });

    XHR.addEventListener('error', function() {
      window.alert('Something went wrong. Please check your internet connection and try again.');
    });

    XHR.open('POST', 'https://vladbogdan.com/form_submit.php');
    XHR.send(FD);
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    sendData();
  });
});