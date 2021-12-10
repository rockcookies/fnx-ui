import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ConfigContext } from '../config-provider/context';
import useDefaultsRef from '../hooks/use-defaults-ref';
import Icon from '../icon';
import PopupHelper from '../popup/utils/popup-helper';
import { createFC } from '../utils/react';
import {
	ToastContext,
	ToastExportExtra,
	ToastInstance,
	ToastProps,
} from './interface';
import CToast from './Toast';

const helper = new PopupHelper();

let ALLOW_MULTIPLE = false;

interface ToastOptions {
	container?: HTMLElement;
}

function createToast(
	baseProps: ToastProps,
	options: ToastOptions = {},
): ToastInstance {
	return helper.create<ToastProps>(({ onUpdate, remove }) => {
		const ToastStatic = createFC<ToastProps>('ToastStatic', () => {
			const [{ onAfterHide, ...props }, setProps] = useState(baseProps);

			useEffect(() => {
				const listener = (next: ToastProps) => {
					setProps((prev) => ({ ...prev, ...next }));
				};

				return onUpdate(listener);
			}, []);

			return (
				<CToast
					visible={true}
					{...props}
					mountTo={false}
					onAfterHide={() => {
						remove();
						onAfterHide && onAfterHide();
					}}
				/>
			);
		});

		return ToastStatic;
	}, options.container);
}

const Toast: typeof CToast & ToastExportExtra = CToast as any;

const show = (
	message: string | ToastProps,
	defaults: ToastProps = {},
	options?: ToastOptions,
) => {
	const props: ToastProps =
		typeof message === 'string' ? { message } : message;

	if (!ALLOW_MULTIPLE) {
		Toast.clearAll();
	}

	return createToast({ ...defaults, ...props }, options);
};

const loading = (message: string | ToastProps, options?: ToastOptions) =>
	show(message, { icon: <Icon.Spinner />, forbidClick: true }, options);

const success = (message: string | ToastProps, options?: ToastOptions) =>
	show(message, { icon: <Icon name="success" /> }, options);

const fail = (message: string | ToastProps, options?: ToastOptions) =>
	show(message, { icon: <Icon name="fail" /> }, options);

Toast.show = (message) => show(message);
Toast.loading = (message) => loading(message);
Toast.success = (message) => success(message);
Toast.fail = (message) => fail(message);

Toast.useToast = () => {
	const context = useContext(ConfigContext);
	const contextRef = useDefaultsRef(context);

	return useMemo<ToastContext>(() => {
		const options = (): ToastOptions => ({
			container: contextRef.current.mountTo(),
		});

		return {
			show: (message) => show(message, {}, options()),
			loading: (message) => loading(message, options()),
			success: (message) => success(message, options()),
			fail: (message) => fail(message, options()),
		};
	}, [contextRef]);
};

Toast.clearAll = () => {
	helper.clear();
};

Toast.allowMultiple = (allow) => {
	ALLOW_MULTIPLE = !!allow;
};

export type {
	ToastComponentProps,
	ToastContext,
	ToastInstance,
	ToastPosition,
	ToastProps,
} from './interface';

export default Toast;
