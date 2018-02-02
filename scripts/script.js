// Keep form label up if not empty.
var inputs = document.querySelectorAll('.js-input');
inputs.forEach(function(el) {
  el.addEventListener('keyup', function() {
    if(this.value) {
      this.classList.add('not-empty');
    } else {
      this.classList.remove('not-empty');
    }
  });
});

// Form submit.
window.addEventListener("load", function () {
  function sendData() {
    var XHR = new XMLHttpRequest();
    var FD = new FormData(form);
    XHR.addEventListener("load", function(event) {
      if (event.target.responseText === "1") {
        alert("Thanks for being awesome! I will respond as soon as possible.");
      } else {
        alert("Oups! Something went wrong. Please try again.");
      }
      form.reset();
    });

    XHR.addEventListener("error", function(event) {
      alert('Something went wrong. Please check your internet connection and try again.');
    });

    XHR.open("POST", "http://vladbogdan.com/form_submit.php");
    XHR.send(FD);
  }
 
  var form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendData();
  });
});