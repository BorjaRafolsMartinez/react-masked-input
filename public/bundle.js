(function (format) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var format__default = /*#__PURE__*/_interopDefaultLegacy(format);

	var span = document.querySelector('#time-now');

	function update() {
		span.textContent = format__default["default"](new Date(), 'h:mm:ssa');
		setTimeout(update, 1000);
	}

	// even though Rollup is bundling all your files together, errors and
	// logs will still point to your original source modules
	console.log('if you have sourcemaps enabled in your devtools, click on main.js:5 -->');

	update();

})(format);
//# sourceMappingURL=bundle.js.map
