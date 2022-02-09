import {
	FormInstance as RcFormInstance,
	FormProps as RcFormProps,
} from 'rc-field-form';
import { FieldProps as RcFieldProps } from 'rc-field-form/lib/Field';
import { Meta, ValidateMessages } from 'rc-field-form/lib/interface';
import { ListField, ListOperations, ListProps } from 'rc-field-form/lib/List';
import { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { CellItemsAlign } from '../cell/interface';
import { FieldProps } from '../field/interface';
import FormItem from './FormItem';
import FormList from './FormList';
import useForm from './hooks/use-form';

export type { NamePath } from 'rc-field-form/lib/interface';

export type FormMeta = Meta;

export type FormLabelAlign = 'left' | 'center' | 'right';

export type FormHelpAlign = 'left' | 'center' | 'right';

export type FormRequiredMark = boolean | 'auto';

export type FormValidateMessages = ValidateMessages;

export type FormInstance<Values = any> = RcFormInstance<Values>;

export type FormItemChildren<Values = any> =
	| ((context: FormInstance<Values>) => ReactNode)
	| ReactNode;

export interface FormItemProps<Values = any>
	extends Omit<RcFieldProps<Values>, 'children'> {
	children?: FormItemChildren<Values>;
	className?: string;
	style?: CSSProperties;
	leftIcon?: ReactNode;
	leftIconProps?: HTMLAttributes<HTMLSpanElement>;
	rightIcon?: ReactNode;
	rightIconProps?: HTMLAttributes<HTMLSpanElement>;
	label?: ReactNode;
	labelWidth?: string | number;
	labelAlign?: FormLabelAlign;
	labelProps?: HTMLAttributes<HTMLDivElement>;
	controlPrefix?: ReactNode;
	controlSuffix?: ReactNode;
	controlProps?: HTMLAttributes<HTMLDivElement>;
	colon?: boolean;
	requiredMark?: FormRequiredMark;
	disabled?: boolean;
	helpAlign?: FormHelpAlign;
	help?: string | string[];
	border?: boolean;
	itemsAlign?: CellItemsAlign;
	clickable?: boolean;
	plain?: boolean;
	fieldProps?: FieldProps;
}

export interface FormItemContextData {
	isRequired?: boolean;
	meta?: FormMeta;
}

export type FormListField = ListField;

export type FormListOperations = ListOperations;

export type FormListProps = ListProps;

export interface FormProps<Values = any>
	extends Omit<RcFormProps<Values>, 'form'> {
	colon?: boolean;
	requiredMark?: FormRequiredMark;
	labelAlign?: FormLabelAlign;
	labelWidth?: string | number;
	helpAlign?: FormHelpAlign;
	form?: FormInstance<Values>;
}

export interface FormContextData {
	colon?: boolean;
	requiredMark?: FormRequiredMark;
	labelAlign?: FormLabelAlign;
	labelWidth?: string | number;
	helpAlign?: FormHelpAlign;
}

export interface FormExportExtra {
	Item: typeof FormItem;
	List: typeof FormList;
	useForm: typeof useForm;
}
