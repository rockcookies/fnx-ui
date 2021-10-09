/* eslint-disable no-template-curly-in-string */
import { Locale } from './interface';

const typeTemplate = '${label}不是一个有效的${type}';

const locale: Locale = {
	locale: 'zh-CN',
	'pull-refresh': {
		loading: '加载中...',
		loosing: '释放即可刷新...',
		pulling: '下拉即可刷新...',
	},
	list: {
		loading: '加载中...',
	},
	picker: {
		confirm: '确定',
		cancel: '取消',
	},
	pagination: {
		prev: '上一页',
		next: '下一页',
	},
	uploader: {
		upload: '上传',
	},
	cascader: {
		select: '请选择',
	},
	calendar: {
		confirm: '确定',
		end: '结束',
		start: '开始',
		title: '日期选择',
		startEnd: '开始/结束',
		weekdays: ['日', '一', '二', '三', '四', '五', '六'],
		monthTitle: '${year}年${month}月',
		rangePrompt: '选择天数不能超过  ${maxRange} 天',
	},
	form: {
		validate: {
			default: '字段验证错误${label}',
			required: '请输入${label}',
			enum: '${label}必须是其中一个[${enum}]',
			whitespace: '${label}不能为空字符',
			date: {
				format: '${label}日期格式无效',
				parse: '${label}不能转换为日期',
				invalid: '${label}是一个无效日期',
			},
			types: {
				string: typeTemplate,
				method: typeTemplate,
				array: typeTemplate,
				object: typeTemplate,
				number: typeTemplate,
				date: typeTemplate,
				boolean: typeTemplate,
				integer: typeTemplate,
				float: typeTemplate,
				regexp: typeTemplate,
				email: typeTemplate,
				url: typeTemplate,
				hex: typeTemplate,
			},
			string: {
				len: '${label}须为${len}个字符',
				min: '${label}最少${min}个字符',
				max: '${label}最多${max}个字符',
				range: '${label}须在${min}-${max}字符之间',
			},
			number: {
				len: '${label}必须等于${len}',
				min: '${label}最小值为${min}',
				max: '${label}最大值为${max}',
				range: '${label}须在${min}-${max}之间',
			},
			array: {
				len: '须为${len}个${label}',
				min: '最少${min}个${label}',
				max: '最多${max}个${label}',
				range: '${label}数量须在${min}-${max}之间',
			},
			pattern: {
				mismatch: '${label}与模式不匹配${pattern}',
			},
		},
	},
	dialog: {
		confirm: '确定',
		cancel: '取消',
	},
};

export default locale;
