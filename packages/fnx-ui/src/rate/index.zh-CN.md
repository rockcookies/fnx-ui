# Rate 评分

用于对事物进行评级操作。

## 基础用法

通过 `value` 属性设置显示当前分值， `defaultValue` 属性设置默认分值。

```tsx | pure
import { Rate } from 'fnx-ui';

ReactDOM.render(
  <>
    <Rate defaultValue={2} />
  </>,
  mountNode,
);
```

## 自定义图标

通过 `character` 属性自定义图标样式。

```tsx | pure
import { Rate } from 'fnx-ui';

ReactDOM.render(
  <>
    <Rate character="A" />
  </>,
  mountNode,
);
```

## 自定义未选中图标

通过 `voidCharacter` 属性自定义图标样式。

```tsx | pure
import { Rate } from 'fnx-ui';

ReactDOM.render(
  <>
    <Rate character="A" voidCharacter="B" />
  </>,
  mountNode,
);
```

## 自定义选中和未选中颜色

通过 `color` ，`voidColor` 属性自定义图标样式。

```tsx | pure
import { Rate } from 'fnx-ui';

ReactDOM.render(
  <>
    <Rate color="yellow" voidColor="blue" />
  </>,
  mountNode,
);
```

## 自定义图标大小

通过 `size` 属性自定义图标大小。

```tsx | pure
import { Rate } from 'fnx-ui';

ReactDOM.render(
  <>
    <Rate size="40px" defaultValue={2} />
  </>,
  mountNode,
);
```

## 自定义数量

通过 `count` 属性自定义数量。

```tsx | pure
import { Rate } from 'fnx-ui';
ReactDOM.render(
  <>
    <Rate count={4} defaultValue={2} />
  </>,
  mountNode,
);
```

## 禁用状态

通过 `disabled` 属性禁用 `Rate`。

```tsx | pure
import { Rate } from 'fnx-ui';
ReactDOM.render(
  <>
    <Rate disabled defaultValue={2} />
  </>,
  mountNode,
);
```

## 半星

通过 `allowHalf` 属性实现选择半星。

```tsx | pure
import { Rate } from 'fnx-ui';
ReactDOM.render(
  <>
    <Rate allowHalf={true} defaultValue={2.5} />
  </>,
  mountNode,
);
```

## 只读

通过 `readonly` 属性实现只读功能。

```tsx | pure
import { Rate } from 'fnx-ui';
ReactDOM.render(
  <>
    <Rate readonly defaultValue={2} />
  </>,
  mountNode,
);
```

## 监听事件

`onChange` 方法返回当前的 `value`。

```tsx | pure
import { Rate,Toast } from 'fnx-ui';

const onChange=(value)=>{ Toast.show(value)} }

ReactDOM.render(
  <>
    <Rate onChange={onChange} defaultValue={2} />
  </>,
  mountNode,
);
```

## API

| 参数              | 说明                         | 类型               | 默认值    |
| ----------------- | ---------------------------- | ------------------ | --------- |
| value             | 当前分值                     | `number`           | `0`       |
| defaultValue      | 默认分值                     | `number`           | `0`       |
| count             | 图标总数                     | `number \| string` | `5`       |
| gutter            | 图标间距，默认单位为 `px`    | `number \| string` | `4`       |
| color             | 选择时的颜色                 | `string`           | -         |
| voidColor         | 未选择时的颜色               | `string`           | -         |
| size              | 图标大小，默认单位为 `px`    | `number \| string` | `28`      |
| character         | 自定义图标                   | `ReactNode`        | -         |
| voidCharacter     | 未选中的图标                 | `ReactNode`        | -         |
| disabled          | 是否禁用                     | `boolean`          | `false`   |
| disabledColor     | 禁用时的颜色                 | `string`           | `#c8c9cc` |
| voidDisabledColor | 未选中禁用时的颜色           | `string`           | -         |
| allowHalf         | 是否支持半星                 | `boolean`          | `false`   |
| readonly          | 是否支持只读                 | `boolean`          | `false`   |
| touchable         | 是否可以通过滑动手势选择评分 | `boolean`          | `true`    |

## 事件

| 事件名   | 说明             | 回调参数          |
| -------- | ---------------- | ----------------- |
| onChange | 关闭通知栏时触发 | `(value: number)` |
