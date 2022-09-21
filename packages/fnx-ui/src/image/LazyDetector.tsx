import React, { FC, MutableRefObject, useEffect } from 'react';
import useMergedPropRef from '../hooks/use-merged-prop-ref';
import useInViewport from '../hooks/use-in-viewport';
import { noop } from '../utils/misc';

const LazyDetector: FC<{
	nodeRef?: MutableRefObject<HTMLSpanElement | null>;
	onActive?: () => void;
}> = (props) => {
	const inViewport = useInViewport(props.nodeRef);
	const onActiveRef = useMergedPropRef<() => void>(noop, props.onActive);

	useEffect(() => {
		if (inViewport) {
			onActiveRef.current();
		}
	}, [inViewport, onActiveRef]);

	return <></>;
};

LazyDetector.displayName = 'LazyDetector';

export default LazyDetector;
