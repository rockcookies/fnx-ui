# Space

Set components spacing.

## Basic Usage

Crowded components spacing, default space is `8px`.

```tsx
import { Space, Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Space>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Space>
  </>,
  mountNode,
);
```

## Vertical

Use `direction` property to change components vertical spacing.

```tsx
import { Space, Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Space direction="vertical">
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Space>
  </>,
  mountNode,
);
```

## Custom Size

Use `size` property to change components spacing.

```tsx
import { Space, Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Space size={20}>
      <Button block>Button</Button>
      <Button block>Button</Button>
      <Button block>Button</Button>
    </Space>
    <Space size="2rem">
      <Button block>Button</Button>
      <Button block>Button</Button>
      <Button block>Button</Button>
    </Space>
  </>,
  mountNode,
);
```

## Alignment

Use `align` property to change alignment of components.

```tsx
import { Space, Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Space direction="horizontal" align="start">
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </Space>
  </>,
  mountNode,
);
```

## API

### Space Props

| Name      | Description                                                                                                               | Type                                          | Default        | Version |
| --------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- | -------------- | ------- |
| direction | Spacing direction                                                                                                         | `'vertical' \| 'horizontal'`                  | `'horizontal'` |         |
| align     | Spacing alignment                                                                                                         | `'start' \| 'end' \| 'center' \| 'baseline'`  | `'center'`     |         |
| size      | Spacing size, such as `20px` `2em`. The default unit is `px`, supports using array to set horizontal and vertical spacing | `number \| string \| number[] \| string[] \|` | `'8px'`        |         |
| wrap      | Whether to wrap automatically, only for horizontal alignment                                                              | `boolean`                                     | `false`        |         |
| fill      | Whether to render Space as a block element and fill the parent element                                                    | `boolean`                                     | `false`        |         |
