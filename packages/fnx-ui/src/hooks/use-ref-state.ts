import {
	Dispatch,
	MutableRefObject,
	SetStateAction,
	useState,
	useRef,
} from 'react';
import { useCallback } from 'react';

function useRefState<S>(
	initialState: S | (() => S),
): [S, MutableRefObject<S>, Dispatch<SetStateAction<S>>] {
	const [state, _setState] = useState<S>(initialState);

	const stateRef = useRef<S>(state);
	const setState: Dispatch<React.SetStateAction<S>> = useCallback(
		(nextState) => {
			const state =
				typeof nextState === 'function'
					? (nextState as any)(stateRef.current)
					: nextState;

			stateRef.current = state;
			_setState(state);
		},
		[],
	);

	return [state, stateRef, setState];
}

export default useRefState;
