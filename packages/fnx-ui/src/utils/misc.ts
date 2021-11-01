import { isObject } from './detect';
import { Dictionary } from './interface';

const { hasOwnProperty } = Object.prototype;

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop(): void {}

export function sleep(timeoutsMs: number): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, timeoutsMs);
	});
}

/**
 * Replace with template.
 *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
 */
export function replaceMessage(template: string, kv: Dictionary): string {
	return template.replace(/\$\{\w+\}/g, (str: string) => {
		const key = str.slice(2, -1);
		return kv[key];
	});
}

export function devWarning(valid: boolean, component: string, message: string) {
	if (process.env.NODE_ENV !== 'production' && !valid && console != null) {
		console.error(`Warning: [fnx ${component}] ${message}`);
	}
}

function assignKey(to: Dictionary, from: Dictionary, key: string) {
	const val = from[key];

	if (!hasOwnProperty.call(to, key) || !isObject(val)) {
		to[key] = val;
	} else {
		to[key] = deepAssign(Object(to[key]), from[key]);
	}
}

export function deepAssign(to: Dictionary, from: Dictionary): Dictionary {
	Object.keys(from).forEach((key) => {
		assignKey(to, from, key);
	});

	return to;
}

export function deepClone(obj: Dictionary): Dictionary {
	if (Array.isArray(obj)) {
		return obj.map((item) => deepClone(item));
	}

	if (typeof obj === 'object') {
		return deepAssign({}, obj);
	}

	return obj;
}

export function isEqualArrays<T = any>(
	arrA: T[] | undefined | null,
	arrB: T[] | undefined | null,
	comparator: (a: T, b: T) => boolean = (a, b) => a === b,
): boolean {
	if (arrA === arrB) {
		return true;
	}

	if (!arrA || !arrB) {
		return false;
	}

	const len = arrA.length;

	if (arrB.length !== len) {
		return false;
	}

	for (let i = 0; i < len; i++) {
		if (!comparator(arrA[i], arrB[i])) {
			return false;
		}
	}

	return true;
}

export function getProperty(target: any, key: string | string[]): any {
	if (key == null) {
		return;
	}

	const path = Array.isArray(key) ? key : [key];

	let index = 0;
	const length = path.length;

	while (target != null && index < length) {
		target = target[path[index++]];
	}

	return index && index == length ? target : undefined;
}
