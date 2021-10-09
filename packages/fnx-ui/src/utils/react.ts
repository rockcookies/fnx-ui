import { Children, ReactElement } from 'react';
import { isFragment } from 'react-is';

export const toElementArray = (
	children: React.ReactNode,
	option?: { keepEmpty?: boolean },
): ReactElement[] => {
	const keepEmpty = option && option.keepEmpty;
	let ret: React.ReactElement[] = [];

	Children.forEach(children, (child: any) => {
		if ((child === undefined || child === null) && !keepEmpty) {
			return;
		}

		if (Array.isArray(child)) {
			ret = ret.concat(toElementArray(child));
		} else if (isFragment(child) && child.props) {
			ret = ret.concat(toElementArray(child.props.children, option));
		} else {
			ret.push(child);
		}
	});

	return ret;
};
