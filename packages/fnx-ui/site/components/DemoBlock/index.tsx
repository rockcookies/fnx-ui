import React, { FC, HTMLAttributes } from 'react';
import { classnames, createBEM } from '../../../src/utils/namespace';
import './index.less';

const bem = createBEM('demo-block');

interface CProps extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	cardMode?: boolean;
}

const DemoBlock: FC<CProps> = (_props: CProps) => {
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
};

DemoBlock.displayName = 'DemoBlock';

export default DemoBlock;
