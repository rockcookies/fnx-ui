# Calendar 日历

日历组件用于选择日期或日期区间。

## 基础用法

```tsx
import { Calendar } from 'fnx-ui';

ReactDOM.render(
  <>
    <Calendar />
  </>,
  mountNode,
);
```

## 选择单个日期

下面演示了结合弹出层来使用日历组件的用法，日期选择完成后会触发 `onConfirm` 事件。

```tsx
import { Popup,Calendar } from 'fnx-ui';

const  confirmHandle=(v)=>{console.log(v)}

ReactDOM.render(
  <>
  <Popup.Select  select={<Calendar  onConfirm={confirmHandle} />}>
  </>,
  mountNode,
);
```

## 选择多个日期

`<Calendar.Multi />` 可以选择多个日期，此时 `onConfirm` 事件返回的 `date` 为数组结构，数组包含若干个选中的日期。

```tsx
import { Popup,Calendar } from 'fnx-ui';

const  confirmHandle=(V)=>{console.log(v)}

ReactDOM.render(
  <>
  <Popup.Select  select={<Calendar.Multi  onConfirm={confirmHandle} />}>
  </>,
  mountNode,
);
```

## 选择日期区间

`<Calendar.Range />` 可以选择日期区间，此时 `onConfirm` 事件返回的 `date` 为数组结构，数组第一项为开始时间，第二项为结束时间。

```tsx
import { Popup,Calendar } from 'fnx-ui';

const  confirmHandle=(v)=>{console.log(v)}

ReactDOM.render(
  <>
  <Popup.Select  select={<Calendar.Range  onConfirm={confirmHandle} />}>
  </>,
  mountNode,
);
```

## 自定义日期范围

通过 `minDate` 和 `maxDate` 定义日历的范围。

```tsx
import { Popup,Calendar } from 'fnx-ui';

const  confirmHandle=(V)=>{console.log(v)}

ReactDOM.render(
  <>
    <Popup.Select
    select={
        <Calendar.Range
            minDate={new Date('2021/9/1')}
            maxDate={new Date('2021/9/30')}
            onConfirm={confirmHandle}
        />
    }
					>
  </>,
  mountNode,
);
```

## 自定义颜色

通过 `color` 属性可以自定义日历的颜色，对选中日期和底部按钮生效。

```tsx
import { Popup, Calendar } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup.Select select={<Calendar color="#33ab84" />}></Popup.Select>
  </>,
  mountNode,
);
```

## 通过 `slots` 自定义内容

```tsx
import { Popup, Calendar } from 'fnx-ui';

const dayFormatterss = () => {
  day = { ...day };
  const month = day.date.getMonth() + 1;
  const date = day.date.getDate();
  if (month === 10) {
    if (date === 1) {
      day.type = 'disabled';
    } else if (date === 2) {
      day.type = 'multiple-selected';
    } else if (date === 3) {
      day.type = 'middle';
    }
  }
  return day;
};

ReactDOM.render(
  <>
    <Popup.Select<Date>
      select={
        <Calendar
          minDate={new Date('2021/10/01')}
          maxDate={new Date('2021/11/01')}
          defaultValue={new Date('2021/10/01')}
          slots={{
            day: (day) => <Calendar.Day {...dayFormatterss(day)} />,
            subTitle: () => 'SubTitle',
            footer: 'Footer',
            monthMark: false,
            monthTitle: true,
          }}
        />
      }
    ></Popup.Select>
  </>,
  mountNode,
);
```

## API

| 参数                | 说明               | 类型                       | 默认值     |
| ------------------- | ------------------ | -------------------------- | ---------- |
| defaultValue        | 默认选中的日期     | `Date \| string \| number` | -          |
| title               | 日历标题           | `ReactNode`                | `日期选择` |
| color               | 日历颜色           | `string`                   | `#378ef0`  |
| minDate             | 可选范围的最小日期 | `Date \| string \| number` | -          |
| maxDate             | 可选范围的最大日期 | `Date \| string \| number` | -          |
| dayHeight           | 日期行高           | `number \| string`         | -          |
| readonly            | 是否只读           | `boolean`                  | `false`    |
| closeIcon           | 自定义关闭图标     | `ReactNode`                | -          |
| firstDayOfWeek      | 设置周起始日       | `number`                   | -          |
| slots               | 自定义渲染内容     | `CalendarSlots`            | -          |
| confirmText         | 确认按钮文本       | `ReactNode`                | `确定`     |
| confirmDisabledText | 失效时确认按钮文本 | `ReactNode`                | `确定`     |

## CalendarRange API

