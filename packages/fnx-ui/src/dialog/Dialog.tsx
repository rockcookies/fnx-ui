import React, { forwardRef } from 'react';
import Button, { ButtonProps } from '../button';
import configComponentProps from '../hooks/config-component-props';
import { useLocale } from '../locale';
import Popup from '../popup';
import { BORDER_LEFT, BORDER_TOP } from '../utils/constants';
import { addUnit } from '../utils/format';
import { noop } from '../utils/misc';
import { classnames, createBEM } from '../utils/namespace';
import { DialogProps } from './interface';

const NS = 'fnx-dialog';
const bem = createBEM(NS);

const useProps = configComponentProps<
	Required<
		Pick<
			DialogProps,
			| 'messageAlign'
			| 'onConfirm'
			| 'onCancel'
			| 'confirmLoading'
			| 'confirmButtonProps'
			| 'cancelLoading'
			| 'cancelButtonProps'
			| 'transitionName'
			| 'bodyProps'
		>
	>
>({
	messageAlign: 'center',
	onConfirm: noop,
	onCancel: noop,
	confirmLoading: false,
	confirmButtonProps: {},
	cancelLoading: false,
	cancelButtonProps: {},
	transitionName: 'fnx-dialog-bounce',
	bodyProps: {},
});

const Dialog = forwardRef<HTMLDivElement, DialogProps>((_props, ref) => {
	const locale = useLocale('dialog');

	const [
		{
			messageAlign,
			onConfirm,
			onCancel,
			confirmLoading,
			cancelLoading,
			confirmButtonProps,
			cancelButtonProps,
			transitionName,
			bodyProps,
		},
		{
			title,
			footer,
			width,
			message,
			confirmButton,
			confirmText,
			cancelButton,
			cancelText,
			style,
			className,
			children,
			...resetProps
		},
	] = useProps(_props);

	const hasHeader = !!title;
	const hasBody = !!message || !!children;
	const hasFooter = footer !== false;

	const renderHeader = () => {
		return (
			<div
				className={bem('header', {
					isolated: !hasBody,
				})}
			>
				{title}
			</div>
		);
	};

	const renderBody = () => {
		if (children) {
			return (
				<div
					{...bodyProps}
					className={classnames(bem('body'), bodyProps.className)}
				>
					{children}
				</div>
			);
		}

		if (message) {
			return (
				<div
					className={bem('message', {
						'has-header': hasHeader,
						[messageAlign]: messageAlign,
					})}
				>
					{message}
				</div>
			);
		}
	};

	const renderButton = ({
		loading,
		children,
		onClick,
		className,
		extraProps,
	}: ButtonProps & { extraProps: ButtonProps }) => {
		return (
			<Button
				loading={loading}
				{...extraProps}
				className={classnames(className, extraProps.className)}
				onClick={(...args) => {
					onClick && onClick(...args);
					extraProps.onClick && extraProps.onClick(...args);
				}}
			>
				{children}
			</Button>
		);
	};

	const renderFooter = () => {
		if (footer) {
			return (
				<div className={classnames(BORDER_TOP, bem('footer'))}>
					{footer}
				</div>
			);
		}

		return (
			<div className={classnames(BORDER_TOP, bem('footer'))}>
				{confirmButton !== false &&
					(confirmButton ||
						renderButton({
							loading: confirmLoading,
							children: confirmText || locale.confirm,
							className: bem('confirm'),
							extraProps: confirmButtonProps,
							onClick: onConfirm,
						}))}
				{cancelButton !== false &&
					(cancelButton ||
						renderButton({
							loading: cancelLoading,
							children: cancelText || locale.cancel,
							className: classnames(
								confirmButton !== false
									? BORDER_LEFT
									: undefined,
								bem('cancel'),
							),
							extraProps: cancelButtonProps,
							onClick: onCancel,
						}))}
			</div>
		);
	};

	return (
		<Popup
			role="dialog"
			className={classnames(bem(), className)}
			style={{ width: addUnit(width), ...style }}
			ref={ref}
			overlayCloseable={false}
			transitionName={transitionName}
			{...resetProps}
			onClose={onCancel}
		>
			{hasHeader && renderHeader()}
			{hasBody && renderBody()}
			{hasFooter && renderFooter()}
		</Popup>
	);
});

Dialog.displayName = 'Dialog';

export default Dialog;
