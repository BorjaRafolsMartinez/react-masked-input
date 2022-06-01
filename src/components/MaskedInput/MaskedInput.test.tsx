import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MaskedInput from './MaskedInput'
import { MaskedInput as MaskedInputProps } from './MaskedInput.types'

describe('MaskedInput', () => {
	let props: MaskedInputProps

	beforeEach(() => {
		props = {
			value: '',
			mask: '',
			onChange: jest.fn(),
			onBlur: jest.fn(),
		}
	})

	const renderComponent = (extraProps = {}, child = null) => {
		if (child) {
			return (
				render(
					<MaskedInput {...props} {...extraProps}>
						{child}
					</MaskedInput>
				)
			)
		} else {
			return render(<MaskedInput {...props} {...extraProps}/>)
		}
	}

	describe('with child component as input', () => {
		it('should be able to render disabled', () => {
			const { container } = renderComponent({
				disabled: true
			}, <input />)
			expect(props.onChange).toBeCalledTimes(1)

			const input = container.querySelector('input')
			userEvent.type(input, '12345678')

			expect(props.onChange).toBeCalledTimes(1)
		})

		it('should be able to render readonly', () => {
			const { container } = renderComponent({
				readOnly: true,
				disabled: true
			}, <input />)
			const input = container.querySelector('input')
			expect(input.getAttribute('readonly')).not.toBe(null)
		})

		it('should call props.onBlur when loosing focus', () => {
			const { container } = renderComponent()

			const input = container.querySelector('input')
			fireEvent.blur(input)

			expect(input).not.toHaveFocus()
			expect(props.onBlur).toBeCalledTimes(1)
		})
	})

	it('should render', () => {
		const component = renderComponent()

		expect(component).toMatchSnapshot()
	})

	it('should trigger onChange prop', () => {
		renderComponent()
		expect(props.onChange).toBeCalled()
	})

	it('should be able to render disabled', () => {
		const { container } = renderComponent({
			disabled: true
		})
		expect(props.onChange).toBeCalledTimes(1)

		const input = container.querySelector('input')
		userEvent.type(input, '12345678')

		expect(props.onChange).toBeCalledTimes(1)
	})

	it('should be able to render readonly', () => {
		const { container } = renderComponent({
			readOnly: true,
			disabled: true
		})
		const input = container.querySelector('input')
		expect(input.getAttribute('readonly')).not.toBe(null)
	})

	it('should call props.onBlur when loosing focus', () => {
		const { container } = renderComponent()

		const input = container.querySelector('input')
		fireEvent.blur(input)

		expect(input).not.toHaveFocus()
		expect(props.onBlur).toBeCalledTimes(1)
	})
})