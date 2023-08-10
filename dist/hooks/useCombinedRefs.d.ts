import { ForwardedRef, RefObject } from 'react';
declare const useCombinedRefs: <T>(...refs: (RefObject<T> | ForwardedRef<T> | ((instance: T | null) => void))[]) => RefObject<T>;
export default useCombinedRefs;
