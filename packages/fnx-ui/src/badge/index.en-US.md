# Badge

Small numerical value or status descriptor for UI element, Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count.

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

## 自定义徽标内容

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

### Props

| Name     | Description                                                                                                           | Type                   | Default   |
| -------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------- | --------- |
| count    | Badge content                                                                                                         | `ReactNode`            | -         |
| showZero | Whether to display the badge, even if provided value equals 0.                                                        | `boolean`              | `true`    |
| dot      | Whether to show a small red point                                                                                     | `boolean`              | `false`   |
| max      | Maximum value, more than the maximum is displayed `{max} +`, only when count is number                                | `number \| string`     | -         |
| color    | Badge color                                                                                                           | `string`               | `#ee0a24` |
| offset   | Offset of badge dot, two of the arrays respectively correspond to the offset of the horizontal and vertical direction | `number[] \| string[]` | -         |
