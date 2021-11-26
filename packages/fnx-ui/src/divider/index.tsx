import React, { forwardRef } from 'react';
import useProps from '../hooks/use-props';

import { classnames, createBEM } from '../utils/namespace';
import { DividerComponentProps, DividerProps } from './interface';

const NS = 'fnx-divider';
const bem = createBEM(NS);

type DividerRequiredProps = Required<
	Pick<DividerComponentProps, 'dashed' | 'hairline' | 'contentPosition'>
>;

const DEFAULT_PROPS: DividerRequiredProps = {
	dashed: false,
	hairline: true,
	contentPosition: 'center',
};

const Divider = forwardRef<HTMLDivElement, DividerProps>((_props, ref) => {
	const [
		{ dashed, hairline, contentPosition },
		{ className, children, ...restProps },
	] = useProps<DividerRequiredProps, DividerProps>(DEFAULT_PROPS, _props);

	return (
		<div
			className={classnames(
				bem({
					dashed,
					hairline,
					[`content-${contentPosition}`]: children != null,
				}),
				className,
			)}
			{...restProps}
			ref={ref}
		>
			{children}
		</div>
	);
});

Divider.displayName = 'Divider';

export type {
	DividerComponentProps,
	DividerProps,
	DividerContentPosition,
} from './interface';
export default Divider;
