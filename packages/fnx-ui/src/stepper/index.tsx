import React, {
	CSSProperties,
	MouseEvent,
	ReactElement,
	TouchEvent,
	useCallback,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
	useState,
} from 'react';
import configComponentProps from '../hooks/config-component-props';
import useControlledState from '../hooks/use-controlled-state';
import useDefaultsRef from '../hooks/use-defaults-ref';
import useFocus from '../hooks/use-focus';
import { preventDefault } from '../utils/dom/event';
import { addUnit, formatNumber } from '../utils/format';
import { ForwardRefProps } from '../utils/interface';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { StepperProps, StepperRef, StepperValue } from './interface';
import { addValue, getValidNumber } from './utils';

const LONG_PRESS_INTERVAL = 200;
const LONG_PRESS_START_TIME = 600;

const NS = 'fnx-stepper';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<
		Pick<
			StepperProps,
			| 'defaultValue'
			| 'mode'
			| 'allowEmpty'
			| 'step'
			| 'showInput'
			| 'showPlus'
			| 'showMinus'
			| 'disabled'
			| 'disablePlus'
			| 'disableMinus'
			| 'disableInput'
			| 'longPress'
			| 'onStep'
		>
	>
>({
	defaultValue: '',
	mode: 'string',
	allowEmpty: false,
	step: 1,
	showInput: true,
	showPlus: true,
	showMinus: true,
	disabled: false,
	disablePlus: false,
	disableMinus: false,
	disableInput: false,
	longPress: true,
	onStep: noop,
});

