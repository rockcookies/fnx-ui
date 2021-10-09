# Divider 分割线

区隔内容的分割线。

## 基础用法

默认渲染一条水平分割线。

```tsx
import { Divider } from 'antd';

ReactDOM.render(
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
  </>,
  mountNode,
);
```

## 展示文字

通过子元素在可以分割线中间插入内容。

```tsx
import { Divider } from 'antd';

ReactDOM.render(
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
    <Divider>Children</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
  </>,
  mountNode,
);
```

## 内容位置

通过 `contentPosition` 指定内容所在位置。

```tsx
import { Divider } from 'antd';

ReactDOM.render(
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
    <Divider contentPosition="right" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
  </>,
  mountNode,
);
```

## 虚线

添加 `dashed` 属性使分割线渲染为虚线。

```tsx
import { Divider } from 'antd';

ReactDOM.render(
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
    <Divider dashed />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
  </>,
  mountNode,
);
```

## API

| 参数            | 说明                | 类型                            | 默认值   |
| --------------- | ------------------- | ------------------------------- | -------- |
| dashed          | 是否使用虚线        | `boolean`                       | `false`  |
| hairline        | 是否使用 `0.5px` 线 | `boolean`                       | `true`   |
| contentPosition | 内容位置            | `'left' \| 'right' \| 'center'` | `center` |
