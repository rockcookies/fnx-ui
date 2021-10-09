import _DatePicker from './DatePicker';
import { DatePickerExportExtra } from './interface';
import TimePicker from './TimePicker';

const DatePicker: typeof _DatePicker & DatePickerExportExtra =
	_DatePicker as any;

DatePicker.TimePicker = TimePicker;

export type {
	DatePickerComponentProps,
	DatePickerProps,
	DatePickerRef,
	TimePickerComponentProps,
	TimePickerProps,
	TimePickerRef,
} from './interface';

export default DatePicker;
