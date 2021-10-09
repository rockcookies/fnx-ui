import { isDate } from '../utils/detect';

export const formatValue = (
	val: string | null | undefined,
): string | undefined => {
	if (val != null) {
		const v = val.trim();

		if (v) {
			return v;
		}
	}
};

export const iterateNumber = <T = string>(
	n: number,
	iteratee: (index: number) => T,
): T[] => {
	let index = -1;
	const result = Array<T>(n);

	while (++index < n) {
		result[index] = iteratee(index);
	}

	return result;
};

export class DateTime {
	private year = 0;
	private month = 0;
	private day = 0;
	private hour = 0;
	private minute = 0;
	private invalid = false;

	constructor(_date: Date | string | number) {
		const date = new Date(_date);

		const timestamp = date.getTime();

		if (isNaN(timestamp)) {
			this.invalid = false;
		} else {
			this.year = date.getFullYear();
			this.month = date.getMonth();
			this.day = date.getDate();
			this.hour = date.getHours();
			this.minute = date.getMinutes();
		}
	}

	isValid() {
		return !this.invalid;
	}

	getYear(): number {
		return this.year;
	}

	getMonth(): number {
		return this.month;
	}

	getDay(): number {
		return this.day;
	}

	getHour(): number {
		return this.hour;
	}

	getMinute(): number {
		return this.minute;
	}

	getDate(): Date {
		return new Date(
			this.year,
			this.month,
			this.day,
			this.hour,
			this.minute,
		);
	}

	getTime(): number {
		return this.getDate().getTime();
	}

	equals(dt: DateTime | Date) {
		if (isDate(dt)) {
			return (
				this.year === dt.getFullYear() &&
				this.month === dt.getMonth() &&
				this.day === dt.getDate() &&
				this.hour === dt.getHours() &&
				this.minute === dt.getMinutes()
			);
		}

		return (
			this.year === dt.getYear() &&
			this.month === dt.getMonth() &&
			this.day === dt.getDay() &&
			this.hour === dt.getHour() &&
			this.minute === dt.getMinute()
		);
	}
}
