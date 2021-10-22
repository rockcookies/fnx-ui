import React, { Component, HTMLAttributes } from 'react';
import { classnames, createBEM } from '../../../src/utils/namespace';

// thanks to: https://github.com/ant-design/ant-design/blob/master/components/alert/ErrorBoundary.tsx
const bem = createBEM('error-fallback');

export default class ErrorFallback extends Component<
	HTMLAttributes<HTMLDivElement>,
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
		const { children, className, ...restProps } = this.props;
		const { error, info } = this.state;
		const componentStack =
			info && info.componentStack ? info.componentStack : null;
		const errorMessage = (error || '').toString();
		const errorDescription = componentStack;

		if (error) {
			return (
				<div className={classnames(bem(), className)} {...restProps}>
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
