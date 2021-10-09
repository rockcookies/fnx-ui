import { render } from '@testing-library/react';
import React from 'react';
import ErrorBoundary from '..';
import { noop } from '../../utils/misc';

describe('<ErrorBoundary />', () => {
	const error = console.error;
	const warn = console.warn;

	beforeEach(() => {
		console.error = noop;
		console.warn = noop;
	});

	afterEach(() => {
		jest.useRealTimers();
		console.error = error;
		console.warn = warn;
	});

	it('ErrorBoundary', () => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		// eslint-disable-next-line react/jsx-no-undef
		const ThrowError = () => <NotExisted />;

		const wrapper = render(
			<ErrorBoundary>
				<ThrowError />
			</ErrorBoundary>,
		);

		expect(wrapper.container.textContent).toContain(
			'ReferenceError: NotExisted is not defined',
		);
	});
});
