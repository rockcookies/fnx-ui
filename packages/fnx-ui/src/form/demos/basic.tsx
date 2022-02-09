/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ReactNode } from 'react';
// @ts-ignore
import demo01 from '../../../site/assets/demo-dog-01.jpg';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Button from '../../button';
import Calendar from '../../calendar';
import Checkbox from '../../checkbox';
import DatePicker from '../../date-picker';
import Field from '../../field';
import Form from '../../form';
import useSafeState from '../../hooks/use-safe-state';
import Icon from '../../icon';
import Picker from '../../picker';
import Popup from '../../popup';
import Radio from '../../radio';
import Rate from '../../rate';
import Stepper from '../../stepper';
import Switch from '../../switch';
import Uploader from '../../uploader';
import { Dictionary } from '../../utils/interface';
import { createBEM } from '../../utils/namespace';
import { FormListField, FormListOperations } from '../interface';
import './basic.less';

const bem = createBEM('demo-form');

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		basicUsage: '基础用法',
		validateRules: '校验规则',
		fieldType: '表单项类型',
		dynamicFormItem: '动态增减表单项',

		addField: '新增一行',
		submit: '提交',
		username: '用户名',
		password: '密码',
		requireUsername: '请填写用户名',
		requirePassword: '请填写密码',

		label: '文本',
		message: '请输入6位数字',
		pattern: '正则校验',
		validator: '函数校验',
		validating: '验证中...',
		asyncValidator: '异步函数校验',

		black: '黑',
		white: '白',
		china: '中国',
		usa: '美国',

		rate: '评分',
		radio: '单选框',
		switch: '开关',
		slider: '滑块',
		picker: '选择器',
		stepper: '步进器',
		checkbox: '复选框',
		uploader: '文件上传',
		checkboxGroup: '复选框组',
		requireCheckbox: '请勾选复选框',
		pickerPlaceholder: '点击选择城市',
		timePickerLabel: '时间选择',
		timePickerPlaceholder: '点击选择时间',
		areaPicker: '地区选择',
		areaPickerPlaceholder: '点击选择地区',
		calendarLabel: '日历',
		calendarPlaceholder: '点击选择日期',
	},
	'en-US': {
		basicUsage: 'Basic Usage',
		validateRules: 'Validate Rules',
		fieldType: 'Field Type',
		dynamicFormItem: 'Dynamic Form Item',

		addField: 'Add Field',
		submit: 'Submit',
		username: 'Username',
		password: 'Password',
		requireUsername: 'Username is required',
		requirePassword: 'Password is required',

		label: 'label',
		message: 'please enter six number',
		pattern: 'Use pattern',
		validator: 'Use validator',
		validating: 'Validating...',
		asyncValidator: 'Use async validator',

		black: 'Black',
		white: 'White',
		china: 'China',
		usa: 'USA',

		rate: 'Rate',
		radio: 'Radio',
		switch: 'Switch',
		slider: 'Slider',
		picker: 'Picker',
		stepper: 'Stepper',
		checkbox: 'Checkbox',
		uploader: 'Uploader',
		checkboxGroup: 'Checkbox Group',
		requireCheckbox: 'Checkbox is required',
		pickerPlaceholder: 'Select City',
		timePickerLabel: 'Datetime Picker',
		timePickerPlaceholder: 'Select Time',
		areaPicker: 'Area Picker',
		areaPickerPlaceholder: 'Select Area',
		calendarLabel: 'Calendar',
		calendarPlaceholder: 'Select date',
	},
};

