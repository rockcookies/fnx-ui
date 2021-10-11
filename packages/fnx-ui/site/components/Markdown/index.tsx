import React, { FC, HTMLAttributes, useContext } from 'react';
import { Dictionary } from '../../../src/utils/interface';
import { classnames } from '../../../src/utils/namespace';
import { SiteContext } from '../../layout/context';
import './index.less';

interface CProps extends HTMLAttributes<HTMLDivElement> {
	html?: string;
}

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		loading: '加载中...',
	},
	'en-US': {
		loading: 'Loading...',
	},
};

const Markdown: FC<CProps> = (_props: CProps) => {
	const { className, html, ...props } = _props;
	const { locale } = useContext(SiteContext);
	const i18n = I18N[locale];

	return (
		<div
			className={classnames('markdown', className)}
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
