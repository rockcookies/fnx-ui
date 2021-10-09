import { useEffect } from 'react';

function useHeadStyle(css: string | null | undefined): void {
	useEffect(() => {
		const head = document.head || document.getElementsByTagName('head')[0];
		const style: any = document.createElement('style');

		head.appendChild(style);
		style.type = 'text/css';

		if (style.styleSheet) {
			// This is required for IE8 and below.
			style.styleSheet.cssText = css;
		} else {
			style.appendChild(document.createTextNode(css));
		}

		return () => {
			style.remove();
		};
	}, [css]);
}

export default useHeadStyle;
