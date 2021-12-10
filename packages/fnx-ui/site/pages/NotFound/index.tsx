import React, { FC } from 'react';
import { useLocation } from 'umi';
import { createFC } from '../../../src/utils/react';

const NotFound: FC = createFC('NotFound', () => {
	const { pathname } = useLocation();

	return <div>NotFound: {pathname}</div>;
});

export default NotFound;
