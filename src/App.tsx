import React, { useRef, useState } from 'react'
import MaskedInput from './components/MaskedInput/MaskedInput'

const App = function () {
	//const [value, setValue] = useState('100')
	const [value, setValue] = useState('')
	const mask = '+00 (00) 0000-0000'
	const onChange = (value) => {
		setValue(value)
	}

	const ref = useRef<HTMLInputElement>(null)

	return (
		<>
			<h1>App Tests</h1>
			<label>App.mask: {mask}</label> <br />
			<label>App.value: {value}</label> <br />
			<MaskedInput value={value} onChange={onChange} mask={mask}/>

			<MaskedInput value={value} onChange={onChange} mask={mask}>
				<input name="test"></input>
			</MaskedInput>

			<MaskedInput value={value} onChange={onChange} mask={mask} ref={ref} />

			<button onClick={() => {
				ref.current.focus()
			}}>Focus</button>
		</>
	)
}
export default App