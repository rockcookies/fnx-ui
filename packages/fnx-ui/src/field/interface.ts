import {
	HTMLAttributes,
	InputHTMLAttributes,
	ReactNode,
	TextareaHTMLAttributes,
} from 'react';
import { CellProps } from '../cell';
import { FormHelpAlign, FormLabelAlign } from '../form';
import FieldInput from './FieldInput';
import FieldTextArea from './FieldTextArea';

export interface FieldProps extends CellProps {
	label?: ReactNode;
	labelWidth?: string | number;
	labelAlign?: FormLabelAlign;
	labelProps?: HTMLAttributes<HTMLDivElement>;
	controlPrefix?: ReactNode;
	controlSuffix?: ReactNode;
	controlProps?: HTMLAttributes<HTMLDivElement>;
	colon?: boolean;
	required?: boolean;
	disabled?: boolean;
	helpAlign?: FormHelpAlign;
	help?: string | string[];
}

export type FieldInputType = 'text' | 'tel' | 'digit' | 'number' | 'password';

export interface FieldInputProps
	extends Omit<
		InputHTMLAttributes<HTMLInputElement>,
		'onChange' | 'onFocus' | 'onBlur'
	> {
	value?: string;
	defaultValue?: string;
	onChange?: (value: string) => void;
	onFocus?: (value: string) => void;
	onBlur?: (value: string) => void;
	type?: FieldInputType;
	inputAlign?: 'left' | 'center' | 'right';
	clearable?: boolean;
	clearTrigger?: 'focus' | 'always';
	clearIcon?: ReactNode;
}

export type FieldTextAreaCountFormatter = (params: {
	count: number;
	maxLength?: number;
}) => string;

export interface FieldTextAreaProps
	extends Omit<
		TextareaHTMLAttributes<HTMLTextAreaElement>,
		'onChange' | 'onFocus' | 'onBlur'
	> {
	value?: string;
	defaultValue?: string;
	onChange?: (value: string) => void;
	onFocus?: (value: string) => void;
	onBlur?: (value: string) => void;
	rows?: number;
	autoSize?: boolean;
	showCount?: boolean | FieldTextAreaCountFormatter;
}

export interface FieldTextAreaRef {
	input: HTMLTextAreaElement | null;
	root: HTMLSpanElement | null;
}

export interface FieldInputRef {
	input: HTMLInputElement | null;
	root: HTMLSpanElement | null;
}

export interface FieldExportExtra {
	Input: typeof FieldInput;
	TextArea: typeof FieldTextArea;
}
