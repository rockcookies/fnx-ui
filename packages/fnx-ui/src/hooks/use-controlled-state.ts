import { MutableRefObject, useState } from 'react';
import useDefaultsRef from './use-defaults-ref';
import useUpdateEffect from './use-update-effect';

interface ControlledOptions<T> {
	value?: T;
	defaultValue: T | (() => T);
	onChange?: (...args: any[]) => void;
}

interface ControlledState<R> {
	controlled: boolean;
	value: R;
	onChangeRef: MutableRefObject<(v: R) => void>;
}

export default function useControlledState<T, R = T>({
	defaultValue,
	value,
	onChange: _onChange,
}: ControlledOptions<T>): ControlledState<R> {
	const [innerValue, setInnerValue] = useState<T>(() => {
		if (value !== undefined) {
			return value;
		}

		return typeof defaultValue === 'function'
			? (defaultValue as any)()
			: defaultValue;
	});

	const controlled = value !== undefined;
	const mergedValue = controlled ? value : innerValue;

	useUpdateEffect(() => {
		if (value !== undefined) {
			setInnerValue(value);
		}
	}, [value]);

	const onChangeRef = useDefaultsRef((...args: any[]) => {
		if (!controlled) {
			setInnerValue(args[0]);
		}

		if (_onChange) {
			_onChange(...args);
		}
	});

	return {
		controlled,
		value: mergedValue as any,
		onChangeRef,
	};
}
