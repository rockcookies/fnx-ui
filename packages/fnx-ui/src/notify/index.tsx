import React, { useContext, useEffect, useMemo, useState } from 'react';
import { ConfigContext } from '../config-provider/context';
import useDefaultsRef from '../hooks/use-defaults-ref';
import PopupHelper from '../popup/utils/popup-helper';
import { createFC } from '../utils/react';
import {
	NotifyContext,
	NotifyExportExtra,
	NotifyInstance,
	NotifyProps,
} from './interface';
import CNotify from './Notify';

const helper = new PopupHelper();

let ALLOW_MULTIPLE = false;

interface NotifyOptions {
	container?: HTMLElement;
}

function createNotify(
	baseProps: NotifyProps,
	options: NotifyOptions = {},
): NotifyInstance {
	return helper.create<NotifyProps>(({ onUpdate, remove }) => {
		const NotifyStatic = createFC<NotifyProps>('NotifyStatic', () => {
			const [{ onAfterHide, ...props }, setProps] = useState(baseProps);

			useEffect(() => {
				const listener = (next: NotifyProps) => {
					setProps((prev) => ({ ...prev, ...next }));
				};

				return onUpdate(listener);
			}, []);

			return (
				<CNotify
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

		return NotifyStatic;
	}, options.container);
}

const Notify: typeof CNotify & NotifyExportExtra = CNotify as any;

const show = (message: string | NotifyProps, options?: NotifyOptions) => {
	const props: NotifyProps =
		typeof message === 'string' ? { message } : message;

	if (!ALLOW_MULTIPLE) {
		Notify.clearAll();
	}

	return createNotify(props, options);
};

Notify.show = (message) => show(message);

Notify.useNotify = () => {
	const context = useContext(ConfigContext);
	const contextRef = useDefaultsRef(context);

	return useMemo<NotifyContext>(() => {
		const options = (): NotifyOptions => ({
			container: contextRef.current.mountTo(),
		});

		return {
			show: (message) => show(message, options()),
		};
	}, [contextRef]);
};

Notify.clearAll = () => {
	helper.clear();
};

Notify.allowMultiple = (allow) => {
	ALLOW_MULTIPLE = !!allow;
};

export type {
	NotifyComponentProps,
	NotifyContext,
	NotifyInstance,
	NotifyProps,
	NotifyType,
} from './interface';

export default Notify;
