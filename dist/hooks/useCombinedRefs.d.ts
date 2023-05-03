/// <reference types="react" />
declare const useCombinedRefs: <T>(...refs: any[]) => import("react").MutableRefObject<T>;
export default useCombinedRefs;
