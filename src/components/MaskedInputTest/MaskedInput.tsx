import React, { useEffect, useState } from 'react'
import maskify from '../../util/maskify'
import { MaskedInputProps } from './MaskedInput.types'

const MaskedInput : React.FC<MaskedInputProps> = (props) => {
	const { mask, onChange, children } = props
	const [value, setValue] = useState(props.value)

	useEffect(() => {
		console.log('props.value.changed', props.value)
		setValue(props.value)
	}, [props.value])

	useEffect(() => {
		console.log('initial mask')
		const { formatted } = maskify(value, mask)

		setValue(formatted)
		onChange(formatted)
	}, [])

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		console.log('MaskedInput.onChangeHandler', value)

		const { formatted } = maskify(value, mask)

		setValue(formatted)
		onChange(formatted)
	}

	if (children) {
		return React.cloneElement(children, {
			value,
			onChange: onChangeHandler
		})
	}

	return (
		<input value={value} onChange={onChangeHandler}/>
	)
}

export default MaskedInput