import React, { FC } from 'react';
import { useLocation } from 'umi';

const NotFound: FC = () => {
	const { pathname } = useLocation();

	return <div>NotFound: {pathname}</div>;
};

NotFound.displayName = 'NotFound';

export default NotFound;
