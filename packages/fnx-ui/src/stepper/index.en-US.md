# Stepper

The stepper consists of an increase button, reducing buttons, and input boxes for inputting, adjusting numbers within a certain range.

## Basic Usage

```tsx
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper defaultValue={3}></Stepper>
  </>,
  mountNode,
);
```

## Listen Events

You can listen to changes in the input value via the `onchange` event.

```tsx
import { Stepper } from 'fnx-ui';

const [value, setValue] = useState(5);
const onChange = (v) => {
  setValue(v);
};

ReactDOM.render(
  <>
    <Stepper value={value} onChange={onChange}></Stepper>
  </>,
  mountNode,
);
```

## Step

The value of the changed or reduced button through the `Step` property setting, the default is` 1`

```tsx
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper step={2}></Stepper>
  </>,
  mountNode,
);
```

## Limit Input Range

Through `min` and` max` attribute limit the range of input values.

```tsx
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper min={3} max={100}></Stepper>
  </>,
  mountNode,
);
```

## Integers

After setting the `integer` property, the input box will limit only an integer.

```tsx
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper integer></Stepper>
  </>,
  mountNode,
);
```

## Disabled

By setting the `disabled` property to disable the stepper, you cannot click the button or modify the input box if you disable state.

```tsx
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper disabled></Stepper>
  </>,
  mountNode,
);
```

## Disableinput

By setting the `disableinput` property to disable the input box, the button can still click.

```tsx
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper disableInput></Stepper>
  </>,
  mountNode,
);
```

## Precision

The fixed number of decimal numbers can be retained by setting the `precision` attribute.

```tsx
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper precision={2}></Stepper>
  </>,
  mountNode,
);
```

## Customize

Set the input box width through `InputWidth` property, set the button size and the input box height via` Buttonsize` property.

```tsx
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper inputWidth="80" buttonSize="40"></Stepper>
  </>,
  mountNode,
);
```

## Round-hearted styled

Set the `Theme` to `Round` to show the rounded style stepper.

```tsx
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper theme="round"></Stepper>
  </>,
  mountNode,
);
```

## API

| Parameter    | Description                                                | Type                       | Default value |
| ------------ | ---------------------------------------------------------- | -------------------------- | ------------- |
| min          | Minimum                                                    | `number \| string \| null` | `1`           |
| max          | Maximum                                                    | `number \| string`         | -             |
| defaultValue | 初始值                                                     | `number \| string`         | `1`           |
| value        | The current value                                          | `number \| string`         | -             |
| mode         | The pedometer mode, the type is a string                   | `'number' \| 'string'`     | `'string'`    |
| step         | Step length, changed each time you click                   | `number \| string`         | `1`           |
| inputWidth   | Enter the box width, the default unit is `PX`              | `number \| string`         | `32px`        |
| buttonSize   | Button size and input box height, the default unit is `PX` | `number \| string`         | `28`          |
| precision    | Fixed decimal number                                       | `number`                   | `1`           |
| disabled     | Whether the stepper is disabled                            | `boolean`                  | `false`       |
| disablePlus  | Whether to disable add button                              | `boolean`                  | `false`       |
| disableMinus | Do you disable the reduction button                        | `boolean`                  | `false`       |
| disableInput | Whether to disable input boxes                             | `boolean`                  | `false`       |
| showPlus     | Whether to display an add button                           | `boolean`                  | `true`        |
| showMinus    | Whether to display a reduction button                      | `boolean`                  | `true`        |
| allowEmpty   | Whether to allow the input value to be empty               | `boolean`                  | `false`       |
| longPress    | Whether to open a long press                               | `boolean`                  | `true`        |
| showInput    | Whether to display the input box                           | `boolean`                  | `true`        |

## Events

| Event Name | Description                                                       | Callback Arguments                                                   |
| ---------- | ----------------------------------------------------------------- | -------------------------------------------------------------------- |
| onChange   | Monitor input value changesinput value changesinput value changes | `(value: string \| number \| null)`                                  |
| onStep     | Click the callback of the addition and subtile buttons            | `(value: T,info: { offset: StepperValue; type: 'minus' \| 'plus' })` |
