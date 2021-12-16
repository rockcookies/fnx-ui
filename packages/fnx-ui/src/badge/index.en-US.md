# Badge

Small numerical value or status descriptor for UI elements.

## Basic Usage

Set `count` prop to display the corresponding content in the upper right corner of the child element, or set `dot` to display small red dots.

```tsx
import { Badge } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count={10}>
      <div>content</div>
    </Badge>
    <Badge count={0} showZero>
      <div>content</div>
    </Badge>
    <Badge count="hot">
      <div>content</div>
    </Badge>
    <Badge dot>
      <div>content</div>
    </Badge>
  </>,
  mountNode,
);
```

## Overflow

Set `max` prop to handle overflow situation.

```tsx
import { Badge } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count={20} max={9}>
      <div>content</div>
    </Badge>
    <Badge count={50} max={20}>
      <div>content</div>
    </Badge>
    <Badge count={200} max={99}>
      <div>content</div>
    </Badge>
  </>,
  mountNode,
);
```

## Custom Color

You can also set it to a hex color string for custom color through `color` property.

```tsx
import { Badge } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count={5} color="var(--fnx-primary-color)">
      <div>content</div>
    </Badge>
    <Badge count={10} color="var(--fnx-warning-color)">
      <div>content</div>
    </Badge>
    <Badge dot color="var(--fnx-success-color)">
      <div>content</div>
    </Badge>
  </>,
  mountNode,
);
```

## Custom Content

`count` prop support custom element.

```tsx
import { Badge, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count={<Icon name="success" />}>
      <div>content</div>
    </Badge>
    <Badge count="hot">
      <div>content</div>
    </Badge>
    <Badge count={<Icon name="arrow-right" />}>
      <div>content</div>
    </Badge>
  </>,
  mountNode,
);
```

## Custom Position

Use `position` prop to set the position of badge.

```tsx
import { Badge } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count={10} position="top-left">
      <div>content</div>
    </Badge>
    <Badge count={10} position="bottom-left">
      <div>content</div>
    </Badge>
    <Badge count={10} position="bottom-right">
      <div>content</div>
    </Badge>
  </>,
  mountNode,
);
```

## Independent Display

Used in standalone when children is empty.

```tsx
import { Badge, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count={<Icon name="success" />}>
      <div>content</div>
    </Badge>
    <Badge count="hot">
      <div>content</div>
    </Badge>
    <Badge count={<Icon name="arrow-right" />}>
      <div>content</div>
    </Badge>
  </>,
  mountNode,
);
```

## API

### Badge Props

| Name     | Description                                                             | Type                                                | Default                   | Version |
| -------- | ----------------------------------------------------------------------- | --------------------------------------------------- | ------------------------- | ------- |
| count    | Badge content                                                           | `ReactNode`                                         | -                         |         |
| showZero | Whether to show badge when `count` is zero                              | `boolean`                                           | `true`                    |         |
| dot      | Whether to show dot                                                     | `boolean`                                           | `false`                   |         |
| max      | Max value, show `{max}+` when exceed, only works when `count` is number | `number \| string`                                  |                           |         |
| color    | Background color                                                        | `string`                                            | `var(--fnx-danger-color)` |         |
| offset   | Offset of badge dot                                                     | `[number \| string, number \| string]`              | -                         |         |
| position | Badge position                                                          | `'top-left'` \| `'bottom-left'` \| `'bottom-right'` | `'top-left'`              | 0.0.9   |
