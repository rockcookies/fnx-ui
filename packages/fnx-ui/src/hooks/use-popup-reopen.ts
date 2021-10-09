import { createContext, useContext } from 'react';
import useDefaultsRef from './use-defaults-ref';
import useUpdateEffect from './use-update-effect';

export const PopupVisibleContext = createContext<{ visible?: boolean }>({});

const usePopupReopen = (callback: () => void) => {
	const ctx = useContext(PopupVisibleContext);

	const callbackRef = useDefaultsRef(callback);

	useUpdateEffect(() => {
		if (ctx.visible === true) {
			callbackRef.current();
		}
	}, [callbackRef, ctx.visible]);
};

export default usePopupReopen;
