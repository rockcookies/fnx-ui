import { HTMLAttributes, ReactNode } from 'react';
import InternalCheckboxGroup from './CheckboxGroup';

export type CheckboxValue = string | number | boolean;

export interface CheckboxBaseProps {
	disabled?: boolean;
	direction?: 'vertical' | 'horizontal';
	checkedIcon?: ReactNode;
	icon?: ReactNode;
	iconSize?: string | number;
	iconPosition?: 'left' | 'right';
	iconShape?: 'square' | 'round' | 'plain';
	iconCheckedColor?: string;
	labelDisabled?: boolean;
}

export interface CheckboxComponentProps extends CheckboxBaseProps {
	value?: CheckboxValue;
	checked?: boolean;
	defaultChecked?: boolean;
	onChange?: (checked: boolean) => void;
	skipGroup?: boolean;
}

export type CheckboxProps = CheckboxComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'value'>;

export interface CheckboxRef {
	element: HTMLDivElement | null;
	toggle: () => void;
}

export interface CheckboxGroupComponentProps<
	T extends CheckboxValue = CheckboxValue,
> extends CheckboxBaseProps {
	value?: T[];
	defaultValue?: T[];
	onChange?: (v: T[]) => void;
	maxCheckedCount?: number;
}

export type CheckboxGroupProps<T extends CheckboxValue = CheckboxValue> =
	CheckboxGroupComponentProps<T> &
		Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'>;

export interface CheckboxGroupContextData extends CheckboxBaseProps {
	value?: CheckboxValue[];
	registerValue?: (value: CheckboxValue) => void;
	cancelValue?: (value: CheckboxValue) => void;
	toggleValue?: (isCheck: boolean, value: CheckboxValue) => void;
}
export interface CheckboxGroupRef {
	element: HTMLDivElement | null;
	toggleAll: (options?: { checkAll?: boolean }) => void;
}

export interface CheckboxExportExtra {
	Group: typeof InternalCheckboxGroup;
}
