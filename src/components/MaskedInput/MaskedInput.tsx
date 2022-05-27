import React, { useState } from 'react'

import { MaskedInputProps } from './MaskedInput.types'
import './MaskedInput.scss'

const MaskedInput: React.FC<MaskedInputProps> = ({ theme }) => {
	const [test, setTest] = useState(0)
	return (
		<div
			data-testid="masked-input"
			className={`masked-input masked-input-${theme}`}
		>
			<h1 className="heading">I'm the test component</h1>
			<h2>Made with love by Harvey</h2>
		</div>
	)
}

export default MaskedInput