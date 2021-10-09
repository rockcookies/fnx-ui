function useProps<K, T>(
	_defaults: K,
	_props: T,
): [K, Pick<T, Exclude<keyof T, keyof K>>] {
	const values: any = {};

	const props: any = { ..._props };
	const defaults: any = _defaults;

	for (const key in defaults) {
		values[key] = props[key] !== undefined ? props[key] : defaults[key];
		delete props[key];
	}

	return [values, props];
}

export default useProps;
