# Skeleton 骨架屏

用于在内容加载过程中展示一组占位图形。

## 基础用法

通过 `title` 属性显示标题占位图，通过 `rows` 属性配置占位段落行数。

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

## 显示头像

通过 `avatar` 属性显示头像占位图。

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

## 展示子组件

将 `loading` 属性设置成 `false` 表示内容加载完成，此时会隐藏占位图，并显示 `Skeleton` 的子组件。

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

| 参数        | 说明                                          | 类型                                       | 默认值    |
| ----------- | --------------------------------------------- | ------------------------------------------ | --------- |
| rows        | 段落占位图行数 段落占位图行数                 | `string \| number`                         | -         |
| rowWidth    | 段落占位图宽度，可传数组来设置每一行的宽度    | `number \| string \| string[] \| number[]` | `100%`    |
| title       | 是否显示标题占位图                            | `boolean`                                  | `false`   |
| titleWidth  | 标题占位图宽度                                | `string \| number`                         | -         |
| avatar      | 是否显示头像占位图                            | `boolean`                                  | `false`   |
| loading     | 是否显示骨架屏，传 `false` 时会展示子组件内容 | `boolean`                                  | `true`    |
| animate     | 是否开启动画                                  | `boolean`                                  | `true`    |
| titleWidth  | 标题占位图宽度                                | `number \| string`                         | `40%`     |
| avatarSize  | 头像占位图大小.单位默认 `px`                  | `number \| string`                         | `32`      |
| avatarShape | 头像占位图形状                                | `'round' \| 'square'`                      | `'round'` |
