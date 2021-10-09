import { clamp } from '../utils/format';

export function adjustActiveIndex<T>(
	index: number,
	options: T[],
	disabled: (o: T) => boolean,
): number {
	index = clamp(index, 0, Math.max(options.length - 1, 0));

	for (let i = index; i < options.length; i++) {
		if (!disabled(options[i])) return i;
	}
	for (let i = index - 1; i >= 0; i--) {
		if (!disabled(options[i])) return i;
	}

	return index;
}
