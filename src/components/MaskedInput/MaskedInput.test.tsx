import React from 'react'
import { render } from '@testing-library/react'

import MaskedInput from './MaskedInput'
import { MaskedInputProps } from './MaskedInput.types'

describe('Test Component', () => {
	let props: MaskedInputProps

	beforeEach(() => {
		props = {
			theme: 'primary'
		}
	})

	const renderComponent = () => render(<MaskedInput {...props} />)

	it('should have primary className with default props', () => {
		const { getByTestId } = renderComponent()

		const MaskedInput = getByTestId('masked-input')

		expect(MaskedInput).toHaveClass('masked-input-primary')
	})

	it('should have secondary className with theme set as secondary', () => {
		props.theme = 'secondary'
		const { getByTestId } = renderComponent()

		const MaskedInput = getByTestId('masked-input')

		expect(MaskedInput).toHaveClass('masked-input-secondary')
	})

	it('true', () => {
		expect(1).toBe(1)
	})
})