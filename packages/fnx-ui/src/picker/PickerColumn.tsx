import React, {
	CSSProperties,
	forwardRef,
	ReactNode,
	useCallback,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
} from 'react';
import useCreation from '../hooks/use-creation';
import useDefaultsRef from '../hooks/use-defaults-ref';
import useSafeState from '../hooks/use-safe-state';
import useUpdateEffect from '../hooks/use-update-effect';
import { preventDefault, SUPPORTS_PASSIVE } from '../utils/dom/event';
import TouchHelper from '../utils/dom/touch-helper';
import { clamp } from '../utils/format';
import { isEqualArrays } from '../utils/misc';
import { createBEM } from '../utils/namespace';
import { PickerDataGetters } from './hooks/use-picker-props';
import { PickerOptionOrValue, PickerValue } from './interface';
import { adjustActiveIndex } from './utils';

interface CProps {
	optionHeight: number;
	visibleOptionsCount: number;
	transitionDuration: number;
	data?: PickerOptionOrValue[];
	dataNames: PickerDataGetters;
	defaultValue?: PickerValue;
	onChange?: (value: PickerValue, index: number) => void;
}

interface PickerColumnOption {
	value: PickerValue;
	disabled: boolean;
}

export interface PickerColumnRef {
	root: HTMLDivElement | null;
	getActiveValue: () => PickerValue;
	getActiveIndex: () => number;
	getActiveOption: () => PickerOptionOrValue;
}

const NS = 'fnx-picker-column';
const bem = createBEM(NS);

interface PickerState {
	data?: PickerOptionOrValue[];
	options: PickerColumnOption[];
	activeIndex: number;
	wrapperOffset: number;
	optionHeight: number;
	swipingTimer?: NodeJS.Timeout;
}

const getElementTranslateY = (element: Element) => {
	const style = window.getComputedStyle(element);
	const transform = style.transform || style.webkitTransform;
	const translateY = transform.slice(7, transform.length - 1).split(', ')[5];

	return Number(translateY);
};

// 惯性滑动思路:
// 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_LIMIT_TIME` 且 move
// 距离大于 `MOMENTUM_LIMIT_DISTANCE` 时，执行惯性滑动
const MOMENTUM_LIMIT_TIME = 300;
const MOMENTUM_LIMIT_DISTANCE = 15;

const getBaseOffset = (optionHeight: number, visibleOptionsCount: number) => {
	return (optionHeight * (visibleOptionsCount - 1)) / 2;
};

