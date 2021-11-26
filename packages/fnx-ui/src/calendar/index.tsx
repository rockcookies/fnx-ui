import { CalendarExportExtra } from './interface';
import _Calendar from './Calendar';
import CalendarMulti from './CalendarMulti';
import CalendarRange from './CalendarRange';
import CalendarDay from './CalendarDay';

const Calendar: typeof _Calendar & CalendarExportExtra = _Calendar as any;
Calendar.Multi = CalendarMulti;
Calendar.Range = CalendarRange;
Calendar.Day = CalendarDay;

export default Calendar;
export type {
	CalendarDayComponentProps,
	CalendarDayProps,
	CalendarComponentProps,
	CalendarProps,
	CalendarRangeComponentProps,
	CalendarRangeProps,
	CalendarMultiComponentProps,
	CalendarMultiProps,
	CalendarValue,
	CalendarSlots,
	CalendarDayType,
} from './interface';
