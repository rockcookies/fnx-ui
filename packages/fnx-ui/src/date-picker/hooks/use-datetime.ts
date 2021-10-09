import useCreation from '../../hooks/use-creation';
import { DateTime } from '../utils';

export default function useDateTime(
	value: Date | number | string | undefined,
	defaultValue: DateTime,
): DateTime {
	return useCreation<DateTime>(
		(prev) => {
			let dt: DateTime;

			if (value != null) {
				dt = new DateTime(value);
				dt = dt.isValid() ? dt : defaultValue;
			} else {
				dt = defaultValue;
			}

			return prev && prev.equals(dt) ? prev : dt;
		},
		[value],
	);
}