const adjustIndex = (index: number, options: PickerColumnOption[]) => {
	return adjustActiveIndex(index, options, (o) => o.disabled);
};
const PickerColumn = forwardRef<PickerColumnRef, CProps>((props, ref) => {
	const { optionHeight, visibleOptionsCount, defaultValue, data, dataNames } =
		props;
	const propsRef = useRef(props);

	const rootRef = useRef<HTMLDivElement>(null);
	const wrapperRef = useRef<HTMLUListElement>(null);

	const [labels, options] = useCreation<[ReactNode[], PickerColumnOption[]]>(
		(prev) => {
			const nextLabels: ReactNode[] = [];
			const nextOptions: PickerColumnOption[] = [];

			for (const item of Array.isArray(data) ? data : []) {
				if (typeof item === 'string' || typeof item === 'number') {
					nextLabels.push(item);
					nextOptions.push({
						value: item,
						disabled: false,
					});
				} else {
					nextLabels.push(dataNames.label(item));
					nextOptions.push({
						value: dataNames.value(item),
						disabled: !!dataNames.disabled(item),
					});
				}
			}

			if (!prev) {
				return [nextLabels, nextOptions];
			}

			const [, prevOptions] = prev;

			if (
				isEqualArrays<PickerColumnOption>(
					prevOptions,
					nextOptions,
					(a, b) => a.value === b.value && a.disabled === b.disabled,
				)
			) {
				return [nextLabels, prevOptions];
			} else {
				return [nextLabels, nextOptions];
			}
		},
		[dataNames, data],
	);

	const [activeIndex, _setActiveIndex] = useSafeState<number>(() => {
		return adjustIndex(
			options.findIndex(({ value }) => value === defaultValue),
			options,
		);
	});

	const activeValue = useMemo<PickerValue | undefined>(() => {
		const option = options[activeIndex];

		if (option && !option.disabled) {
			return option.value;
		}
	}, [activeIndex, options]);
	const activeValueRef = useDefaultsRef(activeValue);

	const [wrapperOffset, _setWrapperOffset] = useSafeState<number>(
		() => -activeIndex * optionHeight,
	);

	const stateRef = useDefaultsRef<PickerState>({
		data,
		options,
		activeIndex,
		wrapperOffset,
		optionHeight,
	});

	const setActiveIndex = useCallback(
		(v: number): number => {
			_setActiveIndex(v);
			stateRef.current.activeIndex = v;

			return v;
		},
		[_setActiveIndex, stateRef],
	);

	const setWrapperOffset = useCallback(
		(v: number): number => {
			_setWrapperOffset(v);
			stateRef.current.wrapperOffset = v;

			return v;
		},
		[_setWrapperOffset, stateRef],
	);

	const [swipingDuration, setSwipingDuration] = useSafeState<number>();

	const clearSwiping = useCallback(() => {
		setSwipingDuration(undefined);

		if (stateRef.current.swipingTimer) {
			clearTimeout(stateRef.current.swipingTimer);
			stateRef.current.swipingTimer = undefined;
		}
	}, [setSwipingDuration, stateRef]);

	const baseOffset = useMemo(
		() => getBaseOffset(optionHeight, visibleOptionsCount),
		[optionHeight, visibleOptionsCount],
	);

	const swipeTo = useCallback(
		(index: number, { animation }: { animation: boolean }) => {
			const { transitionDuration } = propsRef.current;
			const { optionHeight, options } = stateRef.current;

			clearSwiping();

			index = adjustIndex(index, options);
			setWrapperOffset(-index * optionHeight);

			const cb = () => {
				clearSwiping();
				setActiveIndex(index);
			};

			if (animation) {
				setSwipingDuration(transitionDuration);

				stateRef.current.swipingTimer = setTimeout(
					cb,
					transitionDuration,
				);
			} else {
				cb();
			}
		},
		[
			clearSwiping,
			setActiveIndex,
			setSwipingDuration,
			setWrapperOffset,
			stateRef,
		],
	);

	const pickerColumnRef = useMemo<PickerColumnRef>(() => {
		return {
			root: rootRef.current,
			getActiveValue: () => activeValueRef.current as any,
			getActiveIndex: () => stateRef.current.activeIndex,
			getActiveOption: () => {
				const { activeIndex, data } = stateRef.current;
				return (data || [])[activeIndex];
			},
		};
	}, [activeValueRef, stateRef]);

	useImperativeHandle<PickerColumnRef, PickerColumnRef>(
		ref,
		() => pickerColumnRef,
		[pickerColumnRef],
	);

	useEffect(() => {
		const { activeIndex } = stateRef.current;

		const index = adjustIndex(activeIndex, options);
		if (index !== activeIndex) {
			swipeTo(index, { animation: false });
		}
	}, [options, stateRef, swipeTo]);

	useUpdateEffect(() => {
		const { onChange } = propsRef.current;

		if (activeValue != null && onChange) {
			const { activeIndex } = stateRef.current;
			onChange(activeValue, activeIndex);
		}
	}, [activeValue, stateRef]);

	useEffect(() => {
		const node = rootRef.current;

		if (!node) {
			return;
		}

		let touch: TouchHelper | undefined;

		let startOffset = 0;
		let momentumOffset = 0;
		let offset = 0;
		let touchStartTime = 0;

		const onTouchStart = (event: TouchEvent) => {
			touch = new TouchHelper();
			touch.start(event);

			const { swipingTimer, optionHeight, wrapperOffset } =
				stateRef.current;

			// swiping
			if (swipingTimer) {
				const translateY = wrapperRef.current
					? getElementTranslateY(wrapperRef.current)
					: 0;

				const { visibleOptionsCount } = propsRef.current;

				startOffset = Math.min(
					0,
					translateY -
						getBaseOffset(optionHeight, visibleOptionsCount),
				);
			} else {
				startOffset = wrapperOffset;
			}

			clearSwiping();
			setSwipingDuration(undefined);
			touchStartTime = Date.now();
			momentumOffset = startOffset;
			offset = setWrapperOffset(startOffset);
		};

		const onTouchMove = (event: TouchEvent) => {
			if (!touch) {
				return;
			}

			touch.move(event);
			preventDefault(event, true);

			const { optionHeight, options } = stateRef.current;

			offset = setWrapperOffset(
				clamp(
					startOffset + touch.touchData.deltaY,
					-options.length * optionHeight,
					optionHeight,
				),
			);

			const now = Date.now();
			if (now - touchStartTime > MOMENTUM_LIMIT_TIME) {
				touchStartTime = now;
				momentumOffset = offset;
			}
		};

		const onTouchEnd = () => {
			if (!touch) {
				return;
			}

			const distance = offset - momentumOffset;
			const duration = Date.now() - touchStartTime;

			const allowMomentum =
				duration < MOMENTUM_LIMIT_TIME &&
				Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

			if (allowMomentum) {
				const speed = Math.abs(distance / duration);
				offset = offset + (speed / 0.003) * (distance < 0 ? -1 : 1);
			}

			const { optionHeight, options } = stateRef.current;

			const index = adjustIndex(
				Math.round(-offset / optionHeight),
				options,
			);

			touch = undefined;
			swipeTo(index, { animation: true });
		};

		node.addEventListener('touchstart', onTouchStart, false);
		node.addEventListener(
			'touchmove',
			onTouchMove,
			SUPPORTS_PASSIVE ? { passive: false } : false,
		);
		node.addEventListener('touchend', onTouchEnd, false);
		node.addEventListener('touchcancel', onTouchEnd, false);

		return () => {
			node.removeEventListener('touchstart', onTouchStart);
			node.removeEventListener('touchmove', onTouchMove);
			node.removeEventListener('touchend', onTouchEnd);
			node.removeEventListener('touchcancel', onTouchEnd);
		};
	}, [
		rootRef,
		stateRef,
		clearSwiping,
		setWrapperOffset,
		swipeTo,
		setSwipingDuration,
	]);

	const renderOptions = (): ReactNode => {
		const optionStyle: CSSProperties = {
			height: `${optionHeight}px`,
		};

		const wrapperStyle: CSSProperties = {
			transform: `translate3d(0, ${wrapperOffset + baseOffset}px, 0)`,
		};

		if (swipingDuration != null) {
			wrapperStyle.transitionDuration = `${swipingDuration}ms`;
		}

		return (
			<ul
				className={bem('wrapper')}
				style={wrapperStyle}
				ref={wrapperRef}
			>
				{options.map(({ value, disabled }, idx) => {
					const label = labels[idx];

					return (
						<li
							className={bem('option', {
								selected: activeIndex === idx,
								disabled,
							})}
							key={value}
							tabIndex={0}
							role="button"
							style={optionStyle}
							onClick={() => swipeTo(idx, { animation: true })}
						>
							{typeof label === 'string' ? (
								<div className="fnx-ellipsis">{label}</div>
							) : (
								{ label }
							)}
						</li>
					);
				})}
			</ul>
		);
	};

	return (
		<div className={bem()} ref={rootRef}>
			{renderOptions()}
		</div>
	);
});

PickerColumn.displayName = 'PickerColumn';

export default PickerColumn;
