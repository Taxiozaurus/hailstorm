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
		body = document.querySelector('body');
		body.addEventListener('click', function(event) {
			if(event.target.hasAttribute('dismiss')) {
				_dismissElement(event.target);
			}
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