export interface MaskifyReturnValue {
    formatted: string;
    valid: boolean;
}
export interface MaskifyTestObject {
    mask: string;
    value: string;
    expected: string;
    valid: boolean;
}
