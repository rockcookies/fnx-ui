import { HTMLAttributes, ReactNode } from 'react';
import PickerCascade from './PickerCascade';
import PickerMulti from './PickerMulti';

export type PickerValue = string | number;

export interface PickerDataNames {
	label?: string | string[];
	value?: string | string[];
	children?: string | string[];
	disabled?: string | string[];
}

export interface PickerOption {
	label?: ReactNode;
	value?: PickerValue;
	disabled?: boolean;
	children?: PickerOption[];
	// for custom filed names
	[key: string]: any;
}

export type PickerOptionOrValue = PickerOption | PickerValue;

export interface PickerBaseProps {
	optionHeight?: number | string;
	visibleOptionsCount?: number;
	transitionDuration?: number;
	toolbar?: ReactNode;
	toolbarPosition?: 'top' | 'bottom';
	title?: ReactNode;
	confirmButton?: ReactNode;
	cancelButton?: ReactNode;
	loading?: boolean;
	dataNames?: PickerDataNames;
}

export type PickerElementProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	'defaultValue' | 'onChange' | 'title'
>;

export interface PickerComponentProps<T = PickerOptionOrValue>
	extends PickerBaseProps {
	defaultValue?: PickerValue;
	data?: T[];
	onChange?: (value: PickerValue, option: T) => void;
	onConfirm?: (value: PickerValue, option: T) => void;
	onCancel?: () => void;
}

export type PickerProps<T = PickerOptionOrValue> = PickerComponentProps<T> &
	PickerElementProps;

export interface PickerRef<T = PickerOptionOrValue> {
	root: HTMLDivElement | null;
	getValue: () => PickerValue;
	getOption: () => T;
}

export interface PickerMultiComponentProps<T = PickerOptionOrValue>
	extends PickerBaseProps {
	defaultValue?: PickerValue[];
	data?: Array<T[]>;
	onChange?: (value: PickerValue[], options: T[]) => void;
	onConfirm?: (value: PickerValue[], options: T[]) => void;
	onCancel?: () => void;
}

export type PickerMultiProps<T = PickerOptionOrValue> =
	PickerMultiComponentProps<T> & PickerElementProps;

export interface PickerMultiRef<T = PickerOptionOrValue> {
	root: HTMLDivElement | null;
	getValue: () => PickerValue[];
	getOptions: () => T[];
}

export interface PickerCascadeComponentProps<T = PickerOption>
	extends PickerBaseProps {
	defaultValue?: PickerValue[];
	data?: T[];
	onChange?: (value: PickerValue[], options: T[]) => void;
	onConfirm?: (value: PickerValue[], options: T[]) => void;
	onCancel?: () => void;
}

export type PickerCascadeProps<T = PickerOption> =
	PickerCascadeComponentProps<T> & PickerElementProps;

export interface PickerCascadeRef<T = PickerOption> {
	root: HTMLDivElement | null;
	getValue: () => PickerValue[];
	getOptions: () => T[];
}

export interface PickerExportExtra {
	Multi: typeof PickerMulti;
	Cascade: typeof PickerCascade;
}
