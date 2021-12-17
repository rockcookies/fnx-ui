import useComponentProps from './use-component-props';

function configComponentProps<K>(
	defaults: K,
): <T>(props: T) => [K, Pick<T, Exclude<keyof T, keyof K>>] {
	return (props) => useComponentProps(defaults, props);
}

export default configComponentProps;
