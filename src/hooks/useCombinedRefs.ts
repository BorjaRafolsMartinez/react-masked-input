import { useRef, useEffect } from 'react'

const useCombinedRefs = <T>(...refs) => {
	const targetRef = useRef<T>()

	useEffect(() => {
		refs.forEach(ref => {
			if (!ref) return

			if (typeof ref === 'function') {
				ref(targetRef.current)
			} else {
				ref.current = targetRef.current
			}
		})
	}, [refs])

	return targetRef
}

export default useCombinedRefs