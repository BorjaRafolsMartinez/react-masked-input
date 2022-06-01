import React, { useState } from 'react'
import MaskedInput from './components/MaskedInput/MaskedInput'

const App = function () {
	//const [value, setValue] = useState('100')
	const [value, setValue] = useState('')
	const mask = '+00 (00) 0000-0000'
	const onChange = (value) => {
		setValue(value)
	}

	return (
		<>
			<h1>App Tests</h1>
			<label>App.mask: {mask}</label> <br />
			<label>App.value: {value}</label> <br />
			<MaskedInput value={value} onChange={onChange} mask={mask}/>

			<MaskedInput value={value} onChange={onChange} mask={mask}>
				<input name="test"></input>
			</MaskedInput>
		</>
	)
}
export default App