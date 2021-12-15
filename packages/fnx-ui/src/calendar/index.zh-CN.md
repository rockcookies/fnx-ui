# Calendar 日历

日历组件用于选择日期或日期区间。

## 选择单个日期

日历组件可以搭配 Cell 和 Popup 组件使用。

```tsx
import { Calendar, Cell, Icon, Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup.Select round select={<Calendar />}>
      {(value) => (
        <Cell
          title="Calendar"
          content={
            value
              ? `${value.getMonth() + 1}/${value.getDate()}`
              : 'Please Select'
          }
          clickable
          rightIcon={<Icon name="arrow-right" />}
        />
      )}
    </Popup.Select>
  </>,
  mountNode,
);
```

## 选择多个日期

Calendar.Multi 可以选择多个日期，此时 `value` 为数组结构，数组包含若干个选中的日期。

```tsx
import { Calendar, Cell, Icon, Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup.Select round select={<Calendar.Multi />}>
      {(value) => (
        <Cell
          title="Calendar"
          content={value ? `${value.length} dates selected` : 'Please Select'}
          clickable
          rightIcon={<Icon name="arrow-right" />}
        />
      )}
    </Popup.Select>
  </>,
  mountNode,
);
```

## 选择日期区间

Calendar.Range 可以选择日期区间，此时 `value` 为数组结构，数组第一项为开始日期，第二项为结束日期。

```tsx
import { Calendar, Cell, Icon, Popup } from 'fnx-ui';

const formatDate = (date: Date) => {
  if (date) {
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }
};

ReactDOM.render(
  <>
    <Popup.Select round select={<Calendar.Range />}>
      {(value) => (
        <Cell
          title="Calendar"
          content={
            value
              ? `${formatDate(value[0])} - ${formatDate(value[1])}`
              : 'Please Select'
          }
          clickable
          rightIcon={<Icon name="arrow-right" />}
        />
      )}
    </Popup.Select>
  </>,
  mountNode,
);
```

**默认情况下，日期区间的起止时间不能为同一天，可以通过设置 `allowSameDay` 属性来允许选择同一天。**

## 自定义颜色

通过 `color` 属性可以自定义日历的颜色，对选中日期和底部按钮生效。

```tsx
import { Calendar, Cell, Icon, Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup.Select round select={<Calendar color="var(--fnx-success-color)" />}>
      {(value) => (
        <Cell
          title="Please Select"
          content={value && `${value.getMonth() + 1}/${value.getDate()}`}
          clickable
          rightIcon={<Icon name="arrow-right" />}
        />
      )}
    </Popup.Select>
  </>,
  mountNode,
);
```

## 自定义按钮文字

通过 `confirmText` 设置按钮文字，通过 `confirmDisabledText` 设置按钮禁用时的文字。

```tsx
import { Calendar, Cell, Icon, Popup } from 'fnx-ui';

const formatDate = (date: Date) => {
  if (date) {
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }
};

ReactDOM.render(
  <>
    <Popup.Select
      round
      select={
        <Calendar.Range
          confirmText="OK"
          confirmDisabledText="Select End Date"
        />
      }
    >
      {(value) => (
        <Cell
          title="Calendar"
          content={
            value
              ? `${formatDate(value[0])} - ${formatDate(value[1])}`
              : 'Please Select'
          }
          clickable
          rightIcon={<Icon name="arrow-right" />}
        />
      )}
    </Popup.Select>
  </>,
  mountNode,
);
```

## 自定义日期范围

通过 `minDate` 和 `maxDate` 定义日历的范围。

```tsx
import { Calendar, Cell, Icon, Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup.Select
      round
      select={
        <Calendar
          minDate={new Date('2021/9/1')}
          maxDate={new Date('2021/10/31')}
        />
      }
    >
      {(value) => (
        <Cell
          title="Please Select"
          content={value && `${value.getMonth() + 1}/${value.getDate()}`}
          clickable
          rightIcon={<Icon name="arrow-right" />}
        />
      )}
    </Popup.Select>
  </>,
  mountNode,
);
```

## 自定义日期元素

通过传入 `slots` 对象来对日历的元素进行自定义。

```tsx
import { Calendar, Cell, Icon, Popup } from 'fnx-ui';

const dayFormatter = (day) => {
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
    <Popup.Select
      round
      select={
        <Calendar
          minDate={new Date('2021/10/01')}
          maxDate={new Date('2021/11/01')}
          defaultValue={new Date('2021/10/01')}
          slots={{
            day: (day) => <Calendar.Day {...dayFormatter(day)} />,
            subTitle: () => 'SubTitle',
            footer: 'Footer',
            monthMark: false,
            monthTitle: true,
          }}
        />
      }
    >
      {(value) => (
        <Cell
          title="Please Select"
          content={value && `${value.getMonth() + 1}/${value.getDate()}`}
          clickable
          rightIcon={<Icon name="arrow-right" />}
        />
      )}
    </Popup.Select>
  </>,
  mountNode,
);
```

## 日期区间最大范围

使用 Calendar.Range 或 Calendar.Multi 时，可以通过 `maxSize` 属性来指定最多可选天数，选择的范围超过最多可选天数时，可以弹出相应的提示文案。

