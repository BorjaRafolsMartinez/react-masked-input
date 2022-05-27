import React, { useEffect } from 'react'
import maskify from '../util/maskify'
const MaskInput = function () {
	useEffect(() => {
		const mask = '####-####'
		const value = 'a99999999'
		const expect = '9999-9999'
		console.log('maskify', maskify(value, mask))
	}, [])

	return (
		<input />
	)
}

export default MaskInput