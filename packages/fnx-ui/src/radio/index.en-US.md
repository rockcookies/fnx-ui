# Radio

Used to select a single state in multiple preparation options.

## Basic Usage

Use `value` to set Radio checked.

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue="A">
      <Radio value="A">Option A</Radio>
      <Radio value="B">Option B</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## Disabled

Use `disabled` prop to set disabled radio.

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue="A" disabled>
      <Radio value="A">Option A</Radio>
      <Radio value="B">Option B</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## Custom Shape

Use `iconShape` prop to customize icon shape.

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue="A" iconShape="square">
      <Radio value="A">Option A</Radio>
      <Radio value="B">Option B</Radio>
      <Radio value="C" iconShape="round">
        Option C
      </Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## Custom Color

Use `iconCheckedColor` prop to customize checked icon color.

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue="A" iconCheckedColor="red">
      <Radio value="A">Option A</Radio>
      <Radio value="B">Option B</Radio>
      <Radio value="C">Option C</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## Custom Icon Size

Use `iconSize` prop to set the icon size.

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue="A" iconSize={20}>
      <Radio value="A" iconSize={14}>
        Option A
      </Radio>
      <Radio value="B">Option B</Radio>
      <Radio value="C">Option C</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## Custom Icon

Use `icon` prop to customize unchecked icon, And `checkedIcon` to customize checked icon.

```tsx
import { Radio, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group
      defaultValue="A"
      icon={<Icon name="circle" />}
      checkedIcon={<Icon name="success" />}
      iconShape="plain"
    >
      <Radio value="A">Option A</Radio>
      <Radio value="B">Option B</Radio>
      <Radio value="C">Option C</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## Disable Label Click

Set `labelDisabled` prop to disable label click action.

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue="A" labelDisabled>
      <Radio value="A">Option A</Radio>
      <Radio value="B">Option B</Radio>
      <Radio value="C">Option C</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## Inside a Cell

Radio can be used with Cell, Use `toggle` method of Radio Instance to toggle check state.

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue="A" labelDisabled direction="horizontal">
      <Radio value="A">Option A</Radio>
      <Radio value="B">Option B</Radio>
      <Radio value="C">Option C</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## Inside a Cell

Radio can be used with Cell.

```tsx
import { Cell, Radio } from 'fnx-ui';
import { useState } from 'react';

function App() {
  const [radio, setRadio] = useState('A');

  return (
    <Cell.Group>
      {['A', 'B', 'C'].map((key) => {
        return (
          <Cell
            key={key}
            clickable
            title={`Option ${key}`}
            rightIcon={<Radio checked={radio === key} />}
            onClick={() => {
              setRadio(key);
            }}
          />
        );
      })}
    </Cell.Group>
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

### Radio Basic Props

| Name             | Description                    | Type                                 | Default      | Version |
| ---------------- | ------------------------------ | ------------------------------------ | ------------ | ------- |
| disabled         | Disable radio                  | `boolean`                            | `false`      |         |
| direction        | Direction of radio             | `'vertical'` \| `'horizontal'`       | `'vertical'` |         |
| checkedIcon      | Custom checked icon            | `ReactNode`                          | -            |         |
| icon             | Custom unchecked icon          | `ReactNode`                          | -            |         |
| iconSize         | Custom icon size               | `string` \| `number`                 | -            |         |
| iconPosition     | Custom icon position           | `'left'` \| `'right'`                | `'left'`     |         |
| iconShape        | Custom icon shape              | `'square'` \| `'round'` \| `'plain'` | `'square'`   |         |
| iconCheckedColor | Checked icon color             | `string`                             | -            |         |
| labelDisabled    | Whether to disable label click | `boolean`                            | `false`      |         |

### Radio Props

Radio Props extends Radio Basic Props，and add the following props:

| Name           | Description                       | Type                              | Default | Version |
| -------------- | --------------------------------- | --------------------------------- | ------- | ------- |
| value          | Radio value                       | `string` \| `number` \| `boolean` | -       |         |
| checked        | Whether the radio is selected     | `boolean`                         | -       |         |
| defaultChecked | Whether initial radio is selected | `boolean`                         | `false` |         |
| skipGroup      | Whether to bind with Radio.Group  | `boolean`                         | `true`  |         |

### Radio Events

| 事件名   | 说明                     | 类型                         | 版本 |
| -------- | ------------------------ | ---------------------------- | ---- |
| onChange | 当绑定值变化时触发的事件 | `(checked: boolean) => void` |      |

### Radio.Group Props

Radio.Group Props extends Radio Basic Props，and add the following props:

| Name         | Description              | Type                              | Default | Version |
| ------------ | ------------------------ | --------------------------------- | ------- | ------- |
| value        | Currently selected value | `string` \| `number` \| `boolean` | -       |         |
| defaultValue | Default selected value   | `string` \| `number` \| `boolean` | -       |         |

### Radio.Group Events

| Event name | Description                | Type                                           | Version |
| ---------- | -------------------------- | ---------------------------------------------- | ------- |
| onChange   | Emitted when value changed | `(value: string \| number \| boolean) => void` |         |
