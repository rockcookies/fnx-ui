import { canUseDocElement } from '../detect';
import { ElementRect } from '../interface';

export function isHidden(el: HTMLElement): boolean {
	const style = window.getComputedStyle(el);
	const hidden = style.display === 'none';

	// offsetParent returns null in the following situations:
	// 1. The element or its parent element has the display property set to none.
	// 2. The element has the position property set to fixed

	const parentHidden = el.offsetParent === null && style.position !== 'fixed';

	return hidden || parentHidden;
}

export function getElementRect(el: Element | Window): ElementRect {
	if (el === window) {
		const width = el.innerWidth;
		const height = el.innerHeight;

		return {
			top: 0,
			left: 0,
			right: width,
			bottom: height,
			width,
			height,
		} as ElementRect;
	} else {
		const element: Element = el as any;

		return element.getBoundingClientRect();
	}
}

let flexGapSupported: boolean | undefined;

export const detectFlexGapSupported = () => {
	if (!canUseDocElement()) {
		return false;
	}

	if (flexGapSupported !== undefined) {
		return flexGapSupported;
	}

	// create flex container with row-gap set
	const flex = document.createElement('div');
	flex.style.display = 'flex';
	flex.style.flexDirection = 'column';
	flex.style.rowGap = '1px';

	// create two, elements inside it
	flex.appendChild(document.createElement('div'));
	flex.appendChild(document.createElement('div'));

	// append to the DOM (needed to obtain scrollHeight)
	document.body.appendChild(flex);
	flexGapSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
	document.body.removeChild(flex);

	return flexGapSupported;
};
