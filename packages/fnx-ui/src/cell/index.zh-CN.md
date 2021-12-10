# Cell 单元格

单元格为列表中的单个展示项。

## 基础用法

Cell 可以单独使用，也可以与 Cell.Group 搭配使用，Cell.Group 可以为 Cell 提供上下外边框。

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

## 卡片风格

通过 Cell.Group 的 `inset` 属性，可以将单元格转换为圆角卡片风格。

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

## 自定义图标

通过 `leftIcon` 和 `rightIcon` 属性可以自定义左侧和右侧图标。

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

## 极简模式

只设置 `children` 时，内容会靠左对齐。

```tsx
import { Cell } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell>Content</Cell>
  </>,
  mountNode,
);
```

## 可点击的

通过 `clickable` 属性可以使 Cell 组件有点击效果。

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

## 分组标题

通过 Cell.Group 的 `title` 属性可以指定分组标题。

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

## 对齐

通过 `itemsAlign` 属性可以设置 `top` 、`middle` 或 `bottom` 分别表示垂直方向上、中、下对齐。

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

| 名称             | 说明                   | 类型                                | 默认值  | 版本 |
| ---------------- | ---------------------- | ----------------------------------- | ------- | ---- |
| title            | 左侧标题               | `ReactNode`                         | -       |      |
| titleProps       | 左侧标题属性           | `HTMLAttributes<HTMLDivElement>`    | -       |      |
| content          | 右侧内容               | `ReactNode`                         | -       |      |
| contentProps     | 右侧内容属性           | `HTMLAttributes<HTMLDivElement>`    | -       |      |
| description      | 标题下方的描述信息     | `ReactNode`                         | -       |      |
| descriptionProps | 标题下方的描述信息属性 | `HTMLAttributes<HTMLDivElement`     | -       |      |
| leftIcon         | 左侧自定义图标         | `ReactNode`                         | -       |      |
| leftIconProps    | 左侧自定义图标属性     | `HTMLAttributes<HTMLSpanElement>`   | -       |      |
| rightIcon        | 右侧自定义图标         | `ReactNode`                         | -       |      |
| rightIconProps   | 右侧自定义图标属性     | `HTMLAttributes<HTMLSpanElement>`   | -       |      |
| border           | 是否显示内边框         | `boolean`                           | `true`  |      |
| itemsAlign       | 对齐方式               | `'top'` \| `'middle'` \| `'bottom'` | `'top'` |      |
| clickable        | 是否可点击             | `boolean`                           | `false` |      |

### Cell.Group Props

| 名称       | 说明                   | 类型                             | 默认值 | 版本 |
| ---------- | ---------------------- | -------------------------------- | ------ | ---- |
| title      | 分组标题               | `ReactNode`                      | -      |      |
| titleProps | 分组标题属性           | `HTMLAttributes<HTMLDivElement>` | -      |      |
| border     | 是否显示外边框         | `boolean`                        | `true` |      |
| inset      | 是否展示为圆角卡片风格 | `boolean`                        | -      |      |
| bodyProps  | 内容属性               | `HTMLAttributes<HTMLDivElement>` | -      |      |
