import React, { FC, HTMLAttributes, useContext, useMemo } from 'react';
import { Dictionary } from '../../../src/utils/interface';
import { classnames, createBEM } from '../../../src/utils/namespace';
import { SiteContext } from '../../layout/context';
import './index.less';

interface CProps extends HTMLAttributes<HTMLDivElement> {
	html?: string;
}

const bem = createBEM('markdown');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		loading: '加载中...',
	},
	'en-US': {
		loading: 'Loading...',
	},
};

const Markdown: FC<CProps> = (_props: CProps) => {
	const { className, html: _html, ...props } = _props;
	const { locale } = useContext(SiteContext);
	const i18n = I18N[locale];

	const html = useMemo<string | undefined>(() => {
		if (!_html) {
			return;
		}

		return _html.replace(/<table>(.|\n)*?<\/table>/g, ($1) => {
			return `<div class="${bem('table')}">${$1}</div>`;
		});
	}, [_html]);

	return (
		<div
			className={classnames(bem(), className)}
			{...props}
			{...(html
				? {
						dangerouslySetInnerHTML: {
							__html: html,
						},
				  }
				: {
						children: i18n.loading,
				  })}
		/>
	);
};

Markdown.displayName = 'Markdown';

export default Markdown;
