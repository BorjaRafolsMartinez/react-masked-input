import React from 'react'

export interface MaskedInputProps {
    value: string,
    mask: string,
    onChange(value: string): void,
    children?: React.ReactElement
}