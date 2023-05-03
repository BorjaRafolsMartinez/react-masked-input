import React, { useEffect, useRef, useState, forwardRef } from 'react'
import maskify from '../../util/maskify'
import { MaskedInputProps } from './MaskedInput.types'
import './MaskedInput.scss'
import useCombinedRefs from '../../hooks/useCombinedRefs'

const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>((props, ref) => {
	const { mask, onChange, onBlur, children, disabled, readOnly, maskChar } = props
	const [value, setValue] = useState(props.value)
	const [ selection, setSelection ] = useState<[number, number]>([props.value.length, props.value.length])
	const localRef = useRef<HTMLInputElement>(null)
	const inputRef = useCombinedRefs<HTMLInputElement>(localRef, ref)

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
		inputRef.current?.setSelectionRange(...selection)
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
			ref: inputRef
		})
	}

	return (
		<input
			value={value}
			onChange={onChangeHandler}
			onBlur={onBlurHandler}
			disabled={disabled}
			readOnly={readOnly}
			ref={inputRef}
		/>


	)
})

MaskedInput.displayName = 'MaskedInput'

MaskedInput.defaultProps = {
	value: '',
	mask: '',
	onChange: () => void(0),
	disabled: false
}

export default MaskedInput