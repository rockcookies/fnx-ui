import defaultLocale from '../locale/default';
import { DialogLocale } from './interface';

// thanks to: https://github.com/ant-design/ant-design/blob/HEAD/components/modal/locale.tsx

let runtimeLocale: DialogLocale = {
	...defaultLocale.dialog,
};

export function changeConfirmLocale(newLocale?: DialogLocale) {
	if (newLocale) {
		runtimeLocale = {
			...runtimeLocale,
			...newLocale,
		};
	} else {
		runtimeLocale = {
			...defaultLocale.dialog,
		};
	}
}

export function getConfirmLocale(): DialogLocale {
	return runtimeLocale;
}
