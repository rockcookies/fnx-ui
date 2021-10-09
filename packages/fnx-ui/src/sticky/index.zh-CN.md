# Sticky 粘性布局

`Sticky` 组件与 CSS 中 position: sticky 属性实现的效果一致，当组件在屏幕范围内时，会按照正常的布局排列，当组件滚出屏幕范围时，始终会固定在屏幕顶部。

## 基础用法

将内容包裹在 `Sticky` 组件内即可。

```tsx | pure
import { Sticky, Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Sticky>
      <Button type="success">Success</Button>
    </Sticky>
  </>,
  mountNode,
);
```

## 吸顶距离

通过 `offsetTop` 属性可以设置组件在吸顶时与顶部的距离。

```tsx | pure
import { Sticky, Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Sticky offsetTop={50}>
      <Button type="success">Offset Top</Button>
    </Sticky>
  </>,
  mountNode,
);
```

## 指定容器

通过 `containerRef` 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。

```tsx | pure
import { Sticky, Button } from 'fnx-ui';

const Demo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} style={{ height: '150px' }}>
      <Sticky containerRef={() => containerRef.current}>
        <Button>Offset Bottom</Button>
      </Sticky>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## 底端偏移

通过 `offsetBottom` 属性设置底端偏移。

```tsx | pure
import { Sticky, Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Sticky position="bottom" offsetBottom={50}>
      <Button>Offset Bottom</Button>
    </Sticky>
  </>,
  mountNode,
);
```

## API

| 参数         | 说明                 | 类型                                                | 默认值 |
| ------------ | -------------------- | --------------------------------------------------- | ------ |
| zIndex       | 吸顶时的 z-index     | `string \| number`                                  | -      |
| container    | 容器对应的 HTML 节点 | `Element \| (() => Element undefined null) \| null` | -      |
| offsetTop    | 吸顶时与顶部的距离   | `string \| number`                                  | `0`    |
| offsetBottom | 吸底时与底部的距离   | `string \| number`                                  | `0`    |
| position     | 吸附位置             | `'top' \| 'bottom'`                                 | `top`  |

## 事件

| 事件名   | 说明                 | 回调参数                                        |
| -------- | -------------------- | ----------------------------------------------- |
| onChange | 当吸顶状态改变时触发 | `option: { fixed: boolean }`                    |
| onScroll | 滚动时触发           | `option: { fixed: boolean; scrollTop: number }` |

### stickyRef 实例方法

| 名称      | 描述           | 参数 |
| --------- | -------------- | ---- |
| isFixed() | 返回组件的状态 | -    |
