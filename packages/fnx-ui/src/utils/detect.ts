export const IS_BROWSER = typeof window !== 'undefined';

export function canUseBigInt() {
	return typeof BigInt === 'function';
}

export function canUseDom(): boolean {
	if (IS_BROWSER) {
		return !!(window.document && window.document.createElement);
	}

	return false;
}

export function canUseDocElement(): boolean {
	return canUseDom() && window.document.documentElement != null;
}

export function isAndroid(): boolean {
	return IS_BROWSER
		? /android/.test(navigator.userAgent.toLowerCase())
		: false;
}

export function isIOS(): boolean {
	return IS_BROWSER
		? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
		: false;
}
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(val: unknown): val is Function {
	return typeof val === 'function';
}

export function isObject(val: unknown): val is Record<any, any> {
	return val !== null && typeof val === 'object';
}

export function isPromise<T = any>(val: unknown): val is Promise<T> {
	return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

export function isNumeric(val: string | number): val is string {
	return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);
}

export function isDate(val: any): val is Date {
	return (
		Object.prototype.toString.call(val) === '[object Date]' &&
		!isNaN(val.getTime())
	);
}
