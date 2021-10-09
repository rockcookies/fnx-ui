# Rate

Used to rating operations on things.

## Basic Usage

Display the current `DefaultValue` Property Set the default score. setting，`DefaultValue` Property Set the default score.

```tsx | pure
import { Rate } from 'fnx-ui';

ReactDOM.render(
  <>
    <Rate defaultValue={2} />
  </>,
  mountNode,
);
```

## Character

Custom icon style via `Character` property.

```tsx | pure
import { Rate } from 'fnx-ui';

ReactDOM.render(
  <>
    <Rate character="A" />
  </>,
  mountNode,
);
```

## VoidCharacter

Custom Icon style via the `voidcharacter` property.

```tsx | pure
import { Rate } from 'fnx-ui';

ReactDOM.render(
  <>
    <Rate character="A" voidCharacter="B" />
  </>,
  mountNode,
);
```

## Color and VoidColor

Custom Icon style via `Color`,` voidcolor` attribute custom icon style.

```tsx | pure
import { Rate } from 'fnx-ui';

ReactDOM.render(
  <>
    <Rate color="yellow" voidColor="blue" />
  </>,
  mountNode,
);
```

## Size

Customize the icon size via the `size` property.

```tsx | pure
import { Rate } from 'fnx-ui';

ReactDOM.render(
  <>
    <Rate size="40px" defaultValue={2} />
  </>,
  mountNode,
);
```

## Count

Custom quantity by `count` attribute。

```tsx | pure
import { Rate } from 'fnx-ui';
ReactDOM.render(
  <>
    <Rate count={4} defaultValue={2} />
  </>,
  mountNode,
);
```

## Disabled

Disabled` rate` attribute via `disabled`.

```tsx | pure
import { Rate } from 'fnx-ui';
ReactDOM.render(
  <>
    <Rate disabled defaultValue={2} />
  </>,
  mountNode,
);
```

## AllowHalf

Select half-star through `Allowhalf` attribute.

```tsx | pure
import { Rate } from 'fnx-ui';
ReactDOM.render(
  <>
    <Rate allowHalf={true} defaultValue={2.5} />
  </>,
  mountNode,
);
```

## Readonly

Realize read-only features through `Readonly` properties.

```tsx | pure
import { Rate } from 'fnx-ui';
ReactDOM.render(
  <>
    <Rate readonly defaultValue={2} />
  </>,
  mountNode,
);
```

## Listen Events

`onchange` method returns the current` value`.

```tsx | pure
import { Rate,Toast } from 'fnx-ui';

const onChange=(value)=>{ Toast.show(value)} }

ReactDOM.render(
  <>
    <Rate onChange={onChange} defaultValue={2} />
  </>,
  mountNode,
);
```

## API

| Parameter         | Description                               | Type               | Default value |
| ----------------- | ----------------------------------------- | ------------------ | ------------- |
| value             | Current score                             | `number`           | `0`           |
| defaultValue      | Default score                             | `number`           | `0`           |
| count             | Total number of icons                     | `number \| string` | `5`           |
| gutter            | Icon spacing, default unit is `px`        | `number \| string` | `4`           |
| color             | Select color                              | `string`           | -             |
| voidColor         | Colorless                                 | `string`           | -             |
| size              | Icon size, default unit is `px`           | `number \| string` | `28`          |
| character         | Custom icon                               | `ReactNode`        | -             |
| voidCharacter     | Unselected icon                           | `ReactNode`        | -             |
| disabled          | Is it disabled?                           | `boolean`          | `false`       |
| disabledColor     | Disabled color                            | `string`           | `#c8c9cc`     |
| voidDisabledColor | Color when disabled                       | `string`           | -             |
| allowHalf         | Do you support half stars?                | `boolean`          | `false`       |
| readonly          | Do you support read only                  | `boolean`          | `false`       |
| touchable         | Can I choose to score by sliding gesture? | `boolean`          | `true`        |

## Events

| Event Name | Description                   | Callback Arguments |
| ---------- | ----------------------------- | ------------------ |
| onChange   | Turn off the notification bar | `(value: number)`  |
