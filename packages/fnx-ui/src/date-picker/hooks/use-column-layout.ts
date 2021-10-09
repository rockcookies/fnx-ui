import useCreation from '../../hooks/use-creation';
import { isEqualArrays } from '../../utils/misc';
import { DatePickerField } from '../interface';

const COLUMN_LAYOUT = ['year', 'month', 'day', 'hour', 'minute'];

export default function useColumnLayout(layout: string): DatePickerField[] {
	return useCreation<DatePickerField[]>(
		(prev) => {
			const next = layout
				.split(',')
				.map<DatePickerField>((v) => v.trim().toLowerCase() as any)
				.filter((v) => COLUMN_LAYOUT.includes(v));

			return prev && isEqualArrays(prev, next) ? prev : next;
		},
		[layout],
	);
}
