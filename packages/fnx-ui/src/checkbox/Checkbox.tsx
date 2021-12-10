import {
	useCallback,
	useContext,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
} from 'react';
import useControlledState from '../hooks/use-controlled-state';
import useDefaults from '../hooks/use-defaults';
import useDefaultsRef from '../hooks/use-defaults-ref';
import { noop } from '../utils/misc';
import { createBEM } from '../utils/namespace';
import { createDefaultsForwardRef } from '../utils/react';
import { CheckGroupContext } from './context';
import useCheckboxRender from './hooks/use-checkbox-render';
import { CheckboxProps, CheckboxRef, CheckboxValue } from './interface';

const NS = 'fnx-checkbox';
const bem = createBEM(NS);

const Checkbox = createDefaultsForwardRef<
	CheckboxRef,
	CheckboxProps,
	Required<Pick<CheckboxProps, 'defaultChecked' | 'skipGroup' | 'iconShape'>>
>(
	'Checkbox',
	{
		defaultChecked: false,
		skipGroup: false,
		iconShape: 'square',
	},
	(
		{
			defaultChecked,
			skipGroup: _skipGroup,
			iconShape: _iconShape,
			// optionals
			checked: _checked,
			value: checkValue,
			onChange: _onChange,
			...resetProps
		},
		ref,
	) => {
		const groupContext = useContext(CheckGroupContext);
		const groupContextRef = useDefaultsRef(groupContext);

		const groupValueList: CheckboxValue[] | undefined = _skipGroup
			? undefined
			: groupContext.value || undefined;
		const skipGroup = groupValueList == null;

		const valueChecked = useMemo(() => {
			if (groupValueList == null) {
				return _checked;
			}

			return checkValue != null
				? groupValueList.includes(checkValue)
				: _checked;
		}, [_checked, checkValue, groupValueList]);

		const { value: checked, onChangeRef } = useControlledState<boolean>({
			value: valueChecked,
			defaultValue: groupValueList != null ? false : defaultChecked,
			onChange: _onChange,
		});

		const rootRef = useRef<HTMLDivElement>(null);
		const prevValueRef = useRef<CheckboxValue | null>(null);
		const disabled = useDefaults<boolean>(
			false,
			resetProps.disabled,
			groupContext.disabled,
		);

		useEffect(() => {
			if (skipGroup || checkValue == null) {
				return;
			}

			const { cancelValue = noop, registerValue = noop } =
				groupContextRef.current;

			if (checkValue !== prevValueRef.current) {
				if (prevValueRef.current != null) {
					cancelValue(prevValueRef.current);
				}

				registerValue(checkValue);
				prevValueRef.current = checkValue;
			}

			return () => {
				cancelValue(checkValue);
			};
		}, [checkValue, groupContextRef, skipGroup]);

		const handleToggle = useCallback(() => {
			if (disabled) {
				return;
			}

			const { toggleValue } = groupContextRef.current;

			if (!skipGroup && toggleValue && checkValue != null) {
				toggleValue(!checked, checkValue);
			} else {
				onChangeRef.current(!checked);
			}
		}, [
			disabled,
			groupContextRef,
			skipGroup,
			checkValue,
			checked,
			onChangeRef,
		]);

		const checkboxRef = useMemo<CheckboxRef>(() => {
			return {
				root: rootRef.current,
				toggle: handleToggle,
			};
		}, [handleToggle]);

		useImperativeHandle<CheckboxRef, CheckboxRef>(ref, () => checkboxRef, [
			checkboxRef,
		]);

		const render = useCheckboxRender(
			{
				role: 'checkbox',
				...resetProps,
				iconShape: _iconShape,
				onClick: (e) => {
					handleToggle();
					resetProps.onClick && resetProps.onClick(e);
				},
			},
			groupContext,
		);

		return render({
			bem,
			checked,
			ref: rootRef,
		});
	},
);

export default Checkbox;