```tsx
import { Calendar, Cell, Icon, Popup, Toast } from 'fnx-ui';

const formatDate = (date: Date) => {
  if (date) {
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }
};

ReactDOM.render(
  <>
    <Popup.Select
      round
      select={
        <Calendar.Range
          maxSize={3}
          onMaxSize={() => {
            Toast.show('Choose no more than 3 days');
          }}
        />
      }
    >
      {(value) => (
        <Cell
          title="Calendar"
          content={
            value
              ? `${formatDate(value[0])} - ${formatDate(value[1])}`
              : 'Please Select'
          }
          clickable
          rightIcon={<Icon name="arrow-right" />}
        />
      )}
    </Popup.Select>
  </>,
  mountNode,
);
```

## API

日期类组件包括以下三种形式。

- Calendar
- Calendar.Multi
- Calendar.Range

### 共同的 Props

| 名称                | 说明                                   | 类型                           | 默认值             | 版本 |
| ------------------- | -------------------------------------- | ------------------------------ | ------------------ | ---- |
| title               | 日历标题                               | `ReactNode`                    | `'日期选择'`       |      |
| color               | 主题色，对底部按钮和选中日期生效       | `string`                       | -                  |      |
| minDate             | 可选择的最小日期                       | `Date` \| `string` \| `number` | 当前日期           |      |
| maxDate             | 可选择的最大日期                       | `Date` \| `string` \| `number` | 当前日期的六个月后 |      |
| dayHeight           | 日期行高                               | `number` \| `string`           | `64`               |      |
| readonly            | 是否为只读状态，只读状态下不能选择日期 | `boolean`                      | `false`            |      |
| closeIcon           | 自定义关闭图标                         | `ReactNode`                    | -                  |      |
| firstDayOfWeek      | 设置周起始日                           | `0-6`                          | `0`                |      |
| slots               | 日期插槽                               | `CalendarSlots`                | -                  |      |
| confirmText         | 确认按钮文本                           | `ReactNode`                    | `'确定'`           |      |
| confirmDisabledText | 确认按钮处于禁用状态时的文字           | `ReactNode`                    | `'确定'`           |      |

### CalendarSlots

| 名称       | 说明                   | 类型                                            | 默认值 | 版本 |
| ---------- | ---------------------- | ----------------------------------------------- | ------ | ---- |
| day        | 单个日期设置           | `(day: CalendarDayComponentProps) => ReactNode` | -      |      |
| subTitle   | 自定义头部日期区域内容 | ` boolean` \| `((date: Date) => ReactNode)`     | -      |      |
| monthMark  | 是否显示月份背景水印   | `boolean` \| `((date: Date) => ReactNode)`      | -      |      |
| monthTitle | 月份标题               | `boolean` \| `((date: Date) => ReactNode)`      | -      |      |
| footer     | 自定义底部区域内容     | `ReactNode`                                     | -      |      |

## Calendar Props

| 名称         | 说明           | 类型                           | 默认值 | 版本 |
| ------------ | -------------- | ------------------------------ | ------ | ---- |
| defaultValue | 默认选中的日期 | `Date` \| `string` \| `number` | -      |      |

## Calendar 事件

| 名称      | 说明               | 类型                    | 版本 |
| --------- | ------------------ | ----------------------- | ---- |
| onConfirm | 点击确认按钮触发   | `(value: Date) => void` |      |
| onCancel  | 点击关闭图标时触发 | `() => void`            |      |
| onChange  | 选中项变化时触发   | `(value: Date) => void` |      |

## Calendar.Multi Props

| 名称         | 说明               | 类型                              | 默认值 | 版本 |
| ------------ | ------------------ | --------------------------------- | ------ | ---- |
| defaultValue | 默认选中的日期     | `Array<Date \| string \| number>` | -      |      |
| maxSize      | 选择的最大日期个数 | `number`                          | -      |      |

## Calendar.Multi 事件

| 名称      | 说明                           | 类型                      | 版本 |
| --------- | ------------------------------ | ------------------------- | ---- |
| onConfirm | 点击确认按钮触发               | `(value: Date[]) => void` |      |
| onCancel  | 点击关闭图标时触发             | `() => void`              |      |
| onChange  | 选中项变化时触发               | `(value: Date[]) => void` |      |
| onMaxSize | 范围选择超过最多可选天数时触发 | `() => void`              |      |

## Calendar.Range Props

| 名称         | 说明                           | 类型                              | 默认值  | 版本 |
| ------------ | ------------------------------ | --------------------------------- | ------- | ---- |
| defaultValue | 默认选中的日期区间             | `Array<Date \| string \| number>` | -       |      |
| allowSameDay | 是否可以选定开始和结束是同一天 | `boolean`                         | `false` |      |
| maxSize      | 日期区间最多可选天数           | `number`                          | -       |      |

## Calendar.Range 事件

| 名称      | 说明                           | 类型                      | 版本 |
| --------- | ------------------------------ | ------------------------- | ---- |
| onConfirm | 点击确认按钮触发               | `(value: Date[]) => void` |      |
| onCancel  | 点击关闭图标时触发             | `() => void`              |      |
| onChange  | 选中项变化时触发               | `(value: Date[]) => void` |      |
| onMaxSize | 范围选择超过最多可选天数时触发 | `() => void`              |      |

## Calendar 实例方法

| 名称  | 说明     | 类型         | 版本 |
| ----- | -------- | ------------ | ---- |
| reset | 重置组件 | `() => void` |      |
