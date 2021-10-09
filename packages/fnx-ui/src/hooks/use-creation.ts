import useCreationRef from './use-creation-ref';

export default function useCreation<T>(
	factory: (prev: T | undefined) => T,
	deps: any[],
): T {
	return useCreationRef(factory, deps).current;
}
