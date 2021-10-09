# Loading

Used to show the status of the load.

## Custom Color

Set the color of the load icon via the `Color` property.

```tsx
import { Loading } from 'fnx-ui';

ReactDOM.render(
  <>
    <Loading color="#1989fa" />
  </>,
  mountNode,
);
```

## Custom Size

Set the size of the load icon via the `size` property, the default unit is `px`.

```tsx
import { Loading } from 'fnx-ui';

ReactDOM.render(
  <>
    <Loading size={24} />
  </>,
  mountNode,
);
```

## Text

Can be loaded with the `Text` or `children` attribute setting.

```tsx
import { Loading } from 'fnx-ui';

ReactDOM.render(
  <>
    <Loading>Loading...</Loading>
  </>,
  mountNode,
);
```

## Vertical

After setting the `vertical` property, the icon and the copy will be arranged vertically.

```tsx
import { Loading } from 'fnx-ui';

ReactDOM.render(
  <>
    <Loading vertical size={24}>
      Loading...
    </Loading>
  </>,
  mountNode,
);
```

## Color

Set the color of the copy copy via `Color` or` TextColor` property.

```tsx
import { Loading } from 'fnx-ui';

ReactDOM.render(
  <>
    <Loading color="#0094ff">Loading...</Loading>
    <Loading textColor="#0094ff">Loading...</Loading>
  </>,
  mountNode,
);
```

## API

| Parameter | Description                                         | Type               | Default value        |
| --------- | --------------------------------------------------- | ------------------ | -------------------- |
| vertical  | Whether vertical arrangement icons and text content | `boolean`          | `false`              |
| size      | Load the icon size, the default unit is `px`        | `string \| number` | `24`                 |
| color     | colour                                              | `string`           | `rgb(179, 179, 179)` |
| text      | Word                                                | `string`           | -                    |
| textColor | Text color                                          | `string`           | `rgb(110, 110, 110)` |
| textSize  | Text size, default unit is `px`                     | `string \| number` | `14`                 |
