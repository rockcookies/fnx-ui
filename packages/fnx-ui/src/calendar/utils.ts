import { createBEM } from '../utils/namespace';

export const _bem = createBEM('fnx-calendar');

export type CalendarMode = 'single' | 'multiple' | 'range';

export interface CalendarMonthRef {
	root: HTMLDivElement | null;
	getHeight(): number;
}

export function compareMonth(d1: Date, d2: Date) {
	const year1 = d1.getFullYear();
	const year2 = d2.getFullYear();

	if (year1 === year2) {
		const month1 = d1.getMonth();
		const month2 = d2.getMonth();

		return month1 === month2 ? 0 : month1 > month2 ? 1 : -1;
	}

	return year1 > year2 ? 1 : -1;
}

export function compareDate(d1: Date, d2: Date) {
	const res = compareMonth(d1, d2);

	if (res === 0) {
		const date1 = d1.getDate();
		const date2 = d2.getDate();

		return date1 === date2 ? 0 : date1 > date2 ? 1 : -1;
	}

	return res;
}

export function isCalendarDateEquals(d1: Date, d2: Date) {
	return (
		d1.getFullYear() === d2.getFullYear() &&
		d1.getMonth() === d2.getMonth() &&
		d1.getDate() === d2.getDate()
	);
}

export const cloneDate = (date: Date) => new Date(date);

export const getPrevDay = (date: Date) => getDayByOffset(date, -1);
export const getNextDay = (date: Date) => getDayByOffset(date, 1);
export const getToday = () => {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	return today;
};

export function getDayByOffset(date: Date, offset: number) {
	const cloned = cloneDate(date);
	cloned.setDate(cloned.getDate() + offset);
	return cloned;
}

export function calcDateNum(d1: Date, d2: Date) {
	const day1 = d1.getTime();
	const day2 = d2.getTime();
	return (day2 - day1) / (1000 * 60 * 60 * 24) + 1;
}
