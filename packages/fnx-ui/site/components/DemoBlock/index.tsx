import React, { HTMLAttributes } from 'react';
import { classnames, createBEM } from '../../../src/utils/namespace';
import { createFC } from '../../../src/utils/react';
import './index.less';

const bem = createBEM('demo-block');

interface CProps extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	cardMode?: boolean;
}

const DemoBlock = createFC<CProps>('DemoBlock', (_props) => {
	const { className, title, children, cardMode, ...props } = _props;

	return (
		<React.StrictMode>
			<div
				className={classnames(
					bem({ 'card-mode': cardMode }),
					className,
				)}
				{...props}
			>
				{title && <div className={bem('title')}>{title}</div>}
				<div className={bem('content')}>{children}</div>
			</div>
		</React.StrictMode>
	);
});

export default DemoBlock;
