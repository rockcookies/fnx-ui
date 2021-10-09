# Circle 环形进度条

圆环形的进度条组件，支持进度渐变动画。

## 基础用法

`progress` 属性表示动画过程中的实时进度。当 `progress` 发生变化时会以 `speed` 的速度变化到新的值。

```tsx | pure
import { Circle } from 'fnx-ui';

ReactDOM.render(
  <>
    <Circle progress={80}>Content</Circle>
  </>,
  mountNode,
);
```

## 宽度定制

通过 `strokeWidth` 属性来控制进度条宽度。

```tsx | pure
import { Circle } from 'fnx-ui';

ReactDOM.render(
  <>
    <Circle progress={80} strokeWidth={80}>
      Content
    </Circle>
  </>,
  mountNode,
);
```

## 颜色定制

通过 `strokeColor` 属性来控制进度条颜色， `trailColor` 属性来控制轨道颜色。

```tsx | pure
import { Circle } from 'fnx-ui';

ReactDOM.render(
  <>
    <Circle progress={80} trailColor="#ff0000" strokeColor="#ffc0cb">
      Content
    </Circle>
  </>,
  mountNode,
);
```

## 渐变色

`strokeColor` 属性支持传入对象格式来定义渐变色。

```tsx | pure
import { Circle } from 'fnx-ui';

ReactDOM.render(
  <>
    <Circle
      progress={80}
      strokeColor={{
        '0%': '#3fecff',
        '100%': '#6149f6',
      }}
    ></Circle>
  </>,
  mountNode,
);
```

## 逆时针方向

将 `clockwise` 设置为 `false`，进度会从逆时针方向开始。

```tsx | pure
import { Circle } from 'fnx-ui';

ReactDOM.render(
  <>
    <Circle clockwise={false}>Content</Circle>
  </>,
  mountNode,
);
```

## 大小定制

通过 `size` 属性设置圆环直径。

```tsx | pure
import { Circle } from 'fnx-ui';

ReactDOM.render(
  <>
    <Circle size={200}>Content</Circle>
  </>,
  mountNode,
);
```

## API

| 参数          | 说明                                   | 类型                                    | 默认值    |
| ------------- | -------------------------------------- | --------------------------------------- | --------- |
| progress      | 当前进度                               | `number`                                | `100`     |
| size          | 圆环直径，默认单位为 px                | `number \| string`                      | `100px`   |
| strokeColor   | 进度条颜色，传入对象格式可以定义渐变色 | `string \| object`                      | `#1989fa` |
| strokeLinecap | 进度条端点的形状                       | `'butt' \| 'round' \| 'square'`         | `round`   |
| trailColor    | 轨道颜色                               | `string`                                | `-`       |
| fill          | 填充颜色                               | `string`                                | -         |
| speed         | 动画速度                               | `number \| string`                      | `-`       |
| strokeWidth   | 进度条宽度                             | `string \| number`                      | `5`       |
| clockWise     | 是否顺时针增加                         | `boolean`                               | `true`    |
| gapDegree     | 进度条缺口角度                         | `number`                                | `0`       |
| gapPosition   | 进度条缺口位置                         | `'top' \|'right' \| 'bottom' \| 'left'` | `top`     |
