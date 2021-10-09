# Cell

The cell is a single display item in the list.

## Basic Usage

`Cell` can be used alone or in combination with `Cellgroup`. `Cellgroup` can provide upper and lower outer borders for `Cell`.

```tsx | pure
import { Cell } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell.Group>
      <Cell border={false} title="Basic Usage">
        Content
      </Cell>
      <Cell title="Basic Usage">Content</Cell>
    </Cell.Group>
  </>,
  mountNode,
);
```

## Custom Title

`title` is a `Reactnode` type. You can customize the title content by setting `title`.

```tsx | pure
import { Cell } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell title="Custom Title Content">content</Cell>
    <Cell title="Custom Title Content">content</Cell>
  </>,
  mountNode,
);
```

## Custom Icon

`leftIcon` and `rightIcon` are types of `ReactNode`. You can customize the left and right icons.

```tsx | pure
import { Cell,Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell title="Custom Icon" leftIcon={<Icon name="arrow-down" />}>
      Content
    </Cell>
    <Cell title="Custom Icon" rightIcon={<Icon name="arrow-down" />}>
      Content
    </Cell>
  </>
  mountNode,
);
```

## Clickable

The `clickable` attribute enables the `Cell` component to have a click effect.

```tsx | pure
import { Cell } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell title="Clickable" clickable>
      Content
    </Cell>
  </>,
  mountNode,
);
```

## Children Only

When only `children` are set, the content will be aligned to the left.

```tsx | pure
import { Cell } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell>Only Children</Cell>
    <Cell>Only Children</Cell>
  </>,
  mountNode,
);
```

## Description Information

The `description` attribute is `Reactnode`, which represents user-defined description information.

```tsx | pure
import { Cell } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell itemsAlign="bottom" description="Description">
      Content
    </Cell>
    <Cell itemsAlign="bottom" description={<div>Description</div>}>
      Content
    </Cell>
  </>,
  mountNode,
);
```

## Alignment

You can set 'top' | 'middle' | 'bottom' through the `itemalign` attribute to indicate the top、middle and bottom alignment respectively.

```tsx | pure
import { Cell } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell itemsAlign="top" description="Description">
      Content
    </Cell>
    <Cell itemsAlign="middle" description="Description">
      Content
    </Cell>
  </>,
  mountNode,
);
```

## API

| Parameter        | Description                            | Type                              | Default value |
| ---------------- | -------------------------------------- | --------------------------------- | ------------- |
| title            | Title                                  | `ReactNode`                       | -             |
| titleProps       | Title Properties                       | `ReactNode`                       | -             |
| content          | Right content                          | `ReactNode`                       | -             |
| contentProps     | Right content properties               | `HTMLAttributes<HTMLDivElement>`  | -             |
| description      | Description below the title            | `ReactNode`                       | -             |
| descriptionProps | Description properties below the title | `HTMLAttributes<HTMLDivElement`   | -             |
| leftIcon         | Left custom icon                       | `ReactNode`                       | -             |
| leftIconProps    | Left custom icon properties            | `HTMLAttributes<HTMLSpanElement>` | -             |
| rightIcon        | Custom icon on the right               | `ReactNode`                       | -             |
| rightIconProps   | Right custom icon properties           | `HTMLAttributes<HTMLSpanElement>` | -             |
| border           | `Cell` border                          | `boolean`                         | `true`        |
| itemsAlign       | Alignment                              | `'top' \| 'middle' \| 'bottom'`   | -             |
| clickable        | Can I click                            | `boolean`                         | `false`       |

## CellGroup API

| Parameter  | Description             | Type                             | Default value |
| ---------- | ----------------------- | -------------------------------- | ------------- |
| title      | Group title             | `ReactNode`                      | -             |
| titleProps | Group title             | `HTMLAttributes<HTMLDivElement>` | -             |
| border     | Show outer border       | `boolean`                        | `true`        |
| bodyProps  | Outer border properties | `HTMLAttributes<HTMLDivElement>` | -             |
