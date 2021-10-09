import { MutableRefObject, useRef } from 'react';
import useDefaults from './use-defaults';

function useDefaultsRef<T>(
	defaultValue: T,
	...args: Array<T | void>
): MutableRefObject<T> {
	const value = useDefaults<T>(defaultValue, ...args);

	const ref = useRef(value);
	ref.current = value;

	return ref;
}

export default useDefaultsRef;
