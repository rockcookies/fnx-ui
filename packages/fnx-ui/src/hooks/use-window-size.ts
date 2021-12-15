import { useEffect, useMemo, useState } from 'react';
import { IS_BROWSER } from '../utils/detect';
import { listenWindowResize } from '../utils/dom/event';

function useWindowSize(): { width: number; height: number } {
	const [width, setWidth] = useState(() =>
		IS_BROWSER ? window.innerWidth : 0,
	);

	const [height, setHeight] = useState(() =>
		IS_BROWSER ? window.innerHeight : 0,
	);

	useEffect(() => {
		return listenWindowResize(() => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		});
	}, []);

	return useMemo(() => ({ width, height }), [width, height]);
}

export default useWindowSize;
