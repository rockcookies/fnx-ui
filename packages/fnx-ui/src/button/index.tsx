import React, { CSSProperties, ReactNode } from 'react';
import configComponentProps from '../hooks/config-component-props';
import Icon from '../icon';
import { BORDER_SURROUND } from '../utils/constants';
import { preventDefault } from '../utils/dom/event';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { createForwardRef } from '../utils/react';
import { ButtonProps } from './interface';

const NS = 'fnx-button';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<
		Pick<
			ButtonProps,
			| 'type'
			| 'size'
			| 'iconPosition'
			| 'loading'
			| 'disabled'
			| 'hairline'
			| 'plain'
			| 'shape'
			| 'block'
			| 'onClick'
		>
	>
>({
	type: 'default',
	size: 'md',
	iconPosition: 'left',
	loading: false,
	disabled: false,
	hairline: false,
	plain: false,
	shape: 'radius',
	block: false,
	onClick: noop,
});

const Button = createForwardRef<HTMLButtonElement, ButtonProps>(
	'Button',
	(_props, ref) => {
		const [
			{
				type,
				size,
				iconPosition,
				loading,
				disabled,
				hairline,
				plain,
				shape,
				block,
				onClick,
			},
			{
				icon,
				loadingIcon,
				loadingChildren,
				color,
				htmlType,
				className,
				style,
				children,
				...restProps
			},
		] = useProps(_props);

		const formatStyle = (): CSSProperties | undefined => {
			if (!color) {
				return style;
			}

			const formattedStyle: CSSProperties = {
				...(plain ? { color } : { background: color }),
			};

			// hide border when color is linear-gradient
			if (color.indexOf('gradient') !== -1) {
				formattedStyle.border = 'none';
			} else {
				formattedStyle.borderColor = color;
			}

			return { ...formattedStyle, ...style };
		};

		const renderIcon = () => {
			if (loading) {
				return loadingIcon || <Icon.Spinner />;
			}

			return icon;
		};

		const renderChildren = () => {
			let node: ReactNode;

			if (loading && loadingChildren !== undefined) {
				node = loadingChildren;
			} else {
				node = children;
			}

			if (node) {
				return <span className={bem('text')}>{node}</span>;
			}
		};

		return (
			<button
				className={classnames(
					bem([
						type,
						size,
						shape !== 'radius' ? shape : undefined,
						{
							plain,
							block,
							loading,
							disabled,
							hairline,
							'custom-color': color,
						},
					]),
					hairline ? BORDER_SURROUND : undefined,
					className,
				)}
				style={formatStyle()}
				onClick={(e) => {
					if (loading) {
						preventDefault(e);
					}

					if (!loading && !disabled && onClick) {
						onClick(e);
					}
				}}
				type={htmlType}
				{...restProps}
				ref={ref}
			>
				<span className={bem('content')}>
					{iconPosition === 'left' && renderIcon()}
					{renderChildren()}
					{iconPosition === 'right' && renderIcon()}
				</span>
			</button>
		);
	},
);

export type {
	ButtonComponentProps,
	ButtonProps,
	ButtonShape,
	ButtonSize,
	ButtonType,
} from './interface';

export default Button;
