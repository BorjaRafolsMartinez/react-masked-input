import React, { useState, useRef, useEffect } from 'react';

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

var MaskedInput = function (props) {
    var mask = props.mask, onChange = props.onChange, onBlur = props.onBlur, children = props.children, disabled = props.disabled, readOnly = props.readOnly, maskChar = props.maskChar;
    var _a = useState(props.value), value = _a[0], setValue = _a[1];
    var _b = useState([props.value.length, props.value.length]), selection = _b[0], setSelection = _b[1];
    var ref = useRef(null);
    useEffect(function () {
        setValue(props.value);
    }, [props.value]);
    useEffect(function () {
        var formatted = maskify(value, mask, {
            maskChar: maskChar
        }).formatted;
        setValue(formatted);
        onChange(formatted);
    }, []);
    useEffect(function () {
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
        return React.cloneElement(children, {
            value: value,
            disabled: disabled,
            readOnly: readOnly,
            onChange: onChangeHandler,
            onBlur: onBlurHandler,
            ref: ref
        });
    }
    return (React.createElement("input", { value: value, onChange: onChangeHandler, onBlur: onBlurHandler, disabled: disabled, readOnly: readOnly, ref: ref }));
};
MaskedInput.defaultProps = {
    value: '',
    mask: '',
    onChange: function () { },
    disabled: false
};

export { MaskedInput };
//# sourceMappingURL=index.es.js.map
