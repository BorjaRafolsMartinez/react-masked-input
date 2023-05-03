import React from 'react'

export interface MaskedInputProps {
    value: string,
    mask: string,
    onChange(value: string): void,
    onBlur?(value: string): void,
    children?: React.ReactElement,
    disabled?: boolean,
    readOnly?: boolean,
    maskChar?: string,
}