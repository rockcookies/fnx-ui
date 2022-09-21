import React, {
	forwardRef,
	ReactElement,
	useImperativeHandle,
	useMemo,
	useRef,
} from 'react';
import { ForwardRefProps } from '../utils/interface';
import usePickerProps from './hooks/use-picker-props';
import { PickerOptionOrValue, PickerProps, PickerRef } from './interface';
import PickerColumn, { PickerColumnRef } from './PickerColumn';
import PickerContainer from './PickerContainer';

const InternalPicker = forwardRef<PickerRef, PickerProps>((_props, ref) => {
	const [
		{ optionHeight, visibleOptionsCount, transitionDuration, dataNames },
		{ defaultValue, data, onChange, onConfirm, onCancel, ...restProps },
	] = usePickerProps(_props);

	const rootRef = useRef<HTMLDivElement>(null);
	const columnRef = useRef<PickerColumnRef>(null);

	const pickerRef = useMemo<PickerRef>(
		() => ({
			element: rootRef.current,
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
						onChange(pickerRef.getValue(), pickerRef.getOption());
				}}
				ref={columnRef}
			/>
		</PickerContainer>
	);
});

InternalPicker.displayName = 'Picker';

const Picker = InternalPicker as <T extends PickerOptionOrValue>(
	props: ForwardRefProps<PickerProps<T>, PickerRef<any>>,
) => ReactElement;

export default Picker;
