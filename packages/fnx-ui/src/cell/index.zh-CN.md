# Cell 单元格

单元格为列表中的单个展示项。

## 基础用法

`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供上下外边框。

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

## 自定义标题内容

`title` 是 `ReactNode` 类型，通过设置 `title` 可以自定义标题内容。

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

## 自定义图标

`leftIcon` 和 `rightIcon` 是 `ReactNode` 类型可以自定义左侧和右侧图标。

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

## 可点击的

通过 `clickable` 属性可以使 `Cell` 组件有点击效果。

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

## 只设置 children

只设置 `children` 时，内容会靠左对齐。

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

## 描述信息

`description` 属性是 `ReactNode` ，表示自定义描述信息。

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

## 对齐

通过 `itemsAlign` 属性可以设置 `'top' | 'middle' | 'bottom'` 分别表示上、中、下对齐。

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

| 参数             | 说明                   | 类型                              | 默认值  |
| ---------------- | ---------------------- | --------------------------------- | ------- |
| title            | 标题                   | `ReactNode`                       | -       |
| titleProps       | 标题属性               | `ReactNode`                       | -       |
| content          | 右侧内容               | `ReactNode`                       | -       |
| contentProps     | 右侧内容属性           | `HTMLAttributes<HTMLDivElement>`  | -       |
| description      | 标题下方的描述信息     | `ReactNode`                       | -       |
| descriptionProps | 标题下方的描述信息属性 | `HTMLAttributes<HTMLDivElement`   | -       |
| leftIcon         | 左侧自定义图标         | `ReactNode`                       | -       |
| leftIconProps    | 左侧自定义图标属性     | `HTMLAttributes<HTMLSpanElement>` | -       |
| rightIcon        | 右侧自定义图标         | `ReactNode`                       | -       |
| rightIconProps   | 右侧自定义图标属性     | `HTMLAttributes<HTMLSpanElement>` | -       |
| border           | `cell` 边框            | `boolean`                         | `true`  |
| itemsAlign       | 对齐方式               | `'top' \| 'middle' \| 'bottom'`   | -       |
| clickable        | 是否可点击             | `boolean`                         | `false` |

## CellGroup API

| 参数       | 说明           | 类型                             | 默认值 |
| ---------- | -------------- | -------------------------------- | ------ |
| title      | 分组标题       | `ReactNode`                      | -      |
| titleProps | 分组标题       | `HTMLAttributes<HTMLDivElement>` | -      |
| border     | 是否显示外边框 | `boolean`                        | `true` |
| bodyProps  | 外边框属性     | `HTMLAttributes<HTMLDivElement>` | -      |
