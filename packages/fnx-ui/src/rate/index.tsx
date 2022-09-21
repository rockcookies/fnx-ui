import React, {
	CSSProperties,
	forwardRef,
	ReactNode,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
} from 'react';
import configComponentProps from '../hooks/config-component-props';
import useControlledState from '../hooks/use-controlled-state';
import useMergedPropRef from '../hooks/use-merged-prop-ref';
import Icon from '../icon/Icon';
import { bindEvent, preventDefault } from '../utils/dom/event';
import TouchHelper from '../utils/dom/touch-helper';
import { addUnit } from '../utils/format';
import { Dictionary } from '../utils/interface';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { RateProps } from './interface';

const NS = 'fnx-rate';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<
		Pick<
			RateProps,
			| 'readonly'
			| 'disabled'
			| 'allowHalf'
			| 'count'
			| 'touchable'
			| 'defaultValue'
			| 'onChange'
		>
	>
>({
	readonly: false,
	disabled: false,
	allowHalf: false,
	count: 5,
	touchable: true,
	defaultValue: 0,
	onChange: noop,
});

const Rate = forwardRef<HTMLUListElement, RateProps>((_props, ref) => {
	const [
		{
			readonly,
			disabled,
			allowHalf,
			count,
			touchable,
			defaultValue,
			onChange: _onChange,
		},
		{
			size,
			color,
			voidColor,
			disabledColor,
			voidDisabledColor,
			className,
			character: _character,
			voidCharacter: _voidCharacter,
			gutter,
			value: _value,
			...restProps
		},
	] = useProps(_props);

	const character = _character || <Icon name="star"></Icon>;
	const voidCharacter = _voidCharacter || character;

	const { value, onChangeRef } = useControlledState<number>({
		value: _value,
		defaultValue,
		onChange: _onChange,
	});

	const propsRef = useMergedPropRef({
		readonly,
		disabled,
		allowHalf,
		count,
		touchable,
		defaultValue,
	});

	const handleChangeRef = useMergedPropRef((nextValue: number) => {
		if (!disabled && !readonly && nextValue !== value) {
			onChangeRef.current(nextValue);
		}
	});

	const rootRef = useRef<HTMLUListElement | null>(null);

	const starRefs = useRef<Dictionary<HTMLLIElement | null>>({});

	const untouchable = useMemo(
		() => readonly || disabled || !touchable,
		[readonly, disabled, touchable],
	);

	const starList = useMemo<number[]>(() => {
		return new Array(count).fill(0);
	}, [count]);

	useImperativeHandle<HTMLUListElement | null, HTMLUListElement | null>(
		ref,
		() => rootRef.current,
	);

	const handleClick = (v: number) => {
		if (allowHalf) {
			if (v === value) {
				handleChangeRef.current(v - 1);
			} else if (v > value) {
				handleChangeRef.current(Number.isInteger(value) ? v - 0.5 : v);
			} else {
				handleChangeRef.current(Number.isInteger(v) ? v - 1 : v);
			}
		} else {
			if (v === value) {
				handleChangeRef.current(v - 1);
			} else {
				handleChangeRef.current(v);
			}
		}
	};

	useEffect(() => {
		const node = rootRef.current;

		if (!node || readonly || disabled) {
			return;
		}

		const touch = new TouchHelper();

		let ranges: Array<{
			score: number;
			left: number;
			top: number;
			height: number;
		}> = [];
		let nodeRect: DOMRect;
		let minRectTop = Number.MAX_SAFE_INTEGER;
		let maxRectTop = Number.MIN_SAFE_INTEGER;
		let allowHalf = false;

		const getScoreByPosition = (x: number, y: number) => {
			for (let i = ranges.length - 1; i > 0; i--) {
				if (y >= nodeRect.top && y <= nodeRect.bottom) {
					if (
						x > ranges[i].left &&
						y >= ranges[i].top &&
						y <= ranges[i].top + ranges[i].height
					) {
						return ranges[i].score;
					}
				} else {
					const curTop = y < nodeRect.top ? minRectTop : maxRectTop;

					if (x > ranges[i].left && ranges[i].top === curTop) {
						return ranges[i].score;
					}
				}
			}
			return allowHalf ? 0.5 : 1;
		};

		const onTouchStart = (event: TouchEvent) => {
			touch.start(event);

			const { count, allowHalf: _allowHalf } = propsRef.current;

			allowHalf = _allowHalf;
			nodeRect = node.getBoundingClientRect();
			ranges = [];

			for (let i = 0; i < count; i++) {
				const star = starRefs.current[i];
				const r = star
					? star.getBoundingClientRect()
					: { top: 0, left: 0, height: 0, width: 0 };

				minRectTop = Math.min(r.top, minRectTop);
				maxRectTop = Math.max(r.top, maxRectTop);

				if (allowHalf) {
					ranges.push(
						{
							score: i + 0.5,
							left: r.left,
							top: r.top,
							height: r.height,
						},
						{
							score: i + 1,
							left: r.left + r.width / 2,
							top: r.top,
							height: r.height,
						},
					);
				} else {
					ranges.push({
						score: i + 1,
						left: r.left,
						top: r.top,
						height: r.height,
					});
				}
			}
		};

		const onTouchMove = (event: TouchEvent) => {
			if (untouchable) return;

			touch.move(event);

			if (touch.isHorizontal()) {
				const { clientX, clientY } = event.touches[0];
				preventDefault(event);
				handleChangeRef.current(getScoreByPosition(clientX, clientY));
			}
		};

		bindEvent(node, 'touchstart', onTouchStart, { passive: true });
		bindEvent(node, 'touchmove', onTouchMove, { passive: false });

		return () => {
			node.removeEventListener('touchstart', onTouchStart);
			node.removeEventListener('touchmove', onTouchMove);
		};
	}, [disabled, propsRef, readonly, handleChangeRef, untouchable]);

	const renderStar = (index: number): ReactNode => {
		const starValue = index + 1;

		const formattedStyle: CSSProperties = {};

		if (gutter && starValue !== count) {
			formattedStyle.paddingRight = addUnit(gutter);
		}

		let itemClasses: Dictionary = {};

		if (allowHalf && value + 0.5 >= starValue && value < starValue) {
			itemClasses = {
				half: true,
				active: true,
			};
		} else {
			itemClasses = starValue <= value ? { full: true } : { zero: true };
		}

		return (
			<li
				key={index}
				ref={(ref) => {
					starRefs.current[index] = ref;
				}}
				role="radio"
				style={formattedStyle}
				className={bem('item', itemClasses)}
				tabIndex={disabled ? undefined : 0}
				aria-setsize={count}
				aria-posinset={starValue}
				aria-checked={value > index}
			>
				<div
					className={bem('item-wrapper')}
					onClick={() => handleClick(starValue)}
					style={{
						fontSize: size != null ? addUnit(size) : '28px',
					}}
				>
					<div
						className={bem('void-character')}
						style={{
							color: disabled ? voidDisabledColor : voidColor,
						}}
					>
						{voidCharacter}
					</div>
					<div
						className={bem('character')}
						style={{ color: disabled ? disabledColor : color }}
					>
						{character}
					</div>
				</div>
			</li>
		);
	};

	return (
		<ul
			className={classnames(bem({ disabled }), className)}
			role="radiogroup"
			tabIndex={disabled ? undefined : 0}
			aria-disabled={disabled}
			aria-readonly={readonly}
			{...restProps}
			ref={rootRef}
		>
			{starList.map((_, idx) => renderStar(idx))}
		</ul>
	);
});

Rate.displayName = 'Rate';

export type { RateComponentProps, RateProps } from './interface';

export default Rate;
