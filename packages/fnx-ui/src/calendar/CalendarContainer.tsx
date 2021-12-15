import React, {
	ReactNode,
	useCallback,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
} from 'react';
import Button from '../button';
import useCreation from '../hooks/use-creation';
import useDefaultsRef from '../hooks/use-defaults-ref';
import useGetState from '../hooks/use-get-state';
import useMount from '../hooks/use-mount';
import usePopupReopen from '../hooks/use-popup-reopen';
import useUpdateEffect from '../hooks/use-update-effect';
import Icon from '../icon';
import { useLocale } from '../locale';
import { isDate } from '../utils/detect';
import { getScrollTop } from '../utils/dom/scroll';
import { addUnit, clamp } from '../utils/format';
import { Dictionary } from '../utils/interface';
import { isEqualArrays, noop } from '../utils/misc';
import { classnames } from '../utils/namespace';
import { doubleRaf } from '../utils/raf';
import { createDefaultsForwardRef } from '../utils/react';
import CalendarMonth, { CalendarMonthRef } from './CalendarMonth';
import useCalendarMonthTitle from './hooks/use-calendar-month-title';
import useCalendarRangeDate from './hooks/use-calendar-range-date';
import {
	CalendarBaseProps,
	CalendarDayComponentProps,
	CalendarElementProps,
	CalendarValue,
	CalendarRef,
} from './interface';
import {
	calcDateNum,
	CalendarMode,
	compareDate,
	compareMonth,
	getDayByOffset,
	getNextDay,
	getPrevDay,
	getToday,
	isCalendarDateEquals,
	_bem as bem,
} from './utils';

interface CProps extends CalendarBaseProps, CalendarElementProps {
	onClose?: () => void;
	mode?: CalendarMode;
	defaultValue?: CalendarValue | CalendarValue[] | void;
	onChange?: (value: Date[]) => void;
	onConfirm?: (value: Date[]) => void;
	rangeAllowSameDay?: boolean;
	rangeMaxSize?: number;
	onRangeMaxSize?: () => void;
	multiMaxSize?: number;
	onMultiMaxSize?: () => void;
}

const limitDateRange = (date: Date, min: Date, max: Date) => {
	if (compareDate(date, min) === -1) {
		return min;
	}

	if (compareDate(date, max) === 1) {
		return max;
	}

	return date;
};

const formatValue = (
	mode: CalendarMode,
	value: Date[],
	min: Date,
	max: Date,
	maxSize?: number,
): Date[] => {
	if (!value.length) {
		return value;
	}

	const now = getToday();
	let output: Date[];

	if (mode === 'range') {
		const _start = value[0] || now;
		const _end = value[1] || now;
		if (compareDate(_start, _end) === 1) {
			value = [_end, _start];
		} else {
			value = [_start, _end];
		}

		if (maxSize != null && calcDateNum(value[0], value[1]) > maxSize) {
			value = [value[0], getDayByOffset(value[0], maxSize - 1)];
		}

		const start = limitDateRange(value[0] || now, min, getPrevDay(max));
		const end = limitDateRange(value[1] || now, getNextDay(min), max);

		output = [start, end];
	} else if (mode === 'multiple') {
		value = value.map((v) => limitDateRange(v, min, max));

		output = [];

		for (const v of value) {
			if (output.findIndex((o) => isCalendarDateEquals(o, v)) < 0) {
				if (maxSize != null) {
					output.length < maxSize && output.push(v);
				} else {
					output.push(v);
				}
			}
		}
	} else {
		output = [limitDateRange(value[0] || now, min, max)];
	}

	return output;
};

const CalendarContainer = createDefaultsForwardRef<
	CalendarRef,
	CProps,
	Required<
		Pick<
			CProps,
			| 'readonly'
			| 'slots'
			| 'onClose'
			| 'mode'
			| 'onConfirm'
			| 'defaultValue'
			| 'onChange'
		>
	>
