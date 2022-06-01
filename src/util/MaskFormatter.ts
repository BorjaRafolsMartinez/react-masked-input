const tokens = {
	'0': /\d/,
	'9': /\d/,
	'#': /\d/,
	'A': /[a-zA-Z0-9]/,
	'S': /[a-zA-Z]/,
	'U': /[a-zA-Z]/,
	'L': /[a-zA-Z]/,
}

class MaskFormatter {

	mask: string = null
	leftOverString: string = null

	constructor(mask: string) {
		this.mask = mask
	}

	maskify(value: string) : string {
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
			} else if (token && token.test(this.leftOverString)) {
				// find first valid character in value for given token
				const match = this.leftOverString.match(token)

				const value = match[0]
				const index = match['index']

				formatted += value
				this.leftOverString = this.leftOverString.slice(index + 1)
			} else {
				// no characters left in value that match current, abort
				break
			}

			maskIndex++
		}


		return this.removeTrailingLiterals(formatted)
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
			return this.removeTrailingLiterals(string.slice(0, -1))
		}

		return string
	}
}

export {
	MaskFormatter
}