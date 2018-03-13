document.addEventListener('DOMContentLoaded', function(){
	var body = document.querySelector('body');
	body.addEventListener('click', function(event) {
		if(event.target.hasAttribute('dismiss')) {
			_dismissElement(event.target);
		}
	});

	function _dismissElement(elem) {
		var root = elem.closest('.alert');
		if(!root) {
			return false;
		}
		root.classList.add('dismiss');
		setTimeout(function() {
			root.remove();
		}, 700);
		return true;
	}
}, false);