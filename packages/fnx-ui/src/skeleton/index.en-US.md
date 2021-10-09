# Skeleton

Used to display a set of placebound graphics during the content loading process.

## Basic Usage

Show title placement via `title` attribute, configure the number of banks through `rows` attribute.

```tsx | pure
import { Skeleton } from 'fnx-ui';

ReactDOM.render(
  <>
    <Skeleton title rows={3}>
      Children
    </Skeleton>
  </>,
  mountNode,
);
```

## Avatar

Show avatar occupying graphs via `avatar` attribute.

```tsx | pure
import { Skeleton } from 'fnx-ui';

ReactDOM.render(
  <>
    <Skeleton title avatar rows={3}>
      Children
    </Skeleton>
  </>,
  mountNode,
);
```

## Display Subcomponent

Set the `loading` property to `false` indicates that the content loading is complete, and the placeholder map is hidden and the subcomponents of the `Skeleton`

```tsx | pure
import { Skeleton } from 'fnx-ui';

ReactDOM.render(
  <>
    <Skeleton title avatar loading={false} rows={3}>
      Children
    </Skeleton>
  </>,
  mountNode,
);
```

## API

| Parameter   | Description                                                                                      | Type                                       | Default value |
| ----------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------ | ------------- |
| rows        | Paragraph occupying the number of paragraphs                                                     | `string \| number`                         | -             |
| rowWidth    | Paragraph occupying the width, the number of can be used to set the width of each line           | `number \| string \| string[] \| number[]` | `100%`        |
| title       | Whether to display title placement                                                               | `boolean`                                  | `false`       |
| titleWidth  | Title occupying graph width                                                                      | `string \| number`                         | -             |
| avatar      | Whether to display a avatar placement map                                                        | `boolean`                                  | `false`       |
| loading     | Whether to show the backbone screen, the subcomponent content will be displayed when the `false` | `boolean`                                  | `true`        |
| animate     | Whether to open an animation                                                                     | `boolean`                                  | `true`        |
| titleWidth  | Title occupying graph width                                                                      | `number \| string`                         | `40%`         |
| avatarSize  | Avatar placeholder map size. Unit default `px`                                                   | `number \| string`                         | `32`          |
| avatarShape | Avatar placeholder pattern                                                                       | `'round' \| 'square'`                      | `'round'`     |
