import { MutableRefObject, useRef } from 'react';

function useConstantRef<T>(value: T): MutableRefObject<T> {
	const ref = useRef(value);
	ref.current = value;

	return ref;
}

export default useConstantRef;
