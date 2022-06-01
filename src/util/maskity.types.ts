export interface MaskifyReturnValue {
    formatted: string,
    valid: boolean,
    addedCharacters: number
}

export interface MaskifyFormatterOptions {
    maskChar?: string,
    cursor?: number
}

export interface MaskifyFormatterReturnValue {
    value: string,
    addedCharacters: number,
}

export interface MaskifyTestObject {
    mask: string,
    value: string,
    expected: string,
    valid: boolean
}