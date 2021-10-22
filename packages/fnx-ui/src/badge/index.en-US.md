# Badge

Small numerical value or status descriptor for UI elements.

## Basic Usage

After setting the `count` attribute,`Badge` to display the corresponding logo in the upper right corner of the child, or via `dot` to display small red dots.

```tsx | pure
import { Badge } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count="hot">Content</Badge>
  </>,
  mountNode,
);
```

## Max

After setting the `max` attribute, when` count` The value is more than the maximum value and `count` type is` number`, it will be automatically displayed as `{Max} +`.

```tsx | pure
import { Badge } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count="100" max={99}>
      Content
    </Badge>
  </>,
  mountNode,
);
```

## color

Set the color of the logo through the `Color` property.

```tsx | pure
import { Badge } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count="hot">Content</Badge>
  </>,
  mountNode,
);
```

## Independent Display

When the `Badge` does not have a child element, it will be displayed as an independent element.

```tsx | pure
import { Badge } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count="100">Content</Badge>
  </>,
  mountNode,
);
```

## API

| Parameter | Description                                                                                                                                            | Type                   | Default value |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ------------- |
| count     | Logo content                                                                                                                                           | `ReactNode`            | `8`           |
| showZero  | When `count` is numeric 0, is it show a logo?                                                                                                          | `boolean`              | `true`        |
| dot       | Whether to show a small red point                                                                                                                      | `boolean`              | `false`       |
| max       | Maximum value, more than the maximum is displayed `{max} +`, only when count is digital                                                                | `number \| string`     | -             |
| color     | Logo background color                                                                                                                                  | `string`               | `#ee0a24`     |
| offset    | Set the offset of the logo, two of the arrays respectively correspond to the offset of the horizontal and vertical direction, the default unit is `px` | `number[] \| string[]` | -             |
