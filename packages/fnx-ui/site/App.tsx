import React, { lazy, Suspense } from 'react';
import { Switch, HashRouter, Route } from 'react-router-dom';
import PageLoading from '../site/components/PageLoading';
import ErrorFallback from './components/ErrorFallback';

const Demo = lazy(() => import('./pages/Demo'));
const Layout = lazy(() => import('./layout'));

export default function App() {
	return (
		<ErrorFallback>
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
		</ErrorFallback>
	);
}
