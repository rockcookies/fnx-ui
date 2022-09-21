# Space 间距

设置元素之间的间距。

## 基础用法

Space 组件会在各个子组件之间设置一定的间距，默认间距为 `8px`。

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

## 垂直排列

将 `direction` 属性设置为 `vertical`，可以设置垂直方向排列的间距。

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

## 自定义间距

通过调整 `size` 的值来控制间距的大小。传入 `number` 类型时，会默认使用 `px` 单位；也可以传入 `string` 类型，比如 `2rem` 或 `5vw` 等带有单位的值。

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

## 对齐方式

通过调整 `align` 的值来设置子元素的对齐方式, 可选值为 `start`, `center` ,`end` ,`baseline`，在水平模式下的默认值为 `center`。

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

| 名称      | 说明                                                                             | 类型                                          | 默认值         | 版本 |
| --------- | -------------------------------------------------------------------------------- | --------------------------------------------- | -------------- | ---- |
| direction | 间距方向                                                                         | `'vertical' \| 'horizontal'`                  | `'horizontal'` |      |
| align     | 设置子元素的对齐方式                                                             | `'start' \| 'end' \| 'center' \| 'baseline'`  | `'center'`     |      |
| size      | 间距大小，如 `20px` `2em`，默认单位为 `px`，支持数组形式来分别设置横向和纵向间距 | `number \| string \| number[] \| string[] \|` | `'8px'`        |      |
| wrap      | 是否自动换行，仅适用于水平方向排列                                               | `boolean`                                     | `false`        |      |
| fill      | 是否让 Space 变为一个块级元素，填充整个父元素                                    | `boolean`                                     | `false`        |      |
