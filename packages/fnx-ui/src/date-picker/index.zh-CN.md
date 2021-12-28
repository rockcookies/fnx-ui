# DatePicker 时间选择器

时间选择器，支持日期、年月、时分等维度，通常与 [弹出层](#/zh-CN/components/popup) 组件配合使用。

## 选择年月日

DatePicker 通过 `columnsLayout` 属性来定义需要选择的时间类型，`columnsLayout` 为 `year,month,day` 表示选择年月日。通过 `maxDate` 和 `minDate` 属性可以确定可选的时间范围。

```tsx
import { DatePicker } from 'fnx-ui';

ReactDOM.render(
  <>
    <DatePicker
      title="Select Date"
      columnsLayout="year,month,day"
      maxDate={new Date(2050, 0, 1)}
      minDate={new Date(2010, 0, 1)}
    />
  </>,
  mountNode,
);
```

## 选择年月

将 `columnsLayout` 设置为 `year,month` 即可选择年份和月份。通过传入 `formatter` 函数，可以对选项文字进行格式化处理。

```tsx
import { DatePicker } from 'fnx-ui';

const formatter = (type: string, value: string) => {
  if (type === 'year') {
    return value + 'year';
  }

  if (type === 'month') {
    return value + 'month';
  }

  if (type === 'day') {
    return value + 'day';
  }

  return value;
};

ReactDOM.render(
  <>
    <DatePicker
      title="Select Date"
      columnsLayout="year,month,day"
      formatter={formatter}
    />
  </>,
  mountNode,
);
```

## 选择时间

使用 TimePicker 即可选择时间（小时和分钟）。

```tsx
import { DatePicker } from 'fnx-ui';

ReactDOM.render(
  <>
    <DatePicker.TimePicker title="Select Time" />
  </>,
  mountNode,
);
```

## 选择完整时间

将 `columnsLayout` 设置为 `year,month,day,hour,minute` 即可选择完整时间，包括年、月、日和小时、分钟。

```tsx
import { DatePicker } from 'fnx-ui';

ReactDOM.render(
  <>
    <DatePicker
      title="Select Date"
      columnsLayout="year,month,day,hour,minute"
    />
  </>,

  mountNode,
);
```

## 选项过滤器

通过传入 `filter` 函数，可以对选项数组进行过滤，实现自定义时间间隔。

```tsx
import { DatePicker } from 'fnx-ui';

const filter = (type: string, values: number[]) => {
  if (type === 'minute') {
    return values.filter((value) => value % 5 === 0);
  }
  return values;
};

ReactDOM.render(
  <>
    <DatePicker.TimePicker title="Select Time" filter={filter} />
  </>,

  mountNode,
);
```

## 自定义列排序

```tsx
import { DatePicker } from 'fnx-ui';

const formatter = (type: string, value: string) => {
    if (type === 'year') {
        return value + 'year';
    }

    if (type === 'month') {
        return value + 'month';
    }

    if (type === 'day') {
        return value + 'day';
    }

    return value;
};

ReactDOM.render(
   <>
    <DatePicker.TimePicker
        title="Select Date"
        columnsLayout="minute,hour,day,month,year"
        formatter={formatter}
    />
   </>
  mountNode,
);
```

## API

### DatePicker Props

DatePicker 继承类型 [`PickerBaseProps`](#/zh-CN/components/popup)，并新增了如下属性：

类型 `DatePickerField` 的值可以是 `'year'` | `'month'` | `'day'` | `'hour'` | `'minute'`。

| 名称          | 说明                       | 类型                                                   | 默认值             | 版本 |
| ------------- | -------------------------- | ------------------------------------------------------ | ------------------ | ---- |
| columnsLayout | 自定义时间类型             | `string`                                               | `'year,month,day'` |      |
| defaultValue  | 初始化日期                 | `Date` \| `number` \| `string`                         | -                  |      |
| minDate       | 可选的最小时间，精确到分钟 | `Date` \| `number` \| `string`                         | 十年前             |      |
| maxDate       | 可选的最大时间，精确到分钟 | `Date` \| `number` \| `string`                         | 十年后             |      |
| filter        | 选项过滤器函数             | `(type: DatePickerField, value: number[]) => number[]` | -                  |
| formatter     | 选项格式化函数             | `(type: DatePickerField, value: string) => string`     | -                  |

## DatePicker 事件

| 事件名    | 说明                     | 类型                    | 版本 |
| --------- | ------------------------ | ----------------------- | ---- |
| onChange  | 当值变化时触发的事件     | `(value: Date) => void` |      |
| onConfirm | 点击完成按钮时触发的事件 | `(value: Date) => void` |      |
| onCancel  | 点击取消按钮时触发的事件 | `() => void`            |      |

### DatePicker 实例方法

| 名称     | 描述           | 类型         | 版本 |
| -------- | -------------- | ------------ | ---- |
| getValue | 获取当前选项值 | `() => Date` |      |

## TimePicker Props

TimePicker 继承类型 [`PickerBaseProps`](#/zh-CN/components/popup)，并新增了如下属性。

| 参数         | 说明           | 类型                                                      | 默认值 | 版本 |
| ------------ | -------------- | --------------------------------------------------------- | ------ | ---- |
| defaultValue | 初始化日期     | `Date` \| `number` \| `string`                            | -      |      |
| minHour      | 可选的最小小时 | `number`                                                  | `0`    |      |
| maxHour      | 可选的最大小时 | `number`                                                  | `23`   |      |
| minMinute    | 可选的最小分钟 | `number`                                                  | `0`    |      |
| maxMinute    | 可选的最大分钟 | `number`                                                  | `59`   |      |
| filter       | 选项过滤器函数 | `(type: 'hour' \| 'minute', value: number[]) => number[]` | -      |
| formatter    | 选项格式化函数 | `(type: 'hour' \| 'minute', value: string) => string`     | -      |

## TimePicker 事件

| 事件名    | 说明                     | 类型                      | 版本 |
| --------- | ------------------------ | ------------------------- | ---- |
| onChange  | 当值变化时触发的事件     | `(value: string) => void` |      |
| onConfirm | 点击完成按钮时触发的事件 | `(value: string) => void` |      |
| onCancel  | 点击取消按钮时触发的事件 | `() => void`              |      |

### TimePicker 实例方法

| 名称     | 描述           | 类型           | 版本 |
| -------- | -------------- | -------------- | ---- |
| getValue | 获取当前选项值 | `() => string` |      |
