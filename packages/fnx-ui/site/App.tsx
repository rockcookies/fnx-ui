import React, { lazy, Suspense } from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import PageLoading from '../site/components/PageLoading';

const Demo = lazy(() => import('./pages/Demo'));
const Layout = lazy(() => import('./layout'));

export default function App() {
	return (
		<HashRouter>
			<Switch>
				<Route path="/demo">
					<Suspense fallback={<PageLoading />}>
						<Demo />
					</Suspense>
				</Route>
				<Route path="*">
					<Suspense fallback={<PageLoading />}>
						<Layout />
					</Suspense>
				</Route>
			</Switch>
		</HashRouter>
	);
}
