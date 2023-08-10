import React, { useEffect, useRef, useState, forwardRef, ChangeEvent } from 'react'
import maskify from '../../util/maskify'
import { MaskedInputProps } from './MaskedInput.types'
import './MaskedInput.scss'
import useCombinedRefs from '../../hooks/useCombinedRefs'

const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>((props, ref) => {
	const { mask, onChange, onBlur, children, disabled, readOnly, maskChar, value, ...rest } = props
	const [localValue, setValue] = useState(value || '')
	const [ selection, setSelection ] = useState<[number, number]>([localValue.length, localValue.length])
	const localRef = useRef<HTMLInputElement>(null)
	const inputRef = useCombinedRefs<HTMLInputElement>(localRef, ref)

	useEffect(() => {
		setValue(props.value || '')
	}, [props.value])

	useEffect(() => {
		const { formatted } = maskify(localValue, mask, {
			maskChar
		})

		setValue(formatted)
		const fakeEvent = {
			target: {
				value: formatted,
			},
		} as ChangeEvent<HTMLInputElement>
		onChange(fakeEvent)
	}, [])

	useEffect(() => {
		inputRef.current?.setSelectionRange(...selection)
	}, [selection])

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const { target } = event
		const { selectionEnd, selectionStart } = target
		const start = selectionStart ?? 0
		const end = selectionEnd ?? 0
		const value = event.target.value
		const { formatted, addedCharacters } = maskify(value, mask, {
			cursor: target.selectionEnd ?? 0,
			maskChar
		})

		setValue(formatted)
		setSelection([start   + addedCharacters, end   + addedCharacters])

		event.target.value = formatted // Update the input value

		onChange?.(event)

	}

	if (children) {
		return React.cloneElement(children, {
			...(value  !== null ? {value} : {}),
			disabled,
			readOnly,
			onChange: onChangeHandler,
			onBlur: onBlur,
			ref: inputRef,
			...rest,
		})
	}

	return (
		<input
			value={value !== null ? value : ''}
			onChange={onChangeHandler}
			onBlur={onBlur}
			disabled={disabled}
			readOnly={readOnly}
			ref={inputRef as React.Ref<HTMLInputElement>}
			{...rest}
		/>
	)
})

MaskedInput.displayName = 'MaskedInput'

MaskedInput.defaultProps = {
	mask: '',
	onChange: () => void(0),
	disabled: false
}

export default MaskedInput