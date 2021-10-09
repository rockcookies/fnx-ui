# Tag 标签

用于标记关键词和概括主要内容。

## 基础用法

通过 `type` 属性控制标签颜色。

```tsx
import { Tag } from 'fnx-ui';

ReactDOM.render(
  <>
    <Tag type="default">Default</Tag>
    <Tag type="primary">Primary</Tag>
    <Tag type="success">Success</Tag>
    <Tag type="danger">Danger</Tag>
    <Tag type="warning">Warning</Tag>
  </>,
  mountNode,
);
```

## 空心样式

设置 `plain` 属性设置为空心样式。

```tsx
import { Tag } from 'fnx-ui';

ReactDOM.render(
  <>
    <Tag theme="plain" type="default">
      Default
    </Tag>
  </>,
  mountNode,
);
```

## 圆角样式

通过 `round` 设置为圆角样式。

```tsx
import { Tag } from 'fnx-ui';

ReactDOM.render(
  <>
    <Tag theme="round" type="primary">
      Round
    </Tag>
  </>,
  mountNode,
);
```

## 标记样式

通过 `theme="mark"` 设置为标记样式(半圆角)。

```tsx
import { Tag } from 'fnx-ui';

ReactDOM.render(
  <>
    <Tag theme="mark" type="primary">
      Mark
    </Tag>
  </>,
  mountNode,
);
```

## 可关闭标签

添加 `closeable` 属性表示标签是可关闭的，关闭标签时会触发 `onClose` 事件，在 `onClose` 事件中可以执行隐藏标签的逻辑。

```tsx
import { Tag } from 'fnx-ui';

const onCloseHandle = () => {};

ReactDOM.render(
  <>
    <Tag onClose={onCloseHandle} type="primary">
      Closeable
    </Tag>
  </>,
  mountNode,
);
```

## 标签大小

通过 `size` 属性调整标签大小。

```tsx
import { Tag } from 'fnx-ui';

ReactDOM.render(
  <>
    <Tag size="sm" type="primary">
      Size
    </Tag>
  </>,
  mountNode,
);
```

## 自定义颜色

通过 `color` 和 `textColor` 属性设置标签颜色。

```tsx
import { Tag } from 'fnx-ui';

ReactDOM.render(
  <>
    <Tag color="red" textColor="blue">
      Color
    </Tag>
  </>,
  mountNode,
);
```

## API

| 参数               | 说明                              | 类型                                                           | 默认值    |
| ------------------ | --------------------------------- | -------------------------------------------------------------- | --------- |
| type               | `tag` 类型                        | `'default' \| 'primary' \| 'success' \| 'danger' \| 'warning'` | `default` |
| size               | `tag` 大小                        | `'sm' \| 'md' 'lg'`                                            | `md`      |
| color              | 标签颜色                          | `string`                                                       | -         |
| textColor          | 文本颜色，优先级高于 `color` 属性 | `string`                                                       | -         |
| visible            | 是否展示标签                      | `boolean`                                                      | -         |
| closeable          | 是否为可关闭标签                  | `boolean`                                                      | `false`   |
| closeIcon          | 自定义关闭标签                    | `ReactNode`                                                    | -         |
| theme              | 标签样式                          | `'plain' \| 'round' \| 'mark'`                                 | -         |
| transitionDuration | 标签过渡动画时间(单位 ms)         | `number`                                                       | `300`     |

## 事件

| 事件名  | 说明           | 回调参数 |
| ------- | -------------- | -------- |
| onClose | 关闭标签时触发 | -        |
