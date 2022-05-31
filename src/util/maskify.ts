import { MaskifyReturnValue } from './maskity.types'
import { MaskFormatter } from './MaskFormatter'

const maskify = (string: string, mask: string) : MaskifyReturnValue => {

	const mf = new MaskFormatter(mask)

	return {
		formatted: mf.maskify(string),
		valid: true
	}
}

export default maskify