/**
 * bem helper
 * b() // 'button'
 * b('text') // 'button__text'
 * b({ disabled }) // 'button button--disabled'
 * b('text', { disabled }) // 'button__text button__text--disabled'
 * b(['disabled', 'primary']) // 'button button--disabled button--primary'
 */

type Mod = string | { [key: string]: any };
type Mods = Mod | Mod[];
export type BEM = (el?: Mods, mods?: Mods) => string;

export function createBEM(name: string): BEM {
	const gen = (name: string, mods?: Mods): string => {
		if (!mods) {
			return '';
		}

		if (typeof mods === 'string') {
			return ` ${name}--${mods}`;
		}

		if (Array.isArray(mods)) {
			return (mods as any[]).reduce<string>(
				(ret, item) => ret + gen(name, item),
				'',
			);
		}

		return Object.keys(mods).reduce(
			(ret, key) => ret + (mods[key] ? gen(name, key) : ''),
			'',
		);
	};

	return function (el?: Mods, mods?: Mods): string {
		if (el && typeof el !== 'string') {
			mods = el;
			el = '';
		}

		el = el ? `${name}__${el}` : name;

		return `${el}${gen(el, mods)}`;
	};
}

function toVal(mix: any) {
	let k,
		y,
		str = '';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k = 0; k < mix.length; k++) {
				if (mix[k]) {
					if ((y = toVal(mix[k]))) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

export function classnames(...classNames: any[]): string {
	let i = 0,
		tmp,
		x,
		str = '';
	while (i < classNames.length) {
		if ((tmp = classNames[i++])) {
			if ((x = toVal(tmp))) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}
