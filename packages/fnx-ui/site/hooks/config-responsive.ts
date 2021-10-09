import { useEffect, useState } from 'react';
import { Dictionary } from '../../src/utils/interface';

type ResponsiveInfo<T extends Dictionary<number>> = { [K in keyof T]: boolean };

function configResponsive<T extends Dictionary<number>>(
	query: T,
): () => [ResponsiveInfo<T> | undefined] {
	const subscribers = new Set<() => void>();
	let info: ResponsiveInfo<T> | undefined;

	const calculate = () => {
		const width = window.innerWidth;
		const newInfo: any = {};

		let shouldUpdate = false;

		for (const key of Object.keys(query)) {
			newInfo[key] = width >= query[key];

			if (!info || newInfo[key] !== info[key]) {
				shouldUpdate = true;
			}
		}

		if (shouldUpdate) {
			info = newInfo;
		}
	};

	const init = () => {
		if (info || typeof window === 'undefined') return;

		calculate();

		window.addEventListener('resize', () => {
			const oldInfo = info;

			calculate();

			if (oldInfo === info) return;

			for (const subscriber of subscribers) {
				subscriber();
			}
		});
	};

	return (): [ResponsiveInfo<T> | undefined] => {
		init();
		const windowExists = typeof window !== 'undefined';
		const [state, setState] = useState<ResponsiveInfo<T> | undefined>(info);

		useEffect(() => {
			if (!windowExists) {
				return;
			}

			const subscriber = () => {
				setState(info);
			};

			subscribers.add(subscriber);

			return () => {
				subscribers.delete(subscriber);
			};
		}, [windowExists]);

		return [state];
	};
}

export default configResponsive;
