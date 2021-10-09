import { isIOS } from '../detect';

export type ScrollElement = Element | Window;

export function getScrollTop(el: ScrollElement): number {
	const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;

	// iOS scroll bounce cause minus scrollTop
	return Math.max(top, 0);
}

export function setScrollTop(el: ScrollElement, value: number) {
	if ('scrollTop' in el) {
		el.scrollTop = value;
	} else {
		el.scrollTo(el.scrollX, value);
	}
}

const overflowScrollReg = /scroll|auto/i;

function isElement(node: Element) {
	const ELEMENT_NODE_TYPE = 1;
	return (
		node.tagName !== 'HTML' &&
		node.tagName !== 'BODY' &&
		node.nodeType === ELEMENT_NODE_TYPE
	);
}

export function getScrollParent(
	el: HTMLElement,
	_root?: HTMLElement | Window | null,
): HTMLElement | Window {
	let node = el;
	const root = _root || window;

	while (node && node !== root && isElement(node)) {
		const { overflowY } = window.getComputedStyle(node);
		if (overflowScrollReg.test(overflowY)) {
			return node;
		}
		node = node.parentNode as HTMLElement;
	}

	return root;
}

export function getRootScrollTop(): number {
	return (
		window.pageYOffset ||
		document.documentElement.scrollTop ||
		document.body.scrollTop ||
		0
	);
}

export function setRootScrollTop(value: number) {
	setScrollTop(window, value);
	setScrollTop(document.body, value);
}

function isWindow(val: unknown): val is Window {
	return val === window;
}

// get distance from element top to page top or scrollElement top
export function getElementTop(
	el: ScrollElement,
	scrollElement?: ScrollElement,
) {
	if (isWindow(el)) {
		return 0;
	}

	const scrollTop = scrollElement
		? getScrollTop(scrollElement)
		: getRootScrollTop();
	return el.getBoundingClientRect().top + scrollTop;
}

export function getVisibleHeight(el: ScrollElement) {
	if (isWindow(el)) {
		return el.innerHeight;
	}
	return el.getBoundingClientRect().height;
}

export function getVisibleTop(el: ScrollElement) {
	if (isWindow(el)) {
		return 0;
	}
	return el.getBoundingClientRect().top;
}

const IS_IOS = isIOS();

// hack for iOS12 page scroll
// see: https://developers.weixin.qq.com/community/develop/doc/00044ae90742f8c82fb78fcae56800
export function resetScroll() {
	if (IS_IOS) {
		setRootScrollTop(getRootScrollTop());
	}
}
