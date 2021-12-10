import React, {
	CSSProperties,
	useEffect,
	useImperativeHandle,
	useRef,
} from 'react';
import useCompositionChange from '../hooks/use-composition-change';
import useControlledState from '../hooks/use-controlled-state';
import useCreation from '../hooks/use-creation';
import useFocus from '../hooks/use-focus';
import { clamp, unitToPx } from '../utils/format';
import { isEqualArrays } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { createDefaultsForwardRef } from '../utils/react';
import {
	FieldTextAreaCountFormatter,
	FieldTextAreaProps,
	FieldTextAreaRef,
} from './interface';
import { limitValueLength } from './utils';

const NS = 'fnx-field-textarea';
const bem = createBEM(NS);

const FieldTextArea = createDefaultsForwardRef<
	FieldTextAreaRef,
	FieldTextAreaProps,
	Required<
		Pick<
			FieldTextAreaProps,
			| 'defaultValue'
			| 'showCount'
			| 'autoSize'
			| 'rows'
			| 'readOnly'
			| 'disabled'
		>
	>
>(
	'FieldTextArea',
	{
		defaultValue: '',
		showCount: false,
		autoSize: false,
		rows: 1,
		readOnly: false,
		disabled: false,
	},
	(
		{
			defaultValue,
			showCount,
			autoSize: _autoSize,
			rows,
			readOnly,
			disabled,
			// optionals
			value: _value,
			onChange: _onChange,
			onFocus: _onFocus,
			onBlur: _onBlur,
			maxLength,
			className,
			style,
			...restProps
		},
		ref,
	) => {
		const rootRef = useRef<HTMLSpanElement>(null);
		const inputRef = useRef<HTMLTextAreaElement>(null);
		const autoSizeRef = useRef<HTMLTextAreaElement>(null);

		useImperativeHandle<FieldTextAreaRef, FieldTextAreaRef>(ref, () => {
			return {
				root: rootRef.current,
				input: inputRef.current,
			};
		});

		const autoSize = useCreation<[number, number] | undefined>(
			(prev) => {
				if (_autoSize === false) {
					return;
				}

				const next: [number, number] =
					_autoSize === true
						? [0, Number.MAX_SAFE_INTEGER]
						: [
								_autoSize.minHeight
									? unitToPx(_autoSize.minHeight)
									: 0,
								_autoSize.maxHeight
									? unitToPx(_autoSize.maxHeight)
									: Number.MAX_SAFE_INTEGER,
						  ];

				return prev && isEqualArrays(prev, next) ? prev : next;
			},
			[_autoSize],
		);

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
			if (!autoSize) {
				return;
			}

			const inputElement = inputRef.current;
			const autoSizeElement = autoSizeRef.current;

			if (!inputElement || !autoSizeElement) {
				return;
			}

			inputElement.style.height = `${clamp(
				autoSizeElement.scrollHeight,
				autoSize[0],
				autoSize[1],
			)}px`;
		}, [autoSize, displayCompositionValue]);

		const formatTextAreaStyle = (): CSSProperties => {
			const formattedStyle: CSSProperties = {};

			if (!autoSize) {
				formattedStyle.height = 'auto';
			} else {
				formattedStyle.minHeight = `${autoSize[0]}px`;
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

				<textarea
					aria-hidden="true"
					tabIndex={-1}
					ref={autoSizeRef}
					className={bem('auto-size')}
					value={displayCompositionValue}
					rows={rows}
					readOnly
				/>

				{renderCount()}
			</span>
		);
	},
);

export default FieldTextArea;
