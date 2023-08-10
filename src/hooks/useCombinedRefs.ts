import { useRef, useEffect, ForwardedRef, RefObject, MutableRefObject } from 'react'

const useCombinedRefs = <T>(...refs: Array<RefObject<T> | ((instance: T | null) => void) | ForwardedRef<T>>) => {
	const targetRef = useRef<T>(null)

	useEffect(() => {
		refs.forEach(ref => {
			if (!ref) return

			if (typeof ref === 'function') {
				ref(targetRef.current)
			} else if ('current' in ref) {
				(ref as MutableRefObject<T | null>).current = targetRef.current
			}
		})
	}, [refs])

	return targetRef
}

export default useCombinedRefs