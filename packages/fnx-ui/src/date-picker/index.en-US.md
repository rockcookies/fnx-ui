# DatePicker

Used to select time, support date and time dimensions, usually used with the [Popup](#/en-US/components/popup) component.

## Choose Date

Use `columnsLayout` prop to set select-type, Set `columnsLayout` to `year,month,day` to select date.

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

## Choose Year-Month

Set `columnsLayout` prop to `year,month` to select Year-Month. Use `formatter` prop to format options.

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

## Choose Time

Use TimePicker to select time.

```tsx
import { DatePicker } from 'fnx-ui';

ReactDOM.render(
  <>
    <DatePicker.TimePicker title="Select Time" />
  </>,
  mountNode,
);
```

## Choose DateTime

Set `columnsLayout` to `year,month,day,hour,minute` to choose DateTime.

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

## Option Filter

Use `filter` prop to filter options.

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

## Custom columns layout

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

DatePicker extends [`PickerBaseProps`](#/en-US/components/popup), and add the following props:

| Name          | Description           | Type                                                   | Default                        | Version |
| ------------- | --------------------- | ------------------------------------------------------ | ------------------------------ | ------- |
| columnsLayout | Columns layout        | `string`                                               | `'year,month,day'`             |         |
| defaultValue  | Default value         | `Date` \| `number` \| `string`                         | -                              |         |
| minDate       | Min date              | `Date` \| `number` \| `string`                         | Ten years ago on January 1     |         |
| maxDate       | Max date              | `Date` \| `number` \| `string`                         | Ten years later on December 31 |         |
| filter        | Option filter         | `(type: DatePickerField, value: number[]) => number[]` | -                              |
| formatter     | Option text formatter | `(type: DatePickerField, value: string) => string`     | -                              |

## DatePicker Events

| Event name | Description                                | Type                    | Version |
| ---------- | ------------------------------------------ | ----------------------- | ------- |
| onChange   | Emitted when value changed                 | `(value: Date) => void` |         |
| onConfirm  | Emitted when the confirm button is clicked | `(value: Date) => void` |         |
| onCancel   | Emitted when the cancel button is clicked  | `() => void`            |         |

### DatePicker Instance

| Name     | Description       | Type         | Version |
| -------- | ----------------- | ------------ | ------- |
| getValue | Get current value | `() => Date` |         |

## TimePicker Props

TimePicker extends [`PickerBaseProps`](#/en-US/components/popup), and add the following props:

| Name         | Description           | Type                                                      | Default | Version |
| ------------ | --------------------- | --------------------------------------------------------- | ------- | ------- |
| defaultValue | Default value         | `Date` \| `number` \| `string`                            | -       |         |
| minHour      | Min hour              | `number`                                                  | `0`     |         |
| maxHour      | Max hour              | `number`                                                  | `23`    |         |
| minMinute    | Min minute            | `number`                                                  | `0`     |         |
| maxMinute    | Max minute            | `number`                                                  | `59`    |         |
| filter       | Option filter         | `(type: 'hour' \| 'minute', value: number[]) => number[]` | -       |
| formatter    | Option text formatter | `(type: 'hour' \| 'minute', value: string) => string`     | -       |

## TimePicker Events

| Event name | Description                                | Type                      | Version |
| ---------- | ------------------------------------------ | ------------------------- | ------- |
| onChange   | Emitted when value changed                 | `(value: string) => void` |         |
| onConfirm  | Emitted when the confirm button is clicked | `(value: string) => void` |         |
| onCancel   | Emitted when the cancel button is clicked  | `() => void`              |         |

### TimePicker Instance

| Name     | Description       | Type           | Version |
| -------- | ----------------- | -------------- | ------- |
| getValue | Get current value | `() => string` |         |
