# Overlay 遮罩层

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

## 基础用法

```tsx
import { Overlay } from 'fnx-ui';

ReactDOM.render(
  <>
    <Overlay visible />
  </>,
  mountNode,
);
```

## 嵌入内容

可以在遮罩层上嵌入任意内容。

```tsx
import { Overlay } from 'fnx-ui';

ReactDOM.render(
  <>
    <Overlay visible>
      <div>Content</div>
    </Overlay>
  </>,
  mountNode,
);
```

## API

| 参数               | 说明                                             | 类型               | 默认值  |
| ------------------ | ------------------------------------------------ | ------------------ | ------- |
| visible            | 是否展示遮罩层                                   | `boolean`          | `false` |
| zIndex             | z-index 层级                                     | `number`           | `1`     |
| lockScroll         | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | `boolean`          | `true`  |
| transitionDuration | 动画时长，单位秒，设置为 0 可以禁用动画          | `number \| string` | `300`   |
