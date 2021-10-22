import React, { FC, useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { setScrollTop } from '../../../src/utils/dom/scroll';
import { createBEM } from '../../../src/utils/namespace';
import Markdown from '../../components/Markdown';
import { SiteContext } from '../../layout/context';
import './index.less';

const bem = createBEM('docs');

const Docs: FC = () => {
	const { locale, menu } = useContext(SiteContext);

	const [content, setContent] = useState<string>();

	useEffect(() => {
		if (!menu) {
			return;
		}

		let canceled = false;
		const md = locale === 'zh-CN' ? menu.markdownCN() : menu.markdown();

		setContent(undefined);

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
			<Markdown html={content} />
		</div>
	);
};

Docs.displayName = 'Docs';

export default Docs;
