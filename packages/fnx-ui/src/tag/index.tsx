import React, {
	CSSProperties,
	useContext,
	useImperativeHandle,
	useRef,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import ConfigProvider from '../config-provider';
import useControlledState from '../hooks/use-controlled-state';
import useDefaults from '../hooks/use-defaults';
import Icon from '../icon';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { createDefaultsForwardRef } from '../utils/react';
import { TagProps } from './interface';

const NS = 'fnx-tag';
const bem = createBEM(NS);

const Tag = createDefaultsForwardRef<
	HTMLSpanElement,
	TagProps,
	Required<Pick<TagProps, 'type' | 'size' | 'closeable' | 'onClose'>>
>(
	'Tag',
	{
		type: 'default',
		size: 'md',
		closeable: false,
		onClose: noop,
	},
	(
		{
			type,
			size,
			closeable,
			onClose,
			// optionals
			color,
			textColor,
			visible: _visible,
			theme,
			closeIcon,
			className,
			style,
			children,
			transitionDuration: _transitionDuration,
			...restProps
		},
		ref,
	) => {
		const configContext = useContext(ConfigProvider.Context);

		const rootRef = useRef<HTMLSpanElement | null>(null);

		useImperativeHandle<HTMLSpanElement | null, HTMLSpanElement | null>(
			ref,
			() => rootRef.current,
		);

		const transitionDuration = useDefaults(
			configContext.transitionDuration,
			_transitionDuration,
		);

		const { value: visible, onChangeRef } = useControlledState({
			defaultValue: true,
			value: _visible,
			onChange: (v) => {
				if (!v) {
					onClose();
				}
			},
		});

		const formatStyle = (): CSSProperties => {
			const formattedStyle: CSSProperties = {};

			if (theme === 'plain') {
				formattedStyle.color = textColor || color;
				formattedStyle.borderColor = color;
			} else {
				formattedStyle.color = textColor;
				formattedStyle.backgroundColor = color;
			}

			if (
				transitionDuration != null &&
				transitionDuration !== configContext.transitionDuration
			) {
				formattedStyle.transitionDuration = `${transitionDuration}ms`;
			}

			return { ...formattedStyle, ...style };
		};

		return (
			<CSSTransition
				classNames="fnx-fade"
				in={visible}
				timeout={transitionDuration || 0}
				nodeRef={rootRef}
				unmountOnExit={true}
			>
				<span
					{...restProps}
					className={classnames(
						bem({
							[type]: true,
							[size]: size !== 'md',
							...(theme != null ? { [theme]: true } : {}),
						}),
						className,
					)}
					style={formatStyle()}
					ref={rootRef}
				>
					{children}
					{closeable && (
						<span
							className={bem('close')}
							onClick={(e) => {
								e.stopPropagation();
								onChangeRef.current(false);
							}}
						>
							{closeIcon || <Icon name="cross" />}
						</span>
					)}
				</span>
			</CSSTransition>
		);
	},
);

export type {
	TagComponentProps,
	TagProps,
	TagSize,
	TagTheme,
	TagType,
} from './interface';
export default Tag;
