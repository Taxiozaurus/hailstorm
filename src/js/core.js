/**
 * Hailstorm JS
 *
 * @author Alexey "Taxiozaurus" Makeev <taxiozaurus@gmail.com>
 */
window.Hailstorm = new function() {
	/**
	 * Container for 'body' element
	 */
	var body;

	/**
	 * Init all the listeners
	 */
	function _init() {
		// grab document body
		body = document.querySelector('body');
		
		// Add dismiss event listeners, 
		// adding listener to body allows adding dismissable elements 
		// without rebinding this listener
		body.addEventListener('click', function(event) {
			if(event.target.hasAttribute('dismiss')) {
				_dismissElement(event.target);
			}
		});

		// Update fancy form elements to have appropriate wrappers
		var inputs = document.querySelectorAll('.form-input.form-fancy:not(.ready)');
		var inputWrapper = document.createElement('div');
		inputWrapper.classList.add('form-input-wrapper');
		var inputBar = document.createElement('div');
		inputBar.classList.add('form-fancy-input-bar');
		Array.prototype.forEach.call(inputs, function(elem) {
			var wrapperClone = inputWrapper.cloneNode();
			elem.parentNode.insertBefore(wrapperClone, elem);
			wrapperClone.appendChild(elem);
			wrapperClone.appendChild(inputBar.cloneNode());
			elem.classList.add('ready');
		});
	}

	/**
	 * Run dismissal animation and remove the element
	 * @param {Element} elem
	 */
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

	this.init = function() {
		_init()
	};
};

/**
 * Start up the Hailstorm
 */
document.addEventListener('DOMContentLoaded', function(){
	Hailstorm.init();
}, false);