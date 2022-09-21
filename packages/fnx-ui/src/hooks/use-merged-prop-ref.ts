import { MutableRefObject } from 'react';
import useConstantRef from './use-constant-ref';
import useMergedProp from './use-merged-prop';

function useMergedPropRef<T>(
	defaultValue: T,
	...args: Array<T | void>
): MutableRefObject<T> {
	const value = useMergedProp<T>(defaultValue, ...args);
	return useConstantRef(value);
}

export default useMergedPropRef;
