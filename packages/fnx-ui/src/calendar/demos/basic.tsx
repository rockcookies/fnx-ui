import React from 'react';
import Calendar from '..';
import DemoBlock from '../../../site/components/DemoBlock';
import useDemoTranslate from '../../../site/hooks/use-demo-translate';
import Cell from '../../cell';
import Toast from '../../toast';
import Icon from '../../icon';
import Popup from '../../popup';
import { Dictionary } from '../../utils/interface';
import { CalendarDayComponentProps } from '../interface';

const I18N: Dictionary<Dictionary> = {
	'zh-CN': {
		basicUsage: '基础用法',
		calendar: '日历',
		in: '入店',
		out: '离店',
		today: '今天',
		laborDay: '劳动节',
		youthDay: '青年节',
		maxRange: '日期区间最大范围',
		selectCount: (count: number) => `选择了 ${count} 个日期`,
		selectSingle: '选择单个日期',
		selectMultiple: '选择多个日期',
		selectRange: '选择日期区间',
		confirmText: '完成',
		customColor: '自定义颜色',
		customRange: '自定义日期范围',
		customConfirm: '自定义按钮文字',
		customDayText: '自定义日期文案',
		customPosition: '自定义弹出位置',
		customCalendar: '自定义日历',
		confirmDisabledText: '请选择结束时间',
		firstDayOfWeek: '自定义周起始日',
		maxSizePrompt: (size: number) => `最多选择 ${size} 天`,
		tiledDisplay: '平铺展示',
	},
	'en-US': {
		basicUsage: 'Basic usage',
		calendar: 'Calendar',
		in: 'In',
		out: 'Out',
		today: 'Today',
		laborDay: 'Labor day',
		youthDay: 'Youth Day',
		maxRange: 'Max Range',
		selectCount: (count: number) => `${count} dates selected`,
		selectSingle: 'Select Single Date',
		selectMultiple: 'Select Multiple Date',
		selectRange: 'Select Date Range',
		confirmText: 'OK',
		customColor: 'Custom Color',
		customRange: 'Custom Date Range',
		customConfirm: 'Custom Confirm Text',
		customDayText: 'Custom Day Text',
		customPosition: 'Custom Position',
		customCalendar: 'Custom Calendar',
		firstDayOfWeek: 'Custom First Day Of Week',
		confirmDisabledText: 'Select End Time',
		maxSizePrompt: (size: number) => `Choose no more than ${size} days`,
		tiledDisplay: 'Tiled display',
	},
};

const formatDate = (date: Date) => {
	if (date) {
		return `${date.getMonth() + 1}/${date.getDate()}`;
	}
};

const formatFullDate = (date: Date) => {
	if (date) {
		return `${date.getFullYear()}/${formatDate(date)}`;
	}
};

const formatRange = (dateRange: Date[]) => {
	if (dateRange && dateRange.length) {
		const [start, end] = dateRange;
		return `${formatDate(start)} - ${formatDate(end)}`;
	}
};

export default function Basic(): ReturnType<React.FC> {
	const [i18n] = useDemoTranslate(I18N, 'en-US');

	const formatMultiple = (dates: Date[]) => {
		if (dates && dates.length) {
			return i18n.selectCount(dates.length);
		}
	};

	const dayFormatter = (day: CalendarDayComponentProps) => {
		day = { ...day };

		const month = day.date.getMonth() + 1;
		const date = day.date.getDate();

		if (month === 5) {
			if (date === 1) {
				day.topInfo = i18n.laborDay;
			} else if (date === 4) {
				day.topInfo = i18n.youthDay;
			} else if (date === 11) {
				day.content = i18n.today;
			}
		}

		if (day.type === 'start') {
			day.bottomInfo = i18n.in;
		} else if (day.type === 'end') {
			day.bottomInfo = i18n.out;
		}

		return day;
	};

	const renderCell = (title: string, content: any) => {
		return (
			<Cell
				title={title}
				content={content}
				clickable
				rightIcon={<Icon name="arrow-right" />}
			/>
		);
	};

	return (
		<>
			<DemoBlock title={i18n.basicUsage} cardMode>
				<Cell.Group insert>
					<Popup.Select<Date> round select={<Calendar />}>
						{(value) =>
							renderCell(i18n.selectSingle, formatFullDate(value))
						}
					</Popup.Select>
					<Popup.Select<Date[]> round select={<Calendar.Multi />}>
						{(value) =>
							renderCell(
								i18n.selectMultiple,
								formatMultiple(value),
							)
						}
					</Popup.Select>
					<Popup.Select<Date[]> round select={<Calendar.Range />}>
						{(value) =>
							renderCell(i18n.selectRange, formatRange(value))
						}
					</Popup.Select>
				</Cell.Group>
			</DemoBlock>

			<DemoBlock title={i18n.customCalendar} cardMode>
				<Cell.Group insert>
					<Popup.Select<Date[]>
						round
						select={
							<Calendar.Range color="var(--fnx-success-color)" />
						}
					>
						{(value) =>
							renderCell(i18n.customColor, formatRange(value))
						}
					</Popup.Select>
					<Popup.Select<Date>
						round
						select={
							<Calendar minDate="2010-1-1" maxDate="2010-1-31" />
						}
					>
						{(value) =>
							renderCell(i18n.customRange, formatFullDate(value))
						}
					</Popup.Select>
					<Popup.Select<Date[]>
						round
						select={
							<Calendar.Range
								confirmText={i18n.confirmText}
								confirmDisabledText={i18n.confirmDisabledText}
							/>
						}
					>
						{(value) =>
							renderCell(i18n.customConfirm, formatRange(value))
						}
					</Popup.Select>
					<Popup.Select<Date[]>
						round
						select={
							<Calendar.Range
								minDate="2010-5-1"
								maxDate="2010-5-31"
								slots={{
									day: (day) => (
										<Calendar.Day {...dayFormatter(day)} />
									),
								}}
							/>
						}
					>
						{(value) =>
							renderCell(i18n.customDayText, formatRange(value))
						}
					</Popup.Select>
					<Popup.Select<Date>
						position="right"
						style={{ width: '95%', height: '100%' }}
						select={<Calendar style={{ height: '100%' }} />}
					>
						{(value) =>
							renderCell(
								i18n.customPosition,
								formatFullDate(value),
							)
						}
					</Popup.Select>
					<Popup.Select<Date[]>
						round
						select={
							<Calendar.Range
								maxSize={3}
								onMaxSize={() => {
									Toast.show(i18n.maxSizePrompt(3));
								}}
							/>
						}
					>
						{(value) =>
							renderCell(i18n.customRange, formatRange(value))
						}
					</Popup.Select>
					<Popup.Select<Date>
						select={<Calendar firstDayOfWeek={1} />}
					>
						{(value) =>
							renderCell(
								i18n.firstDayOfWeek,
								formatFullDate(value),
							)
						}
					</Popup.Select>
				</Cell.Group>
			</DemoBlock>

			<DemoBlock title={i18n.tiledDisplay} cardMode>
				<Calendar title={i18n.calendar} />
			</DemoBlock>
		</>
	);
}
