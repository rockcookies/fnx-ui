import { Dictionary } from '../utils/interface';
import { getProperty, isEqualArrays } from '../utils/misc';
import useCreation from './use-creation';

function toArray(arr?: any): undefined | string[] {
	if (arr == null) {
		return;
	}

	if (Array.isArray(arr)) {
		return arr.length > 0 ? arr : undefined;
	}

	return [arr];
}

function configDataNames<T, G>(defaults: Required<T>): (names?: T) => G {
	const keys = Object.keys(defaults);
	const defaultNames: Dictionary<string[]> = {};
	const defaultGetters: Dictionary = {};

	for (const key of keys) {
		const name = toArray((defaults as any)[key]) || [];

		defaultGetters[key] = (t: any) => getProperty(t, name);
		defaultNames[key] = name;
	}

	return (names?: T): G => {
		const [output] = useCreation<[Dictionary, Dictionary<string[]>]>(
			(_prev) => {
				const prevNames: Dictionary<string[]> = _prev
					? _prev[1]
					: defaultNames;
				const prevGetters: Dictionary = _prev
					? _prev[0]
					: defaultGetters;

				const nextNames: Dictionary<string[]> = {};
				const nextGetters: Dictionary = {};
				let changed = false;

				for (const key of keys) {
					const prevName = prevNames[key];
					const nextName =
						(names && toArray((names as any)[key])) ||
						defaultNames[key];

					const equals = isEqualArrays(prevName, nextName);

					nextNames[key] = equals ? prevName : nextName;
					nextGetters[key] = equals
						? prevGetters[key]
						: (o: any) => getProperty(o, nextName);

					changed = changed || !equals;
				}

				return changed || _prev == null
					? [nextGetters, nextNames]
					: _prev;
			},
			[names],
		);

		return output as any;
	};
}

export default configDataNames;
