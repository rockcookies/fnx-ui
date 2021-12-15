import React, { Dispatch, SetStateAction } from 'react';
import useUnmountedRef from './use-unmounted-ref';

function useSafeState<S>(
	initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>];

function useSafeState<S = undefined>(): [
	S | undefined,
	Dispatch<SetStateAction<S | undefined>>,
];

function useSafeState<S>(initialState?: S | (() => S)) {
	const unmountedRef = useUnmountedRef();

	const [state, setState] = React.useState(initialState);

	const setCurrentState = React.useCallback(
		(currentState) => {
			if (unmountedRef.current) return;
			setState(currentState);
		},
		[unmountedRef],
	);

	return [state, setCurrentState];
}

export default useSafeState;