>(
	'CalendarContainer',
	{
		readonly: false,
		slots: {},
		mode: 'single',
		onClose: noop,
		onConfirm: noop,
		defaultValue: [],
		onChange: noop,
	},
	(
		{
			readonly,
			slots,
			onClose,
			mode,
			onConfirm,
			defaultValue: _defaultValue,
			onChange,
			// optionals
			title,
			color,
			minDate: _minDate,
			maxDate: _maxDate,
			dayHeight: _dayHeight,
			firstDayOfWeek: _firstDayOfWeek,
			closeIcon,
			rangeAllowSameDay,
			rangeMaxSize,
			onRangeMaxSize,
			multiMaxSize,
			onMultiMaxSize,
			confirmDisabledText,
			confirmText,
			className,
			...restProps
		},
		ref,
	) => {
		const locale = useLocale('calendar');

		const firstDayOfWeek = useMemo<number>(
			() => clamp(_firstDayOfWeek != null ? _firstDayOfWeek : 0, 0, 6),
			[_firstDayOfWeek],
		);

		const dayHeight = useMemo(() => addUnit(_dayHeight), [_dayHeight]);

		const [minDate, maxDate] = useCalendarRangeDate(_minDate, _maxDate);

		const rootRef = useRef<HTMLDivElement | null>(null);

		const bodyRef = useRef<HTMLDivElement | null>(null);
		const bodyHeightRef = useRef(0);

		const monthsRef = useRef<Dictionary<CalendarMonthRef | null>>({});
		const months = useMemo<Date[]>(() => {
			const months: Date[] = [];
			let cursor = new Date(minDate.getFullYear(), minDate.getMonth(), 1);

			while (compareMonth(cursor, maxDate) <= 0) {
				months.push(cursor);
				cursor = new Date(
					cursor.getFullYear(),
					cursor.getMonth() + 1,
					1,
				);
			}

			return months;
		}, [minDate, maxDate]);

		useImperativeHandle<CalendarRef, CalendarRef>(ref, () => {
			return {
				root: rootRef.current || null,
				reset: () => {
					scrollIntoMonth(getMonthsActiveIndex());
				},
			};
		});

		const defaultValue = useCreation<Date[]>(() => {
			if (Array.isArray(_defaultValue)) {
				const res = _defaultValue.map((date) => new Date(date));
				return res.every(isDate) ? res : [];
			} else if (_defaultValue != null) {
				const res = new Date(_defaultValue);
				return isDate(res) ? [res] : [];
			} else {
				return [];
			}
		}, []);
		const [value, setValue] = useState<Date[]>(() =>
			formatValue(
				mode,
				defaultValue,
				minDate,
				maxDate,
				mode === 'range' ? rangeMaxSize : multiMaxSize,
			),
		);

		const [inputValue, setInputValue] = useState<Date[]>(defaultValue);
		const onChangeRef = useDefaultsRef(onChange);

		const [monthsActiveIndex, setMonthsActiveIndex, getMonthsActiveIndex] =
			useGetState<number>(() => {
				const activeIndex = isDate(value[0])
					? months.findIndex(
							(month) => compareMonth(month, value[0]) === 0,
					  )
					: -1;

				return Math.max(activeIndex, 0);
			});

		const footerButtonEnabled = useMemo<boolean>(() => {
			if (mode === 'single') {
				return value[0] != null;
			}

			if (mode === 'multiple') {
				return value.length > 0;
			}

			if (mode === 'range') {
				return value[0] != null && value[1] != null;
			}

			return false;
		}, [value, mode]);

		const monthTitle = useCalendarMonthTitle();

		const handleClickDay = (day: CalendarDayComponentProps) => {
			if (readonly || day.type === 'disabled') {
				return;
			}

			const { date } = day;

			let next: Date[] | undefined;

			if (mode === 'range') {
				const [start, end] = value;

				if (start && !end) {
					const compareToStart = compareDate(date, start);

					if (compareToStart === 1) {
						next = [start, date];
					} else if (compareToStart === -1) {
						next = [date, start];
					} else if (rangeAllowSameDay) {
						next = [date, date];
					}

					if (
						next &&
						rangeMaxSize != null &&
						calcDateNum(next[0], next[1]) > rangeMaxSize
					) {
						next = [
							next[0],
							getDayByOffset(next[0], rangeMaxSize - 1),
						];
						onRangeMaxSize && onRangeMaxSize();
					}
				} else {
					setValue([date]);
				}
			} else if (mode === 'multiple') {
				const selectedIndex = value.findIndex((v) =>
					isCalendarDateEquals(v, date),
				);

				if (selectedIndex >= 0) {
					next = [...value];
					next.splice(selectedIndex, 1);
				} else if (
					multiMaxSize != null &&
					value.length >= multiMaxSize
				) {
					onMultiMaxSize && onMultiMaxSize();
				} else {
					next = [...value, date];
				}
			} else if (mode === 'single') {
				next = [date];
			}

			if (!next) {
				return;
			}

			setValue(next);
			setInputValue((prev) =>
				next && !isEqualArrays(prev, next, isCalendarDateEquals)
					? next
					: prev,
			);
		};

		const handleConfirm = () => {
			onConfirm(value);
		};

		const handleScroll = () => {
			const body = bodyRef.current;

			if (!body) {
				return;
			}

			const top = getScrollTop(body);
			const bottom = top + bodyHeightRef.current;

			const heights: number[] = [];

			for (let i = 0; i < months.length; i++) {
				heights.push(monthsRef.current[i]?.getHeight() || 0);
			}

			const heightSum = heights.reduce((a, b) => a + b, 0);

			// iOS scroll bounce may exceed the range
			if (bottom > heightSum && top > 0) {
				return;
			}

			let height = 0;

			for (let i = 0; i < months.length; i++) {
				if (height <= bottom && height + heights[i] >= top) {
					setMonthsActiveIndex(i);
					return;
				} else {
					height += heights[i];
				}
			}
		};

		const scrollIntoMonth = useCallback((activeIndex: number) => {
			const month = monthsRef.current[activeIndex];
			const body = bodyRef.current;

			if (month && body) {
				month.scrollIntoView(body);
			}
		}, []);

		useEffect(() => {
			const node = bodyRef.current;

			if (node) {
				bodyHeightRef.current = node.getBoundingClientRect().height;
			}
		}, []);

		usePopupReopen(() => {
			const activeIndex = isDate(value[0])
				? months.findIndex(
						(month) => compareMonth(month, value[0]) === 0,
				  )
				: -1;

			if (activeIndex < 0) {
				return;
			}

			doubleRaf(() => {
				scrollIntoMonth(activeIndex);
			});
		});

		useUpdateEffect(() => {
			onChangeRef.current(inputValue);
		}, [inputValue, onChangeRef]);

		useUpdateEffect(() => {
			setValue((prev) => {
				const next = formatValue(mode, prev, minDate, maxDate);

				return isEqualArrays(prev, next, isCalendarDateEquals)
					? prev
					: next;
			});
		}, [maxDate, minDate, mode]);

		useMount(() => {
			scrollIntoMonth(monthsActiveIndex);
		});

		const renderMonthTitle = (
			date?: Date,
			title?: boolean | ((date: Date) => ReactNode),
		) => {
			if (date == null) {
				return;
			}

			return typeof title === 'boolean' || title == null
				? monthTitle(date)
				: title(date);
		};

		const renderHeader = () => {
			const weekdays = [
				...locale.weekdays.slice(firstDayOfWeek, 7),
				...locale.weekdays.slice(0, firstDayOfWeek),
			];

			return (
				<div className={bem('header')}>
					{title !== false && (
						<div className={bem('header-title')}>
							{title || locale.title}
						</div>
					)}
					{slots.subTitle !== false && (
						<div className={bem('header-subtitle')}>
							{renderMonthTitle(
								months[monthsActiveIndex],
								slots.subTitle,
							)}
						</div>
					)}
					<div className={bem('weekdays')}>
						{weekdays.map((text, idx) => (
							<span className={bem('weekday')} key={idx}>
								{text}
							</span>
						))}
					</div>
					{closeIcon !== false && (
						<span className={bem('close-icon')} onClick={onClose}>
							{closeIcon || <Icon name="cross" />}
						</span>
					)}
				</div>
			);
		};

		const renderBody = () => {
			return (
				<div
					className={bem('body')}
					ref={bodyRef}
					onScroll={handleScroll}
				>
					{months.map((month, idx) => {
						return (
							<CalendarMonth
								key={idx}
								color={color}
								month={month}
								dayHeight={dayHeight}
								firstDayOfWeek={firstDayOfWeek}
								mode={mode}
								value={value}
								slots={{
									...slots,
									monthTitle:
										idx === 0 ? false : slots.monthTitle,
								}}
								minDate={minDate}
								maxDate={maxDate}
								onClickDay={handleClickDay}
								rangeAllowSameDay={rangeAllowSameDay}
								ref={(ref) => {
									monthsRef.current[idx] = ref;
								}}
							/>
						);
					})}
				</div>
			);
		};

		const renderFooter = () => {
			let footer = slots.footer;

			if (!footer) {
				const text = footerButtonEnabled
					? confirmText
					: confirmDisabledText;

				footer = (
					<Button
						shape="round"
						block
						type="primary"
						color={color}
						className={bem('confirm')}
						disabled={!footerButtonEnabled}
						htmlType="button"
						onClick={handleConfirm}
					>
						{text || locale.confirm}
					</Button>
				);
			}

			return <div className={bem('footer')}>{footer}</div>;
		};

		return (
			<div
				className={classnames(bem(), className)}
				{...restProps}
				ref={rootRef}
			>
				{renderHeader()}
				{renderBody()}
				{renderFooter()}
			</div>
		);
	},
);

export default CalendarContainer;
