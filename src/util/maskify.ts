import { MaskifyFormatterOptions, MaskifyReturnValue } from './maskity.types'
import { MaskFormatter } from './MaskFormatter'

const maskify = (string: string, mask: string, options: MaskifyFormatterOptions = {}, prevValue: string|null = null) : MaskifyReturnValue => {

	const mf = new MaskFormatter(mask, options)
	const { value, addedCharacters } = mf.maskify(string, prevValue)

	return {
		formatted: value,
		valid: true,
		addedCharacters,
	}
}

export default maskify