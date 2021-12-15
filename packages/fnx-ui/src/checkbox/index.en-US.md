# Checkbox

A group of options for multiple choices.

## Basic Usage

Use `checked` to set Checkbox checked.

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox checked>Option</Checkbox>
  </>,
  mountNode,
);
```

## Disabled

Use `disabled` prop to set disabled checkbox.

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox checked disabled>
      Option A
    </Checkbox>
    <Checkbox checked={false} disabled>
      Option B
    </Checkbox>
  </>,
  mountNode,
);
```

## Custom Shape

Use `iconShape` prop to customize icon shape.

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox iconShape="square">Option</Checkbox>
  </>,
  mountNode,
);
```

## Custom Color

Use `iconCheckedColor` prop to customize checked icon color.

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox iconCheckedColor="red">Option</Checkbox>
  </>,
  mountNode,
);
```

## Custom Icon Size

Use `iconSize` prop to set the icon size.

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox iconSize="24px">Option</Checkbox>
  </>,
  mountNode,
);
```

## Custom Icon

Use `icon` prop to customize unchecked icon, And `checkedIcon` to customize checked icon.

```tsx
import { Checkbox, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox
      icon={<Icon name="circle" />}
      checkedIcon={<Icon name="success" />}
      iconShape="plain"
    >
      Option
    </Checkbox>
  </>,
  mountNode,
);
```

## Disable Label Click

Set `labelDisabled` prop to disable label click action.

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox labelDisabled>Option</Checkbox>
  </>,
  mountNode,
);
```

## Checkbox.Group

When Checkboxes are inside a Checkbox.Group, the checked checkboxes's value is an array and bound with CheckboxGroup by `value`.

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox.Group value={['a']}>
      <Checkbox value="a">Option A</Checkbox>
      <Checkbox value="b">Option B</Checkbox>
    </Checkbox.Group>
  </>,
  mountNode,
);
```

## Horizontal

Use `direction` prop to customize Checkboxes direction.

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox.Group direction="horizontal">
      <Checkbox value="a">Option A</Checkbox>
      <Checkbox value="b">Option B</Checkbox>
    </Checkbox.Group>
  </>,
  mountNode,
);
```

## Maximum amount of checked options

Use `maxCheckedCount` prop to set maximum amount of checked options.

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox.Group maxCheckedCount={2}>
      <Checkbox value="a">Option A</Checkbox>
      <Checkbox value="b">Option B</Checkbox>
      <Checkbox value="c">Option C</Checkbox>
    </Checkbox.Group>
  </>,
  mountNode,
);
```

## Toggle All

Use `toggleAll` method of Checkbox.Group instance to toggle all options.

```tsx
import { Checkbox, Button } from 'fnx-ui';

function App() {
  const checkboxGroupRef = useRef<CheckboxGroupRef | null>(null);

  return (
    <div>
      <Checkbox.Group ref={checkboxGroupRef}>
        <Checkbox value="a">Option A</Checkbox>
        <Checkbox value="b">Option B</Checkbox>
      </Checkbox.Group>

      <Button
        onClick={() => {
          checkboxGroupRef.current?.toggleAll({ checkAll: true });
        }}
      >
        Select All
      </Button>
      <Button
        onClick={() => {
          checkboxGroupRef.current?.toggleAll({ checkAll: false });
        }}
      >
        Unselect All
      </Button>
    </div>
  );
}

ReactDOM.render(
  <>
    <App />
  </>,
  mountNode,
);
```

## Inside a Cell

Checkbox can be used with Cell, Use `toggle` method of Checkbox Instance to toggle check state.

```tsx
import { Cell, Checkbox } from 'fnx-ui';
import { CheckboxRef } from 'fnx-ui/lib/checkbox';
import { useRef } from 'react';

function App() {
  const checkboxRefs = useRef<Record<string, CheckboxRef | null>>({});

  return (
    <Checkbox.Group>
      <Cell.Group inset>
        {['A', 'B'].map((item, idx) => (
          <Cell
            key={item}
            clickable
            title={`option ${item}`}
            rightIcon={
              <Checkbox
                value={item}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                ref={(r) => {
                  checkboxRefs.current[idx] = r;
                }}
              />
            }
            onClick={() => {
              checkboxRefs.current[idx]?.toggle();
            }}
          />
        ))}
      </Cell.Group>
    </Checkbox.Group>
  );
}

ReactDOM.render(
  <>
    <App />
  </>,
  mountNode,
);
```

## API

### Checkbox Basic Props

| Name             | Description                    | Type                                 | Default      | Version |
| ---------------- | ------------------------------ | ------------------------------------ | ------------ | ------- |
| disabled         | Disable checkbox               | `boolean`                            | `false`      |         |
| direction        | Direction of checkbox          | `'vertical'` \| `'horizontal'`       | `'vertical'` |         |
| checkedIcon      | Custom checked icon            | `ReactNode`                          | -            |         |
| icon             | Custom unchecked icon          | `ReactNode`                          | -            |         |
| iconSize         | Custom icon size               | `string` \| `number`                 | -            |         |
| iconPosition     | Custom icon position           | `'left'` \| `'right'`                | `'left'`     |         |
| iconShape        | Custom icon shape              | `'square'` \| `'round'` \| `'plain'` | `'square'`   |         |
| iconCheckedColor | Checked icon color             | `string`                             | -            |         |
| labelDisabled    | Whether to disable label click | `boolean`                            | `false`      |         |

### Checkbox Props

Checkbox Props extends Checkbox Basic Props，and add the following props:

| Name           | Description                          | Type                              | Default | Version |
| -------------- | ------------------------------------ | --------------------------------- | ------- | ------- |
| value          | Checkbox value                       | `string` \| `number` \| `boolean` | -       |         |
| checked        | Whether the checkbox is selected     | `boolean`                         | -       |         |
| defaultChecked | Whether initial checkbox is selected | `boolean`                         | `false` |         |
| skipGroup      | Whether to bind with Checkbox.Group  | `boolean`                         | `true`  |         |

### Checkbox Events

| Event name | Description                | Type                         | Version |
| ---------- | -------------------------- | ---------------------------- | ------- |
| onChange   | Emitted when value changed | `(checked: boolean) => void` |         |

### Checkbox Instance

| Name   | Description        | Type         | Version |
| ------ | ------------------ | ------------ | ------- |
| toggle | Toggle check state | `() => void` |         |

### Checkbox.Group Props

Checkbox.Group Props extends Checkbox Basic Props，and add the following props:

| Name            | Description                       | Type                                    | Default | Version |
| --------------- | --------------------------------- | --------------------------------------- | ------- | ------- |
| value           | Currently selected value          | `string[]` \| `number[]` \| `boolean[]` | -       |         |
| defaultValue    | Default selected value            | `string[]` \| `number[]` \| `boolean[]` | `[]`    |         |
| maxCheckedCount | Maximum amount of checked options | `number`                                | -       |         |

### Checkbox.Group Events

| Event name | Description                | Type                                                 | Version |
| ---------- | -------------------------- | ---------------------------------------------------- | ------- |
| onChange   | Emitted when value changed | `(value: string[] \| number[] \| boolean[]) => void` |         |

### Checkbox.Group Instance

| Name      | Description                           | Type                                         | Version |
| --------- | ------------------------------------- | -------------------------------------------- | ------- |
| toggleAll | Toggle check status of all checkboxes | `(options?: { checkAll?: boolean }) => void` |         |
