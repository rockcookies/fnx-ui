# Tag

Used to mark keywords and general contents.

## Basic Usage

Control tag color via `Type` attribute.

```tsx
import { Tag } from 'fnx-ui';

ReactDOM.render(
  <>
    <Tag type="default">Default</Tag>
    <Tag type="primary">Primary</Tag>
    <Tag type="success">Success</Tag>
    <Tag type="danger">Danger</Tag>
    <Tag type="warning">Warning</Tag>
  </>,
  mountNode,
);
```

## Plain

Set the `plain` property set to hollow style.

```tsx
import { Tag } from 'fnx-ui';

ReactDOM.render(
  <>
    <Tag theme="plain" type="default">
      Default
    </Tag>
  </>,
  mountNode,
);
```

## Round

Set to round corners via `Round`.

```tsx
import { Tag } from 'fnx-ui';

ReactDOM.render(
  <>
    <Tag theme="round" type="primary">
      Round
    </Tag>
  </>,
  mountNode,
);
```

## Mark

By the `theme ="mark"` set to tag style (semi-rounded).

```tsx
import { Tag } from 'fnx-ui';

ReactDOM.render(
  <>
    <Tag theme="mark" type="primary">
      Mark
    </Tag>
  </>,
  mountNode,
);
```

## Closeable

Add `closeable` attribute indicates that the label is off,When the tag is turned off, the `onClose` event, can perform the logic of the hidden tag in the` onClose` event.

```tsx
import { Tag } from 'fnx-ui';

const onCloseHandle = () => {};

ReactDOM.render(
  <>
    <Tag onClose={onCloseHandle} type="primary">
      Closeable
    </Tag>
  </>,
  mountNode,
);
```

## Size

Adjust the label size via the `size` property.

```tsx
import { Tag } from 'fnx-ui';

ReactDOM.render(
  <>
    <Tag size="sm" type="primary">
      Size
    </Tag>
  </>,
  mountNode,
);
```

## Custom Color

Set tag color via `color` and` Textcolor` attribute.

```tsx
import { Tag } from 'fnx-ui';

ReactDOM.render(
  <>
    <Tag color="red" textColor="blue">
      Color
    </Tag>
  </>,
  mountNode,
);
```

## API

| Parameter          | Description                                           | Type                                                           | Default value |
| ------------------ | ----------------------------------------------------- | -------------------------------------------------------------- | ------------- |
| type               | `tag` type                                            | `'default' \| 'primary' \| 'success' \| 'danger' \| 'warning'` | `default`     |
| size               | `tag` size                                            | `'sm' \| 'md' 'lg'`                                            | `md`          |
| color              | Tag color                                             | `string`                                                       | -             |
| textColor          | Text color, priority is higher than `color` attribute | `string`                                                       | -             |
| visible            | Whether to show the label                             | `boolean`                                                      | -             |
| closeable          | Whether it is a closed label                          | `boolean`                                                      | `false`       |
| closeIcon          | Custom shutdown tag                                   | `ReactNode`                                                    | -             |
| theme              | Tag style                                             | `'plain' \| 'round' \| 'mark'`                                 | -             |
| transitionDuration | Label transition animation time (unit ms              | `number`                                                       | `300`         |

## Events

| Event Name | Description                        | Callback Arguments |
| ---------- | ---------------------------------- | ------------------ |
| onClose    | Trigger when the tag is turned off | -                  |
