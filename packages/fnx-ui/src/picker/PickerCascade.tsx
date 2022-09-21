import React, {
	forwardRef,
	ReactElement,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import useMergedPropRef from '../hooks/use-merged-prop-ref';
import useGetState from '../hooks/use-get-state';
import useUpdateEffect from '../hooks/use-update-effect';
import { ForwardRefProps } from '../utils/interface';
import { isEqualArrays } from '../utils/misc';
import usePickerProps, { PickerDataGetters } from './hooks/use-picker-props';
import {
	PickerCascadeProps,
	PickerCascadeRef,
	PickerOption,
	PickerValue,
} from './interface';
import PickerColumn from './PickerColumn';
import PickerContainer from './PickerContainer';
import { adjustActiveIndex } from './utils';

const getRandomKey = (max = 999999) => Math.floor(Math.random() * max) + 1;

const parseOptions = (
	indexes: number[],
	columns: PickerOption[],
): PickerOption[] => {
	const output: PickerOption[] = [];

	for (let i = 0; i < indexes.length; i++) {
		const index = indexes[i];
		const option = (columns || [])[i][index];
		output.push(option);
	}

	return output;
};

const parseValues = (
	options: PickerOption[],
	names: PickerDataGetters,
	prevValues?: PickerValue[],
): PickerValue[] => {
	const values = options.map((o) => names.value(o));

	if (prevValues) {
		return isEqualArrays(prevValues, values) ? prevValues : values;
	}

	return values;
};

const parseIndexes = (
	data: PickerOption[],
	names: PickerDataGetters,
	_value?: PickerValue[],
): number[] => {
	const value = _value || [];

	const output: number[] = [];
	let cursor = 0;

	while (data && data.length > 0) {
		const v = value[cursor];

		let idx = v != null ? data.findIndex((d) => names.value(d) === v) : 0;
		idx = adjustActiveIndex(idx, data, (d) => !!names.disabled(d));

		output[cursor] = idx;
		data = names.children(data[idx]) || [];
		cursor++;
	}

	return output;
};

const parseColumns = (
	data: PickerOption[],
	names: PickerDataGetters,
	indexes: number[],
): Array<PickerOption[]> => {
	const output: Array<PickerOption[]> = [];

	for (let i = 0; i < indexes.length; i++) {
		if (data && data.length) {
			output.push(data);
			const idx = indexes[i];
			data = (data[idx] && names.children(data[idx])) || [];
		} else {
			output.push([]);
		}
	}

	return output;
};

const InternalPickerCascade = forwardRef<PickerCascadeRef, PickerCascadeProps>(
	(_props, ref) => {
		const [
			{
				optionHeight,
				visibleOptionsCount,
				transitionDuration,
				dataNames,
			},
			{ defaultValue, data, onChange, onConfirm, onCancel, ...restProps },
		] = usePickerProps(_props);

		const rootRef = useRef<HTMLDivElement>(null);

		const onChangeRef = useMergedPropRef(onChange);

		const [indexes, setIndexes] = useState<number[]>(() =>
			parseIndexes(data || [], dataNames, defaultValue),
		);

		const [columns, setColumns] = useState<Array<[number, PickerOption[]]>>(
			() =>
				parseColumns(data || [], dataNames, indexes).map((c) => [0, c]),
		);

		const [options, setOptions, getOptions] = useGetState(() =>
			parseOptions(
				indexes,
				columns.map(([, c]) => c),
			),
		);

		const [values, setValues, getValues] = useGetState(
			() => defaultValue || parseValues(options, dataNames),
		);

		useImperativeHandle<PickerCascadeRef, PickerCascadeRef>(
			ref,
			() => {
				return {
					element: rootRef.current,
					getOptions: () => getOptions(),
					getValue: () => getValues(),
				};
			},
			[getOptions, getValues],
		);

		const onColumnChange = (
			options: PickerOption[],
			optionIndex: number,
			level: number,
		) => {
			const children =
				(options[optionIndex] &&
					dataNames.children(options[optionIndex])) ||
				[];

			const indexesPart = parseIndexes(children, dataNames);

			const nextIndexes = [
				...indexes.slice(0, level),
				optionIndex,
				...indexesPart,
			];

			const key = getRandomKey();

			const columnsPart = parseColumns(
				children,
				dataNames,
				indexesPart,
			).map<[number, PickerOption[]]>((cols) => [key, cols]);

			const nextColumns = [
				...columns.slice(0, level + 1),
				...columnsPart,
			];

			const nextOptions = parseOptions(
				nextIndexes,
				nextColumns.map(([, c]) => c),
			);

			setIndexes(nextIndexes);
			setColumns(nextColumns);
			setOptions(nextOptions);
			setValues((prev) => parseValues(nextOptions, dataNames, prev));
		};

		useUpdateEffect(() => {
			const nextIndexes = parseIndexes(
				data || [],
				dataNames,
				getValues(),
			);

			const nextColumns = parseColumns(
				data || [],
				dataNames,
				nextIndexes,
			);

			const nextOptions = parseOptions(nextIndexes, nextColumns);

			setIndexes(nextIndexes);
			setColumns(() => {
				const key = getRandomKey();
				return nextColumns.map((col) => [key, col]);
			});
			setOptions(nextOptions);
			setValues((prev) => parseValues(nextOptions, dataNames, prev));
		}, [data, dataNames, setValues, getValues]);

		useUpdateEffect(() => {
			const _onChange = onChangeRef.current;

			if (_onChange) {
				_onChange(values, getOptions());
			}
		}, [onChangeRef, values, getOptions]);

		return (
			<PickerContainer
				{...restProps}
				optionHeight={optionHeight}
				visibleOptionsCount={visibleOptionsCount}
				ref={rootRef}
				onConfirm={() => {
					onConfirm && onConfirm(values, options);
				}}
				onCancel={() => {
					onCancel && onCancel();
				}}
			>
				{columns.map(([key, options], idx) => {
					return (
						<PickerColumn
							key={`${key}-${idx}`}
							optionHeight={optionHeight}
							visibleOptionsCount={visibleOptionsCount}
							transitionDuration={transitionDuration}
							defaultValue={values[idx]}
							data={options}
							dataNames={dataNames}
							onChange={(_, cIdex) =>
								onColumnChange(options, cIdex, idx)
							}
						/>
					);
				})}
			</PickerContainer>
		);
	},
);

InternalPickerCascade.displayName = 'PickerCascade';

const PickerCascade = InternalPickerCascade as <T = PickerOption>(
	props: ForwardRefProps<PickerCascadeProps<T>, PickerCascadeRef<any>>,
) => ReactElement;

export default PickerCascade;
