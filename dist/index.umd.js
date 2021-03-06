(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ReactRating = {}, global.React));
})(this, (function (exports, React) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    var tokens = {
        '0': /\d/,
        '9': /\d/,
        '#': /\d/,
        'A': /[a-zA-Z0-9]/,
        'S': /[a-zA-Z]/,
        'U': /[a-zA-Z]/,
        'L': /[a-zA-Z]/,
    };
    var MaskFormatter = /** @class */ (function () {
        function MaskFormatter(mask, options) {
            if (options === void 0) { options = {}; }
            this.mask = null;
            this.leftOverString = null;
            this.options = {};
            this.addedCharacters = 0;
            this.mask = mask;
            this.options = options;
        }
        MaskFormatter.prototype.maskify = function (value) {
            this.leftOverString = value;
            var formatted = '';
            var maskIndex = 0;
            /**
             * Keep script running till we have no more characters left in value
             */
            while (this.condition()) {
                var maskChar = this.mask.charAt(maskIndex);
                // We are at max length
                if (!maskChar) {
                    break;
                }
                var token = tokens[maskChar];
                if (!token) {
                    // Add character to formatted
                    formatted += maskChar;
                    if (this.options.cursor && maskChar != value[maskIndex] && this.options.cursor >= maskIndex) {
                        this.addedCharacters++;
                    }
                }
                else if (token && token.test(this.leftOverString)) {
                    // find first valid character in value for given token
                    var match = this.leftOverString.match(token);
                    var value_1 = match[0];
                    var index = match['index'];
                    formatted += value_1;
                    this.leftOverString = this.leftOverString.slice(index + 1);
                }
                else {
                    // no characters left in value that match current, abort
                    break;
                }
                maskIndex++;
            }
            formatted = this.removeTrailingLiterals(formatted);
            if (this.options.maskChar) {
                formatted = this.fillWithMask(formatted);
            }
            return {
                value: formatted,
                addedCharacters: this.addedCharacters,
            };
        };
        /**
         *
         * @param value
         * @returns
         */
        MaskFormatter.prototype.fillWithMask = function (value) {
            for (var i = value.length; i <= this.mask.length; i++) {
                var maskChar = this.mask.charAt(i);
                var token = tokens[maskChar];
                if (token) {
                    value += this.options.maskChar;
                }
                else {
                    value += maskChar;
                }
            }
            return value;
        };
        /**
         *
         * @returns boolean
         */
        MaskFormatter.prototype.condition = function () {
            return this.leftOverString.length > 0;
        };
        /**
         * Removes all characters at the end of the string if they are fixed
         * mask: 9999-9999 | value: 1234- | output: 1234
         * @param string
         * @returns
         */
        MaskFormatter.prototype.removeTrailingLiterals = function (string) {
            if (!string.length) {
                return string;
            }
            var stringLength = string.length - 1;
            var charAt = this.mask.charAt(stringLength);
            var lastCharToken = tokens[charAt];
            if (!lastCharToken) {
                this.addedCharacters--;
                return this.removeTrailingLiterals(string.slice(0, -1));
            }
            return string;
        };
        return MaskFormatter;
    }());

    var maskify = function (string, mask, options) {
        if (options === void 0) { options = {}; }
        var mf = new MaskFormatter(mask, options);
        var _a = mf.maskify(string), value = _a.value, addedCharacters = _a.addedCharacters;
        return {
            formatted: value,
            valid: true,
            addedCharacters: addedCharacters,
        };
    };

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

    var css_248z = "";
    styleInject(css_248z);

    var MaskedInput = function (props) {
        var mask = props.mask, onChange = props.onChange, onBlur = props.onBlur, children = props.children, disabled = props.disabled, readOnly = props.readOnly, maskChar = props.maskChar;
        var _a = React.useState(props.value), value = _a[0], setValue = _a[1];
        var _b = React.useState([props.value.length, props.value.length]), selection = _b[0], setSelection = _b[1];
        var ref = React.useRef(null);
        React.useEffect(function () {
            setValue(props.value);
        }, [props.value]);
        React.useEffect(function () {
            var formatted = maskify(value, mask, {
                maskChar: maskChar
            }).formatted;
            setValue(formatted);
            onChange(formatted);
        }, []);
        React.useEffect(function () {
            var _a;
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.setSelectionRange.apply(_a, selection);
        }, [selection]);
        var onChangeHandler = function (e) {
            var target = e.target;
            var selectionEnd = target.selectionEnd, selectionStart = target.selectionStart;
            var value = e.target.value;
            var _a = maskify(value, mask, {
                cursor: target.selectionEnd,
                maskChar: maskChar
            }), formatted = _a.formatted, addedCharacters = _a.addedCharacters;
            setValue(formatted);
            onChange(formatted);
            setSelection([selectionStart + addedCharacters, selectionEnd + addedCharacters]);
        };
        var onBlurHandler = function (e) {
            var value = e.target.value;
            onBlur && onBlur(value);
        };
        if (children) {
            return React__default["default"].cloneElement(children, {
                value: value,
                disabled: disabled,
                readOnly: readOnly,
                onChange: onChangeHandler,
                onBlur: onBlurHandler,
                ref: ref
            });
        }
        return (React__default["default"].createElement("input", { value: value, onChange: onChangeHandler, onBlur: onBlurHandler, disabled: disabled, readOnly: readOnly, ref: ref }));
    };
    MaskedInput.defaultProps = {
        value: '',
        mask: '',
        onChange: function () { },
        disabled: false
    };

    exports.MaskedInput = MaskedInput;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
