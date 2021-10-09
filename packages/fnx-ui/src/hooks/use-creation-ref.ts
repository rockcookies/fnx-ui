import { MutableRefObject, useRef } from 'react';

export default function useCreationRef<T>(
	factory: (prev: T | undefined) => T,
	deps: any[],
): MutableRefObject<T> {
	const depsRef = useRef(deps);
	const initializedRef = useRef(false);
	const objRef = useRef<T | undefined>(undefined);

	if (
		initializedRef.current === false ||
		!depsAreSame(depsRef.current, deps)
	) {
		depsRef.current = deps;
		objRef.current = factory(objRef.current);
		initializedRef.current = true;
	}

	return objRef as any;
}

function depsAreSame(oldDeps: any[], deps: any[]): boolean {
	if (oldDeps === deps) return true;
	for (let i = 0; i < oldDeps.length; i++) {
		if (oldDeps[i] !== deps[i]) return false;
	}
	return true;
}
