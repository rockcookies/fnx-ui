# Calendar

Calendar component for selecting dates or date ranges.

## Select Single Date

Calendar can be used with Cell and Popup.

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

## Select Multiple Date

Use Calendar.Multi to select multiple dates, now the `value` prop is an array, the array contain selected dates.

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

## Select Date Range

Use Calendar.Range to select range dates, now the `value` prop is an array, the first element in the array is the start time and the second element is the end time.

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

## Custom theme color

Use `color` prop to set calendar theme color.

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

## Custom confirm text

Use `confirmText` and `confirmDisabledText` to set confirm text.

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

## Custom Date Range

Use `minDate` and `maxDate` to set select range.

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

## Custom elements

Use `slots` prop to set custom elements.

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

## Max Range

When using Calendar.Range or Calendar.Multi, you can use the `maxSize` prop to specify the maximum number of selectable days.

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

There are three kinds of calendar:

- Calendar
- Calendar.Multi
- Calendar.Range

### Common Props

| Name                | Description                                   | Type                           | Default                | Version |
| ------------------- | --------------------------------------------- | ------------------------------ | ---------------------- | ------- |
| title               | Title of calendar                             | `ReactNode`                    | `'Calendar'`           |         |
| color               | Color for the bottom button and selected date | `string`                       | -                      |         |
| minDate             | Min date                                      | `Date` \| `string` \| `number` | Today                  |         |
| maxDate             | Max date                                      | `Date` \| `string` \| `number` | Six months after today |         |
| dayHeight           | Day height                                    | `number` \| `string`           | `64`                   |         |
| readonly            | Whether to be readonly                        | `boolean`                      | `false`                |         |
| closeIcon           | Custom Close Icon                             | `ReactNode`                    | -                      |         |
| firstDayOfWeek      | Set the start day of week                     | `0-6`                          | `0`                    |         |
| slots               | Slots                                         | `CalendarSlots`                | -                      |         |
| confirmText         | Confirm button text                           | `ReactNode`                    | `'Confirm'`            |         |
| confirmDisabledText | Confirm button text when disabled             | `ReactNode`                    | `'Confirm'`            |         |

### CalendarSlots

| Name       | Description            | Type                                            | Default | Version |
| ---------- | ---------------------- | ----------------------------------------------- | ------- | ------- |
| day        | Custom day             | `(day: CalendarDayComponentProps) => ReactNode` | -       |         |
| subTitle   | Custom subTitle        | ` boolean` \| `((date: Date) => ReactNode)`     | -       |         |
| monthMark  | Custom month watermark | `boolean` \| `((date: Date) => ReactNode)`      | -       |         |
| monthTitle | Custom month title     | `boolean` \| `((date: Date) => ReactNode)`      | -       |         |
| footer     | Custom Calendar footer | `ReactNode`                                     | -       |         |

## Calendar Props

| Name         | Description                                                            | Type                           | Default | Version |
| ------------ | ---------------------------------------------------------------------- | ------------------------------ | ------- | ------- |
| defaultValue | Default value                                                          | `Date` \| `string` \| `number` | -       |         |
| allowSameDay | Whether the start and end time of the range is allowed on the same day | `boolean`                      | `false` |         |

## Calendar Events

| Event Name | Description                              | Type                    | Version |
| ---------- | ---------------------------------------- | ----------------------- | ------- |
| onConfirm  | Triggered when confirm button is clicked | `(value: Date) => void` |         |
| onCancel   | Triggered when the close icon is clicked | `() => void`            |         |
| onChange   | Triggered when the active option changes | `(value: Date) => void` |         |

## Calendar.Multi Props

| Name         | Description               | Type                              | Default | Version |
| ------------ | ------------------------- | --------------------------------- | ------- | ------- |
| defaultValue | Default value             | `Array<Date \| string \| number>` | -       |         |
| maxSize      | Number of selectable days | `number`                          | -       |         |

## Calendar.Multi Events

| Event Name | Description                              | Type                      | Version |
| ---------- | ---------------------------------------- | ------------------------- | ------- |
| onConfirm  | Triggered when confirm button is clicked | `(value: Date[]) => void` |         |
| onCancel   | Triggered when the close icon is clicked | `() => void`              |         |
| onChange   | Triggered when the active option changes | `(value: Date[]) => void` |         |
| onMaxSize  | Emitted when exceeded max size           | `() => void`              |         |

## Calendar.Range Props

| Name         | Description                  | Type                              | Default | Version |
| ------------ | ---------------------------- | --------------------------------- | ------- | ------- |
| defaultValue | Default value                | `Array<Date \| string \| number>` | -       |         |
| maxSize      | Max count of selectable days | `number`                          | -       |         |

## Calendar.Range Events

| Event Name | Description                              | Type                      | Version |
| ---------- | ---------------------------------------- | ------------------------- | ------- |
| onConfirm  | Triggered when confirm button is clicked | `(value: Date[]) => void` |         |
| onCancel   | Triggered when the close icon is clicked | `() => void`              |         |
| onChange   | Triggered when the active option changes | `(value: Date[]) => void` |         |
| onMaxSize  | Emitted when exceeded max size           | `() => void`              |         |

## Calendar Instance

| Name  | Description    | Type         | Version |
| ----- | -------------- | ------------ | ------- |
| reset | Reset Calendar | `() => void` |         |
