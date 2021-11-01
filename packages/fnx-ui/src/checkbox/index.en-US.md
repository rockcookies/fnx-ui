# Checkbox

Used to switch between selected and non-selected states.

## Basic Usage

Check status through `checkd` bind check box, `defaultChecked` is a checkbox default check status.

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox checked>Content</Checkbox>
  </>,
  mountNode,
);
```

## Disabled

You can disable the checkbox by setting the `disabled` property.

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox checked disabled>
      Content
    </Checkbox>
  </>,
  mountNode,
);
```

## Custom Shape

Set the `iconshape` property to `Square` , the shape of the check box will become square.

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox iconShape="square">Content</Checkbox>
  </>,
  mountNode,
);
```

## Custom color

Set the icon color selected by the `iconCheckedColor` property setting.

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox iconCheckedColor="red">Content</Checkbox>
  </>,
  mountNode,
);
```

## Customize

Customize the size of the icon via the `iconsize` property.

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox iconSize="24px">Content</Checkbox>
  </>,
  mountNode,
);
```

## Custom Icon

Customized Icon, `checkedIcon` custom selection icon.

```tsx
import { Toast } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox
      icon="icon"
      checkedIcon={<div>Custom Icon</div>}
      iconShape="plain"
    >
      Content
    </Checkbox>
  </>,
  mountNode,
);
```

## Labeldisabled

After setting the `labeldisabled` property, click on the content other than the icon without trigger the check box to switch.

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox labelDisabled>Content</Checkbox>
  </>,
  mountNode,
);
```

## API

| Parameter        | Description                                        | Type                             | Default value |
| ---------------- | -------------------------------------------------- | -------------------------------- | ------------- |
| value            | Option value                                       | `string \| number \| boolean`    | `false`       |
| checked          | Specify whether it is currently selected           | `boolean`                        | `false`       |
| defaultChecked   | Initiality is selected                             | `boolean`                        | `false`       |
| disabled         | Failure state                                      | `boolean`                        | `false`       |
| skipGroup        | Whether it is not being checked by `checkboxgroup` | `boolean`                        | `false`       |
| icon             | Customize unchecked icon                           | `ReactNode`                      | -             |
| checkedIcon      | Customize icon                                     | `ReactNode`                      | -             |
| iconSize         | Check the icon size, the default unit is `px`      | `string \| number`               | -             |
| iconCheckedColor | Select the status color                            | `string`                         | -             |
| iconPosition     | Icon location                                      | `'left' \| 'right'`              | `left`        |
| iconShape        | Icon shape                                         | `'square' \| 'round' \| 'plain'` | `square`      |
| labelDisabled    | Disable text Click                                 | `boolean`                        | `false`       |

## Checkbox Event

| Event Name | Description                   | Callback Arguments   |
| ---------- | ----------------------------- | -------------------- |
| onChange   | Events triggered when binding | `(checked: boolean)` |

## CheckboxGroup API

| Parameter        | Description                                 | Type                                | Default value |
| ---------------- | ------------------------------------------- | ----------------------------------- | ------------- |
| value            | Specify the selected option                 | `string[] \| number[] \| boolean[]` | `[]`          |
| defaultValue     | Options selected by default                 | `string[] \| number[] \| boolean[]` | `[]`          |
| direction        | Control arrangement                         | `'vertical' \| 'horizontal'`        | `vertical`    |
| maxCheckedCount  | Maximum number of numbers                   | `number`                            | -             |
| disabled         | Whether to disable all check boxes          | `boolean`                           | `false`       |
| iconSize         | All check box icons, default units for `px` | `string \| number`                  | -             |
| iconShape        | All check box icons                         | `'square' \| 'round' \| 'plain'`    | `square`      |
| labelDisabled    | All checkbox Disable text Click             | `boolean`                           | `false`       |
| iconPosition     | Set all icons position                      | `'left' \| 'right'`                 | `left`        |
| iconCheckedColor | Set all selected status colors              | `string`                            | -             |
| icon             | Set all custom icons                        | `ReactNode`                         | -             |
| checkedIcon      | Set all custom selection icons              | `ReactNode`                         | -             |

## checkboxGroup Events

| Event Name | Description                   | Callback Arguments |
| ---------- | ----------------------------- | ------------------ |
| onChange   | Events triggered when binding | `v:T[]`            |

### checkboxGroupRef Instance Method

| Name        | Description                                                                                         | Arguments                             |
| ----------- | --------------------------------------------------------------------------------------------------- | ------------------------------------- |
| toggleAll() | Switch selection, pass the `true` to select,`false` to cancel the selection, do not call the refuse | `(options?: { checkAll?: boolean })}` |

### checkboxRef Instance Method

| Name     | Description             | Arguments |
| -------- | ----------------------- | --------- |
| toggle() | Switch` Checkbox` State | -         |
