import React, { useEffect, useRef, useState } from 'react'
import maskify from '../../util/maskify'
import { MaskedInput } from './MaskedInput.types'
import './MaskedInput.scss'

const MaskedInput : React.FC<MaskedInput> = (props) => {
	const { mask, onChange, onBlur, children, disabled, readOnly, maskChar } = props
	const [value, setValue] = useState(props.value)
	const [ selection, setSelection ] = useState<[number, number]>([props.value.length, props.value.length])
	const ref = useRef<HTMLInputElement>(null)

	useEffect(() => {
		setValue(props.value)
	}, [props.value])

	useEffect(() => {
		const { formatted } = maskify(value, mask, {
			maskChar
		})

		setValue(formatted)
		onChange(formatted)
	}, [])

	useEffect(() => {
		ref.current?.setSelectionRange(...selection)
	}, [selection])

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { target } = e
		const { selectionEnd, selectionStart } = target
		const value = e.target.value

		const { formatted, addedCharacters } = maskify(value, mask, {
			cursor: target.selectionEnd,
			maskChar
		})

		setValue(formatted)
		onChange(formatted)

		setSelection([selectionStart + addedCharacters, selectionEnd + addedCharacters])
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
			onBlur: onBlurHandler,
			ref
		})
	}

	return (
		<input
			value={value}
			onChange={onChangeHandler}
			onBlur={onBlurHandler}
			disabled={disabled}
			readOnly={readOnly}
			ref={ref}
		/>


	)
}

MaskedInput.defaultProps = {
	value: '',
	mask: '',
	onChange: () => {},
	disabled: false
}

export default MaskedInput