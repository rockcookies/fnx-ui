import { useCallback } from 'react';
import { useLocale } from '../../locale';
import { replaceMessage } from '../../utils/misc';

function useCalendarMonthTitle(): (date: Date) => string {
	const locale = useLocale('calendar');

	return useCallback(
		(data: Date) =>
			replaceMessage(locale.monthTitle, {
				year: data.getFullYear(),
				month: data.getMonth() + 1,
			}),
		[locale.monthTitle],
	);
}

export default useCalendarMonthTitle;
