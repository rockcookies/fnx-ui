import { useContext, useEffect } from 'react';
import useDefaultsRef from '../../hooks/use-defaults-ref';
import { PopupContext } from '../context';

const useOnPopupOpen = (callback: () => void) => {
	const ctx = useContext(PopupContext);

	const callbackRef = useDefaultsRef(callback);

	useEffect(() => {
		if (ctx.visible === true) {
			callbackRef.current();
		}
	}, [callbackRef, ctx.visible]);
};

export default useOnPopupOpen;
