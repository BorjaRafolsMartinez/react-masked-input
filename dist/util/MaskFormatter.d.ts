declare class MaskFormatter {
    mask: string;
    leftOverString: string;
    constructor(mask: string);
    maskify(value: string): string;
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
