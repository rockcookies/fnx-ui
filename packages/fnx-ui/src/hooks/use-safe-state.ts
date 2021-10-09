import React, { Dispatch, SetStateAction } from 'react';
import useDestroyedRef from './use-destroyed-ref';

function useSafeState<S>(
	initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>];

function useSafeState<S = undefined>(): [
	S | undefined,
	Dispatch<SetStateAction<S | undefined>>,
];

function useSafeState(initialState?: any) {
	const destroyedRef = useDestroyedRef();

	const [state, setState] = React.useState(initialState);

	const setCurrentState = React.useCallback(
		(currentState) => {
			/** 如果组件已经卸载则不再更新 state */
			if (destroyedRef.current) return;
			setState(currentState);
		},
		[destroyedRef],
	);

	return [state, setCurrentState] as const;
}

export default useSafeState;
