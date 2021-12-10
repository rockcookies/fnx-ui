import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import { Redirect } from 'umi';
import { setScrollTop } from '../../../src/utils/dom/scroll';
import { createBEM } from '../../../src/utils/namespace';
import { createFC } from '../../../src/utils/react';
import Markdown from '../../components/Markdown';
import { SiteContext } from '../../layout/context';
import { appendQuery } from '../../utils/history-utils';
import './index.less';

const bem = createBEM('components');

const Components: FC = createFC('Components', () => {
	const { locale, menu, theme, responsive } = useContext(SiteContext);

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

	const [deviceExpanded, setDeviceExpanded] = useState(false);
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
		<div className={bem({ mobile: !responsive.md })}>
			<div className={bem('article')}>
				<Markdown html={content} />
			</div>
			{demoUrl && (
				<div
					className={bem('device-container', {
						expanded: deviceExpanded,
					})}
				>
					<div
						className={bem('device', {
							expanded: deviceExpanded,
						})}
					>
						<div className={bem('action-list')}>
							<a
								className={bem('action')}
								onClick={() =>
									setDeviceExpanded(!deviceExpanded)
								}
							>
								<svg
									viewBox="0 0 1024 1024"
									focusable="false"
									width="1em"
									height="1em"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M537.7536 795.88864c-26.40896 0-47.89248 21.4784-47.89248 47.89248s21.48352 47.89248 47.89248 47.89248 47.89248-21.4784 47.89248-47.89248-21.48352-47.89248-47.89248-47.89248z"></path>
									<path d="M774.69696 42.07104H300.81536c-39.86432 0-72.29952 32.43008-72.29952 72.29952v795.264c0 39.86944 32.43008 72.29952 72.29952 72.29952h473.87136c39.86944 0 72.29952-32.43008 72.29952-72.29952V114.36544c0.00512-39.86432-32.42496-72.2944-72.28928-72.2944zM300.81536 90.2656h473.87136a24.12544 24.12544 0 0 1 24.09984 24.09984v595.80928H276.72064V114.36544a24.12544 24.12544 0 0 1 24.09472-24.09984z m473.8816 843.46368H300.81536a24.12544 24.12544 0 0 1-24.09984-24.09984v-147.12832h522.07104v147.12832a24.1152 24.1152 0 0 1-24.0896 24.09984z"></path>
								</svg>
							</a>
						</div>
						<div className={bem('simulator')}>
							<iframe key={demoUrl} src={demoUrl}></iframe>
						</div>
					</div>
				</div>
			)}
		</div>
	);
});

export default Components;
