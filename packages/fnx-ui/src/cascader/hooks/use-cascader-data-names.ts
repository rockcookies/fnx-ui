import { ReactNode } from 'react';
import { CascaderDataNames, CascaderOption, CascaderValue } from '..';
import configDataNames from '../../hooks/config-data-names';

export interface CascaderDataGetters {
	label: (o: CascaderOption) => ReactNode | undefined;
	value: (o: CascaderOption) => CascaderValue;
	loading: (o: CascaderOption) => boolean | undefined;
	disabled: (o: CascaderOption) => boolean | undefined;
	children: (o: CascaderOption) => CascaderOption[] | undefined;
}

const useCascaderDataNames = configDataNames<
	CascaderDataNames,
	CascaderDataGetters
>({
	label: 'label',
	value: 'value',
	loading: 'loading',
	disabled: 'disabled',
	children: 'children',
});

export default useCascaderDataNames;
