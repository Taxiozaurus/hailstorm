document.addEventListener('DOMContentLoaded', function(){
	var body = document.querySelector('body');
	body.addEventListener('click', function(event) {
		if(event.target.classList.contains('dismiss-btn')) {
			_dismissElement(event.target);
		}
	});

	function _dismissElement(elem) {
		elem.parentNode.classList.add('dismiss');
		setTimeout(function() {
			elem.parentNode.remove();
		}, 1000);
	}
}, false);