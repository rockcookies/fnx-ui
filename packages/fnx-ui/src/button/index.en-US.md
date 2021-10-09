# Button

The button is used to start an instant operation.

## Theme

The button supports five themes: `default` 、`primary` 、`success` 、`warning` and `danger`. The default is `default`.

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="default">Default</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
  </>,
  mountNode,
);
```

## Plain

Set the button as a simple button through the `plain` attribute. The text of the simple button is the button color and the background is white.

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" plain>
      Primary
    </Button>
    <Button type="success" plain>
      Success
    </Button>
  </>,
  mountNode,
);
```

## Disabled

Disable the button through the `disabled` attribute. In the disabled state, the button cannot be clicked.

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" disabled>
      Primary
    </Button>
    <Button type="success" disabled>
      Success
    </Button>
  </>,
  mountNode,
);
```

## Loading

Set the button to the loading status through the `loading` attribute. The button text will be hidden by default in the loading status. You can set the text in the loading status through the `loadingtext`.

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" loading />
    <Button type="primary" loading>
      Content
    </Button>
    <Button type="success" loading loadingText="Loading...">
      Content
    </Button>
  </>,
  mountNode,
);
```

## Shape

The button shape supports four types of `rect`、`radius`、`round`, and the default is `radius`.

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" shape="rect">
      Content
    </Button>
    <Button type="success" shape="radius">
      Content
    </Button>
    <Button type="warning" shape="round">
      Content
    </Button>
  </>,
  mountNode,
);
```

## Icon

Set the button icon through the `icon` attribute.

```tsx
import { Button, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" icon={<Icon name="plus" />} />
    <Button type="primary" icon={<Icon name="plus" />}>
      Content
    </Button>
  </>,
  mountNode,
);
```

## Size

The button size is `size`. Four sizes of `lg`、`md`、`sm`、`xs` are supported. The default is `md`.

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" size="lg">
      LG
    </Button>
    <Button type="primary" size="md">
      MD
    </Button>
    <Button type="primary" size="sm">
      SM
    </Button>
    <Button type="primary" size="xs">
      XS
    </Button>
  </>,
  mountNode,
);
```

## Block

By default, buttons are in line block level elements. You can set the element type of buttons to block level elements through the `block` attribute.

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" block>
      Block Button
    </Button>
  </>,
  mountNode,
);
```

## Custom color

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button color="#7232dd">Button</Button>
    <Button color="#7232dd" plain>
      Button
    </Button>
    <Button color="linear-gradient(to right, #ff6034, #ee0a24)">Button</Button>
  </>,
  mountNode,
);
```

## API

| parameter       | explain                                                         | type                                                           | Default value |
| --------------- | --------------------------------------------------------------- | -------------------------------------------------------------- | ------------- |
| type            | Button type                                                     | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'default'` | `default`     |
| size            | Size, optional values are large small mini                      | `'lg' \|'md' \|'sm' 'xs'`                                      | `md`          |
| iconPosition    | Icon display position                                           | `'left' \| 'right'`                                            | `left`        |
| loading         | Is it displayed as loaded                                       | `boolean`                                                      | `false`       |
| disabled        | Disable button                                                  | `boolean`                                                      | `false`       |
| hairline        | Use 0.5px border                                                | `boolean`                                                      | `false`       |
| plain           | Is it a simple button                                           | `boolean`                                                      | `false`       |
| shape           | Button shape                                                    | `'rect' \| 'radius' \| 'round'`                                | `radius`      |
| block           | Is it a block level element                                     | `boolean`                                                      | `false`       |
| loadingIcon     | Load status icon                                                | `ReactNode`                                                    | -             |
| loadingChildren | Display content in loading status                               | `ReactNode`                                                    | -             |
| color           | Button color, which supports the incoming linear-gradient color | `string`                                                       | -             |
| htmlType        | Button type                                                     | `ButtonHTMLAttributes<HTMLButtonElement>['type']`              | -             |

## Events

| Event Name | Description                                                                          | Callback Arguments  |
| ---------- | ------------------------------------------------------------------------------------ | ------------------- |
| onClick    | Triggered when the button is clicked and the button status is not loaded or disabled | `event: MouseEvent` |
