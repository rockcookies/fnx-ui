# Empty 空状态

空状态时的占位提示。

## 基础用法

```tsx
import { Empty } from 'fnx-ui';

ReactDOM.render(
  <>
    <Empty description="Description" />
  </>,
  mountNode,
);
```

## 展示标题

```tsx
import { Empty } from 'fnx-ui';

ReactDOM.render(
  <>
    <Empty title="Title" description="Description" />
  </>,
  mountNode,
);
```

## 自定义图片

使用 `image` 属性自定义图片，支持传入图片 `url` 或 `ReactNode` 元素。

```tsx
import { Empty } from 'fnx-ui';

ReactDOM.render(
  <>
    <Empty
      image="https://dummyimage.com/200x200/000/fff.jpg"
      description="Description"
    />
  </>,
  mountNode,
);
```

## 底部内容

通过 `children` 属性在 Empty 组件增加附属内容。

```tsx
import { Button, Empty } from 'fnx-ui';

ReactDOM.render(
  <>
    <Empty description="Description">
      <Button type="primary">Button</Button>
    </Empty>
  </>,
  mountNode,
);
```

## API

### Empty Props

| 名称        | 说明                                         | 类型        | 默认值 | 版本 |
| ----------- | -------------------------------------------- | ----------- | ------ | ---- |
| image       | 设置显示图片，为 string 时表示自定义图片地址 | `ReactNode` | -      |      |
| title       | 自定义标题                                   | `ReactNode` | -      |      |
| description | 自定义描述文字                               | `ReactNode` | -      |      |
| children    | 自定义附属内容                               | `ReactNode` | -      |      |
