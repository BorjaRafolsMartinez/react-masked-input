import React, { useState, useEffect } from 'react';

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
    function MaskFormatter(mask) {
        this.mask = null;
        this.leftOverString = null;
        this.mask = mask;
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
            console.log('run');
        }
        return this.removeTrailingLiterals(formatted);
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
            return this.removeTrailingLiterals(string.slice(0, -1));
        }
        return string;
    };
    return MaskFormatter;
}());

var maskify = function (string, mask) {
    var mf = new MaskFormatter(mask);
    return {
        formatted: mf.maskify(string),
        valid: true
    };
};

var MaskedInput = function (props) {
    var mask = props.mask, onChange = props.onChange, children = props.children;
    var _a = useState(props.value), value = _a[0], setValue = _a[1];
    useEffect(function () {
        setValue(props.value);
    }, [props.value]);
    useEffect(function () {
        var formatted = maskify(value, mask).formatted;
        setValue(formatted);
        onChange(formatted);
    }, []);
    var onChangeHandler = function (e) {
        var value = e.target.value;
        var formatted = maskify(value, mask).formatted;
        setValue(formatted);
        onChange(formatted);
    };
    if (children) {
        return React.cloneElement(children, {
            value: value,
            onChange: onChangeHandler
        });
    }
    return (React.createElement("input", { value: value, onChange: onChangeHandler }));
};

export { MaskedInput };
//# sourceMappingURL=index.es.js.map
