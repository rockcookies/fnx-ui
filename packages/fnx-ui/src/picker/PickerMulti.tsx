import React, {
	ReactElement,
	useImperativeHandle,
	useMemo,
	useRef,
} from 'react';
import { Dictionary, ForwardRefProps } from '../utils/interface';
import { createForwardRef } from '../utils/react';
import usePickerProps from './hooks/use-picker-props';
import {
	PickerMultiProps,
	PickerMultiRef,
	PickerOptionOrValue,
} from './interface';
import PickerColumn, { PickerColumnRef } from './PickerColumn';
import PickerContainer from './PickerContainer';

const PickerMulti = createForwardRef<PickerMultiRef, PickerMultiProps>(
	'PickerMulti',
	(_props, ref) => {
		const [
			{
				optionHeight,
				visibleOptionsCount,
				transitionDuration,
				dataNames,
			},
			{
				defaultValue,
				data: _data,
				onChange,
				onConfirm,
				onCancel,
				...restProps
			},
		] = usePickerProps(_props);

		const rootRef = useRef<HTMLDivElement>(null);
		const columnRefs = useRef<Dictionary<PickerColumnRef | null>>({});

		const data = useMemo(
			() => (Array.isArray(_data) ? _data : []),
			[_data],
		);

		const pickerMultiRef = useMemo<PickerMultiRef>(() => {
			function map<T>(collector: (r: PickerColumnRef) => T): T[] {
				const output: T[] = [];

				for (let i = 0; i < data.length; i++) {
					const cr = columnRefs.current[i];

					if (cr) {
						output.push(collector(cr));
					}
				}

				return output;
			}

			return {
				root: rootRef.current,
				getValue: () => map((cr) => cr.getActiveValue()),
				getOptions: () => map((cr) => cr.getActiveOption()),
			};
		}, [data.length]);

		useImperativeHandle<PickerMultiRef, PickerMultiRef>(
			ref,
			() => pickerMultiRef,
			[pickerMultiRef],
		);

		return (
			<PickerContainer
				{...restProps}
				optionHeight={optionHeight}
				visibleOptionsCount={visibleOptionsCount}
				ref={rootRef}
				onConfirm={() => {
					onConfirm &&
						onConfirm(
							pickerMultiRef.getValue(),
							pickerMultiRef.getOptions(),
						);
				}}
				onCancel={() => {
					onCancel && onCancel();
				}}
			>
				{data.map((item, idx) => {
					return (
						<PickerColumn
							key={idx}
							optionHeight={optionHeight}
							visibleOptionsCount={visibleOptionsCount}
							transitionDuration={transitionDuration}
							defaultValue={defaultValue && defaultValue[idx]}
							data={item}
							dataNames={dataNames}
							onChange={() => {
								onChange &&
									onChange(
										pickerMultiRef.getValue(),
										pickerMultiRef.getOptions(),
									);
							}}
							ref={(ref) => {
								columnRefs.current[idx] = ref;
							}}
						/>
					);
				})}
			</PickerContainer>
		);
	},
) as <T extends PickerOptionOrValue = PickerOptionOrValue>(
	props: ForwardRefProps<PickerMultiProps<T>, PickerMultiRef<any>>,
) => ReactElement;

export default PickerMulti;
