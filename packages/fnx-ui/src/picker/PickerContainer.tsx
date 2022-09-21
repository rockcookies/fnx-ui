import React, {
	forwardRef,
	HTMLAttributes,
	isValidElement,
	useMemo,
} from 'react';
import Loading from '../loading';
import { useLocale } from '../locale';
import { BORDER_UNSET_TOP_BOTTOM } from '../utils/constants';
import { classnames, createBEM } from '../utils/namespace';
import { PickerBaseProps } from './interface';

interface CProps
	extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>,
		Pick<
			PickerBaseProps,
			| 'toolbar'
			| 'toolbarPosition'
			| 'title'
			| 'confirmButton'
			| 'cancelButton'
			| 'loading'
		> {
	optionHeight: number;
	visibleOptionsCount: number;
	onCancel?: () => void;
	onConfirm?: () => void;
}

const NS = 'fnx-picker';
const bem = createBEM(NS);

const PickerContainer = forwardRef<HTMLDivElement, CProps>((props, ref) => {
	const {
		optionHeight,
		visibleOptionsCount,
		toolbarPosition,
		toolbar,
		title,
		confirmButton,
		cancelButton,
		loading,
		onCancel,
		onConfirm,
		className,
		children,
		...restProps
	} = props;

	const locale = useLocale('picker');

	const wrapHeight = useMemo(
		() => optionHeight * visibleOptionsCount,
		[optionHeight, visibleOptionsCount],
	);

	const renderTitle = () => {
		if (title === false) {
			return;
		}

		if (isValidElement(title)) {
			return title;
		}

		return (
			title && (
				<div className={classnames(bem('title'), 'fnx-ellipsis')}>
					{title}
				</div>
			)
		);
	};

	const renderCancel = () => {
		if (cancelButton === false) {
			return;
		}

		if (isValidElement(cancelButton)) {
			return cancelButton;
		}

		return (
			<button type="button" className={bem('cancel')} onClick={onCancel}>
				{cancelButton || locale.cancel}
			</button>
		);
	};

	const renderConfirm = () => {
		if (confirmButton === false) {
			return;
		}

		if (isValidElement(confirmButton)) {
			return confirmButton;
		}

		return (
			<button
				type="button"
				className={bem('confirm')}
				onClick={onConfirm}
			>
				{confirmButton || locale.confirm}
			</button>
		);
	};

	const renderToolbar = () => {
		if (toolbar === false) {
			return;
		}

		if (isValidElement(toolbar)) {
			return toolbar;
		}

		return (
			<div className={bem('toolbar')}>
				{renderCancel()}
				{renderTitle()}
				{renderConfirm()}
			</div>
		);
	};

	return (
		<div className={classnames(bem(), className)} {...restProps} ref={ref}>
			{toolbarPosition !== 'bottom' && renderToolbar()}
			<div
				className={bem('columns')}
				style={{
					height: `${wrapHeight}px`,
				}}
			>
				{children}

				<div
					className={bem('mask')}
					style={{
						backgroundSize: `100% ${
							(wrapHeight - optionHeight) / 2
						}px`,
					}}
				></div>
				<div
					className={classnames(
						bem('frame'),
						BORDER_UNSET_TOP_BOTTOM,
					)}
					style={{ height: `${optionHeight}px` }}
				/>
			</div>
			{toolbarPosition === 'bottom' && renderToolbar()}

			{loading && <Loading className={bem('loading')} />}
		</div>
	);
});

PickerContainer.displayName = 'PickerContainer';

export default PickerContainer;