const I18N_DATA: Dictionary<Dictionary> = {
	'zh-CN': {
		pickerColumns: [
			'中国',
			'美国',
			'英国',
			'德国',
			'法国',
			'意大利',
			'日本',
			'西班牙',
		],
		cascade: [
			{
				label: '湖北省',
				children: [
					{
						label: '武汉市',
						children: [{ label: '江岸区' }, { label: '硚口区' }],
					},
					{
						label: '宜昌市',
						disabled: true,
						children: [{ label: '西陵区' }, { label: '夷陵区' }],
					},
				],
			},
			{
				label: '江西省',
				children: [
					{
						label: '南昌市',
						children: [{ label: '东湖区' }, { label: '西湖区' }],
					},
					{
						label: '景德镇市',
						children: [{ label: '昌江区' }, { label: '珠山区' }],
					},
				],
			},
		],
	},
	'en-US': {
		pickerColumns: [
			'China',
			'United States',
			'United Kingdom',
			'Germany',
			'France',
			'Italy',
			'Japan',
			'Spain',
		],
		cascade: [
			{
				label: 'Hubei',
				children: [
					{
						label: 'Wuhan',
						children: [{ label: 'JiangAn' }, { label: 'QiaoKou' }],
					},
					{
						label: 'Yichang',
						disabled: true,
						children: [{ label: 'XiLing' }, { label: 'YiLing' }],
					},
				],
			},
			{
				label: 'Jiangxi',
				children: [
					{
						label: 'Nanchang',
						children: [{ label: 'DongHu' }, { label: 'XiHu' }],
					},
					{
						label: 'Jingdezhen',
						children: [
							{ label: 'ChangJiang' },
							{ label: 'ZhuShan' },
						],
					},
				],
			},
		],
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');
	const [data] = useDemoTranslate(I18N_DATA, 'en-US');
	const [validating, setValidating] = useSafeState(false);

	return (
		<>
			<DemoBlock title={i18n.basicUsage} cardMode>
				<Form
					onFinish={(values) => console.log(values)}
					onFinishFailed={(values) => console.log(values)}
				>
					<Form.Item
						label={i18n.username}
						name="username"
						rules={[
							{
								required: true,
								message: i18n.requireUsername,
							},
						]}
					>
						<Field.Input placeholder={i18n.username} />
					</Form.Item>
					<Form.Item
						label={i18n.password}
						name="password"
						rules={[
							{
								required: true,
								message: i18n.requirePassword,
							},
						]}
					>
						<Field.Input
							type="password"
							placeholder={i18n.password}
						/>
					</Form.Item>
					<Button
						type="primary"
						htmlType="submit"
						shape="round"
						block
						className={bem('submit')}
					>
						{i18n.submit}
					</Button>
				</Form>
			</DemoBlock>

			<DemoBlock title={i18n.validateRules} cardMode>
				<Form
					onFinish={(values) => console.log(values)}
					onFinishFailed={(values) => console.log(values)}
				>
					<Form.Item
						label={i18n.label}
						name="name"
						rules={[
							{
								required: true,
								pattern: /\d{6}/,
								message: i18n.message,
							},
						]}
					>
						<Field.Input placeholder={i18n.pattern} />
					</Form.Item>
					<Form.Item
						label={i18n.label}
						name="validator"
						rules={[
							{
								required: true,
								validator: (_, val) => {
									if (/\d{6}/.test(val)) {
										return Promise.resolve();
									} else {
										return Promise.reject(i18n.message);
									}
								},
							},
						]}
					>
						<Field.Input placeholder={i18n.validator} />
					</Form.Item>
					<Form.Item
						label={i18n.label}
						name="asyncValidator"
						validateTrigger="onBlur"
						rules={[
							{
								required: true,
								validator: (_, val) => {
									return new Promise((resolve, reject) => {
										setValidating(true);

										setTimeout(() => {
											setValidating(false);

											/\d{6}/.test(val)
												? resolve(/\d{6}/.test(val))
												: reject(i18n.message);
										}, 1000);
									});
								},
							},
						]}
					>
						<Field.Input placeholder={i18n.asyncValidator} />
					</Form.Item>

					<Button
						type="primary"
						htmlType="submit"
						block
						shape="round"
						className={bem('submit')}
						loading={validating}
					>
						{i18n.submit}
					</Button>
				</Form>
			</DemoBlock>

			<DemoBlock title={i18n.dynamicFormItem} cardMode>
				<Form
					initialValues={{
						list: [{}],
					}}
				>
					<Form.List name="list">
						{(
							fields: FormListField[],
							{ add, remove }: FormListOperations,
						): ReactNode => (
							<>
								{fields.map<ReactNode>(
									({ key, name, ...restFields }) => {
										return (
											<Form.Item
												{...restFields}
												key={key}
												name={[name, 'username']}
												label={i18n.username}
												rules={[
													{
														required: true,
														message:
															i18n.requireUsername,
													},
												]}
												rightIcon={
													<Icon
														name="cross"
														onClick={() =>
															remove(name)
														}
													/>
												}
											>
												<Field.Input
													placeholder={i18n.pattern}
												/>
											</Form.Item>
										);
									},
								)}
								<div className={bem('actions')}>
									<Button
										type="success"
										shape="round"
										className={bem('add-field')}
										block
										disabled={fields.length >= 3}
										htmlType="button"
										onClick={() => {
											add({});
										}}
									>
										{i18n.addField}
									</Button>
									<Button
										type="primary"
										htmlType="submit"
										shape="round"
										className={bem('submit')}
										block
									>
										{i18n.submit}
									</Button>
								</div>
							</>
						)}
					</Form.List>
				</Form>
			</DemoBlock>

			<DemoBlock title={i18n.fieldType} cardMode>
				<Form
					onFinish={(values) => console.log(values)}
					onFinishFailed={(values) => console.log(values)}
					initialValues={{
						switch: true,
						checkbox: false,
						checkboxGroup: ['China'],
						stepper: 1,
						rate: 3,
						uploader: [
							{
								url: demo01,
								status: 'done',
							},
						],
						timePicker: '14:00',
					}}
				>
					<Form.Item
						label={i18n.switch}
						name="switch"
						valuePropName="checked"
					>
						<Switch size={20} />
					</Form.Item>
					<Form.Item
						label={i18n.checkbox}
						name="checkbox"
						valuePropName="checked"
					>
						<Checkbox />
					</Form.Item>
					<Form.Item label={i18n.checkboxGroup} name="checkboxGroup">
						<Checkbox.Group direction="horizontal">
							<Checkbox value="China">{i18n.china}</Checkbox>
							<Checkbox value="USA">{i18n.usa}</Checkbox>
						</Checkbox.Group>
					</Form.Item>
					<Form.Item label={i18n.radio} name="radio">
						<Radio.Group direction="horizontal">
							<Radio value="black">{i18n.black}</Radio>
							<Radio value="white">{i18n.white}</Radio>
						</Radio.Group>
					</Form.Item>
					<Form.Item label={i18n.stepper} name="stepper">
						<Stepper></Stepper>
					</Form.Item>
					<Form.Item label={i18n.rate} name="rate">
						<Rate count={6}></Rate>
					</Form.Item>
					<Form.Item label={i18n.uploader} name="uploader">
						<Uploader />
					</Form.Item>
					<Form.Item name="picker" plain>
						<Popup.Select
							select={<Picker data={data.pickerColumns} />}
						>
							{(value) => (
								<Field label={i18n.picker} clickable>
									<Field.Input
										readOnly
										value={value}
										placeholder={i18n.pickerPlaceholder}
									></Field.Input>
								</Field>
							)}
						</Popup.Select>
					</Form.Item>
					<Form.Item name="timePicker" plain>
						<Popup.Select select={<DatePicker.TimePicker />}>
							{(value) => (
								<Field label={i18n.timePickerLabel} clickable>
									<Field.Input
										readOnly
										value={value}
										placeholder={i18n.timePickerPlaceholder}
									></Field.Input>
								</Field>
							)}
						</Popup.Select>
					</Form.Item>
					<Form.Item name="areaPicker" plain>
						<Popup.Select
							select={
								<Picker.Cascade
									data={data.cascade}
									dataNames={{
										label: 'label',
										value: 'label',
										children: 'children',
									}}
								/>
							}
						>
							{(value) => {
								const inputValue = value && value.join(' / ');
								return (
									<Field label={i18n.areaPicker} clickable>
										<Field.Input
											readOnly
											value={inputValue}
											placeholder={
												i18n.areaPickerPlaceholder
											}
										></Field.Input>
									</Field>
								);
							}}
						</Popup.Select>
					</Form.Item>

					<Form.Item name="calendar" plain>
						<Popup.Select round select={<Calendar />}>
							{(value) => (
								<Field label={i18n.calendarLabel} clickable>
									<Field.Input
										readOnly
										value={value}
										placeholder={i18n.calendarPlaceholder}
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
						{i18n.submit}
					</Button>
				</Form>
			</DemoBlock>
		</>
	);
}
