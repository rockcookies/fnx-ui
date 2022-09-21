import { useContext, useEffect } from 'react';
import useMergedPropRef from '../../hooks/use-merged-prop-ref';
import { PopupContext } from '../context';

const useOnPopupOpen = (callback: () => void) => {
	const ctx = useContext(PopupContext);

	const callbackRef = useMergedPropRef(callback);

	useEffect(() => {
		if (ctx.visible === true) {
			callbackRef.current();
		}
	}, [callbackRef, ctx.visible]);
};

export default useOnPopupOpen;
