import React, { FC, HTMLAttributes, ReactNode, useContext } from 'react';
import { Link } from 'react-router-dom';
import { classnames, createBEM } from '../../src/utils/namespace';
import { SiteMenu } from '../site-protocol';
import { SiteContext } from './context';
import './SiteMenuTree.less';

const bem = createBEM('site-menu-tree');

type CProps = HTMLAttributes<HTMLDivElement>;

const SideMenuTree: FC<CProps> = (props: CProps) => {
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
							{locale === 'zh-CN' ? group.titleCN : group.title}
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
										replace={true}
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
};

SideMenuTree.displayName = 'SideMenuTree';

export default SideMenuTree;
