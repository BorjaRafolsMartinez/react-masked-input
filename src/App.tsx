import React, { ChangeEventHandler, useRef, useState } from 'react'
import MaskedInput from './components/MaskedInput/MaskedInput'

const App = function () {
	const [value, setValue] = useState('')
	const [value2, setValue2] = useState('')
	const mask = '+00 (00) 0000-0000'
	const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value)
	}
	const onChange2: ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue2(e.target.value)
	}

	const ref = useRef<HTMLInputElement>(null)

	return (
		<>
			<h1>App Tests</h1>
			<label>App.mask: {mask}</label> <br />
			<label>App.value: {value}</label> <br />
			<MaskedInput onChange={onChange} mask={mask}/>
			<MaskedInput value={value} onChange={onChange} mask={mask}/>
			<MaskedInput value={value} onChange={onChange} mask={mask}>
				<input name="test"></input>
			</MaskedInput>

			<MaskedInput value={value} onChange={onChange} mask={mask} ref={ref} />

			<br />
			<label>App.mask: {mask}</label> <br />
			<label>App.value: {value}</label> <br />
			<MaskedInput value={value2} onChange={onChange2} mask={'99/99/9999'} />

			<button onClick={() => {
				ref.current?.focus()
			}}>Focus</button>
		</>
	)
}
export default App