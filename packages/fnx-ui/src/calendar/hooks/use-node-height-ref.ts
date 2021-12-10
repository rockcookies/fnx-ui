import { MutableRefObject, useEffect, useRef } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

function useNodeHeightRef(
	nodeRef: MutableRefObject<HTMLElement | null>,
): MutableRefObject<number> {
	const heightRef = useRef(0);

	useEffect(() => {
		const node = nodeRef.current;

		let observer: ResizeObserver | undefined;

		if (node) {
			heightRef.current = Math.floor(node.getBoundingClientRect().height);

			observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
				heightRef.current = Math.floor(
					entries[0]?.contentRect?.height || 0,
				);
			});

			observer.observe(node);
		}

		return () => {
			observer && observer.disconnect;
		};
	}, [nodeRef]);

	return heightRef;
}

export default useNodeHeightRef;
