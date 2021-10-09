import { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { resetScroll } from '../utils/dom/scroll';

const useFocus = <T = string>(
	value: T,
	{
		node,
		readonly,
		onFocus,
		onBlur,
	}: {
		node?: RefObject<HTMLElement>;
		readonly?: boolean;
		onFocus?: (v: T) => void;
		onBlur?: (v: T) => void;
	},
) => {
	const tRef = useRef<ReturnType<typeof setTimeout>>();
	const [focus, setFocus] = useState(false);

	const clear = useCallback(() => {
		if (tRef.current) {
			clearTimeout(tRef.current);
		}
	}, []);

	useEffect(() => {
		return clear;
	}, [clear]);

	const handleFocus = () => {
		if (!focus) {
			setFocus(true);

			if (readonly && node && node.current) {
				node.current.blur();
			}

			onFocus && onFocus(value);
		}
	};

	const handleBlur = () => {
		if (focus) {
			setFocus(false);
			resetScroll();
			onBlur && onBlur(value);
		}
	};

	return {
		focus,
		onFocus: () => {
			clear();
			handleFocus();
		},
		onBlur: () => {
			// hack, 仅在 pc 的时候
			// 可能是 Touchable pc 实现有问题
			tRef.current = setTimeout(
				() => {
					handleBlur();
				},
				'ontouchstart' in window ? 0 : 200,
			);
		},
	};
};

export default useFocus;
