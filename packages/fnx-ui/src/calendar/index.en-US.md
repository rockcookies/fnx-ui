# Calendar

The calendar component is used to select a date or date interval.

## Basic Usage

```tsx
import { Calendar } from 'fnx-ui';

ReactDOM.render(
  <>
    <Calendar />
  </>,
  mountNode,
);
```

## Single Date

The following demonstrates the use of the pop-up layer to use the calendar component, the Date selection is complete, and the `onConfirm` event will be triggered.

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

## Select Multiple

`<Calendar.multi />` You can choose multiple dates, at this time the `Date` is the array structure, the array contains several selected dates.

```tsx
import { Popup,Calendar } from 'fnx-ui';

const  confirmHandle=(v)=>{console.log(v)}

ReactDOM.render(
  <>
  <Popup.Select  select={<Calendar.Multi  onConfirm={confirmHandle} />}>
  </>,
  mountNode,
);
```

## Select Range

`<Calendar.Range />` You can select the date interval. At this time, the `Date` is the` Date` is an array structure, the array first item is the start time, the second item is the end time.

```tsx
import { Popup,Calendar } from 'fnx-ui';

const  confirmHandle=(V)=>{console.log(v)}

ReactDOM.render(
  <>
  <Popup.Select  select={<Calendar.Range  onConfirm={confirmHandle} />}>
  </>,
  mountNode,
);
```

## MinDate and maxDate

By `minDate` and` maxdate` define the scope of the calendar.

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

## Custom Color

The color of the calendar can be customized through the `color` property, the selection date and the bottom button take effect.

```tsx
import { Popup, Calendar } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup.Select select={<Calendar color="#33ab84" />}></Popup.Select>
  </>,
  mountNode,
);
```

## Custom content via `Slots`

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

| Parameter           | Description                            | Type                       | Default value |
| ------------------- | -------------------------------------- | -------------------------- | ------------- |
| defaultValue        | Default selection date                 | `Date \| string \| number` | -             |
| title               | Calendar title                         | `ReactNode`                | `Calendar`    |
| color               | Calendar color                         | `string`                   | `#378ef0`     |
| minDate             | Minimum date of optional range         | `Date \| string \| number` | -             |
| maxDate             | Maximum date of the optional range     | `Date \| string \| number` | -             |
| dayHeight           | High date                              | `number \| string`         | -             |
| readonly            | Whether you read                       | `boolean`                  | `false`       |
| closeIcon           | Custom shutdown icon                   | `ReactNode`                | -             |
| firstDayOfWeek      | Set the weekday                        | `number`                   | -             |
| slots               | Custom rendering content               | `CalendarSlots`            | -             |
| confirmText         | Confirm button text                    | `ReactNode`                | `Confirm`     |
| confirmDisabledText | Confirm button text when it is invalid | `ReactNode`                | `Confirm`     |

## CalendarRange API

| Parameter           | Description                                     | Type                       | Default value |
| ------------------- | ----------------------------------------------- | -------------------------- | ------------- |
| defaultValue        | Default selection date                          | `Date \| string \| number` | -             |
| allowSameDay        | Is it possible to select the beginning and end? | `boolean`                  | `false`       |
| maxSize             | The maximum number of days selected             | `number`                   | -             |
| title               | Calendar title                                  | `ReactNode`                | `Calendar`    |
| color               | Calendar color                                  | `string`                   | `#378ef0`     |
| minDate             | Minimum date of optional range                  | `Date \| string \| number` | -             |
| maxDate             | Maximum date of the optional range              | `Date \| string \| number` | -             |
| dayHeight           | High date                                       | `number \| string`         | -             |
| readonly            | Whether you read                                | `boolean`                  | `false`       |
| closeIcon           | Custom shutdown icon                            | `ReactNode`                | -             |
| firstDayOfWeek      | Set the weekday                                 | `number`                   | -             |
| slots               | Custom rendering                                | `CalendarSlots`            | -             |
| confirmText         | Confirm button text                             | `ReactNode`                | `Confirm`     |
| confirmDisabledText | Confirm button text when it is invalid          | `ReactNode`                | `Confirm`     |

