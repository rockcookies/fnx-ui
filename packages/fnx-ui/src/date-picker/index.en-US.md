# DatePicker

Time selector, support date, month, time division, etc., usually used in conjunction with the pop-up assembly.

## Choose Date

`Datepicker` Attribute to define the time type that needs to be selected, `columnsLayout` is the day and month of the day, the `color, month, day`. The optional time range can be determined by `maxdate` and `minDate` properties.

```tsx
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

## Choose Year-Month

Set the `columnslayout` set to `Year, Month` to choose the year and month. By incurring the `formatter` function, you can format the option text.

```tsx
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

## Choose Hour-Minute

Set the `columnslayout` Set to` Hour, Minute` to select time (hours and minutes).

```tsx
import { DatePicker } from 'fnx-ui';

ReactDOM.render(
  <>
    <DatePicker title="Select Time" columnsLayout="hour,minute" />
  </>,
  mountNode,
);
```

## Choose Time

Set the `columnslayout` , `Year, Month, Day, Hour, Minute` to choose the full time, including year, month, day and hours, minutes.

```tsx
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

## Filter

By incurring the `Filter` function, you can filter the option array and achieve custom interval.

```tsx
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

## Custom Sort

```tsx
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

| Parameter           | Description                                | Type                       | Default value      |
| ------------------- | ------------------------------------------ | -------------------------- | ------------------ |
| defaultValue        | Initialization time                        | `string \| number \| Date` | -                  |
| maxDate             | Optional maximum time, accurate to minutes | `Date \| number \| string` | `Ten years later`  |
| minDate             | Optional minimum time, accurate to minute  | `Date \| number \| string` | `Ten years ago`    |
| columnsLayout       | Customize time type                        | `string`                   | `'year,month,day'` |
| title               | Top column title                           | `ReactNode`                | -                  |
| loading             | Whether to display the loading status      | `boolean`                  | `false`            |
| toolbar             | Custom toolbar                             | `ReactNode`                | -                  |
| toolbarPosition     | Custom toolbar position                    | `top bottom`               | `top`              |
| optionHeight        | Option height, unit default `px`           | `number \| string`         | `44`               |
| visibleOptionsCount | Visible options                            | `number`                   | -                  |
| transitionDuration  | Switching options animation time           | `number`                   | `0`                |
| confirmButton       | Confirm button                             | `ReactNode`                | `COnfirm`          |
| cancelButton        | Cancel button                              | `ReactNode`                | `Cancel`           |
| dataNames           | 自定义 `data` 结构中的字段                 | `PickerDataNames`          | -                  |

## TimePicker API

| Parameter           | Description                           | Type                      | Default value |
| ------------------- | ------------------------------------- | ------------------------- | ------------- |
| maxHour             | Optional maximum hour                 | `number`                  | `23`          |
| minHour             | Optional minimum hour                 | `number`                  | `0`           |
| minMinute           | Optional minimum minute               | `number`                  | `0`           |
| maxMinute           | Optional maximum minute               | `number`                  | `59`          |
| title               | Top column title                      | `ReactNode`               | -             |
| loading             | Whether to display the loading status | `boolean`                 | `false`       |
| toolbar             | Custom toolbar                        | `ReactNode`               | -             |
| toolbarPosition     | Custom toolbar position               | `top bottom`              | `top`         |
| optionHeight        | Option height, default` PX`           | `number`                  | `44`          |
| visibleOptionsCount | Visible options                       | `number`                  | -             |
| transitionDuration  | Switching options animation time      | `number`                  | `0`           |
| confirmButton       | Confirm button                        | `ReactNode`               | -             |
| cancelButton        | Cancel button                         | `ReactNode`               | -             |
| defaultValue        | Initialization time                   | `string \|number \| Date` | -             |

## DatePicker Events

Type` DatePickerfield` You can be `'Year' | 'MONTH' | 'Day' | 'Hour' | 'Minute'`;

| Event Name | Description                                                 | Callback Arguments                         |
| ---------- | ----------------------------------------------------------- | ------------------------------------------ |
| filter     | Option Filter Function                                      | `(type: DatePickerField, value: number[])` |
| formatter  | Option format function                                      | `(type: DatePickerField, value: string)`   |
| onChange   | Events triggered when the value change                      | Panel current `Date`                       |
| onConfirm  | Click the event that triggered when the button is completed | Panel current `Date`                       |
| onCancel   | Click the event that triggers when the button is canceled   | -                                          |

## TimePicker Events

| Event Name | Description                                                 | Callback Arguments                                     |
| ---------- | ----------------------------------------------------------- | ------------------------------------------------------ |
| filter     | Option Filter Function                                      | `(type: DatePickerField, value: number[]) => number[]` |
| formatter  | Option format function                                      | `(type: DatePickerField, value: string) => string;`    |
| onChange   | Events triggered when the value change                      | Panel current `Date`                                   |
| onConfirm  | Click the event that triggered when the button is completed | Panel current `Date`                                   |
| onCancel   | Click the event that triggers when the button is canceled   | -                                                      |

### DatePickerRef Instance Method

| Name       | Description                         | Arguments |
| ---------- | ----------------------------------- | --------- |
| getValue() | Get the value of the current option | -         |
