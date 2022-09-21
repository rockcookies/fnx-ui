import { PickerBaseProps, PickerElementProps } from '../picker/interface';
import TimePicker from './TimePicker';

export type DatePickerField = 'year' | 'month' | 'day' | 'hour' | 'minute';

/**TimePicker */
export interface TimePickerComponentProps extends PickerBaseProps {
	defaultValue?: string | number | Date;
	minHour?: number;
	maxHour?: number;
	minMinute?: number;
	maxMinute?: number;
	filter?: (type: DatePickerField, value: number[]) => number[];
	formatter?: (type: DatePickerField, value: string) => string;
	onChange?: (value: string) => void;
	onConfirm?: (value: string) => void;
	onCancel?: () => void;
}

export type TimePickerProps = TimePickerComponentProps & PickerElementProps;

export interface TimePickerRef {
	element: HTMLDivElement | null;
	getValue: () => string;
}

/**DateTimePicker */
export interface DatePickerComponentProps extends PickerBaseProps {
	columnsLayout?: string;
	defaultValue?: Date | string | number;
	minDate?: Date | string | number;
	maxDate?: Date | string | number;
	filter?: (type: DatePickerField, value: number[]) => number[];
	formatter?: (type: DatePickerField, value: string) => string;
	onChange?: (value: Date) => void;
	onConfirm?: (value: Date) => void;
	onCancel?: () => void;
}

export type DatePickerProps = DatePickerComponentProps & PickerElementProps;

export interface DatePickerRef {
	element: HTMLDivElement | null;
	getValue: () => Date;
}

export interface DatePickerExportExtra {
	TimePicker: typeof TimePicker;
}
