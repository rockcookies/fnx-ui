import React from 'react';
import { createBEM } from '../../../src/utils/namespace';
import { createFC } from '../../../src/utils/react';
import logo from '../../assets/logo.svg';
import './index.less';

const bem = createBEM('page-loading');

const PageLoading = createFC('PageLoading', () => {
	return (
		<div className={bem()}>
			<img src={logo} />
		</div>
	);
});

export default PageLoading;
