import React, { useState } from 'react';
import ErrorBoundary from '../';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Button from '../../button';
import { Dictionary } from '../../utils/interface';

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		clickThrow: '点击抛出异常',
		uncaughtError: '未捕获异常',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		clickThrow: 'Click me to throw a error',
		uncaughtError: 'An Uncaught Error',
	},
};

const ThrowError: React.FC = () => {
	const [i18n] = useDemoTranslate(I18N, 'en-US');
	const [error, setError] = useState<Error>();

	const onClick = () => {
		setError(new Error(i18n.uncaughtError));
	};

	if (error) {
		throw error;
	}

	return (
		<Button type="danger" onClick={onClick}>
			{i18n.clickThrow}
		</Button>
	);
};

ThrowError.displayName = 'ThrowError';

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<DemoBlock title={i18n.basicUsage} cardMode>
				<ErrorBoundary>
					<ThrowError />
				</ErrorBoundary>
			</DemoBlock>
		</>
	);
}
