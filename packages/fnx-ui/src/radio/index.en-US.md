# Radio

Used to select a single state in multiple preparation options.

## Basic Usage

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue={1}>
      <Radio value={1}>Content</Radio>
      <Radio value={2}>Content</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## Disabled

Passing the option to switch by `disabled` attribute，Setting up `disabled` on `Radio` to disable a single option，`Radio.group` You can disable group options。

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue={2} disabled>
      <Radio value={1}>Content</Radio>
      <Radio value={2}>Content</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## Custom shapes and colors

Change shape via `iconshape`；Change color via `iconcheckedcolor`。

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue={1}>
      <Radio value={1} iconShape="square" iconCheckedColor="blue">
        Content
      </Radio>
      <Radio value={2}>Content</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## Iconsize

`iconsize` Admission to digital type, set font size, unit `px`.

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio iconSize={20} defaultChecked>
      Content
    </Radio>
  </>,
  mountNode,
);
```

R

## Icon

`icon` Type, custom icon for `ReactNode`.

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group
      defaultValue={2}
      iconShape="plain"
      icon={
        <img src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      }
      checkedIcon={
        <img src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      }
    >
      <Radio value={1}>Content</Radio>
      <Radio value={2}>Content</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## LabelDisabled

Set the `labeldisabled` property, disable text click.

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio labelDisabled defaultChecked>
      Content
    </Radio>
  </>,
  mountNode,
);
```

## Horizontal Arrangement

`Direction` Control the display direction of the text with the box.

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue={2} direction="horizontal">
      <Radio value={1}>Content</Radio>
      <Radio value={2}>Content</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## Inside a Cell

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell.Group>
      {[1, 2, 3].map((key) => {
        return (
          <Cell
            key={key}
            clickable
            title="Radio Cell"
            rightIcon={<Radio checked={radio === key} />}
          />
        );
      })}
    </Cell.Group>
  </>,
  mountNode,
);
```

## Radio API

| Parameter        | Description                                      | Type                             | Default value |
| ---------------- | ------------------------------------------------ | -------------------------------- | ------------- |
| value            | Determine if it is selected according to `value` | `string \| number \| boolean`    | -             |
| defaultChecked   | Initialization is selected                       | `boolean`                        | `false`       |
| skipGroup        | Do you accept `Radiogroup Props`                 | `boolean`                        | `false`       |
| checked          | Specify whether it is currently selected         | `boolean`                        | `false`       |
| disabled         | Whether to disable all check boxes               | `boolean`                        | `false`       |
| iconSize         | Check box icon size, default unit is `px`        | `string \| number`               | -             |
| iconShape        | Check box icon shape                             | `'square' \| 'round' \| 'plain'` | `square`      |
| labelDisabled    | Check box Disable text Click                     | `boolean`                        | `false`       |
| iconPosition     | Set icon location                                | `'left' \| 'right'`              | `left`        |
| iconCheckedColor | Set selected status color                        | `string`                         | -             |
| icon             | Set a custom icon                                | `ReactNode`                      | -             |
| checkedIcon      | Set custom selection icon                        | `ReactNode`                      | -             |

## RadioGroup API

| Parameter        | Description                                      | Type                             | Default value |
| ---------------- | ------------------------------------------------ | -------------------------------- | ------------- |
| value            | Determine if it is selected according to `value` | `string \| number \| boolean`    | -             |
| defaultChecked   | Initialization is selected                       | `boolean`                        | `false`       |
| direction        | Control arrangement                              | `'vertical' \| 'horizontal'`     | `vertical`    |
| disabled         | Whether to disable all check boxes               | `boolean`                        | `false`       |
| iconSize         | All check box icons, the default unit is `px`    | `string \| number`               | -             |
| iconShape        | All check box icons                              | `'square' \| 'round' \| 'plain'` | `square`      |
| labelDisabled    | All checkbox Disable text Click                  | `boolean`                        | `false`       |
| iconPosition     | Set all icons position                           | `'left' \| 'right'`              | `left`        |
| iconCheckedColor | Set all selected status colors                   | `string`                         | -             |
| icon             | Set all custom icons                             | `ReactNode`                      | -             |
| checkedIcon      | Set all custom selection icons                   | `ReactNode`                      | -             |

## 事件

| Event Name | Description                           | Callback Arguments   |
| ---------- | ------------------------------------- | -------------------- |
| onChange   | Trigger when selecting a state change | `(checked: boolean)` |

## RadioGroup Event

| Event Name | Description                                                          | Callback Arguments |
| ---------- | -------------------------------------------------------------------- | ------------------ |
| onChange   | Trigger when the value changes, the type depends on the type `value` | `(v: T)`           |
