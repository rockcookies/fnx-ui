import { isNumeric, IS_BROWSER } from './detect';

export function clamp(num: number, min: number, max: number): number {
	return Math.min(Math.max(num, min), max);
}

export function addUnit(value?: string | number): string | undefined {
	if (value == null) {
		return undefined;
	}

	return isNumeric(value) ? `${value}px` : String(value);
}

export function getSizeStyle(originSize?: string | number) {
	if (originSize != null) {
		const size = addUnit(originSize);
		return {
			width: size,
			height: size,
		};
	}
}

// cache
let rootFontSize: number;

function getRootFontSize() {
	if (!rootFontSize) {
		const doc = document.documentElement;
		const fontSize =
			doc.style.fontSize || window.getComputedStyle(doc).fontSize;

		rootFontSize = parseFloat(fontSize);
	}

	return rootFontSize;
}

function convertRem(value: string) {
	value = value.replace(/rem/g, '');
	return +value * getRootFontSize();
}

function convertVw(value: string) {
	value = value.replace(/vw/g, '');
	return (+value * window.innerWidth) / 100;
}

function convertVh(value: string) {
	value = value.replace(/vh/g, '');
	return (+value * window.innerHeight) / 100;
}

export function unitToPx(value: string | number): number {
	if (typeof value === 'number') {
		return value;
	}

	if (IS_BROWSER) {
		if (value.indexOf('rem') !== -1) {
			return convertRem(value);
		}
		if (value.indexOf('vw') !== -1) {
			return convertVw(value);
		}
		if (value.indexOf('vh') !== -1) {
			return convertVh(value);
		}
	}

	return parseFloat(value);
}

function trimExtraChar(value: string, char: string, regExp: RegExp) {
	const index = value.indexOf(char);

	if (index === -1) {
		return value;
	}

	if (char === '-' && index !== 0) {
		return value.slice(0, index);
	}

	return value.slice(0, index + 1) + value.slice(index).replace(regExp, '');
}

export function formatNumber(
	value: string,
	options: {
		allowDot?: boolean;
		allowMinus?: boolean;
	} = {},
) {
	const allowDot = options.allowDot != null ? options.allowDot : true;
	const allowMinus = options.allowMinus != null ? options.allowMinus : true;

	if (allowDot) {
		value = trimExtraChar(value, '.', /\./g);
	} else {
		value = value.split('.')[0];
	}

	if (allowMinus) {
		value = trimExtraChar(value, '-', /-/g);
	} else {
		value = value.replace(/-/, '');
	}

	const regExp = allowDot ? /[^-0-9.]/g : /[^-0-9]/g;

	return value.replace(regExp, '');
}

export function padZero(num: number | string, targetLength = 2): string {
	let str = num + '';

	while (str.length < targetLength) {
		str = '0' + str;
	}

	return str;
}
