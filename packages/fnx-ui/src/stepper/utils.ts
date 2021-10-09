import { formatNumber } from '../utils/format';
import { StepperValue } from './interface';

export function addValue(num1: number, num2: number) {
	const cardinal = 10 ** 10;
	return Math.round((num1 + num2) * cardinal) / cardinal;
}

export const getValidNumber = (
	v: StepperValue | undefined | null,
): number | undefined => {
	if (v == null) {
		return;
	}

	let valid: number | undefined;

	if (typeof v !== 'number') {
		valid = Number(
			formatNumber(String(v).trim(), {
				allowDot: true,
				allowMinus: true,
			}),
		);
	} else {
		valid = v;
	}

	if (valid == null || isNaN(valid)) {
		return;
	}

	return valid;
};
