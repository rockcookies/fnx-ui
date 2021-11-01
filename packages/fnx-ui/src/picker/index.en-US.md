# Picker

Create a mask layer to emphasize a specific page element and prevent the user from making other operations.

### Option Configuration

`Picker` component via` Data` property configuration option data, `data` is an object array or a character array.

### Top Column

Set the `toolbar` property, will display the top operation bar, confirm the button, and the cancel button, click the confirm button to trigger the `onConfirm` Event, click the Cancel button to trigger the `onCancel` event.

## Basic Usage

```tsx
import { Picker } from 'fnx-ui';

const pickerData = [
  'China',
  'United States',
  'United Kingdom',
  'Germany',
  'France',
  'Italy',
  'Japan',
  'Spain',
];

ReactDOM.render(
  <>
    <Picker toolbar data={pickerData} />
  </>,
  mountNode,
);
```

## DefaultValue

Single column selection，You can set the index of the initial selection from the `defaultvalue` property setting。

```tsx
import { Picker } from 'fnx-ui';

const data = [
  'China',
  'United States',
  'United Kingdom',
  'Germany',
  'France',
  'Italy',
  'Japan',
  'Spain',
];

ReactDOM.render(
  <>
    <Picker data defaultValue={data[2]} />
  </>,
  mountNode,
);
```

## Multi

`Picker.multi` You can configure multiple columns,

```tsx
import { Picker } from 'fnx-ui';

const data = [
  [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  ['Morning', 'Afternoon', 'Evening'],
];

ReactDOM.render(
  <>
    <Picker.Multi data defaultValue={[data[0][2], data[1][1]]} title="Multi" />
  </>,
  mountNode,
);
```

## Cascade Selection

`Picker.Multi` You can configure multiple columns options，

```tsx
import { Picker } from 'fnx-ui';

const data = [
  {
    label: 'China',
    children: [
      {
        label: 'Beijing',
        children: [{ label: 'Haidian' }, { label: 'Chaoyang' }],
      },
      {
        label: 'Shanghai',
        children: [{ label: 'Zhabei' }, { label: 'Jingan' }],
      },
    ],
  },
  {
    label: 'United State',
    children: [
      {
        label: 'New York',
        children: [{ label: 'Manhattan' }, { label: 'Brooklyn' }],
      },
      {
        label: 'California',
        children: [{ label: 'Los Angeles' }, { label: 'San Francisco' }],
      },
    ],
  },
];

ReactDOM.render(
  <>
    <Picker.Cascade
      data
      title="Cascade"
      dataNames={{ value: 'label', children: 'child' }}
    />
  </>,
  mountNode,
);
```

## Disabled

The option can be an object structure and disable this option by setting the `disabled`

```tsx
import { Picker } from 'fnx-ui';

const data = [
  [
    'Monday',
    'Tuesday',
    { disabled: true, label: 'Wednesday', value: 'Wednesday' },
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  ['Morning', 'Afternoon', 'Evening'],
];

ReactDOM.render(
  <>
    <Picker.Multi data defaultValue={[data[0][2], data[1][1]]} title="Multi" />
  </>,

  mountNode,
);
```

## Custom data Strucsture

The option can be an object structure and disable this option by setting the `disabled`

```tsx
import { Picker } from 'fnx-ui';

const data = [
  {
    label: 'China',
    child: [
      {
        label: 'Beijing',
        child: [{ label: 'Haidian' }, { label: 'Chaoyang' }],
      },
      {
        label: 'Shanghai',
        child: [{ label: 'Zhabei' }, { label: 'Jingan' }],
      },
    ],
  },
  {
    label: 'United State',
    child: [
      {
        label: 'New York',
        child: [{ label: 'Manhattan' }, { label: 'Brooklyn' }],
      },
      {
        label: 'California',
        child: [{ label: 'Los Angeles' }, { label: 'San Francisco' }],
      },
    ],
  },
];

ReactDOM.render(
  <>
    <Picker.Cascade
      data
      cascadeSize={4}
      title="Custom Structure"
      dataNames={{
        label: 'label',
        value: 'label',
        children: 'child',
      }}
    />
  </>,
  mountNode,
);
```

## Loading

If the selector data is available asynchronously, the load prompt can be displayed via the `loading` property.

```tsx
import { Picker } from 'fnx-ui';

const pickerData = [
  [
    'Monday',
    'Tuesday',
    { disabled: true, label: 'Wednesday', value: 'Wednesday' },
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  ['Morning', 'Afternoon', 'Evening'],
];

ReactDOM.render(
  <>
    <Picker.Multi
      data={pickerData}
      loading
      defaultValue={[pickerData[0][2], pickerData[1][1]]}
      title="Multi"
    />
  </>,
  mountNode,
);
```

