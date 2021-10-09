import { ReactNode, useContext, useMemo } from 'react';
import { PickerDataNames } from '..';
import ConfigProvider from '../../config-provider';
import configDataNames from '../../hooks/config-data-names';
import { unitToPx } from '../../utils/format';
import { PickerBaseProps, PickerOption, PickerValue } from '../interface';

export interface PickerDataGetters {
	label: (o: PickerOption) => ReactNode | undefined;
	value: (o: PickerOption) => PickerValue;
	disabled: (o: PickerOption) => boolean | undefined;
	children: (o: PickerOption) => PickerOption[] | undefined;
}

interface BaseProps {
	optionHeight: number;
	visibleOptionsCount: number;
	transitionDuration: number;
	dataNames: PickerDataGetters;
}

const usePickerDataNames = configDataNames<PickerDataNames, PickerDataGetters>({
	label: 'label',
	value: 'value',
	disabled: 'disabled',
	children: 'children',
});

function usePickerProps<T extends PickerBaseProps>({
	dataNames: _dataNames,
	optionHeight: _optionHeight,
	transitionDuration: _transitionDuration,
	visibleOptionsCount: _visibleOptionCount,
	...props
}: T): [BaseProps, Pick<T, Exclude<keyof T, keyof BaseProps>>] {
	const configContext = useContext(ConfigProvider.Context);

	const optionHeight = useMemo<number>(
		() => unitToPx(_optionHeight || 44),
		[_optionHeight],
	);

	const dataNames = usePickerDataNames(_dataNames);

	const transitionDuration =
		_transitionDuration || configContext.transitionDuration;

	const visibleOptionsCount = _visibleOptionCount || 6;

	return [
		{
			optionHeight,
			visibleOptionsCount,
			transitionDuration,
			dataNames,
		},
		props,
	];
}

export default usePickerProps;
