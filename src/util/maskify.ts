import { MaskifyReturnValue } from './maskity.types'

const tokens = {
	'0': {pattern: /\d/, _default: '0'},
	'9': {pattern: /\d/, optional: true},
	'#': {pattern: /\d/, optional: true, recursive: true},
	'A': {pattern: /[a-zA-Z0-9]/},
	'S': {pattern: /[a-zA-Z]/},
	'U': {pattern: /[a-zA-Z]/, transform: function(c) { return c.toLocaleUpperCase() }},
	'L': {pattern: /[a-zA-Z]/, transform: function(c) { return c.toLocaleLowerCase() }},
}

const recursiveMask = '#.##'

const regex = recursiveMask.split('').map((token) => {
	if (tokens[token]) {
		return tokens[token].pattern
	}

	return token
}).join('')

const continueCondition = (current: number, end: number, avoidInfiniteLoop) : boolean =>  {
	if (avoidInfiniteLoop > 20) return false
	return current < end
}

const maskifyAlternative = (string: string, mask: string) => {
	/**
     * Loop over mask
    1.- take first character of mask
    2.- find first ocurrence of value compatible with mask in string
    3.- remove first character of mask
    4.- remove all characters till first ocurrence (2) from string
    5.- append first ocurrence to "formatted"

    SPECIAL CASES:
        (NOT TOKEN CHARACTER IN MASK)
        1.- take first character of mask
        2.- character is NOT a token
        3.- append character to "formatted"
        4.- remove first character of mask

        99.#
        (RECURSIVE TOKEN CHARACTER)
        1.- take first character of mask
        2.- character is a recursive token
        3.- find all compatible characters with token
        4.- append or string


    find first
     */
}

const maskify = (string: string, mask: string) : MaskifyReturnValue => {

	const start = 0
	const end = mask.length
	const valid = true
	let formatted = ''
	let stringPosition = 0
	let maskPosition = 0
	let avoidInfiniteLoop = 0

	while(continueCondition(maskPosition,end, avoidInfiniteLoop)) {
		const stringChar = string.charAt(stringPosition) //a
		const patternChar = mask.charAt(maskPosition) //9
		const token = tokens[patternChar]

		console.log('while', {
			stringChar,
			stringPosition,
			patternChar,
			maskPosition,
			token,
			'string.length':string.length
		})

		if (!token && maskPosition >= string.length) {
			break
		} else if (!token) {
			formatted += patternChar
			++maskPosition
		} else if (token.pattern.test(stringChar)) {
			formatted += stringChar
			stringPosition++
			maskPosition++
		} else {
			//console.log('elses')
			avoidInfiniteLoop++
			stringPosition++
			//console.log('while.end', formatted)
			continue
		}

		//console.log('while.end', formatted)

		++avoidInfiniteLoop
	}

	return {
		formatted,
		valid
	}

	/**
     * Loop over the mask
     */
	for (let maskPosition = start; maskPosition < end; maskPosition++) {
		const stringChar = string.charAt(stringPosition)
		const patternChar = mask.charAt(maskPosition)
		const token = tokens[patternChar]

		/**
         * If we don't find a token for that char in the mask, just add the character
         */
		if (!token) {
			formatted += patternChar
		} else if (token.pattern.test(stringChar)) {
			formatted += stringChar
			stringPosition++
		} else {
			console.log('else')
			// maskPosition--
			stringPosition++
			continue
		}
	}

	return {
		formatted,
		valid
	}
}

export default maskify