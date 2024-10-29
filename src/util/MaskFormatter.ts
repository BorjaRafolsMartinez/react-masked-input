import { MaskifyFormatterOptions, MaskifyFormatterReturnValue } from './maskity.types'

const tokens: Record<string, RegExp> = {
	'0': /\d/,
	'9': /\d/,
	'#': /\d/,
	'A': /[a-zA-Z0-9]/,
	'S': /[a-zA-Z]/,
	'U': /[a-zA-Z]/,
	'L': /[a-zA-Z]/,
}



class MaskFormatter {

	mask = ''
	leftOverString = ''
	options: MaskifyFormatterOptions = {}
	addedCharacters = 0

	constructor(mask: string, options: MaskifyFormatterOptions = {}) {
		this.mask = mask
		this.options = options
	}

	maskify(value: string, prevValue: string|null = null) : MaskifyFormatterReturnValue {
		this.leftOverString = value
		let formatted = ''
		let maskIndex = 0

		/**
		 * Keep script running till we have no more characters left in value
		 */
		while(this.condition()) {
			const maskChar = this.mask.charAt(maskIndex)

			// We are at max length
			if (!maskChar) {
				break
			}

			const token = tokens[maskChar]

			if (!token) {
				// Add character to formatted
				formatted += maskChar
				if (this.options.cursor && maskChar != value[maskIndex] && this.options.cursor >= maskIndex) {
					this.addedCharacters++
				}
			} else if (token && token.test(this.leftOverString)) {
				// find first valid character in value for given token
				const match = this.leftOverString.match(token)

				if (!match) {
					break
				}

				const value = match[0] ?? 0
				const index = match['index'] ?? 0

				formatted += value
				this.leftOverString = this.leftOverString.slice(index + 1)
			} else {
				// no characters left in value that match current, abort
				break
			}

			maskIndex++
		}

		if ((prevValue && prevValue.length > value.length) || !prevValue) {
			formatted = this.removeTrailingLiterals(formatted)
		}


		if (this.options.maskChar) {
			formatted = this.fillWithMask(formatted)
		}

		return {
			value: formatted,
			addedCharacters: this.addedCharacters,
		}
	}

	/**
	 *
	 * @param value
	 * @returns
	 */
	fillWithMask(value: string): string {

		for (let i = value.length; i<=this.mask.length; i++) {
			const maskChar = this.mask.charAt(i)

			const token = tokens[maskChar]

			if (token) {
				value+=this.options.maskChar
			} else {
				value+=maskChar
			}
		}

		return value
	}

	/**
	 *
	 * @returns boolean
	 */
	condition() : boolean {
		return this.leftOverString.length > 0
	}

	/**
	 * Removes all characters at the end of the string if they are fixed
	 * mask: 9999-9999 | value: 1234- | output: 1234
	 * @param string
	 * @returns
	 */
	removeTrailingLiterals(string: string) : string {
		if (!string.length) {
			return string
		}

		const stringLength = string.length - 1
		const charAt = this.mask.charAt(stringLength)
		const lastCharToken = tokens[charAt]

		if (!lastCharToken) {
			this.addedCharacters--
			return this.removeTrailingLiterals(string.slice(0, -1))
		}

		return string
	}
}

export {
	MaskFormatter
}