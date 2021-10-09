import { cloneElement, isValidElement, ReactElement, ReactNode } from 'react';
import useCreation from '../../hooks/use-creation';
import { isEqualArrays } from '../../utils/misc';
import { toElementArray } from '../../utils/react';

export interface TabMeta {
	key: string;
	title: ReactNode;
	panel: ReactElement;
	disabled: boolean;
}

export default function useTabMetaList(
	children: ReactNode,
): [string[], TabMeta[]] {
	const metaList: TabMeta[] = [];
	const keyList: string[] = [];

	toElementArray(children).forEach((child, idx) => {
		if (!isValidElement<any>(child)) {
			return;
		}

		const key = child.key != null ? `${child.key}` : `${idx}`;

		keyList.push(key);
		metaList.push({
			key,
			title: child.props.title,
			disabled: !!child.props.disabled,
			panel: cloneElement(child, {
				key,
				...child.props,
				'data-fnx-tab-panel-key': key,
			}),
		});
	});

	const keys = useCreation<string[]>(
		(prev) => {
			if (prev && isEqualArrays<string>(prev, keyList)) {
				return prev;
			}

			return keyList;
		},
		[keyList],
	);

	return [keys, metaList];
}
