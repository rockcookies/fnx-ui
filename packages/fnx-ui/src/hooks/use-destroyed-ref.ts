import { useRef, useEffect } from 'react';

const useDestroyedRef = () => {
	const destroyedRef = useRef(false);
	useEffect(() => {
		destroyedRef.current = false;

		return () => {
			destroyedRef.current = true;
		};
	}, []);
	return destroyedRef;
};

export default useDestroyedRef;
