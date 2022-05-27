import maskify from './maskify'
import { MaskifyTestObject } from './maskity.types'

const test = (p: MaskifyTestObject) => {
	const { mask, value, expected, valid } = p
	const result = maskify(value, mask)
	expect(result.valid).toBe(valid)
	expect(result.formatted).toBe(expected)
}

describe('maskify', () => {
	describe('numbers', () => {

		it('should mask numbers', () => {
			const mask = '9999-9999'
			const value = '12345678'

			test({
				mask,
				value,
				valid: true,
				expected: '1234-5678'
			})
		})

		it('should render 1234 as \'1234-\' with mask 9999-9999', () => {
			const mask = '9999-9999'
			const value = '1234'

			test({
				mask,
				value,
				valid: true,
				expected: '1234'
			})
		})

		it('should render 12345 as \'1234-5\' with mask 9999-9999', () => {
			const mask = '9999-9999'
			const value = '12345'

			test({
				mask,
				value,
				valid: true,
				expected: '1234-5'
			})
		})

		it('should not mask non numeric characters', () => {
			const mask = '9999-9999'
			const value = 'a12345678'

			test({
				mask,
				value,
				valid: true,
				expected: '1234-5678'
			})
		})
	})

	describe('dates', () => {
		it('should render 12 as \'12/--/--\' with mask 99/99/99', () => {
			const mask = '99/99/99'
			const value = '12'
			test({
				mask,
				value,
				valid: true,
				expected: '12/'
			})
		})
	})

	describe('phone', () => {
		it('should render 553122222222 as \'+55 (31) 2222-2222\' with mask \'+00 (00) 0000-0000\'', () => {
			const mask = '+00 (00) 0000-0000'
			const value = '553122222222'

			test({
				mask,
				value,
				valid: true,
				expected: '+55 (31) 2222-2222'
			})
		})

		it('should render 553122 as \'+55 (31) 22\' with mask \'+00 (00) 0000-0000\'', () => {
			const mask = '+00 (00) 0000-0000'
			const value = '553122'

			test({
				mask,
				value,
				valid: true,
				expected: '+55 (31) 22'
			})
		})
	})
})