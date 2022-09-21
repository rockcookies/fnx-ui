import React, { Children, ReactElement, ReactNode } from 'react';
import * as ReactDOM from 'react-dom';
import type { createRoot as CreateRoot } from 'react-dom/client';
import { isFragment } from 'react-is';

const createRoot: typeof CreateRoot | undefined = (ReactDOM as any).createRoot;

function toggleRenderWarning(skip: boolean) {
	const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } =
		ReactDOM as any;

	if (
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
		typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object'
	) {
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint =
			skip;
	}
}

export function renderReactDOMNode(
	container: Element | DocumentFragment,
	node: ReactNode,
): () => void {
	if (
		typeof createRoot === 'function' &&
		process.env.NODE_ENV === 'production'
	) {
		toggleRenderWarning(false);
		const root = createRoot(container);
		toggleRenderWarning(true);

		root.render(node);

		return () => {
			root.unmount();
		};
	}

	ReactDOM.render(node as any, container);

	return () => {
		ReactDOM.unmountComponentAtNode(container);
	};
}

export const toElementArray = (
	children: React.ReactNode,
	option?: { keepEmpty?: boolean },
): ReactElement[] => {
	const keepEmpty = option && option.keepEmpty;
	let ret: React.ReactElement[] = [];

	Children.forEach(children, (child: any) => {
		if ((child === undefined || child === null) && !keepEmpty) {
			return;
		}

		if (Array.isArray(child)) {
			ret = ret.concat(toElementArray(child));
		} else if (isFragment(child) && child.props) {
			ret = ret.concat(toElementArray(child.props.children, option));
		} else {
			ret.push(child);
		}
	});

	return ret;
};
