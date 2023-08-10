import React, { ChangeEventHandler, FocusEventHandler } from 'react';
export interface MaskedInputProps {
    value?: string | null;
    mask: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onBlur?: FocusEventHandler<HTMLInputElement>;
    children?: React.ReactElement;
    disabled?: boolean;
    readOnly?: boolean;
    maskChar?: string;
}
