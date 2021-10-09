import { HTMLAttributes } from 'react';

export type StepperValue = string | number;

export type StepperMode = 'string' | 'number';

export interface StepperComponentProps<T extends StepperValue = StepperValue> {
	value?: T | null;
	defaultValue?: T | null;
	onChange?: (value: T | null) => void;
	mode?: StepperMode;
	min?: T;
	max?: T;
	allowEmpty?: boolean;
	step?: StepperValue;
	precision?: number;
	buttonSize?: number | string;
	inputWidth?: number | string;
	showInput?: boolean;
	showPlus?: boolean;
	showMinus?: boolean;
	disabled?: boolean;
	disablePlus?: boolean;
	disableMinus?: boolean;
	disableInput?: boolean;
	longPress?: boolean;
	onStep?: (
		value: T,
		info: { offset: StepperValue; type: 'minus' | 'plus' },
	) => void;
}

export type StepperProps<T extends StepperValue = StepperValue> =
	StepperComponentProps<T> &
		Omit<
			HTMLAttributes<HTMLSpanElement>,
			'value' | 'defaultValue' | 'onInput' | 'onChange'
		>;

export interface StepperRef {
	root: HTMLSpanElement | null;
	input: HTMLInputElement | null;
}
