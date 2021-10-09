import React, { useMemo } from 'react';
import DatePicker from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import { Dictionary } from '../../utils/interface';

const I18N: Dictionary<Dictionary<string>> = {
	'zh-CN': {
		day: '日',
		year: '年',
		month: '月',
		hour: '时',
		timeType: '选择时间',
		dateType: '选择年月日',
		dateTimeType: '选择完整时间',
		dateHourType: '选择年月日小时',
		monthDayType: '选择月日',
		yearMonthType: '选择年月',
		optionFilter: '选项过滤器',
		sortColumns: '自定义列排序',
	},
	'en-US': {
		day: ' Day',
		year: ' Year',
		month: ' Month',
		hour: 'hour',
		timeType: 'Choose Time',
		dateType: 'Choose Date',
		dateTimeType: 'Choose DateTime',
		dateHourType: 'Choose DateHour',
		monthDayType: 'Choose Month-Day',
		yearMonthType: 'Choose Year-Month',
		optionFilter: 'Option Filter',
		sortColumns: 'Columns Order',
	},
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const defaultValue = useMemo(() => new Date(), []);

	const formatter = (type: string, value: string) => {
		if (type === 'year') {
			return value + i18n.year;
		}
		if (type === 'month') {
			return value + i18n.month;
		}
		if (type === 'day') {
			return value + i18n.day;
		}
		if (type === 'hour') {
			return value + i18n.hour;
		}
		return value;
	};

	const filter = (type: string, values: number[]) => {
		if (type === 'minute') {
			return values.filter((value) => Number(value) % 5 === 0);
		}
		return values;
	};

	return (
		<>
			<DemoBlock title={i18n.dateType}>
				<DatePicker title={i18n.dateType} defaultValue={defaultValue} />
			</DemoBlock>
			<DemoBlock title={i18n.yearMonthType}>
				<DatePicker
					title={i18n.yearMonthType}
					defaultValue={defaultValue}
					columnsLayout="year,month"
					formatter={formatter}
				/>
			</DemoBlock>
			<DemoBlock title={i18n.monthDayType}>
				<DatePicker
					title={i18n.monthDayType}
					defaultValue={defaultValue}
					columnsLayout="month,day"
					formatter={formatter}
				/>
			</DemoBlock>
			<DemoBlock title={i18n.timeType}>
				<DatePicker.TimePicker
					title={i18n.timeType}
					defaultValue={defaultValue}
					formatter={formatter}
					minHour={19}
					maxMinute={30}
				/>
			</DemoBlock>
			<DemoBlock title={i18n.dateTimeType}>
				<DatePicker
					title={i18n.dateTimeType}
					defaultValue={defaultValue}
					columnsLayout="year,month,day,hour,minute"
				/>
			</DemoBlock>
			<DemoBlock title={i18n.optionFilter}>
				<DatePicker.TimePicker
					title={i18n.optionFilter}
					defaultValue={defaultValue}
					filter={filter}
				/>
			</DemoBlock>
			<DemoBlock title={i18n.sortColumns}>
				<DatePicker
					title={i18n.sortColumns}
					defaultValue={defaultValue}
					columnsLayout="minute,hour,day,month,year"
					filter={filter}
					formatter={formatter}
				/>
			</DemoBlock>
		</>
	);
}
