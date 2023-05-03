import React, { ReactElement, createRef } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import MaskedInput from './MaskedInput'
import { MaskedInputProps } from './MaskedInput.types'

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

	const renderComponent = (extraProps = {}, child?: ReactElement) => {
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
		it('should be able to render disabled', async () => {
			renderComponent({
				disabled: true
			}, <input />)
			expect(props.onChange).toBeCalledTimes(1)

			const input = await screen.findByRole('textbox')
			userEvent.type(input, '12345678')

			expect(props.onChange).toBeCalledTimes(1)
		})

		it('should be able to render readonly', async () => {
			renderComponent({
				readOnly: true,
				disabled: true
			}, <input />)
			const input = await screen.findByRole('textbox')
			expect(input.getAttribute('readonly')).not.toBe(null)
		})

		it('should call props.onBlur when loosing focus', async () => {
			renderComponent()

			const input = await screen.findByRole('textbox')
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

	it('should be able to render disabled', async () => {
		renderComponent({
			disabled: true
		})
		expect(props.onChange).toBeCalledTimes(1)

		const input = await screen.findByRole('textbox')
		userEvent.type(input, '12345678')

		expect(props.onChange).toBeCalledTimes(1)
	})

	it('should be able to render readonly', async () => {
		renderComponent({
			readOnly: true,
			disabled: true
		})

		const input = await screen.findByRole('textbox')
		expect(input.getAttribute('readonly')).not.toBe(null)
	})

	it('should call props.onBlur when loosing focus', async () => {
		renderComponent()

		const input = await screen.findByRole('textbox')
		fireEvent.blur(input)

		expect(input).not.toHaveFocus()
		expect(props.onBlur).toBeCalledTimes(1)
	})

	it('accepts a external ref', () => {

		const ref = createRef<HTMLInputElement>()
		const { container } = renderComponent({
			ref,
		})
		const input = container.querySelector('input')

		ref.current?.focus()
		expect(input).toHaveFocus()
		ref.current?.blur()
		expect(input).not.toHaveFocus()
	})
})