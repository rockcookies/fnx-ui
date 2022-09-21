import React, { FC, ReactNode, useContext } from 'react';
import ConfigProvider from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Button from '../../button';
import Calendar from '../../calendar';
import Field from '../../field';
import Form from '../../form';
import enUS from '../../locale/en-US';
import zhCN from '../../locale/zh-CN';
import Popup from '../../popup';
import Rate from '../../rate';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import './basic.less';

const bem = createBEM('demo-config-provider');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		locale: '语言',
	},
	'en-US': {
		locale: 'Language',
	},
};

const DEMO_I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		submit: '提交',
		rate: '评分',
		transition: '动画时常',
		calendarLabel: '日历',
		calendarPlaceholder: '点击选择日期',
		locale: 'zh-CN',
	},
	'en-US': {
		submit: 'Submit',
		rate: 'Rate',
		transition: 'Transition',
		calendarLabel: 'Calendar',
		calendarPlaceholder: 'Select date',
		locale: 'en-US',
	},
};

const Demo: FC = () => {
	const { locale, transitionDuration } = useContext(ConfigProvider.Context);

	const [i18n] = useDemoTranslate(I18N, 'en-US');
	const demo_i18n = DEMO_I18N[locale.locale === 'zh-CN' ? 'zh-CN' : 'en-US'];

	return (
		<DemoBlock title={`${i18n.locale}: ${demo_i18n.locale}`} cardMode>
			<Form initialValues={{ rate: 3 }}>
				<Form.Item label={demo_i18n.transition}>
					{transitionDuration}ms
				</Form.Item>
				<Form.Item label={demo_i18n.rate} name="rate">
					<Rate count={6}></Rate>
				</Form.Item>
				<Form.Item name="calendar" plain>
					<Popup.Select round select={<Calendar />}>
						{(value) => (
							<Field label={demo_i18n.calendarLabel} clickable>
								<Field.Input
									readOnly
									value={value}
									placeholder={demo_i18n.calendarPlaceholder}
								></Field.Input>
							</Field>
						)}
					</Popup.Select>
				</Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					block
					shape="round"
					className={bem('submit')}
				>
					{demo_i18n.submit}
				</Button>
			</Form>
		</DemoBlock>
	);
};

Demo.displayName = 'Demo';

export default function Basic(): ReturnType<React.FC> {
	return (
		<>
			<ConfigProvider locale={enUS}>
				<Demo />
			</ConfigProvider>

			<ConfigProvider locale={zhCN} transitionDuration={1000}>
				<Demo />
			</ConfigProvider>
		</>
	);
}
