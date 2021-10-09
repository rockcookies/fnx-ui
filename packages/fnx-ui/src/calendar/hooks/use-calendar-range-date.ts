import useCreation from '../../hooks/use-creation';
import { isDate } from '../../utils/detect';
import { compareDate, isCalendarDateEquals } from '../utils';

function useCalendarRangeDate(
	_min?: Date | string | number,
	_max?: Date | string | number,
): [Date, Date] {
	const min = useCreation<Date>(
		(prev) => {
			let min = _min != null ? new Date(_min) : undefined;

			if (!isDate(min)) {
				min = new Date();
			}

			min = new Date(min.getFullYear(), min.getMonth(), min.getDate());

			if (prev != null && isCalendarDateEquals(prev, min)) {
				return prev;
			}

			return min;
		},
		[_min],
	);

	const max = useCreation<Date>(
		(prev) => {
			let max = _max != null ? new Date(_max) : undefined;

			if (!isDate(max) || compareDate(max, min) < 0) {
				max = undefined;
			}

			if (max == null) {
				max = new Date(min.getFullYear(), min.getMonth() + 7, 0);
			}

			if (prev != null && isCalendarDateEquals(prev, max)) {
				return prev;
			}

			return max;
		},
		[_max, min],
	);

	return [min, max];
}

export default useCalendarRangeDate;
