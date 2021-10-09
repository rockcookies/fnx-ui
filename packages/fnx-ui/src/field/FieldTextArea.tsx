import React, {
	CSSProperties,
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
} from 'react';
import useCompositionChange from '../hooks/use-composition-change';
import useControlledState from '../hooks/use-controlled-state';
import useFocus from '../hooks/use-focus';
import useProps from '../hooks/use-props';
import { classnames, createBEM } from '../utils/namespace';
import {
	FieldTextAreaCountFormatter,
	FieldTextAreaProps,
	FieldTextAreaRef,
} from './interface';
import { limitValueLength } from './utils';

const NS = 'fnx-field-textarea';
const bem = createBEM(NS);

type FieldTextAreaRequiredProps = Required<
	Pick<
		FieldTextAreaProps,
		| 'defaultValue'
		| 'showCount'
		| 'autoSize'
		| 'rows'
		| 'readOnly'
		| 'disabled'
	>
>;

const DEFAULT_PROPS: FieldTextAreaRequiredProps = {
	defaultValue: '',
	showCount: false,
	autoSize: false,
	rows: 1,
	readOnly: false,
	disabled: false,
};

const FieldTextArea = forwardRef<FieldTextAreaRef, FieldTextAreaProps>(
	(_props, ref) => {
		const [
			{ defaultValue, showCount, autoSize, rows, readOnly, disabled },
			{
				value: _value,
				onChange: _onChange,
				onFocus: _onFocus,
				onBlur: _onBlur,
				maxLength,
				className,
				style,
				...restProps
			},
		] = useProps<FieldTextAreaRequiredProps, FieldTextAreaProps>(
			DEFAULT_PROPS,
			_props,
		);

		const rootRef = useRef<HTMLSpanElement>(null);
		const inputRef = useRef<HTMLTextAreaElement>(null);

		useImperativeHandle<FieldTextAreaRef, FieldTextAreaRef>(ref, () => {
			return {
				root: rootRef.current,
				input: inputRef.current,
			};
		});

		const { value, onChangeRef, controlled } = useControlledState<string>({
			value: _value,
			defaultValue,
			onChange: _onChange,
		});

		let displayValue = value;
		if (maxLength != null && !controlled) {
			displayValue = limitValueLength(value, maxLength);
		}

		const handleValueChange = (nextValue: string) => {
			nextValue = limitValueLength(nextValue, maxLength);

			if (nextValue !== value) {
				onChangeRef.current(nextValue);
			}
		};

		const {
			value: displayCompositionValue,
			onComposition,
			onChange: onCompositionValueChange,
		} = useCompositionChange(displayValue, handleValueChange);

		const { focus, onFocus, onBlur } = useFocus(value, {
			readonly: readOnly,
			node: inputRef,
			onFocus: _onFocus,
			onBlur: _onBlur,
		});

		const renderCount = () => {
			if (showCount === false) {
				return;
			}

			const formatter: FieldTextAreaCountFormatter =
				showCount === true
					? ({ count, maxLength }) =>
							`${count}${
								maxLength != null ? ` / ${maxLength}` : ''
							}`
					: showCount;

			return (
				<span className={bem('count')}>
					{formatter({
						count: [...displayCompositionValue].length,
						maxLength,
					})}
				</span>
			);
		};

		useEffect(() => {
			const inputElement = inputRef.current;

			if (!inputElement) {
				return;
			}

			if (autoSize) {
				inputElement.style.height = 'auto';
				inputElement.style.height = `${inputElement.scrollHeight}px`;
			}
		}, [autoSize, displayCompositionValue]);

		const formatTextAreaStyle = (): CSSProperties => {
			const formattedStyle: CSSProperties = {};

			if (!autoSize) {
				formattedStyle.height = 'auto';
			}

			return formattedStyle;
		};

		return (
			<span
				ref={rootRef}
				className={classnames(
					bem([
						{
							focused: focus,
							disabled,
						},
					]),
					className,
				)}
				style={style}
			>
				<textarea
					{...restProps}
					className={bem('control')}
					style={formatTextAreaStyle()}
					rows={rows}
					ref={inputRef}
					value={displayCompositionValue}
					disabled={disabled}
					readOnly={readOnly}
					onBlur={onBlur}
					onFocus={onFocus}
					onCompositionStart={onComposition}
					onCompositionEnd={onComposition}
					onChange={(e) => onCompositionValueChange(e.target.value)}
				/>

				{renderCount()}
			</span>
		);
	},
);

FieldTextArea.displayName = 'FieldTextArea';

export default FieldTextArea;
