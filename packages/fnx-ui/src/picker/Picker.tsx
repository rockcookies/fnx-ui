import React, {
	ReactElement,
	useImperativeHandle,
	useMemo,
	useRef,
} from 'react';
import { ForwardRefProps } from '../utils/interface';
import { createForwardRef } from '../utils/react';
import usePickerProps from './hooks/use-picker-props';
import { PickerOptionOrValue, PickerProps, PickerRef } from './interface';
import PickerColumn, { PickerColumnRef } from './PickerColumn';
import PickerContainer from './PickerContainer';

const Picker = createForwardRef<PickerRef, PickerProps>(
	'Picker',
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
		const columnRef = useRef<PickerColumnRef>(null);

		const pickerRef = useMemo<PickerRef>(
			() => ({
				root: rootRef.current,
				getValue: (): any => columnRef.current?.getActiveValue(),
				getOption: (): any => columnRef.current?.getActiveOption(),
			}),
			[],
		);

		useImperativeHandle<PickerRef, PickerRef>(ref, () => pickerRef, [
			pickerRef,
		]);

		return (
			<PickerContainer
				{...restProps}
				optionHeight={optionHeight}
				visibleOptionsCount={visibleOptionsCount}
				ref={rootRef}
				onConfirm={() => {
					onConfirm &&
						onConfirm(pickerRef.getValue(), pickerRef.getOption());
				}}
				onCancel={() => {
					onCancel && onCancel();
				}}
			>
				<PickerColumn
					optionHeight={optionHeight}
					visibleOptionsCount={visibleOptionsCount}
					transitionDuration={transitionDuration}
					defaultValue={defaultValue}
					data={data}
					dataNames={dataNames}
					onChange={() => {
						onChange &&
							onChange(
								pickerRef.getValue(),
								pickerRef.getOption(),
							);
					}}
					ref={columnRef}
				/>
			</PickerContainer>
		);
	},
) as <T extends PickerOptionOrValue>(
	props: ForwardRefProps<PickerProps<T>, PickerRef<any>>,
) => ReactElement;

export default Picker;
