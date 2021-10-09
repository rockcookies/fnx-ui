# Loading 加载

用于展示加载中状态。

## 自定义颜色

通过 `color` 属性设置加载图标的颜色。

```tsx
import { Loading } from 'fnx-ui';

ReactDOM.render(
  <>
    <Loading color="#1989fa" />
  </>,
  mountNode,
);
```

## 自定义尺寸

通过 `size` 属性设置加载图标的大小，默认单位为 `px`。

```tsx
import { Loading } from 'fnx-ui';

ReactDOM.render(
  <>
    <Loading size={24} />
  </>,
  mountNode,
);
```

## 加载文案

可以 `text` 或 `children` 属性设置加载文案。

```tsx
import { Loading } from 'fnx-ui';

ReactDOM.render(
  <>
    <Loading>Loading...</Loading>
  </>,
  mountNode,
);
```

## 垂直排列

设置 `vertical` 属性后，图标和文案会垂直排列。

```tsx
import { Loading } from 'fnx-ui';

ReactDOM.render(
  <>
    <Loading vertical size={24}>
      Loading...
    </Loading>
  </>,
  mountNode,
);
```

## 自定义文案颜色

通过 `color` 或者 `textColor` 属性设置加载文案的颜色。

```tsx
import { Loading } from 'fnx-ui';

ReactDOM.render(
  <>
    <Loading color="#0094ff">Loading...</Loading>
    <Loading textColor="#0094ff">Loading...</Loading>
  </>,
  mountNode,
);
```

## API

| 参数      | 说明                        | 类型               | 默认值               |
| --------- | --------------------------- | ------------------ | -------------------- |
| vertical  | 是否垂直排列图标和文字内容  | `boolean`          | `false`              |
| size      | 加载图标大小，默认单位为 px | `string \| number` | `24`                 |
| color     | 颜色                        | `string`           | `rgb(179, 179, 179)` |
| text      | 文字                        | `string`           | -                    |
| textColor | 文字颜色                    | `string`           | `rgb(110, 110, 110)` |
| textSize  | 文字大小，默认单位为 `px`   | `string \| number` | `14`                 |
