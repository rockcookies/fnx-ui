import React, {
	useEffect,
	ReactNode,
	forwardRef,
	useRef,
	useMemo,
	useImperativeHandle,
} from 'react';
import { useLocale } from '../locale';
import CalendarDay from './CalendarDay';
import useCalendarMonthTitle from './hooks/use-calendar-month-title';
import {
	CalendarDayComponentProps,
	CalendarDayType,
	CalendarSlots,
} from './interface';
import {
	CalendarMonthRef,
	compareDate,
	getNextDay,
	getPrevDay,
	_bem as bem,
} from './utils';

interface CProps {
	color?: string;
	month: Date;
	dayHeight?: string;
	firstDayOfWeek: number;
	mode: 'single' | 'multiple' | 'range';
	value: Date[];
	slots: CalendarSlots;
	minDate: Date;
	maxDate: Date;
	onClickDay?: (day: CalendarDayComponentProps) => void;
	rangeAllowSameDay?: boolean;
}

const CalendarMonth = forwardRef<CalendarMonthRef, CProps>((props, ref) => {
	const locale = useLocale('calendar');

	const {
		color,
		month,
		firstDayOfWeek,
		dayHeight,
		mode,
		value,
		slots,
		minDate,
		maxDate,
		onClickDay,
		rangeAllowSameDay,
	} = props;

	const rootHeightRef = useRef<number>(0);
	const rootRef = useRef<HTMLDivElement | null>(null);

	const monthTitle = useCalendarMonthTitle();

	useImperativeHandle<CalendarMonthRef, CalendarMonthRef>(
		ref,
		() => ({
			root: rootRef.current,
			getHeight: () => rootHeightRef.current,
		}),
		[],
	);

	const offset = useMemo(() => {
		let offset = month.getDay();

		if (firstDayOfWeek) {
			offset = (offset + 7 - firstDayOfWeek) % 7;
		}

		return offset;
	}, [firstDayOfWeek, month]);

	const endDate = useMemo(() => {
		return new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
	}, [month]);

	const getRangeDayType = (day: Date): CalendarDayType => {
		const [startDay, endDay] = value;

		if (!startDay) {
			return 'normal';
		}

		const compareToStart = compareDate(day, startDay);

		if (!endDay) {
			return compareToStart === 0 ? 'start' : 'normal';
		}

		const compareToEnd = compareDate(day, endDay);

		if (rangeAllowSameDay && compareToStart === 0 && compareToEnd === 0) {
			return 'start-end';
		}
		if (compareToStart === 0) {
			return 'start';
		}
		if (compareToEnd === 0) {
			return 'end';
		}
		if (compareToStart > 0 && compareToEnd < 0) {
			return 'middle';
		}

		return 'normal';
	};

	const getMultipleDayType = (day: Date): CalendarDayType => {
		const isSelected = (date: Date) =>
			value.findIndex((v) => compareDate(v, date) === 0) >= 0;

		if (isSelected(day)) {
			const prevDay = getPrevDay(day);
			const nextDay = getNextDay(day);
			const prevSelected = isSelected(prevDay);
			const nextSelected = isSelected(nextDay);

			if (prevSelected && nextSelected) {
				return 'multiple-middle';
			}

			if (prevSelected) {
				return 'end';
			}

			if (nextSelected) {
				return 'start';
			}

			return 'multiple-selected';
		}

		return 'normal';
	};

	const getDayType = (day: Date): CalendarDayType => {
		if (compareDate(day, minDate) < 0 || compareDate(day, maxDate) > 0) {
			return 'disabled';
		}

		if (value.length <= 0) {
			return 'normal';
		}

		if (mode === 'single') {
			return compareDate(day, value[0]) === 0 ? 'selected' : 'normal';
		} else if (mode === 'multiple') {
			return getMultipleDayType(day);
		} else {
			return getRangeDayType(day);
		}
	};

	useEffect(() => {
		const node = rootRef.current;

		let observer: ResizeObserver | undefined;

		if (node) {
			rootHeightRef.current = node.getBoundingClientRect().height;

			observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
				rootHeightRef.current = entries[0]?.contentRect?.height || 0;
			});

			observer.observe(node);
		}

		return () => {
			observer && observer.disconnect;
		};
	}, []);

	const getBottomInfo = (dayType: CalendarDayType) => {
		if (mode === 'range') {
			if (dayType === 'start' || dayType === 'end') {
				return locale[dayType];
			}

			if (dayType === 'start-end') {
				return locale['startEnd'];
			}
		}
	};

	const renderDays = () => {
		const days: ReactNode[] = [];

		for (let i = 1; i <= endDate; i++) {
			const date = new Date(month.getFullYear(), month.getMonth(), i);
			const type = getDayType(date);

			const day: CalendarDayComponentProps = {
				color,
				date,
				type,
				dayHeight,
				bottomInfo: getBottomInfo(type),
			};

			days.push(
				<div
					className={bem('days-cell')}
					role="gridcell"
					tabIndex={type === 'disabled' ? undefined : -1}
					key={i}
					style={{
						marginLeft:
							i === 1 ? `${(100 * offset) / 7}%` : undefined,
					}}
					onClick={() => {
						onClickDay && onClickDay(day);
					}}
				>
					{slots.day ? slots.day(day) : <CalendarDay {...day} />}
				</div>,
			);
		}

		return days;
	};

	const renderSlot = (
		defaults: (d: Date) => ReactNode,
		date?: Date,
		slot?: boolean | ((date: Date) => ReactNode),
	) => {
		if (date == null) {
			return;
		}

		return typeof slot === 'boolean' || slot == null
			? defaults(date)
			: slot(date);
	};

	return (
		<div className={bem('month')} ref={rootRef}>
			{slots.monthTitle !== false && (
				<div className={bem('month-title')}>
					{renderSlot(monthTitle, month, slots.monthTitle)}
				</div>
			)}

			<div className={bem('days')}>
				{slots.monthMark !== false && (
					<div className={bem('month-mark')}>
						{renderSlot(
							(month) => month.getMonth() + 1,
							month,
							slots.monthMark,
						)}
					</div>
				)}
				{renderDays()}
			</div>
		</div>
	);
});

CalendarMonth.displayName = 'CalendarMonth';

export default CalendarMonth;