## Popup and Picker

In actual scenes, `picker` usually acts as an auxiliary form, you can match the `popup` and `field` to achieve this effect.

```tsx
import { Picker, Popup, Field } from 'fnx-ui';

const pickerData = [
  [
    'Monday',
    'Tuesday',
    { disabled: true, label: 'Wednesday', value: 'Wednesday' },
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  ['Morning', 'Afternoon', 'Evening'],
];

ReactDOM.render(
  <>
    <Popup.Select select={<Picker data={pickerData} title="Title" />}>
      {(value) => (
        <Field clickable label="Label">
          <Field.Input readOnly value={value || 'Please Select !'} />
        </Field>
      )}
    </Popup.Select>
  </>,
  mountNode,
);
```

## PickerProps API

Type`PickerProps` Inherited Types `PickerBaseProps`,`PickerBaseProps` is the type of component base.

| Parameter    | Description            | Type                                | Default value |
| ------------ | ---------------------- | ----------------------------------- | ------------- |
| defaultValue | Default selection item | `string \| number`                  | -             |
| data         | All data               | `PickerOption[] \| string \| numbe` | -             |

## Events

| Event Name | Description                               | Callback Arguments      |
| ---------- | ----------------------------------------- | ----------------------- |
| onConfirm  | All options are selected after completion | `value: T \| undefined` |
| onCancel   | Trigger when you click close icon         | -                       |
| onChange   | Trigger when selecting item changes       | `value: T \| undefined` |

### PickerCascade API

Type`Pickercascade` Inherited Type `PickerBaseProps`.

| Parameter    | Description            | Type                                   | Default value |
| ------------ | ---------------------- | -------------------------------------- | ------------- |
| defaultValue | Default selection item | `Array<string \| number \| undefined>` | -             |
| data         | All data               | `PickerOption[]`                       | -             |

### PickerMulti API

Type`Pickermulti` Inherited Type`PickerBaseProps`.

| Parameter    | Description            | Type                                           | Default value |
| ------------ | ---------------------- | ---------------------------------------------- | ------------- |
| defaultValue | Default selection item | `string[] \| number[]`                         | -             |
| data         | All data               | `Array<PickerOption[] \| string[] \| number[]` | -             |

### PickerBaseProps API

| Parameter           | Description                              | Type                | Default value |
| ------------------- | ---------------------------------------- | ------------------- | ------------- |
| title               | Custom top bar title                     | `ReactNode`         | -             |
| optionHeight        | Option height, default `px`              | `number`            | `44`          |
| visibleOptionsCount | Visible options                          | `number`            | -             |
| transitionDuration  | Animation time, unit `ms`                | `number`            | `0`           |
| toolbar             | Custom top column                        | `ReactNode`         | -             |
| toolbarPosition     | Custom top bar location                  | `'top' \| 'bottom'` | `true`        |
| confirmButton       | Confirm button                           | `ReactNode`         | `Confirm`     |
| cancelButton        | Cancel button                            | `ReactNode`         | `Cancel`      |
| loading             | Whether it is displayed as a load status | `boolean`           | `false`       |
| dataNames           | Customized `dsata`                       | `PickerDataNames`   | -             |

### Data Data Structure

| Parameter | Description      | Type               | Default value |
| --------- | ---------------- | ------------------ | ------------- |
| label     | Option text      | `ReactNode`        | -             |
| value     | Option selection | `string \| number` | -             |
| disabled  | Option disable   | `string`           | -             |
| children  | Option children  | `PickerOption[]`   | -             |

### DataNames Sata Structure

| Parameter | Description         | Type                  | Default value |
| --------- | ------------------- | --------------------- | ------------- |
| label     | Option text         | `string \| string[] ` | `'label'`     |
| value     | Option selection    | `string \| string[]`  | `'value'`     |
| children  | Option sub-elements | `string \| string[]`  | `'children'`  |
| disabled  | Option disable      | `string \| string[]`  | `'disabled'`  |

### PickerMultiRef and PickerCascadeRef Instance Method

| Method Name  | Description                                       | Parameter | Return Value            |
| ------------ | ------------------------------------------------- | --------- | ----------------------- |
| getValue()   | Get the currently selected value in the component | -         | `PickerValue[]`         |
| getOptions() | Get the currently selected value in the component | -         | `PickerOptionOrValue[]` |
