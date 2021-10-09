import React, { CSSProperties, FC } from 'react';
import useProps from '../hooks/use-props';
import { classnames, createBEM } from '../utils/namespace';
import { BadgeProps } from './interface';

const NS = 'fnx-badge';
const bem = createBEM(NS);

type RequiredBadgeProps = Required<
	Pick<BadgeProps, 'showZero' | 'max' | 'count'>
>;

const DEFAULT_PROPS: RequiredBadgeProps = {
	showZero: true,
	max: 99,
	count: 8,
};

const Badge: FC<BadgeProps> = (_props: BadgeProps) => {
	const [
		{ showZero, max, count },
		{ color, dot, offset, className, children, style, ...restProps },
	] = useProps<RequiredBadgeProps, BadgeProps>(DEFAULT_PROPS, _props);

	const renderCount = () => {
		if (!dot && count != null && (showZero || count !== 0)) {
			if (max != null && typeof count === 'number' && count > max) {
				return `${max}+`;
			}

			return count;
		}
	};

	const renderBadge = () => {
		const formatStyle = (): CSSProperties | undefined => {
			const formattedStyle: CSSProperties = {
				background: color,
			};

			if (offset) {
				const [x, y] = offset;

				if (children) {
					formattedStyle.top = `${-y}px`;

					if (typeof x === 'number') {
						formattedStyle.right = `${-x}px`;
					} else {
						formattedStyle.right = x.startsWith('-')
							? `${x.replace('-', '')}px`
							: `-${x}px`;
					}
				} else {
					formattedStyle.marginTop = `${y}px`;
					formattedStyle.marginLeft = `${x}px`;
				}
			}

			return { ...formattedStyle, ...style };
		};

		return (
			<span
				className={classnames(
					bem({
						dot,
						fixed: children,
					}),
					className,
				)}
				style={formatStyle()}
				{...restProps}
			>
				{renderCount()}
			</span>
		);
	};

	if (children) {
		return (
			<div className={bem('wrapper')}>
				{children}
				{renderBadge()}
			</div>
		);
	}

	return renderBadge();
};

Badge.displayName = 'Badge';

export type { BadgeComponentProps, BadgeProps } from './interface';

export default Badge;
