import React, { lazy, Suspense } from 'react';
import { Routes, HashRouter, Route } from 'react-router-dom';
import PageLoading from '../site/components/PageLoading';
import ErrorFallback from './components/ErrorFallback';

const Demo = lazy(() => import('./pages/Demo'));
const Layout = lazy(() => import('./layout'));

export default function App() {
	return (
		<ErrorFallback>
			<HashRouter>
				<Suspense fallback={<PageLoading />}>
					<Routes>
						<Route
							path="/demo/:component/:locale/:theme"
							element={<Demo />}
						/>
						<Route
							path="/:locale/:category/:menu"
							element={<Layout />}
						/>
						<Route path="/:locale/:category" element={<Layout />} />
						<Route path="/:locale" element={<Layout />} />
						<Route path="*" element={<Layout />} />
					</Routes>
				</Suspense>
			</HashRouter>
		</ErrorFallback>
	);
}
