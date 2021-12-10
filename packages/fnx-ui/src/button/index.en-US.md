# Button

Button is used to trigger some actions.

## Theme

There are `default`, `primary`, `success`, `warning` and `danger` button types.

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="default">Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
  </>,
  mountNode,
);
```

## Plain

Use `plain` to show a plain button.

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

## Hairline

Use `hairline` to set border to hairline thickness.

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" plain hairline>
      {i18n.hairline}
    </Button>
    <Button type="success" plain hairline>
      {i18n.hairline}
    </Button>
  </>,
  mountNode,
);
```

## Disabled

Buttons can be disabled.

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

A loading indicator can be added to a button by setting the `loading` property on the Button, You can also set the text in the loading status through the `loadingChildren` prop.

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

There are `rect`, `radius`, `round` button shapes, and the default shape is `radius`.

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" shape="rect">
      rect
    </Button>
    <Button type="success" shape="radius">
      radius
    </Button>
    <Button type="warning" shape="round">
      round
    </Button>
  </>,
  mountNode,
);
```

## Icon

Icons can be used in buttons.

```tsx
import { Button, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" icon={<Icon name="plus" />} />
    <Button type="primary" icon={<Icon name="plus" />}>
      Button
    </Button>
  </>,
  mountNode,
);
```

## Size

Buttons can be `lg`, `md`, `sm` and `xs` in size.

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

`block` property will make the button fit to its parent width.

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

You can also set it to a color string for custom color through `color` property.

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

### Button Props

| Name            | Description                                                                         | Type                                                                   | Default            | Version |
| --------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------ | ------- |
| type            | Button type                                                                         | `'primary'` \| `'success'` \| `'warning'` \| `'danger'` \| `'default'` | `'default'`        |         |
| size            | Button size                                                                         | `'lg'` \| `'md'` \| `'sm'` \| `'xs'`                                   | `'md'`             |         |
| iconPosition    | The position of the icon in the button                                              | `'left'` \| `'right'`                                                  | `'left'`           |         |
| loading         | Whether the button shows the loading status                                         | `boolean`                                                              | `false`            |         |
| loadingIcon     | Load status icon                                                                    | `ReactNode`                                                            | `<Icon.Spinner />` |         |
| disabled        | Whether the button is disabled                                                      | `ReactNode`                                                            | -                  |         |
| loadingChildren | Display content in loading status                                                   | `boolean`                                                              | `false`            |         |
| hairline        | Use 0.5px border                                                                    | `boolean`                                                              | `false`            |         |
| plain           | Whether the button is plain                                                         | `boolean`                                                              | `false`            |         |
| shape           | Button shape                                                                        | `'rect'` \| `'radius'` \| `'round'`                                    | `'radius'`         |         |
| block           | Whether the button is displayed as block                                            | `boolean`                                                              | `false`            |         |
| color           | Button color (support `#FFF`, `#FFFFFF`, `yellow`, `rgb(0, 0, 0)` formatted colors) | `string`                                                               | -                  |         |
| htmlType        | The `type` attribute of the button's DOM                                            | `ButtonHTMLAttributes<HTMLButtonElement>['type']`                      | -                  |         |

### Button Events

| Event Name | Description                                                                          | Type                          | Version |
| ---------- | ------------------------------------------------------------------------------------ | ----------------------------- | ------- |
| onClick    | Triggered when the button is clicked and the button status is not loaded or disabled | `(event: MouseEvent) => void` |         |
