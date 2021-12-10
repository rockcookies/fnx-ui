import React, { HTMLAttributes, ReactNode, useContext } from 'react';
import { Link } from 'umi';
import { classnames, createBEM } from '../../src/utils/namespace';
import { createFC } from '../../src/utils/react';
import { SiteMenu } from '../site-protocol';
import { SiteContext } from './context';
import './SiteMenuTree.less';

const bem = createBEM('site-menu-tree');

const SideMenuTree = createFC<HTMLAttributes<HTMLDivElement>>(
	'SideMenuTree',
	(props) => {
		const { locale, category, menu } = useContext(SiteContext);

		const renderMenuItemTitle = (menu: SiteMenu): ReactNode => {
			if (locale === 'en-US') {
				return menu.title;
			}

			if (category?.key === 'components') {
				return (
					<>
						{menu.titleCN}
						<span>{menu.title}</span>
					</>
				);
			}

			return menu.titleCN;
		};

		if (!category) {
			return <></>;
		}

		return (
			<div {...props} className={classnames(bem(), props.className)}>
				{(category.children || []).map((group, idx) => {
					return (
						<div className={bem('menu-group')} key={idx}>
							<h3 className={bem('menu-group-title')}>
								{locale === 'zh-CN'
									? group.titleCN
									: group.title}
							</h3>
							{(group.children || []).map((m) => (
								<div className={bem('menu-item')} key={m.key}>
									<div
										className={bem('menu-item-title', {
											active: m.key === menu?.key,
										})}
									>
										<Link
											to={`/${locale}/${category.key}/${m.key}`}
										>
											{renderMenuItemTitle(m)}
										</Link>
									</div>
								</div>
							))}
						</div>
					);
				})}
			</div>
		);
	},
);

export default SideMenuTree;
