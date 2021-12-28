import { RefObject, useEffect, useState } from 'react';
import { IS_BROWSER } from '../utils/detect';

function isInViewPort(el?: HTMLElement | null): boolean | undefined {
	if (!el) {
		return;
	}

	const viewPortWidth =
		window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;

	const viewPortHeight =
		window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;

	const rect = el.getBoundingClientRect();

	if (rect) {
		const { top, bottom, left, right } = rect;

		return (
			bottom > 0 &&
			top <= viewPortHeight &&
			left <= viewPortWidth &&
			right > 0
		);
	}

	return false;
}

function useInViewport(
	nodeRef?: RefObject<HTMLElement | null | undefined>,
): boolean | undefined {
	const [inViewPort, setInViewport] = useState<boolean | undefined>(() => {
		if (!IS_BROWSER || !window.IntersectionObserver) return true;

		return isInViewPort(nodeRef?.current);
	});

	useEffect(() => {
		const node = nodeRef?.current;

		if (!node || !IS_BROWSER || !window.IntersectionObserver) {
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.some((entry) => {
					if (entry.intersectionRatio > 0) {
						setInViewport(true);
						observer.disconnect();
						return true;
					}
					return false;
				});
			},
			{
				threshold: [0.0001],
			},
		);

		observer.observe(node);

		return () => {
			observer.disconnect();
		};
	}, [nodeRef]);

	return inViewPort;
}

export default useInViewport;
