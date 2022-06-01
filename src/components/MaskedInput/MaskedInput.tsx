import React, { useEffect, useState } from 'react'
import maskify from '../../util/maskify'
import { MaskedInput } from './MaskedInput.types'

const MaskedInput : React.FC<MaskedInput> = (props) => {
	const { mask, onChange, onBlur, children, disabled, readOnly } = props
	const [value, setValue] = useState(props.value)

	useEffect(() => {
		setValue(props.value)
	}, [props.value])

	useEffect(() => {
		const { formatted } = maskify(value, mask)

		setValue(formatted)
		onChange(formatted)
	}, [])

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value

		const { formatted } = maskify(value, mask)

		setValue(formatted)
		onChange(formatted)
	}

	const onBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value

		onBlur && onBlur(value)
	}

	if (children) {
		return React.cloneElement(children, {
			value,
			disabled,
			readOnly,
			onChange: onChangeHandler,
			onBlur: onBlurHandler
		})
	}

	return (
		<input
			value={value}
			onChange={onChangeHandler}
			onBlur={onBlurHandler}
			disabled={disabled}
			readOnly={readOnly} />
	)
}

MaskedInput.defaultProps = {
	value: '',
	mask: '',
	onChange: () => {},
	disabled: false
}

export default MaskedInput