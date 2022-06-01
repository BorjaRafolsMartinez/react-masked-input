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

	const renderComponent = (extraProps = {}) => render(<MaskedInput {...props} {...extraProps}/>)

	it('should render', () => {
		const component = renderComponent()

		expect(component).toMatchSnapshot()
	})

	it('should trigger onChange prop', () => {
		renderComponent()
		expect(props.onChange).toBeCalled()
	})

	it('should be able to render disabled', () => {
		const component = renderComponent({
			disabled: true
		})
		expect(props.onChange).toBeCalled()
	})
})