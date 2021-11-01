# Swipe 轮播

用于循环播放一组图片或内容。

## 基础用法

```tsx
import { Swipe } from 'fnx-ui';

ReactDOM.render(
  <>
    <Swipe>
      <Swipe.Item>1</Swipe.Item>
      <Swipe.Item>2</Swipe.Item>
      <Swipe.Item>3</Swipe.Item>
    </Swipe>
  </>,
  mountNode,
);
```

## 纵向滚动

设置 `vertical` 属性后滑块会纵向排列，此时需要指定滑块容器的高度。

```tsx
import { Swipe } from 'fnx-ui';

ReactDOM.render(
  <>
    <Swipe height="150" vertical>
      <Swipe.Item>1</Swipe.Item>
      <Swipe.Item>2</Swipe.Item>
      <Swipe.Item>3</Swipe.Item>
    </Swipe>
  </>,
  mountNode,
);
```

## 自定义指示器

通过 `indicator` 可以自定义指示器的样式。

```tsx
import { Swipe } from 'fnx-ui';

const indicator = () => {
  return (
    <div>
      {Array(...Array(3)).map((v, i) => {
        return <span key={i}>{i + 1}</span>;
      })}
    </div>
  );
};

ReactDOM.render(
  <>
    <Swipe indicator={indicator()}>
      <Swipe.Item>1</Swipe.Item>
      <Swipe.Item>2</Swipe.Item>
      <Swipe.Item>3</Swipe.Item>
    </Swipe>
  </>,
  mountNode,
);
```

## 监听事件

在每一页轮播结束后，会触发 `onActiveIndexChange` 事件。

```tsx
import { Swipe } from 'fnx-ui';

const onActiveIndexChange = (current) => {
  console.log(current);
};

ReactDOM.render(
  <>
    <Swipe onActiveIndexChange={onActiveIndexChange}>
      <Swipe.Item>1</Swipe.Item>
      <Swipe.Item>2</Swipe.Item>
      <Swipe.Item>3</Swipe.Item>
    </Swipe>
  </>,
  mountNode,
);
```

## 自定义滑块大小

滑块默认宽度为 100%，可以通过 `width` 属性设置单个滑块的宽度。纵向滚动模式下，可以通过 `height` 属性设置单个滑块的高度。

```tsx
import { Swipe } from 'fnx-ui';

ReactDOM.render(
  <>
    <Swipe width="200">
      <Swipe.Item>1</Swipe.Item>
      <Swipe.Item>2</Swipe.Item>
      <Swipe.Item>3</Swipe.Item>
    </Swipe>
  </>,
  mountNode,
);
```

## 组件实例方法

```tsx
import { Swipe } from 'fnx-ui';

const swipeRef = useRef(null);

ReactDOM.render(
  <>
    <Swipe ref={swipeRef} autoplay="0">
      <Swipe.Item>1</Swipe.Item>
      <Swipe.Item>2</Swipe.Item>
      <Swipe.Item>3</Swipe.Item>
    </Swipe>
    <button onClick={() => swipeRef.current?.prev()}>Previous</button>
    <button onClick={() => swipeRef.current?.next()}>Next</button>
    <button onClick={() => swipeRef.current?.reset()}>Reset</button>
    <button onClick={() => swipeRef.current?.swipeTo(1)}>Appoint</button>
  </>,
  mountNode,
);
```

## API

| 参数               | 说明                      | 类型               | 默认值  |
| ------------------ | ------------------------- | ------------------ | ------- |
| autoplay           | 自动轮播间隔，单位为 `ms` | `number`           | `3000`  |
| duration           | 动画时长，单位为 `ms`     | `number`           | `500`   |
| defaultActiveIndex | 初始位置索引值            | `number \| string` | -       |
| width              | 滑块宽度，单位为`px`      | `number`           | -       |
| height             | 滑块高度，单位为`px`      | `number`           | `0`     |
| loop               | 是否开启循环播放          | `boolean`          | `true`  |
| stopPropagation    | 是否阻止滑动事件冒泡      | `boolean`          | `true`  |
| vertical           | 是否为纵向滚动            | `boolean`          | `false` |
| touchable          | 是否可以通过手势滑动      | `boolean`          | `true`  |
| indicator          | 自定义指示器              | `ReactNode`        | -       |

## 事件

| 事件名              | 说明                 | 回调参数            |
| ------------------- | -------------------- | ------------------- |
| onActiveIndexChange | 每一页轮播结束后触发 | `(current: number)` |

### SwipeRef 实例方法

通过 `ref` 可以获取到 `Swipe` 实例并调用实例方法.

| 方法名    | 说明           | 参数                                                 | 返回值 |
| --------- | -------------- | ---------------------------------------------------- | ------ |
| prev()    | 切换到上一轮播 | -                                                    | -      |
| next()    | 切换到下一轮播 | -                                                    | -      |
| reset()   | 重置轮播       | -                                                    | -      |
| swipeTo() | 切换到指定位置 | `(index: number, options?: { animation?: boolean })` | -      |
