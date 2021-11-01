# Badge 徽标

图标右上角的圆形徽标数字，一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 基础用法

设置 `count` 属性后，`Badge` 会在子元素的右上角显示对应的徽标，也可以通过 `dot` 来显示小红点。

```tsx
import { Badge } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count={10}>
      <div>content</div>
    </Badge>
    <Badge count={0} showZero>
      <div>content</div>
    </Badge>
    <Badge count="hot">
      <div>content</div>
    </Badge>
    <Badge dot>
      <div>content</div>
    </Badge>
  </>,
  mountNode,
);
```

## 溢出

设定 `max` 来处理溢出情况。

```tsx
import { Badge } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count={20} max={9}>
      <div>content</div>
    </Badge>
    <Badge count={50} max={20}>
      <div>content</div>
    </Badge>
    <Badge count={200} max={99}>
      <div>content</div>
    </Badge>
  </>,
  mountNode,
);
```

## 自定义颜色

通过 `color` 属性来设置徽标的颜色。

```tsx
import { Badge } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count={5} color="var(--fnx-primary-color)">
      <div>content</div>
    </Badge>
    <Badge count={10} color="var(--fnx-warning-color)">
      <div>content</div>
    </Badge>
    <Badge dot color="var(--fnx-success-color)">
      <div>content</div>
    </Badge>
  </>,
  mountNode,
);
```

## 自定义徽标内容

通过 `count` 属性插入一些自定义内容。

```tsx
import { Badge, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count={<Icon name="success" />}>
      <div>content</div>
    </Badge>
    <Badge count="hot">
      <div>content</div>
    </Badge>
    <Badge count={<Icon name="arrow-right" />}>
      <div>content</div>
    </Badge>
  </>,
  mountNode,
);
```

## 独立展示

当 `Badge` 没有子元素时，会作为一个独立的元素进行展示。

```tsx
import { Badge, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Badge count={<Icon name="success" />}>
      <div>content</div>
    </Badge>
    <Badge count="hot">
      <div>content</div>
    </Badge>
    <Badge count={<Icon name="arrow-right" />}>
      <div>content</div>
    </Badge>
  </>,
  mountNode,
);
```

## API

### Props

| 名称     | 说明                                                                        | 类型                   | 默认值                    |
| -------- | --------------------------------------------------------------------------- | ---------------------- | ------------------------- |
| count    | 徽标内容                                                                    | `ReactNode`            | -                         |
| showZero | 当 `count` 为数字 0 时，是否展示徽标                                        | `boolean`              | `true`                    |
| dot      | 是否展示为小红点                                                            | `boolean`              | `false`                   |
| max      | 最大值，超过最大值会显示 `{max}+` ，仅当 `count` 为数字时有效               | `number \| string`     | -                         |
| color    | 徽标背景颜色                                                                | `string`               | `var(--fnx-danger-color)` |
| offset   | 设置徽标的偏移量，数组的两项分别对应水平和垂直方向的偏移量，默认单位为 `px` | `number[] \| string[]` | -                         |
