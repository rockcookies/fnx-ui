// native max length have incorrect line-break counting
// https://github.com/youzan/vant/issues/5033

import { InputHTMLAttributes } from 'react';
import { FieldInputType } from './interface';

// https://zhuanlan.zhihu.com/p/359265292
export function limitValueLength(value: string, maxLength?: number): string {
	const _value = [...value];
	if (maxLength != null && _value.length >= maxLength) {
		return _value.slice(0, maxLength).join('');
	}

	return value;
}

export const mapInputType = (
	inputType: FieldInputType,
): Partial<InputHTMLAttributes<any>> => {
	// type="number" is weird in iOS, and can't prevent dot in Android
	// so use inputmode to set keyboard in modern browsers
	if (inputType === 'number') {
		return {
			type: 'text',
			inputMode: 'decimal',
		};
	}

	if (inputType === 'digit') {
		return {
			type: 'tel',
			inputMode: 'numeric',
		};
	}

	return { type: inputType, inputMode: undefined };
};

/* export function getFieldId(
	...namePaths: Array<NamePath | null | undefined>
): string | undefined {
	const fid: string[] = [];

	for (const namePath of namePaths) {
		if (namePath != null) {
			const fields = (Array.isArray(namePath)
				? namePath
				: [namePath]
			).join('_');

			if (fields) {
				fid.push(fields);
			}
		}
	}

	if (fid.length > 0) {
		return fid.join('_');
	}
} */
