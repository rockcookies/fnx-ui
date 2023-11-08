import React, { Children, ReactElement, ReactNode } from 'react';
import * as ReactDOM from 'react-dom';
import type { Root } from 'react-dom/client';
import { isFragment } from 'react-is';
import { CSSTransition } from 'react-transition-group';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';

export const ReactCSSTransition: React.FC<CSSTransitionProps<HTMLElement>> =
	CSSTransition as any;

// https://github.com/react-component/util/blob/master/src/React/render.ts

// Let compiler not to search module usage
const fullClone = {
	...ReactDOM,
} as typeof ReactDOM & {
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?: {
		usingClientEntryPoint?: boolean;
	};
	createRoot?: CreateRoot;
};

type CreateRoot = (container: ContainerType) => Root;

const { version, render: reactRender, unmountComponentAtNode } = fullClone;

let createRoot: CreateRoot | undefined;
try {
	const mainVersion = Number((version || '').split('.')[0]);
	if (mainVersion >= 18) {
		({ createRoot } = fullClone);
	}
} catch (e) {
	// Do nothing;
}

function toggleWarning(skip: boolean) {
	const { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } = fullClone;

	if (
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED &&
		typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object'
	) {
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint =
			skip;
	}
}

const MARK = '__fnx_react_root__';

// ========================== Render ==========================
type ContainerType = (Element | DocumentFragment) & {
	[MARK]?: Root;
};

function modernRender(node: any, container: ContainerType) {
	toggleWarning(true);
	const root = container[MARK] || createRoot?.(container);
	toggleWarning(false);

	root?.render(node);

	container[MARK] = root;
}

function legacyRender(node: any, container: ContainerType) {
	reactRender(node, container);
}

export function renderReactDOMNode(
	container: Element | DocumentFragment,
	node: ReactNode,
): () => void {
	if (createRoot) {
		modernRender(node, container);
	} else {
		legacyRender(node, container);
	}

	return () => {
		unmountReactDOMNode(container);
	};
}

// ========================= Unmount ==========================
function modernUnmount(container: ContainerType) {
	container[MARK]?.unmount();
	// Delay to unmount to avoid React 18 sync warning
	return Promise.resolve().then(() => {
		container[MARK]?.unmount();

		delete container[MARK];
	});
}

function legacyUnmount(container: ContainerType) {
	unmountComponentAtNode(container);
}

export function unmountReactDOMNode(container: ContainerType) {
	if (createRoot !== undefined) {
		// Delay to unmount to avoid React 18 sync warning
		return modernUnmount(container);
	}

	legacyUnmount(container);
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
