import React, { MutableRefObject } from 'react';
import { useEffect } from 'react';
import useDefaultsRef from '../hooks/use-defaults-ref';
import useInViewport from '../hooks/use-in-viewport';
import { noop } from '../utils/misc';
import { createFC } from '../utils/react';

const LazyDetector = createFC<{
	nodeRef?: MutableRefObject<HTMLSpanElement | null>;
	onActive?: () => void;
}>('LazyDetector', (props) => {
	const inViewport = useInViewport(props.nodeRef);
	const onActiveRef = useDefaultsRef<() => void>(noop, props.onActive);

	useEffect(() => {
		if (inViewport) {
			onActiveRef.current();
		}
	}, [inViewport, onActiveRef]);

	return <></>;
});

export default LazyDetector;
