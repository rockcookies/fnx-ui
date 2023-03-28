import React from 'react';
import { NavLink } from 'react-router-dom';
import { createBEM } from '../../../src/utils/namespace';
import './index.less';

const bem = createBEM('not-found');

export default function NotFound(): ReturnType<React.FC> {
	return (
		<div className={bem()}>
			<p className={bem('code')}>404</p>
			<h1 className={bem('title')}>PAGE NOT FOUND</h1>
			<div className={bem('action')}>
				<NavLink className={bem('link')} to="/">
					Take me home
				</NavLink>
			</div>
		</div>
	);
}
