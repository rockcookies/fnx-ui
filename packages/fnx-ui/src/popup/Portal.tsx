import React, { FC, useCallback, useContext, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { ConfigContext } from '../config-provider/context';
import useMergedPropRef from '../hooks/use-merged-prop-ref';
import { canUseDom } from '../utils/detect';
import { PortalProps } from './interface';

const Portal: FC<PortalProps> = ({
	visible = false,
	renderOnShow,
	destroyOnHide,
	mountTo: _mountTo,
	children,
}) => {
	const config = useContext(ConfigContext);

	const containerRef = useRef<HTMLDivElement | false | null>(null);

	const mountToRef = useMergedPropRef(
		_mountTo != null ? _mountTo : config.mountTo,
	);

	const createContainer = useCallback(() => {
		if (containerRef.current != null) {
			return;
		}

		const mountTo = mountToRef.current;

		if (mountTo === false) {
			containerRef.current = false;
			return;
		}

		if (!canUseDom()) {
			return;
		}

		let wrapper: HTMLElement;

		if (typeof mountTo === 'function') {
			wrapper = mountTo();
		} else if (mountTo != null) {
			wrapper = mountTo;
		} else {
			wrapper = document.body;
		}

		const div = document.createElement('div');
		wrapper.appendChild(div);

		containerRef.current = div;
	}, [mountToRef]);

	const destroyContainer = useCallback(() => {
		const container = containerRef.current;
		containerRef.current = null;

		if (!container) {
			return;
		}

		// delay and destroy
		setTimeout(() => {
			if (container.parentNode) {
				container.parentNode.removeChild(container);
			}
		}, 0);
	}, []);

	useEffect(() => {
		return () => {
			destroyContainer();
		};
	}, [destroyContainer]);

	if (visible) {
		createContainer();
	} else if (containerRef.current != null && destroyOnHide) {
		destroyContainer();
	} else if (containerRef.current == null && !renderOnShow) {
		createContainer();
	}

	if (containerRef.current == null) {
		return <></>;
	}

	if (containerRef.current === false) {
		return <>{children}</>;
	}

	return (ReactDOM.createPortal(children as any, containerRef.current) || (
		<></>
	)) as any;
};

Portal.displayName = 'Portal';

export default Portal;
