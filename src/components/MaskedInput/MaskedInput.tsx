import React, { useEffect, useState } from 'react'
import maskify from '../../util/maskify'
import { MaskedInput } from './MaskedInput.types'

const MaskedInput : React.FC<MaskedInput> = (props) => {
	const { mask, onChange, children } = props
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