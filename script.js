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