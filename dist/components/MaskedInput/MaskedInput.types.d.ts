import React from 'react';
export interface MaskedInput {
    value: string;
    mask: string;
    onChange(value: string): void;
    children?: React.ReactElement;
}
