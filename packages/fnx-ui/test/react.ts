import { RefObject } from 'react';

class TestsReactStatic {
	mustGetRef<T>(ref: RefObject<T>): T {
		const current = ref.current;

		if (!current) {
			throw new Error('[TestsReact] Unable to get ref current');
		}

		return current;
	}
}

const TestsReact = new TestsReactStatic();

export default TestsReact;
