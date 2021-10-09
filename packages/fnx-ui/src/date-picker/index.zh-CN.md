# DatePicker 时间选择器

时间选择器，支持日期、年月、时分等维度，通常与弹出层组件配合使用。

## 选择年月日

`DatePicker` 通过 `columnsLayout` 属性来定义需要选择的时间类型， `columnsLayout` 为 `year,month,day` 表示选择年月日。通过 `maxDate` 和 `minDate` 属性可以确定可选的时间范围。

```tsx | pure
import { DatePicker } from 'fnx-ui';

ReactDOM.render(
  <>
    <DatePicker
      title="Select Time"
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

```tsx | pure
import { DatePicker } from 'fnx-ui';

const formatter = (type, value) => {
  if (type === 'year') {
    return value + 'year';
  }
  if (type === 'month') {
    return value + 'month';
  }
  if (type === 'day') {
    return value + 'day';
  }
  if (type === 'hour') {
    return value + 'hour';
  }
  return value;
};

ReactDOM.render(
  <>
    <DatePicker
      title="Select Time"
      columnsLayout="year,month"
      formatter={formatter}
    />
  </>,
  mountNode,
);
```

## 选择时间

将 `columnsLayout` 设置为 `hour,minute` 即可选择时间（小时和分钟）。

```tsx | pure
import { DatePicker } from 'fnx-ui';

ReactDOM.render(
  <>
    <DatePicker title="Select Time" columnsLayout="hour,minute" />
  </>,
  mountNode,
);
```

## 选择完整时间

将 `columnsLayout` 设置为 `year,month,day,hour,minute` 即可选择完整时间，包括年、月、日和小时、分钟。

```tsx | pure
import { DatePicker } from 'fnx-ui';

ReactDOM.render(
  <>
    <DatePicker
      title="Select Time"
      columnsLayout="year,month,day,hour,minute"
    />
  </>,

  mountNode,
);
```

## 选项过滤器

通过传入 `filter` 函数，可以对选项数组进行过滤，实现自定义时间间隔。

```tsx | pure
import { DatePicker } from 'fnx-ui';

const filter = (type, values) => {
  if (type === 'minute') {
    return values.filter((value) => Number(value) % 5 === 0);
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

```tsx | pure
import { DatePicker } from 'fnx-ui';

const formatter = (type, value) => {
    if (type === 'year') {
        return value + 'year';
    }
    if (type === 'month') {
        return value + 'month';
    }
    if (type === 'day') {
        return value + 'day';
    }
    if (type === 'hour') {
        return value + 'hour';
    }
    return value;
};

ReactDOM.render(
   <>
    <DatePicker.TimePicker
        title="Select Time"
        columnsLayout="minute,hour,day,month,year"
        formatter={formatter}
    />
   </>
  mountNode,
);
```

## API

| 参数                | 说明                       | 类型                       | 默认值             |
| ------------------- | -------------------------- | -------------------------- | ------------------ |
| defaultValue        | 初始化的时间               | `string \| number \| Date` | -                  |
| maxDate             | 可选的最大时间，精确到分钟 | `Date \| number \| string` | `十年后`           |
| minDate             | 可选的最小时间，精确到分钟 | `Date \| number \| string` | `十年前`           |
| columnsLayout       | 自定义时间类型             | `string`                   | `'year,month,day'` |
| title               | 顶部栏标题                 | `ReactNode`                | -                  |
| loading             | 是否显示加载状态           | `boolean`                  | `false`            |
| toolbar             | 自定义工具栏               | `ReactNode`                | -                  |
| toolbarPosition     | 自定义工具栏位置           | `top bottom`               | `top`              |
| optionHeight        | 选项高度,单位默认 `px`     | `number \| string`         | `44`               |
| visibleOptionsCount | 可见的选项个数             | `number`                   | -                  |
| transitionDuration  | 切换选项动画时间           | `number`                   | `0`                |
| confirmButton       | 确认按钮                   | `ReactNode`                | `确认`             |
| cancelButton        | 取消按钮                   | `ReactNode`                | `取消`             |

## TimePicker API

| 参数                | 说明             | 类型                      | 默认值  |
| ------------------- | ---------------- | ------------------------- | ------- |
| maxHour             | 可选的最大小时   | `number`                  | `23`    |
| minHour             | 可选的最小小时   | `number`                  | `0`     |
| minMinute           | 可选的最小分钟   | `number`                  | `0`     |
| maxMinute           | 可选的最大分钟   | `number`                  | `59`    |
| title               | 顶部栏标题       | `ReactNode`               | -       |
| loading             | 是否显示加载状态 | `boolean`                 | `false` |
| toolbar             | 自定义工具栏     | `ReactNode`               | -       |
| toolbarPosition     | 自定义工具栏位置 | `top bottom`              | `top`   |
| optionHeight        | 选项高度,默认 px | `number`                  | `44`    |
| visibleOptionsCount | 可见的选项个数   | `number`                  | -       |
| transitionDuration  | 切换选项动画时间 | `number`                  | `0`     |
| confirmButton       | 确认按钮         | `ReactNode`               | -       |
| cancelButton        | 取消按钮         | `ReactNode`               | -       |
| defaultValue        | 初始化的时间     | `string \|number \| Date` | -       |

## DatePicker 事件

类型 `DatePickerField` 的值可以是 `'year' | 'month' | 'day' | 'hour' | 'minute'`;

| 事件名    | 说明                     | 回调参数                                   |
| --------- | ------------------------ | ------------------------------------------ |
| filter    | 选项过滤器函数           | `(type: DatePickerField, value: number[])` |
| formatter | 选项格式化函数           | `(type: DatePickerField, value: string)`   |
| onChange  | 当值变化时触发的事件     | 面板当前的 Date                            |
| onConfirm | 点击完成按钮时触发的事件 | 面板当前的 Date                            |
| onCancel  | 点击取消按钮时触发的事件 | -                                          |

## TimePicker 事件

| 事件名    | 说明                     | 回调参数                                               |
| --------- | ------------------------ | ------------------------------------------------------ |
| filter    | 选项过滤器函数           | `(type: DatePickerField, value: number[]) => number[]` |
| formatter | 选项格式化函数           | `(type: DatePickerField, value: string) => string;`    |
| onChange  | 当值变化时触发的事件     | 面板当前的 Date                                        |
| onConfirm | 点击完成按钮时触发的事件 | 面板当前的 Date                                        |
| onCancel  | 点击取消按钮时触发的事件 | -                                                      |

### DatePickerRef 实例方法

| 名称       | 描述             | 参数 |
| ---------- | ---------------- | ---- |
| getValue() | 获取当前选项的值 | -    |
