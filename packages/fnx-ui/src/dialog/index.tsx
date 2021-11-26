import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import { ConfigContext } from '../config-provider/context';
import useDefaultsRef from '../hooks/use-defaults-ref';
import PopupHelper from '../popup/utils/popup-helper';
import { isFunction, isPromise } from '../utils/detect';
import { noop } from '../utils/misc';
import CDialog from './Dialog';
import {
	DialogContext,
	DialogExportExtra,
	DialogInstance,
	DialogLocale,
	DialogStaticProps,
} from './interface';
import { getConfirmLocale } from './locale';

const helper = new PopupHelper();

const createDialog = (
	baseProps: DialogStaticProps,
	options: { locale?: DialogLocale; container?: HTMLElement } = {},
): DialogInstance => {
	return helper.create<DialogStaticProps>(({ onUpdate, remove }) => {
		const DialogStatic: FC<DialogStaticProps> = () => {
			const [{ onConfirm, onCancel, onAfterHide, ...props }, setProps] =
				useState(baseProps);

			const locale = options.locale || getConfirmLocale();

			const handleAction = (
				loadingKey: keyof DialogStaticProps,
				action: any,
			) => {
				if (!isFunction(action)) {
					action = noop;
				}

				const res = action();

				if (isPromise(res)) {
					setProps((prev) => ({ ...prev, [loadingKey]: true }));
					res.then((flag) => {
						setProps((prev) => ({
							...prev,
							[loadingKey]: false,
							visible: flag === false,
						}));
					}).catch(() => {
						setProps((prev) => ({
							...prev,
							[loadingKey]: false,
						}));
					});
				} else {
					setProps((prev) => ({ ...prev, visible: res === false }));
				}
			};

			useEffect(() => {
				const listener = (next: DialogStaticProps) => {
					setProps((prev) => ({ ...prev, ...next }));
				};

				return onUpdate(listener);
			}, []);

			return (
				<CDialog
					visible={true}
					{...props}
					mountTo={false}
					confirmText={props.confirmText || locale.confirm}
					cancelText={props.cancelText || locale.cancel}
					onConfirm={() => handleAction('confirmLoading', onConfirm)}
					onCancel={() => handleAction('cancelLoading', onCancel)}
					onAfterHide={() => {
						remove();
						onAfterHide && onAfterHide();
					}}
				/>
			);
		};

		DialogStatic.displayName = 'Dialog';

		return DialogStatic;
	}, options.container);
};

const Dialog: typeof CDialog & DialogExportExtra = CDialog as any;

Dialog.show = (props: DialogStaticProps) => {
	return createDialog(props);
};

Dialog.clearAll = () => {
	helper.clear();
};

Dialog.useDialog = () => {
	const context = useContext(ConfigContext);
	const contextRef = useDefaultsRef(context);

	return useMemo<DialogContext>(() => {
		return {
			show: (props) => {
				const { locale, mountTo } = contextRef.current;
				return createDialog(props, {
					locale: locale.dialog,
					container: mountTo(),
				});
			},
		};
	}, [contextRef]);
};

export type {
	DialogComponentProps,
	DialogProps,
	DialogContext,
	DialogInstance,
	DialogLocale,
	DialogMessageAlign,
	DialogStaticProps,
} from './interface';

export default Dialog;
