import React from 'react';
import Field from '..';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Button from '../../button';
import Cell from '../../cell';
import Icon from '../../icon';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import { FieldInputType } from '../interface';

const bem = createBEM('demo-field');

const I18N: Dictionary<Dictionary> = {
	'zh-CN': {
		basicUsage: '基础用法',

		typeInput: '自定义类型',
		text: '文本',
		textPH: '请输入文本',
		tel: '手机号',
		telPH: '请输入手机号',
		digit: '整数',
		digitPH: '请输入整数',
		number: '数字',
		numberPH: '请输入数字（支持小数）',
		password: '密码',
		passwordPH: '请输入密码',

		disabledInput: '禁用输入框',
		readonlyPH: '输入框只读',
		disabledPH: '输入框已禁用',

		iconInput: '显示图标',
		iconVisiblePH: '显示图标',
		iconClearPH: '显示清除图标',

		helpInput: '错误提示',
		helpMessage: '手机号格式错误',

		buttonInput: '插入按钮',
		buttonLabel: '短信验证码',
		buttonPH: '请输入短信验证码',
		buttonText: '发送验证码',

		autoHeightInput: '高度自适应',

		remarkLabel: '留言',
		remarkPH: '请输入留言',

		workCountInput: '显示字数统计',

		inputAlign: '输入框内容对齐',
		inputAlignPH: '输入框内容右对齐',
	},
	'en-US': {
		basicUsage: 'Basic Usage',

		typeInput: 'Custom Type',
		text: 'Label',
		textPH: 'Text',
		tel: 'Phone',
		telPH: 'Phone',
		digit: 'Digit',
		digitPH: 'Digit',
		number: 'Number',
		numberPH: 'Number',
		password: 'Password',
		passwordPH: 'Password',

		disabledInput: 'Disabled',
		readonlyPH: 'Input Readonly',
		disabledPH: 'Input Disabled',

		iconInput: 'Show Icon',
		iconVisiblePH: 'Show Icon',
		iconClearPH: 'Show Clear Icon',

		helpInput: 'Error Info',
		helpMessage: 'Invalid phone',

		buttonInput: 'Insert Button',
		buttonLabel: 'SMS',
		buttonPH: 'SMS',
		buttonText: 'Send SMS',

		autoHeightInput: 'Auto Resize',

		remarkLabel: 'Message',
		remarkPH: 'Message',

		workCountInput: 'Show Word Limit',

		inputAlign: 'Input Align',
		inputAlignPH: 'Input Align Right',
	},
};

const TYPES = Array.from<FieldInputType>([
	'text',
	'tel',
	'digit',
	'number',
	'password',
]);

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	return (
		<div className={bem()}>
			<Cell.Group title={i18n.basicUsage}>
				<Field label={i18n.text}>
					<Field.Input placeholder={i18n.textPH} />
				</Field>
			</Cell.Group>

			<Cell.Group title={i18n.typeInput}>
				{TYPES.map((t) => {
					return (
						<Field label={i18n[t]} key={t}>
							<Field.Input
								placeholder={i18n[`${t}PH`]}
								type={t}
							/>
						</Field>
					);
				})}
			</Cell.Group>

			<Cell.Group title={i18n.disabledInput}>
				<Field label={i18n.text}>
					<Field.Input
						readOnly
						placeholder={i18n.readonlyPH}
						defaultValue={i18n.readonlyPH}
					/>
				</Field>
				<Field label={i18n.text} disabled>
					<Field.Input placeholder={i18n.disabledPH} />
				</Field>
			</Cell.Group>

			<Cell.Group title={i18n.iconInput}>
				<Field
					label={i18n.text}
					leftIcon={<Icon name="file-o" />}
					rightIcon={<Icon name="star" />}
				>
					<Field.Input placeholder={i18n.iconVisiblePH} />
				</Field>
				<Field label={i18n.text} leftIcon={<Icon name="file-o" />}>
					<Field.Input placeholder={i18n.iconClearPH} clearable />
				</Field>
			</Cell.Group>

			<Cell.Group title={i18n.helpInput}>
				<Field label={i18n.tel} required help={i18n.helpMessage}>
					<Field.Input placeholder={i18n.telPH} defaultValue="123" />
				</Field>
			</Cell.Group>

			<Cell.Group title={i18n.buttonInput}>
				<Field
					label={i18n.buttonLabel}
					controlSuffix={
						<Button size="sm" type="primary">
							{i18n.buttonText}
						</Button>
					}
					itemsAlign="middle"
				>
					<Field.Input placeholder={i18n.buttonPH} />
				</Field>
			</Cell.Group>

			<Cell.Group title={i18n.autoHeightInput}>
				<Field label={i18n.remarkLabel}>
					<Field.TextArea placeholder={i18n.remarkPH} autoSize />
				</Field>
			</Cell.Group>

			<Cell.Group title={i18n.workCountInput}>
				<Field label={i18n.remarkLabel}>
					<Field.TextArea
						placeholder={i18n.remarkPH}
						showCount
						rows={2}
						maxLength={50}
						autoSize
					/>
				</Field>
			</Cell.Group>

			<Cell.Group title={i18n.inputAlign}>
				<Field label={i18n.text}>
					<Field.Input
						placeholder={i18n.inputAlignPH}
						inputAlign="right"
					/>
				</Field>
			</Cell.Group>
		</div>
	);
}
