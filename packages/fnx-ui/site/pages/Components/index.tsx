import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import { Redirect } from 'umi';
import { setScrollTop } from '../../../src/utils/dom/scroll';
import { createBEM } from '../../../src/utils/namespace';
import Markdown from '../../components/Markdown';
import { SiteContext } from '../../layout/context';
import { appendQuery } from '../../utils/history-utils';
import './index.less';

const bem = createBEM('components');

const Components: FC = () => {
	const { locale, menu, theme } = useContext(SiteContext);

	const demoUrl = useMemo<string | undefined>(() => {
		if (!menu) {
			return;
		}

		return appendQuery(`${window.location.pathname}#/demo`, {
			component: menu.key,
			locale,
			theme,
		});
	}, [locale, menu, theme]);

	const [content, setContent] = useState<string>();

	useEffect(() => {
		if (!menu) {
			return;
		}

		let canceled = false;
		const md = locale === 'zh-CN' ? menu.markdownCN() : menu.markdown();

		md.then((resp) => {
			if (canceled) {
				return;
			}

			resp = resp.default != null ? resp.default : resp;
			setScrollTop(window, 0);
			setContent(resp.html);
		});

		return () => {
			canceled = true;
		};
	}, [menu, locale]);

	if (!menu) {
		return <Redirect to="/" />;
	}

	return (
		<div className={bem()}>
			<div className={bem('article')}>
				<Markdown html={content} />
			</div>
			{demoUrl && (
				<div className={bem('device')}>
					<div className={bem('simulator')}>
						<iframe key={demoUrl} src={demoUrl}></iframe>
					</div>
				</div>
			)}
		</div>
	);
};

Components.displayName = 'Components';

export default Components;
