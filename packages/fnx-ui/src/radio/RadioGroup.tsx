import React, { ReactElement, useCallback } from 'react';
import { CheckboxValue } from '../checkbox';
import useControlledState from '../hooks/use-controlled-state';
import { ForwardRefProps } from '../utils/interface';
import { classnames, createBEM } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { RadioGroupContext } from './context';
import { RadioGroupProps, RadioValue } from './interface';

const NS = 'fnx-radio-group';
const bem = createBEM(NS);

const RadioGroup = createForwardRef<HTMLDivElement, RadioGroupProps>(
	'RadioGroup',
	(_props, ref) => {
		const {
			value: _value,
			defaultValue,
			onChange: _onChange,
			disabled,
			direction,
			iconSize,
			iconPosition,
			iconShape,
			iconCheckedColor,
			labelDisabled,
			icon,
			checkedIcon,
			className,
			children,
			...resetProps
		} = _props;

		const { value, onChangeRef } = useControlledState<RadioValue>({
			value: _value,
			defaultValue: defaultValue != null ? defaultValue : '',
			onChange: _onChange,
		});

		const onChange = useCallback(
			(v: CheckboxValue) => onChangeRef.current(v),
			[onChangeRef],
		);

		return (
			<div
				className={classnames(
					bem({
						...(direction != null
							? { [direction]: direction !== 'vertical' }
							: {}),
					}),
					className,
				)}
				{...resetProps}
				ref={ref}
			>
				<RadioGroupContext.Provider
					value={{
						value,
						disabled,
						direction,
						iconSize,
						iconPosition,
						iconShape,
						iconCheckedColor,
						labelDisabled,
						icon,
						checkedIcon,
						onChange,
					}}
				>
					{children}
				</RadioGroupContext.Provider>
			</div>
		);
	},
) as <T extends RadioValue = RadioValue>(
	props: ForwardRefProps<RadioGroupProps<T>, HTMLDivElement>,
) => ReactElement;

export default RadioGroup;
