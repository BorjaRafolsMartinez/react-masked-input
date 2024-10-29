import { MaskifyFormatterOptions, MaskifyFormatterReturnValue } from './maskity.types';
declare class MaskFormatter {
    mask: string;
    leftOverString: string;
    options: MaskifyFormatterOptions;
    addedCharacters: number;
    constructor(mask: string, options?: MaskifyFormatterOptions);
    maskify(value: string, prevValue?: string | null): MaskifyFormatterReturnValue;
    /**
     *
     * @param value
     * @returns
     */
    fillWithMask(value: string): string;
    /**
     *
     * @returns boolean
     */
    condition(): boolean;
    /**
     * Removes all characters at the end of the string if they are fixed
     * mask: 9999-9999 | value: 1234- | output: 1234
     * @param string
     * @returns
     */
    removeTrailingLiterals(string: string): string;
}
export { MaskFormatter };
