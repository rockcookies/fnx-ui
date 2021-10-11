import React, { FC } from 'react';
import { createBEM } from '../../../src/utils/namespace';
import logo from '../../assets/logo.svg';
import './index.less';

const bem = createBEM('page-loading');

const PageLoading: FC = () => {
	return (
		<div className={bem()}>
			<img src={logo} />
		</div>
	);
};

PageLoading.displayName = 'PageLoading';

export default PageLoading;
