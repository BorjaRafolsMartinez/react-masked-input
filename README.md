# react-input-mask

# Instalation
```npm install ```

# Usage
```jsx
import React from "react"
import MaskInput from "react-input-mask";

const NumberInput = (props) => {
    const [value, setValue] = useState('')
	const mask = '+00 (00) 0000-0000'
	const onChange = (value) => {
		setValue(value)
	}
  
    return (
        <MaskInput value={value} onChange={onChange} mask={mask}/>
    )
}
```

# Properties
| Name      | Type                  | Description |
| --------  | --------------------- | ----------- |
| value     | string                |
| mask      | string                |
| onChange  | `{Function}` (value: string) => void |
| children? | `{React.ReactElement}`|

### `Mask`
Mask format
```jsx
<MaskInput mask="9999" />
<MaskInput mask="99/99/9999" />
```

The following characters define a mask format
| Character | Allowed input |
| --------- | ------------- |
|     9     |      0-9      |
|     S     |    a-z, A-Z   |
|     A     | 0-9, a-z, A-Z |