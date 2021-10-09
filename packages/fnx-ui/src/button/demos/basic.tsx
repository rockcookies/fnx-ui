import React from 'react';
import Button from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Icon from '../../icon';
import { Dictionary } from '../../utils/interface';
import './basic.less';

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		buttonTheme: '按钮主题',
		buttonPlain: '朴素按钮',
		buttonDisabled: '禁用状态',
		buttonLoading: '加载状态',
		buttonShape: '按钮形状',
		buttonIcon: '图标按钮',
		buttonSize: '图标尺寸',
		buttonBlock: '块级按钮',
		buttonCustomColor: '自定义颜色',
		hairline: '细边框',
		hairlineButton: '细边框按钮',
	},
	'en-US': {
		buttonTheme: 'Theme',
		buttonPlain: 'Plain',
		buttonDisabled: 'Disabled',
		buttonLoading: 'Loading',
		buttonShape: 'Shape',
		buttonIcon: 'Icon',
		buttonSize: 'Size',
		buttonBlock: 'Block element',
		buttonCustomColor: 'Custom color',
		hairline: 'Hairline',
		hairlineButton: 'Hairline',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<>
			<DemoBlock cardMode title={i18n.buttonTheme}>
				<Button type="primary">Primary</Button>
				<Button type="success">Success</Button>
				<Button type="default">Default</Button>
				<Button type="warning">Warning</Button>
				<Button type="danger">Danger</Button>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.buttonPlain}>
				<Button type="primary" plain>
					Primary
				</Button>
				<Button type="success" plain>
					Success
				</Button>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.hairline}>
				<Button type="primary" plain hairline>
					{i18n.hairline}
				</Button>
				<Button type="success" plain hairline>
					{i18n.hairline}
				</Button>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.buttonDisabled}>
				<Button type="primary" disabled>
					Primary
				</Button>
				<Button type="success" disabled>
					Success
				</Button>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.buttonLoading}>
				<Button type="primary" loading />
				<Button type="primary" loading>
					Primary
				</Button>
				<Button type="success" loading loadingChildren="Loading...">
					Success
				</Button>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.buttonShape}>
				<Button type="primary" shape="rect">
					rect
				</Button>
				<Button type="success" shape="radius">
					radius
				</Button>
				<Button type="warning" shape="round">
					round
				</Button>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.buttonIcon}>
				<Button type="primary" icon={<Icon name="plus" />} />
				<Button type="primary" icon={<Icon name="plus" />}>
					Button
				</Button>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.buttonSize}>
				<Button type="primary" size="lg">
					lg
				</Button>
				<Button type="primary" size="md">
					md
				</Button>
				<Button type="primary" size="sm">
					sm
				</Button>
				<Button type="primary" size="xs">
					xs
				</Button>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.buttonBlock}>
				<Button type="primary" block>
					Block Button
				</Button>
			</DemoBlock>
			<DemoBlock cardMode title={i18n.buttonCustomColor}>
				<Button color="#8a2be2">#8a2be2</Button>
				<Button color="#ff69b4" plain>
					#ff69b4
				</Button>
				<Button color="linear-gradient(to right, #ff6034, #ee0a24)">
					LinearGradient
				</Button>
			</DemoBlock>
		</>
	);
}
