import { MaskifyFormatterOptions, MaskifyReturnValue } from './maskity.types';
declare const maskify: (string: string, mask: string, options?: MaskifyFormatterOptions, prevValue?: string | null) => MaskifyReturnValue;
export default maskify;
