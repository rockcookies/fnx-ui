import React, { Component } from 'react';
import { createBEM } from '../utils/namespace';
import { ErrorBoundaryProps } from './interface';

// thanks to: https://github.com/ant-design/ant-design/blob/master/components/alert/ErrorBoundary.tsx
const bem = createBEM('fnx-error-boundary');

export default class ErrorBoundary extends Component<
	ErrorBoundaryProps,
	{
		error?: Error | null;
		info: {
			componentStack?: string;
		};
	}
> {
	state = {
		error: undefined,
		info: {
			componentStack: '',
		},
	};

	componentDidCatch(error: Error | null, info: any) {
		this.setState({ error, info });
	}

	render() {
		const { message, description, children } = this.props;
		const { error, info } = this.state;
		const componentStack =
			info && info.componentStack ? info.componentStack : null;
		const errorMessage =
			typeof message === 'undefined' ? (error || '').toString() : message;
		const errorDescription =
			typeof description === 'undefined' ? componentStack : description;

		if (error) {
			return (
				<div className={bem()}>
					<div className={bem('title')}>{errorMessage}</div>
					<div className={bem('description')}>
						<pre>{errorDescription}</pre>
					</div>
				</div>
			);
		}

		return children;
	}
}

export type { ErrorBoundaryProps } from './interface';
