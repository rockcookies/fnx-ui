# Switch

Used to switch between open and closed states.

## Basic Usage

Selective status of Checked`binding switch,`True` to open,` false`. `defaultChecked` Indicates the default status of the switch.

```tsx
import { Switch } from 'fnx-ui';

ReactDOM.render(
  <>
    <Switch defaultChecked={false} />
    <Switch checked />
  </>,
  mountNode,
);
```

## Disabled

Disable the switch via the `disabled` property, the switch is not clicked in the disabled state.

```tsx
import { Switch } from 'fnx-ui';

ReactDOM.render(
  <>
    <Switch disabled />
  </>,
  mountNode,
);
```

## Loading

With the `loading` property setting switch is loaded, the switch cannot be clicked in the loading state.

```tsx
import { Switch } from 'fnx-ui';

ReactDOM.render(
  <>
    <Switch loading />
  </>,
  mountNode,
);
```

## Size

Custom switch of the switch via the `size` attribute.

```tsx
import { Switch } from 'fnx-ui';

ReactDOM.render(
  <>
    <Switch />
    <Switch size={40} />
  </>,
  mountNode,
);
```

## Custom Color

`ActiveColor` attribute indicates the background color of the open time, `inactivecolor` Indication time. Background color.

```tsx
import { Switch } from 'fnx-ui';

ReactDOM.render(
  <>
    <Switch activeColor="#ee0a24" inactiveColor="#0000ff" />
  </>,
  mountNode,
);
```

## Text and Icon

Set text with icons

```tsx
import { Switch } from 'fnx-ui';

ReactDOM.render(
  <>
    <Switch checkedChildren="NO" unCheckedChildren="OFF" />
  </>,
  mountNode,
);
```

## Asynchronous control

The switch status can be manually handled in the event callback function when you need asynchronous control.

```tsx
import { Switch } from 'fnx-ui';

const [syncChecked, setSyncChecked] = useState(true);

const handleSyncChange = () => {
  setSyncChecked(!syncChecked);
};

ReactDOM.render(
  <>
    <Switch checked={syncChecked} onClick={handleSyncChange} />
    <Button onClick={handleSyncChange}>Content</Button>
  </>,
  mountNode,
);
```

## API

| Parameter         | Description                       | Type               | Default value |
| ----------------- | --------------------------------- | ------------------ | ------------- |
| size              | Switch size, default unit is `PX` | `string \| number` | `30`          |
| disabled          | Is it disabled?                   | `boolean`          | `false`       |
| checked           | Switch selection status           | `boolean`          | -             |
| defaultChecked    | Whether the default is selected   | `boolean`          | `false`       |
| loading           | Is it loaded?                     | `boolean`          | `false`       |
| checkedColor      | Open background color             | `string`           | -             |
| unCheckedColor    | Close up background color         | `string`           | -             |
| checkedChildren   | Select the content                | `ReactNode`        | -             |
| unCheckedChildren | Non-selected content              | `ReactNode`        | -             |

## Events

| Event Name | Description                             | Callback Arguments                                      |
| ---------- | --------------------------------------- | ------------------------------------------------------- |
| onClick    | Trigger when clicking on the switch     | `(checked: boolean)`                                    |
| onChange   | Trigger when switching status switching | `(checked: boolean, event: MouseEvent<HTMLDivElement>)` |
