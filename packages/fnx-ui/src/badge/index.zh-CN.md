# Badge 徽标

在右上角展示徽标数字或小红点。

## 基础用法

设置 `count` 属性后，`Badge` 会在子元素的右上角显示对应的徽标，也可以通过 `dot` 来显示小红点。

```tsx | pure
import { Badge } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count="hot">Content</Badge>
  </>,
  mountNode,
);
```

## 最大值

设置 `max` 属性后，当 `count` 的数值超过最大值时且 `count` 类型是 `number` ，会自动显示为`{max}+` 。

```tsx | pure
import { Badge } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count="100" max={99}>
      Content
    </Badge>
  </>,
  mountNode,
);
```

## 自定义颜色

通过 `color` 属性来设置徽标的颜色。

```tsx | pure
import { Badge } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count="hot">Content</Badge>
  </>,
  mountNode,
);
```

## 独立展示

当 `Badge` 没有子元素时，会作为一个独立的元素进行展示。

```tsx | pure
import { Badge } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count="100">Content</Badge>
  </>,
  mountNode,
);
```

## API

| 参数     | 说明                                                                        | 类型                   | 默认值    |
| -------- | --------------------------------------------------------------------------- | ---------------------- | --------- |
| count    | 徽标内容                                                                    | `ReactNode`            | `8`       |
| showZero | 当 `count` 为数字 0 时，是否展示徽标                                        | `boolean`              | `true`    |
| dot      | 是否展示为小红点                                                            | `boolean`              | `false`   |
| max      | 最大值，超过最大值会显示 `{max}+` ，仅当 `count` 为数字时有效               | `number \| string`     | -         |
| color    | 徽标背景颜色                                                                | `string`               | `#ee0a24` |
| offset   | 设置徽标的偏移量，数组的两项分别对应水平和垂直方向的偏移量，默认单位为 `px` | `number[] \| string[]` | -         |