## CalendarMulti API

| Parameter           | Description                            | Type                       | Default value |
| ------------------- | -------------------------------------- | -------------------------- | ------------- |
| defaultValue        | Default selection date                 | `Date \| string \| number` | -             |
| maxSize             | The maximum number of days selected    | `number`                   | -             |
| title               | Calendar title                         | `ReactNode`                | `Calendar`    |
| color               | Calendar color                         | `string`                   | `#378ef0`     |
| minDate             | Minimum date of optional range         | `Date \| string \| number` | -             |
| maxDate             | Maximum date of the optional range     | `Date \| string \| number` | -             |
| dayHeight           | High date                              | `number \| string`         |               |
| readonly            | Whether you read                       | `boolean`                  | `false`       |
| closeIcon           | Custom shutdown icon                   | `ReactNode`                | -             |
| firstDayOfWeek      | Set the weekday                        | `number`                   | -             |
| slots               | Custom rendering                       | `CalendarSlots`            | -             |
| confirmText         | Confirm button text                    | `ReactNode`                | `Confirm`     |
| confirmDisabledText | Confirm button text when it is invalid | `ReactNode`                | `Confirm`     |

## Events

| Event Name | Description                         | Callback Arguments |
| ---------- | ----------------------------------- | ------------------ |
| onConfirm  | Click the confirm button to trigger | `value: Date`      |
| onCancel   | Trigger when you click close icon   | -                  |
| onChange   | Trigger when selecting item changes | `value: Date`      |

## CalendarRange Events

| Event Name | Description                                              | Callback Arguments |
| ---------- | -------------------------------------------------------- | ------------------ |
| onConfirm  | Click the confirm button to trigger                      | `value: Date[]`    |
| onCancel   | Trigger when you click close icon                        | -                  |
| onChange   | Triggered when selecting the end date                    | `value: Date[]`    |
| onMaxSize  | Trigger when you exceed the maximum date of the selected | -                  |

## CalendarMulti Events

| Event Name | Description                                              | Callback Arguments |
| ---------- | -------------------------------------------------------- | ------------------ |
| onConfirm  | Click the confirm button to trigger                      | `value: Date[]`    |
| onCancel   | Trigger when you click close icon                        | -                  |
| onChange   | Trigger when selecting item changes                      | `value: Date[]`    |
| onMaxSize  | Trigger when you exceed the maximum date of the selected | -                  |

### Slots Data Structure

| Parameter  | Description                                               | Type                                            | Default value |
| ---------- | --------------------------------------------------------- | ----------------------------------------------- | ------------- |
| day        | Single date setting                                       | `(day: CalendarDayComponentProps) => ReactNode` | -             |
| subTitle   | Custom head date area content                             | ` boolean \| ((date: Date) => ReactNode)`       | -             |
| monthMark  | Whether it is displayed on the month background watermark | `boolean \| ((date: Date) => ReactNode)`        | -             |
| monthTitle | Month title                                               | `boolean \| ((date: Date) => ReactNode)`        | -             |
| footer     | Customize the bottom area                                 | `ReactNode`                                     | -             |

### Data structure of day in slots

| Parameter  | Description                      | Type                                                                                                                              | Default value |
| ---------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| color      | Single dates set color           | `string`                                                                                                                          | -             |
| dayHeight  | This date corresponds to the row | `string`                                                                                                                          | -             |
| date       | Correspondence                   | `Date`                                                                                                                            | -             |
| content    | content                          | `ReactNode`                                                                                                                       | -             |
| type       | type                             | `'normal' \| 'start' \| 'start-end' \| 'middle' \| 'end' \| 'selected' \| 'multiple-middle' \| 'multiple-selected' \| 'disabled'` | `'normal' `   |
| topInfo    | Head prompt                      | `ReactNode`                                                                                                                       | -             |
| bottomInfo | Bottom prompt                    | `ReactNode`                                                                                                                       | -             |
