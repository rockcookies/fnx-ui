import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Dictionary } from '../../../src/utils/interface';
import { createBEM } from '../../../src/utils/namespace';
import { SiteContext } from '../../layout/context';
import './index.less';

const bem = createBEM('index');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		slogan: '轻量、可靠的移动端 React 组件库',
		changeTheme: '换个主题',
		getStarted: '开始使用',
	},
	'en-US': {
		slogan: 'Lightweight Mobile UI Components built in React',
		changeTheme: 'Change Theme',
		getStarted: 'Get Started',
	},
};

interface CProps {
	slogan?: string;
}

const SiteIndex: FC<CProps> = (props) => {
	const { locale, setTheme, theme } = useContext(SiteContext);

	const i18n = I18N[locale];

	return (
		<div className={bem()}>
			<div className={bem('content')}>
				<h1 className={bem('logo')}>FNX UI</h1>
				<div className={bem('slogan')}>{props.slogan}</div>
				<div className={bem('button-list')}>
					<a
						className={bem('button')}
						onClick={() =>
							setTheme(theme === 'dark' ? 'light' : 'dark')
						}
					>
						<span>{i18n.changeTheme}</span>
					</a>
					<Link
						className={bem('button', { primary: true })}
						to={`/${locale}/docs/getting-started`}
					>
						<span>{i18n.getStarted}</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

SiteIndex.displayName = 'SiteIndex';

export default SiteIndex;
