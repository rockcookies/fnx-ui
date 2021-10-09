function useDefaults<T>(defaultValue: T, ...args: Array<T | void>): T {
	for (const v of args) {
		if (v != null) {
			return v;
		}
	}

	return defaultValue;
}

export default useDefaults;