const Stepper = createForwardRef<StepperRef, StepperProps>(
	'Stepper',
	(_props, ref) => {
		const timerRef = useRef<NodeJS.Timeout>();

		const [
			{
				defaultValue,
				mode,
				allowEmpty,
				step: _step,
				showInput,
				showPlus,
				showMinus,
				disabled,
				disablePlus,
				disableMinus,
				disableInput,
				longPress,
				onStep,
			},
			{
				onChange: _onChange,
				value: _value,
				min: _min,
				max: _max,
				buttonSize,
				inputWidth,
				precision,
				className,
				style,
				...restProps
			},
		] = useProps(_props);

		const min = useMemo(() => getValidNumber(_min), [_min]);
		const max = useMemo(() => getValidNumber(_max), [_max]);
		const step = useMemo(() => getValidNumber(_step), [_step]);

		const rootRef = useRef<HTMLDivElement>(null);
		const inputRef = useRef<HTMLInputElement>(null);

		useImperativeHandle<StepperRef, StepperRef>(ref, () => {
			return {
				root: rootRef.current,
				input: inputRef.current,
			};
		});

		const buttonStyle = useMemo<CSSProperties>(() => {
			const size = addUnit(buttonSize);
			return {
				width: size,
				height: size,
			};
		}, [buttonSize]);

		const inputStyle = useMemo<CSSProperties>(
			() => ({
				width: addUnit(inputWidth),
				height: addUnit(buttonSize),
			}),
			[buttonSize, inputWidth],
		);

		const formatValue = (
			rawValue: StepperValue | null | undefined,
		): StepperValue | null => {
			if ((rawValue == null || rawValue == '') && allowEmpty) {
				return null;
			}

			const formatted = formatNumber(
				rawValue == null ? '' : String(rawValue),
				{
					allowMinus: true,
					allowDot: precision == null || precision > 0,
				},
			);

			let ranged = formatted === '' ? 0 : Number(formatted);

			if (max != null && ranged >= max) {
				ranged = max;
			} else if (min != null && ranged <= min) {
				ranged = min;
			} else if (isNaN(ranged)) {
				ranged = min != null ? min : 0;
			}

			const target =
				precision != null && precision > 0
					? ranged.toFixed(precision)
					: String(ranged);

			return mode === 'string' ? String(target) : Number(target);
		};

		const { value, onChangeRef, controlled } =
			useControlledState<StepperValue | null>({
				value: _value,
				defaultValue,
				onChange: _onChange,
			});

		let displayValue = value != null ? value : '';
		if (!controlled) {
			const formatted = formatValue(value);
			displayValue = formatted != null ? formatted : '';
		}

		const displayNumber = useMemo(
			() => getValidNumber(displayValue),
			[displayValue],
		);

		const [focusedValue, setFocusedValue] = useState(() => displayValue);

		const {
			focus: focused,
			onFocus,
			onBlur,
		} = useFocus(displayValue, {
			node: inputRef,
			readonly: disableInput,
			onFocus: (v) => {
				setFocusedValue(v);
			},
			onBlur: () => {
				handleValueChange(focusedValue);
			},
		});

		const minusDisabled = useMemo<boolean>(() => {
			if (disableMinus || disabled) {
				return true;
			}

			if (min == null || displayNumber == null) {
				return false;
			}

			return displayNumber <= min;
		}, [disableMinus, disabled, displayNumber, min]);

		const plusDisabled = useMemo<boolean>(() => {
			if (disablePlus || disabled) {
				return true;
			}

			if (max == null || displayNumber == null) {
				return false;
			}

			return displayNumber >= max;
		}, [disablePlus, disabled, displayNumber, max]);

		const handleValueChange = (
			nextValue: StepperValue | null | undefined,
		): StepperValue | null => {
			const val = formatValue(nextValue);

			if (val !== value) {
				onChangeRef.current(val);
			}

			return val;
		};

		const stepClick = useDefaultsRef(
			(actionType: 'minus' | 'plus', e?: MouseEvent) => {
				// disable double tap scrolling on mobile safari
				if (e) {
					e.preventDefault();
				}

				if (
					(actionType === 'minus' && minusDisabled) ||
					(actionType === 'plus' && plusDisabled)
				) {
					return;
				}

				if (step == null) {
					return handleValueChange(displayNumber);
				}

				const diff = actionType === 'minus' ? -step : +step;
				const calculatedValue = addValue(
					displayNumber != null ? displayNumber : 0,
					diff,
				);

				const target = handleValueChange(calculatedValue);

				if (target != null) {
					onStep(target, {
						offset: diff,
						type: actionType,
					});
				}
			},
		);

		const handleMousedown = (event: MouseEvent) => {
			// fix mobile safari page scroll down issue
			// see: https://github.com/youzan/vant/issues/7690
			if (disableInput) {
				event.preventDefault();
			}
		};

		const clearTimer = useCallback(() => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
				timerRef.current = undefined;
			}
		}, []);

		useEffect(() => {
			return clearTimeout;
		}, []);

		const isLongPress = useRef(false);

		const handleTouchStart = (actionType: 'minus' | 'plus') => {
			if (!longPress) {
				return;
			}

			clearTimer();
			isLongPress.current = false;

			const longPressStep = () => {
				timerRef.current = setTimeout(() => {
					stepClick.current(actionType);
					longPressStep();
				}, LONG_PRESS_INTERVAL);
			};

			timerRef.current = setTimeout(() => {
				isLongPress.current = true;
				longPressStep();
			}, LONG_PRESS_START_TIME);
		};

		const handleTouchCancel = (e: TouchEvent) => {
			if (timerRef.current != null) {
				clearTimer();
				if (isLongPress.current) {
					preventDefault(e);
				}
			}
		};

		return (
			<span
				className={classnames(bem(), className)}
				style={style}
				role="group"
				{...restProps}
				ref={rootRef}
			>
				<button
					type="button"
					style={buttonStyle}
					className={bem('minus', {
						hidden: !showMinus,
						disabled: minusDisabled,
					})}
					aria-disabled={minusDisabled || undefined}
					onClick={(e) => stepClick.current('minus', e)}
					onTouchStart={() => handleTouchStart('minus')}
					onTouchCancel={(e) => handleTouchCancel(e)}
					onTouchEnd={(e) => handleTouchCancel(e)}
				/>

				<input
					className={bem('input', { hidden: !showInput })}
					ref={inputRef}
					type={precision != null && precision <= 0 ? 'tel' : 'text'}
					role="spinbutton"
					value={focused ? focusedValue : displayValue}
					style={inputStyle}
					disabled={disabled}
					readOnly={disableInput}
					// set keyboard in modern browsers
					inputMode={
						precision != null && precision <= 0
							? 'numeric'
							: 'decimal'
					}
					aria-valuemax={max}
					aria-valuemin={min}
					aria-valuenow={displayNumber}
					onFocus={onFocus}
					onBlur={onBlur}
					onChange={(e) => setFocusedValue(e.target.value)}
					onMouseDown={handleMousedown}
				/>

				<button
					type="button"
					style={buttonStyle}
					className={bem('plus', {
						hidden: !showPlus,
						disabled: plusDisabled,
					})}
					aria-disabled={plusDisabled || undefined}
					onClick={(e) => stepClick.current('plus', e)}
					onTouchStart={() => handleTouchStart('plus')}
					onTouchCancel={(e) => handleTouchCancel(e)}
					onTouchEnd={(e) => handleTouchCancel(e)}
				/>
			</span>
		);
	},
) as <T extends StepperValue = StepperValue>(
	props: ForwardRefProps<StepperProps<T>, StepperRef>,
) => ReactElement;

export type {
	StepperComponentProps,
	StepperMode,
	StepperProps,
	StepperRef,
	StepperValue,
} from './interface';

export default Stepper;
