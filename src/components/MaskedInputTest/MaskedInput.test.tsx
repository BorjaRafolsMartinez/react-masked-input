import React from 'react'
import { render } from '@testing-library/react'

import MaskedInput from './MaskedInput'
import { MaskedInputProps } from './MaskedInput.types'

describe('Test Component', () => {
	let props: MaskedInputProps

	beforeEach(() => {
		props = {
			value: '',
			mask: '',
			onChange: jest.fn()
		}
	})

	const renderComponent = () => render(<MaskedInput {...props} />)

	it('should render', () => {
		const component = renderComponent()

		expect(component).toMatchSnapshot()
	})

	it('should trigger onChange prop', () => {
		renderComponent()
		expect(props.onChange).toBeCalled()
	})
})