| 参数                | 说明                           | 类型                       | 默认值     |
| ------------------- | ------------------------------ | -------------------------- | ---------- |
| defaultValue        | 默认选中的日期                 | `Date \| string \| number` | -          |
| allowSameDay        | 是否可以选定开始和结束是同一天 | `boolean`                  | `false`    |
| maxSize             | 选择的最大日期个数             | `number`                   | -          |
| title               | 日历标题                       | `ReactNode`                | `日期选择` |
| color               | 日历颜色                       | `string`                   | `#378ef0`  |
| minDate             | 可选范围的最小日期             | `Date \| string \| number` | -          |
| maxDate             | 可选范围的最大日期             | `Date \| string \| number` | -          |
| dayHeight           | 日期行高                       | `number \| string`         | -          |
| readonly            | 是否自读                       | `boolean`                  | `false`    |
| closeIcon           | 自定义关闭图标                 | `ReactNode`                | -          |
| firstDayOfWeek      | 设置周起始日                   | `number`                   | -          |
| slots               | 自定义渲染                     | `CalendarSlots`            | -          |
| confirmText         | 确认按钮文本                   | `ReactNode`                | `确定`     |
| confirmDisabledText | 失效时确认按钮文本             | `ReactNode`                | `确定`     |

## CalendarMulti API

| 参数                | 说明               | 类型                       | 默认值     |
| ------------------- | ------------------ | -------------------------- | ---------- |
| defaultValue        | 默认选中的日期     | `Date \| string \| number` | -          |
| maxSize             | 选择的最大日期个数 | `number`                   | -          |
| title               | 日历标题           | `ReactNode`                | `日期选择` |
| color               | 日历颜色           | `string`                   | `#378ef0`  |
| minDate             | 可选范围的最小日期 | `Date \| string \| number` | -          |
| maxDate             | 可选范围的最大日期 | `Date \| string \| number` | -          |
| dayHeight           | 日期行高           | `number \| string`         |            |
| readonly            | 是否自读           | `boolean`                  | `false`    |
| closeIcon           | 自定义关闭图标     | `ReactNode`                | -          |
| firstDayOfWeek      | 设置周起始日       | `number`                   | -          |
| slots               | 自定义渲染         | `CalendarSlots`            | -          |
| confirmText         | 确认按钮文本       | `ReactNode`                | `确定`     |
| confirmDisabledText | 失效时确认按钮文本 | `ReactNode`                | `确定`     |

## 事件

| 事件名    | 说明               | 回调参数      |
| --------- | ------------------ | ------------- |
| onConfirm | 点击确认按钮触发   | `value: Date` |
| onCancel  | 点击关闭图标时触发 | -             |
| onChange  | 选中项变化时触发   | `value: Date` |

## CalendarRange 事件

| 事件名    | 说明                         | 回调参数        |
| --------- | ---------------------------- | --------------- |
| onConfirm | 点击确认按钮触发             | `value: Date[]` |
| onCancel  | 点击关闭图标时触发           | -               |
| onChange  | 选中结束日期时触发           | `value: Date[]` |
| onMaxSize | 超出选择的最大日期个数时触发 | -               |

## CalendarMulti 事件

| 事件名    | 说明                         | 回调参数        |
| --------- | ---------------------------- | --------------- |
| onConfirm | 点击确认按钮触发             | `value: Date[]` |
| onCancel  | 点击关闭图标时触发           | -               |
| onChange  | 选中项变化时触发             | `value: Date[]` |
| onMaxSize | 超出选择的最大日期个数时触发 | -               |

### slots 数据结构

| 参数       | 说明                   | 类型                                            | 默认值 |
| ---------- | ---------------------- | ----------------------------------------------- | ------ |
| day        | 单个日期设置           | `(day: CalendarDayComponentProps) => ReactNode` | -      |
| subTitle   | 自定义头部日期区域内容 | ` boolean \| ((date: Date) => ReactNode)`       | -      |
| monthMark  | 是否显示月份背景水印   | `boolean \| ((date: Date) => ReactNode)`        | -      |
| monthTitle | 月份标题               | `boolean \| ((date: Date) => ReactNode)`        | -      |
| footer     | 自定义底部区域内容     | `ReactNode`                                     | -      |

### slots 中 day 的数据结构

| 参数       | 说明             | 类型                                                                                                                              | 默认值      |
| ---------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| color      | 单个日期设置颜色 | `string`                                                                                                                          | -           |
| dayHeight  | 此日期对应的行高 | `string`                                                                                                                          | -           |
| date       | 对应的值         | `Date`                                                                                                                            | -           |
| content    | 内容             | `ReactNode`                                                                                                                       | -           |
| type       | 类型             | `'normal' \| 'start' \| 'start-end' \| 'middle' \| 'end' \| 'selected' \| 'multiple-middle' \| 'multiple-selected' \| 'disabled'` | `'normal' ` |
| topInfo    | 头部提示         | `ReactNode`                                                                                                                       | -           |
| bottomInfo | 底部提示         | `ReactNode`                                                                                                                       | -           |
