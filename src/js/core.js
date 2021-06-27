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
	}

	/**
	 * Run dismissal animation and remove the element
	 * 
	 * @param  {Element} elem
	 * 
	 * @return {Boolean}
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


	/**
	 * Alert element generator function
	 * 
	 * @param  {String}  type    type of alert to make: "default" "info" "success" "warning" "danger"
	 * @param  {String}  content text content of alert
	 * @param  {Boolean} shaded
	 * 
	 * @return {Element}
	 */
	function _genAlert(type, content, shaded) {
		var _type = (["dedault", "info", "success", "warning", "danger"].indexOf(type) > -1) ? type : "";
		var _shaded = shaded || false;

		var dismissBtn = document.createElement('span');
		dismissBtn.classList.add("dismiss-btn");
		dismissBtn.setAttribute("dismiss", true);
		dismissBtn.innerHTML = "&times;";

		var alert = document.createElement('div');
		alert.classList.add("alert");
		if (_type.length > 0) alert.classList.add(_type);
		if (_shaded) alert.classList.add("shaded");

		alert.appendChild(document.createTextNode(content));
		alert.appendChild(dismissBtn);
		
		return alert;
	}

	this.init = function() {
		_init()
	};

	this.generateAlert = _genAlert;
};

/**
 * Start up the Hailstorm
 */
document.addEventListener('DOMContentLoaded', function(){
	Hailstorm.init();
}, false);