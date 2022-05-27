(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
  typeof define === 'function' && define.amd ? define(['react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ReactRating = factory(global.React));
})(this, (function (React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".masked-input {\n  background-color: white;\n  border: 1px solid black;\n  padding: 16px;\n  width: 360px;\n  text-align: center; }\n  .masked-input .heading {\n    font-size: 64px; }\n  .masked-input.masked-input-secondary {\n    background-color: black;\n    color: white; }\n";
  styleInject(css_248z);

  var MaskedInput = function (_a) {
      var theme = _a.theme;
      var _b = React.useState(0); _b[0]; _b[1];
      return (React__default["default"].createElement("div", { "data-testid": "masked-input", className: "masked-input masked-input-".concat(theme) },
          React__default["default"].createElement("h1", { className: "heading" }, "I'm the test component"),
          React__default["default"].createElement("h2", null, "Made with love by Harvey")));
  };

  return MaskedInput;

}));
//# sourceMappingURL=index.umd.js.map
