# Pagination 分页

## 基础用法

```tsx | pure
import { Pagination } from 'fnx-ui';

ReactDOM.render(
  <>
    <Pagination total="80" />
  </>,
  mountNode,
);
```

## 简单模式

将 `mode` 设置为 `simple` 来切换到简单模式，此时分页器不会展示具体的页码按钮。

```tsx | pure
import { Pagination } from 'fnx-ui';

ReactDOM.render(
  <>
    <Pagination total={60} mode="simple" />
  </>,
  mountNode,
);
```

## 显示省略号

设置 `forceEllipses` 后会展示省略号按钮，点击后可以快速跳转。

```tsx | pure
import { Pagination } from 'fnx-ui';

ReactDOM.render(
  <>
    <Pagination
      total={125}
      forceEllipses
      defaultCurrent={8}
      pageItemCount={3}
    />
  </>,
  mountNode,
);
```

## 自定义按钮

通过 `prev`、`next` 等来自定义分页按钮的内容。

```tsx | pure
import { Pagination } from 'fnx-ui';

ReactDOM.render(
  <>
    <Pagination
      total={80}
      slots={{
        prev: <Icon name="arrow-left" />,
        next: <Icon name="arrow-right" />,
      }}
    />
  </>,
  mountNode,
);
```

## API

| 参数             | 说明                         | 类型                  | 默认值  |
| ---------------- | ---------------------------- | --------------------- | ------- |
| defaultCurrent   | 默认选中页码                 | `number`              | `1`     |
| current          | 当前页码                     | `number`              | -       |
| mode             | 显示模式                     | `'multi' \| 'simple'` | `multi` |
| slots            | 自定义上一页，下一页按钮内容 | `PaginationSlots`     | `{}`    |
| total            | 总记录数                     | `number`              | `82`    |
| pageSize         | 每页记录数                   | `number`              | `10`    |
| pageItemCount    | 显示的页码个数               | `number`              | `5`     |
| forceEllipses    | 是否显示省略号               | `boolean`             | `false` |
| hideOnSinglePage | 只有一页时，是否隐藏         | `boolean`             | `false` |

## 事件

| 事件名   | 说明           | 回调参数                              |
| -------- | -------------- | ------------------------------------- |
| onChange | 页码改变时触发 | `(current: number, pageSize: number)` |

### slots 数据结构

| 参数 | 说明             | 类型        | 默认值 |
| ---- | ---------------- | ----------- | ------ |
| prev | 自定义上一页内容 | `ReactNode` | -      |
| next | 自定义下一页内容 | `ReactNode` | -      |
