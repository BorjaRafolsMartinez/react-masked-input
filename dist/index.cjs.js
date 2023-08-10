'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

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
        this.mask = '';
        this.leftOverString = '';
        this.options = {};
        this.addedCharacters = 0;
        this.mask = mask;
        this.options = options;
    }
    MaskFormatter.prototype.maskify = function (value) {
        var _a, _b;
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
                if (!match) {
                    break;
                }
                var value_1 = (_a = match[0]) !== null && _a !== void 0 ? _a : 0;
                var index = (_b = match['index']) !== null && _b !== void 0 ? _b : 0;
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

var useCombinedRefs = function () {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    var targetRef = React.useRef(null);
    React.useEffect(function () {
        refs.forEach(function (ref) {
            if (!ref)
                return;
            if (typeof ref === 'function') {
                ref(targetRef.current);
            }
            else if ('current' in ref) {
                ref.current = targetRef.current;
            }
        });
    }, [refs]);
    return targetRef;
};

var MaskedInput = React.forwardRef(function (props, ref) {
    var mask = props.mask, onChange = props.onChange, onBlur = props.onBlur, children = props.children, disabled = props.disabled, readOnly = props.readOnly, maskChar = props.maskChar, value = props.value, rest = __rest(props, ["mask", "onChange", "onBlur", "children", "disabled", "readOnly", "maskChar", "value"]);
    var _a = React.useState(value || ''), localValue = _a[0], setValue = _a[1];
    var _b = React.useState([localValue.length, localValue.length]), selection = _b[0], setSelection = _b[1];
    var localRef = React.useRef(null);
    var inputRef = useCombinedRefs(localRef, ref);
    React.useEffect(function () {
        setValue(props.value || '');
    }, [props.value]);
    React.useEffect(function () {
        var formatted = maskify(localValue, mask, {
            maskChar: maskChar
        }).formatted;
        setValue(formatted);
        var fakeEvent = {
            target: {
                value: formatted,
            },
        };
        onChange(fakeEvent);
    }, []);
    React.useEffect(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.setSelectionRange.apply(_a, selection);
    }, [selection]);
    var onChangeHandler = function (event) {
        var _a;
        var target = event.target;
        var selectionEnd = target.selectionEnd, selectionStart = target.selectionStart;
        var start = selectionStart !== null && selectionStart !== void 0 ? selectionStart : 0;
        var end = selectionEnd !== null && selectionEnd !== void 0 ? selectionEnd : 0;
        var value = event.target.value;
        var _b = maskify(value, mask, {
            cursor: (_a = target.selectionEnd) !== null && _a !== void 0 ? _a : 0,
            maskChar: maskChar
        }), formatted = _b.formatted, addedCharacters = _b.addedCharacters;
        setValue(formatted);
        setSelection([start + addedCharacters, end + addedCharacters]);
        event.target.value = formatted; // Update the input value
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    if (children) {
        return React__default["default"].cloneElement(children, __assign(__assign(__assign({}, (value !== null ? { value: value } : {})), { disabled: disabled, readOnly: readOnly, onChange: onChangeHandler, onBlur: onBlur, ref: inputRef }), rest));
    }
    return (React__default["default"].createElement("input", __assign({ value: value !== null ? value : '', onChange: onChangeHandler, onBlur: onBlur, disabled: disabled, readOnly: readOnly, ref: inputRef }, rest)));
});
MaskedInput.displayName = 'MaskedInput';
MaskedInput.defaultProps = {
    mask: '',
    onChange: function () { return void (0); },
    disabled: false
};

exports.MaskedInput = MaskedInput;
//# sourceMappingURL=index.cjs.js.map
