import React, { useRef, useEffect, forwardRef, useState } from 'react';

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

var useCombinedRefs = function () {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    var targetRef = useRef();
    useEffect(function () {
        refs.forEach(function (ref) {
            if (!ref)
                return;
            if (typeof ref === 'function') {
                ref(targetRef.current);
            }
            else {
                ref.current = targetRef.current;
            }
        });
    }, [refs]);
    return targetRef;
};

var MaskedInput = forwardRef(function (props, ref) {
    var mask = props.mask, onChange = props.onChange, onBlur = props.onBlur, children = props.children, disabled = props.disabled, readOnly = props.readOnly, maskChar = props.maskChar;
    var _a = useState(props.value), value = _a[0], setValue = _a[1];
    var _b = useState([props.value.length, props.value.length]), selection = _b[0], setSelection = _b[1];
    var localRef = useRef(null);
    var inputRef = useCombinedRefs(localRef, ref);
    useEffect(function () {
        setValue(props.value);
    }, [props.value]);
    useEffect(function () {
        var formatted = maskify(value, mask, {
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
    useEffect(function () {
        var _a;
        (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.setSelectionRange.apply(_a, selection);
    }, [selection]);
    // const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 	const { target } = e
    // 	const { selectionEnd, selectionStart } = target
    // 	const value = e.target.value
    // 	const { formatted, addedCharacters } = maskify(value, mask, {
    // 		cursor: target.selectionEnd,
    // 		maskChar
    // 	})
    // 	setValue(formatted)
    // 	onChange(formatted)
    // 	setSelection([selectionStart + addedCharacters, selectionEnd + addedCharacters])
    // }
    var onChangeHandler = function (event) {
        var target = event.target;
        var selectionEnd = target.selectionEnd, selectionStart = target.selectionStart;
        var value = event.target.value;
        var _a = maskify(value, mask, {
            cursor: target.selectionEnd,
            maskChar: maskChar
        }), formatted = _a.formatted, addedCharacters = _a.addedCharacters;
        setValue(formatted);
        event.target.value = formatted; // Update the input value
        var nativeEvent = new Event('input', { bubbles: true, cancelable: true });
        Object.defineProperty(nativeEvent, 'target', { value: event.target, enumerable: true });
        setSelection([selectionStart + addedCharacters, selectionEnd + addedCharacters]);
        event.target.dispatchEvent(nativeEvent); // Trigger native input event
    };
    if (children) {
        return React.cloneElement(children, {
            value: value,
            disabled: disabled,
            readOnly: readOnly,
            onChange: onChangeHandler,
            onBlur: onBlur,
            ref: inputRef
        });
    }
    return (React.createElement("input", { value: value, onChange: onChangeHandler, onBlur: onBlur, disabled: disabled, readOnly: readOnly, ref: inputRef }));
});
MaskedInput.displayName = 'MaskedInput';
MaskedInput.defaultProps = {
    value: '',
    mask: '',
    onChange: function () { return void (0); },
    disabled: false
};

export { MaskedInput };
//# sourceMappingURL=index.es.js.map
