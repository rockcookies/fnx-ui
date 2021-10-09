import { createBEM } from '../utils/namespace';
import { cancelRaf, raf } from '../utils/raf';

const NS = 'fnx-tabs';
export const _bem = createBEM(NS);

export const scrollLeftTo = (
	scrollElement: HTMLElement,
	to: number,
	duration: number,
): (() => void) => {
	let count = 0;
	const from = scrollElement.scrollLeft;
	const frames = duration === 0 ? 1 : Math.round(duration / 16);
	let rafId: number | undefined;

	function animate() {
		scrollElement.scrollLeft += (to - from) / frames;

		if (++count < frames) {
			rafId = raf(animate);
		} else {
			rafId = undefined;
		}
	}

	animate();

	return () => {
		if (rafId != null) {
			cancelRaf(rafId);
		}
	};
};
