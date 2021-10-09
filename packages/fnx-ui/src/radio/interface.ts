import { HTMLAttributes } from 'react';
import RadioGroup from './RadioGroup';
import { CheckboxValue, CheckboxBaseProps } from '../checkbox/interface';

export type RadioValue = CheckboxValue;

export interface RadioComponentProps extends CheckboxBaseProps {
	value?: RadioValue;
	checked?: boolean;
	defaultChecked?: boolean;
	onChange?: (checked: boolean) => void;
	skipGroup?: boolean;
}

export type RadioProps = RadioComponentProps &
	Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

export interface RadioGroupComponentProps<T extends RadioValue = RadioValue>
	extends CheckboxBaseProps {
	value?: T;
	defaultValue?: T;
	onChange?: (v: T) => void;
}

export interface RadioGroupContextData extends CheckboxBaseProps {
	value?: RadioValue;
	onChange?: (v: RadioValue) => void;
}

export type RadioGroupProps<T extends RadioValue = RadioValue> =
	RadioGroupComponentProps<T> &
		Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'>;

export interface RadioExportExtra {
	Group: typeof RadioGroup;
}
