/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Badge from '../../badge';
import Icon from '../../icon';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import Grid from '../index';
import './basic.less';
// @ts-ignore
import demo01 from '../../../site/assets/demo-dog-01.jpg';
// @ts-ignore
import demo02 from '../../../site/assets/demo-dog-02.jpg';
// @ts-ignore
import demo03 from '../../../site/assets/demo-dog-03.jpg';
import Image from '../../image';

const bem = createBEM('demo-grid');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		columnSize: '自定义列数',
		square: '正方形格子',
		gutter: '格子间距',
		horizontal: '内容横排',
		withImage: '展示图片',
		showBadge: '徽标提示',
		text: '文字',
	},
	'en-US': {
		basicUsage: 'Basic usage',
		columnSize: 'Column Size',
		square: 'Square',
		gutter: 'Gutter',
		horizontal: 'Horizontal',
		withImage: 'With Image',
		showBadge: 'Show Badge',
		text: 'Text',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const create = (count: number) => {
		return new Array(count).fill(0).map((_, idx) => (
			<Grid.Item className={bem('item')} key={idx}>
				<Icon className={bem('icon')} name="photo" />
				<p className={bem('text')}>{i18n.text}</p>
			</Grid.Item>
		));
	};

	return (
		<>
			<DemoBlock title={i18n.basicUsage}>
				<Grid clickable>{create(4)}</Grid>
			</DemoBlock>
			<DemoBlock title={i18n.columnSize}>
				<Grid columnSize={3}>{create(6)}</Grid>
			</DemoBlock>
			<DemoBlock title={i18n.square}>
				<Grid square columnSize={3}>
					{create(6)}
				</Grid>
			</DemoBlock>
			<DemoBlock title={i18n.gutter}>
				<Grid clickable gutter="5">
					{create(8)}
				</Grid>
			</DemoBlock>
			<DemoBlock title={i18n.withImage}>
				<Grid columnSize={3} square>
					<Grid.Item>
						<Image className={bem('image')} src={demo01} />
					</Grid.Item>
					<Grid.Item>
						<Image className={bem('image')} src={demo02} />
					</Grid.Item>
					<Grid.Item>
						<Image className={bem('image')} src={demo03} />
					</Grid.Item>
				</Grid>
			</DemoBlock>
			<DemoBlock title={i18n.showBadge}>
				<Grid columnSize={2}>
					<Grid.Item className={bem('item')}>
						<Badge dot>
							<Icon
								className={bem('icon')}
								size="30px"
								name="file-o"
							/>
							<p className={bem('text')}>{i18n.text}</p>
						</Badge>
					</Grid.Item>
					<Grid.Item className={bem('item')}>
						<Badge count={100} max={99}>
							<Icon
								className={bem('icon')}
								size="30px"
								name="photo"
							/>
							<p className={bem('text')}>{i18n.text}</p>
						</Badge>
					</Grid.Item>
				</Grid>
			</DemoBlock>
		</>
	);
}
