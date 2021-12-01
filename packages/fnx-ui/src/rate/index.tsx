import React, {
	CSSProperties,
	forwardRef,
	ReactNode,
	useEffect,
	useImperativeHandle,
	useMemo,
	useRef,
} from 'react';
import useControlledState from '../hooks/use-controlled-state';
import useDefaultsRef from '../hooks/use-defaults-ref';
import useProps from '../hooks/use-props';
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

type RequiredRateProps = Required<
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
>;

const DEFAULT_PROPS: RequiredRateProps = {
	readonly: false,
	disabled: false,
	allowHalf: false,
	count: 5,
	touchable: true,
	defaultValue: 0,
	onChange: noop,
};

const Rate = forwardRef<HTMLUListElement, RateProps>((_props, ref) => {
	const [
		props,
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
	] = useProps<RequiredRateProps, RateProps>(DEFAULT_PROPS, _props);

	const character = _character || <Icon name="star"></Icon>;
	const voidCharacter = _voidCharacter || character;

	const {
		readonly,
		disabled,
		allowHalf,
		count,
		touchable,
		defaultValue,
		onChange: _onChange,
	} = props;

	const { value, onChangeRef } = useControlledState<number>({
		value: _value,
		defaultValue,
		onChange: _onChange,
	});

	const propsRef = useDefaultsRef(props);

	const handleChangeRef = useDefaultsRef((nextValue: number) => {
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

		let ranges: Array<[number, number]> = [];
		let allowHalf = false;

		const getScoreByPosition = (x: number) => {
			for (let i = ranges.length - 1; i >= 0; i--) {
				const [score, left] = ranges[i];

				if (x > left) {
					return score;
				}
			}
			return 0;
		};

		const onTouchStart = (event: TouchEvent) => {
			touch.start(event);

			const { count, allowHalf: _allowHalf } = propsRef.current;

			allowHalf = _allowHalf;
			ranges = [];

			for (let i = 0; i < count; i++) {
				const star = starRefs.current[i];
				const rect = star && star.getBoundingClientRect();

				if (!rect) {
					continue;
				}

				if (allowHalf) {
					ranges.push(
						[i + 0.5, rect.left],
						[i + 1, rect.left + rect.width / 2],
					);
				} else {
					ranges.push([i + 1, rect.left]);
				}
			}
		};

		const onTouchMove = (event: TouchEvent) => {
			if (untouchable) return;

			touch.move(event);

			if (touch.isHorizontal()) {
				const { clientX } = event.touches[0];
				preventDefault(event);
				handleChangeRef.current(getScoreByPosition(clientX));
			}
		};

		node.addEventListener('touchstart', onTouchStart, false);
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

export type { RateComponentProps, RateProps } from './interface';

Rate.displayName = 'Rate';

export default Rate;
