import React, { FC, HTMLAttributes } from 'react';
import { classnames, createBEM } from '../../../src/utils/namespace';
import logo from '../../assets/logo.svg';
import './index.less';

const bem = createBEM('page-loading');

const PageLoading: FC<HTMLAttributes<HTMLDivElement>> = (_props) => {
	const { className, ...props } = _props;

	return (
		<div className={classnames(bem(), className)} {...props}>
			<img src={logo} />
		</div>
	);
};

PageLoading.displayName = 'PageLoading';

export default PageLoading;
