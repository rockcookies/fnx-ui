# Cell

The cell is a single display item in the list.

## Basic Usage

`Cell` can be used alone or in combination with `Cell.group`.

```tsx
import { Cell } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell.Group border>
      <Cell title="Title">Content</Cell>
      <Cell title="Title" description="Description">
        Content
      </Cell>
    </Cell.Group>
  </>,
  mountNode,
);
```

## Inset Grouped

Use `inset` property of `Cell.Group`, You can convert cells into rounded card styles.

```tsx
import { Cell } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell.Group inset>
      <Cell title="Title">Content</Cell>
      <Cell title="Title">Content</Cell>
    </Cell.Group>
  </>,
  mountNode,
);
```

## Add Icon

Use `leftIcon` and `rightIcon` to customize the left and right icons.

```tsx
import { Cell, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell title="Title" leftIcon={<Icon name="success" />}>
      Content
    </Cell>
    <Cell title="Title" rightIcon={<Icon name="arrow-right" />}>
      Content
    </Cell>
  </>
  mountNode,
);
```

## Simple mode

When only `children` property is set, the content will be aligned to the left.

```tsx
import { Cell } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell>Content</Cell>
  </>,
  mountNode,
);
```

## Clickable

The `clickable` property enables the `Cell` to have a click effect.

```tsx
import { Cell, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell title="Title" clickable rightIcon={<Icon name="arrow-right" />}>
      Content
    </Cell>
  </>,
  mountNode,
);
```

## Group Title

Use `title` property of `Cell.Group` to set group title.

```tsx
import { Cell } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell.Group title="Group 1">
      <Cell title="Title">Content</Cell>
    </Cell.Group>
    <Cell.Group title="Group 2">
      <Cell title="Title">Content</Cell>
    </Cell.Group>
  </>,
  mountNode,
);
```

## Alignment

Use `top` , `middle` and `bottom` option through the `itemAlign` property to set the top、middle and bottom alignment respectively.

```tsx
import { Cell } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell itemsAlign="top" title="Title" description="Description">
      Content
    </Cell>
    <Cell itemsAlign="middle" title="Title" description="Description">
      Content
    </Cell>
    <Cell itemsAlign="bottom" title="Title" description="Description">
      Content
    </Cell>
  </>,
  mountNode,
);
```

## API

### Cell Props

| Name             | Description                                 | Type                              | Default |
| ---------------- | ------------------------------------------- | --------------------------------- | ------- |
| title            | Left title                                  | `ReactNode`                       | -       |
| titleProps       | Left title properties                       | `HTMLAttributes<HTMLDivElement>`  | -       |
| content          | Right content                               | `ReactNode`                       | -       |
| contentProps     | Right content properties                    | `HTMLAttributes<HTMLDivElement>`  | -       |
| description      | Description below the title                 | `ReactNode`                       | -       |
| descriptionProps | Description properties below the title      | `HTMLAttributes<HTMLDivElement`   | -       |
| leftIcon         | Left custom icon                            | `ReactNode`                       | -       |
| leftIconProps    | Left custom icon properties                 | `HTMLAttributes<HTMLSpanElement>` | -       |
| rightIcon        | Custom icon on the right                    | `ReactNode`                       | -       |
| rightIconProps   | Right custom icon properties                | `HTMLAttributes<HTMLSpanElement>` | -       |
| border           | Whether to show inner border                | `boolean`                         | `true`  |
| itemsAlign       | Alignment                                   | `'top' \| 'middle' \| 'bottom'`   | `'top'` |
| clickable        | Whether to show click feedback when clicked | `boolean`                         | `false` |

### Cell.Group Props

| Name       | Description                  | Type                             | Default |
| ---------- | ---------------------------- | -------------------------------- | ------- |
| title      | Group Title                  | `ReactNode`                      | -       |
| titleProps | Group title properties       | `HTMLAttributes<HTMLDivElement>` | -       |
| border     | Whether to show outer border | `boolean`                        | `true`  |
| bodyProps  | Body properties              | `HTMLAttributes<HTMLDivElement>` | -       |
| inset      | Whether to be inset grouped  | `boolean`                        | -       |
