# Checkbox 复选框

用于在选中和非选中状态之间进行切换。

## 基础用法

通过 `checked` 绑定复选框的勾选状态，`defaultChecked` 是复选框默认的勾选状态。

```tsx | pure
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox checked>Content</Checkbox>
  </>,
  mountNode,
);
```

## 禁用状态

通过设置 `disabled` 属性可以禁用复选框。

```tsx | pure
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox checked disabled>
      Content
    </Checkbox>
  </>,
  mountNode,
);
```

## 自定义形状颜色

将 `iconShape` 属性设置为 `square` ，复选框的形状会变成方形。

```tsx | pure
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox iconShape="square">Content</Checkbox>
  </>,
  mountNode,
);
```

## 自定义颜色

通过 `iconCheckedColor` 属性设置选中状态的图标颜色。

```tsx | pure
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox iconCheckedColor="red">Content</Checkbox>
  </>,
  mountNode,
);
```

## 自定义大小

通过 `iconSize` 属性可以自定义图标的大小。

```tsx | pure
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox iconSize="24px">Content</Checkbox>
  </>,
  mountNode,
);
```

## 自定义图标

通过 `icon` 自定义未选中图标，`checkedIcon` 自定义选中图标。

```tsx | pure
import { Toast } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox
      icon="icon"
      checkedIcon={<div>Custom Icon</div>}
      iconShape="plain"
    >
      Content
    </Checkbox>
  </>,
  mountNode,
);
```

## 禁用文本点击

设置 `labelDisabled` 属性后，点击图标以外的内容不会触发复选框切换。

```tsx | pure
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox labelDisabled>Content</Checkbox>
  </>,
  mountNode,
);
```

## API

| 参数             | 说明                            | 类型                             | 默认值   |
| ---------------- | ------------------------------- | -------------------------------- | -------- |
| value            | 选项的值                        | `string \| number \| boolean`    | `false`  |
| checked          | 指定当前是否选中                | `boolean`                        | `false`  |
| defaultChecked   | 初始是否选中                    | `boolean`                        | `false`  |
| skipGroup        | 是否不受 CheckboxGroup 控制     | `boolean`                        | `false`  |
| disabled         | 失效状态                        | `boolean`                        | `false`  |
| icon             | 自定未选中图标                  | `ReactNode`                      | -        |
| checkedIcon      | 自定义选中图标                  | `ReactNode`                      | -        |
| iconSize         | 复选框的图标大小，默认单位为 px | `string \| number`               | -        |
| iconCheckedColor | 选中状态颜色                    | `string`                         | -        |
| iconPosition     | 图标位置                        | `'left' \| 'right'`              | `left`   |
| iconShape        | 图标形状                        | `'square' \| 'round' \| 'plain'` | `square` |
| labelDisabled    | 禁用文本点击                    | `boolean`                        | `false`  |

## Checkbox 事件

| 事件名   | 说明                     | 回调参数             |
| -------- | ------------------------ | -------------------- |
| onChange | 当绑定值变化时触发的事件 | `(checked: boolean)` |

## CheckboxGroup API

| 参数             | 说明                                  | 类型                                | 默认值     |
| ---------------- | ------------------------------------- | ----------------------------------- | ---------- |
| value            | 指定选中的选项                        | `string[] \| number[] \| boolean[]` | `[]`       |
| defaultValue     | 默认选中的选项                        | `string[] \| number[] \| boolean[]` | `[]`       |
| direction        | 控制排列方向                          | `'vertical' \| 'horizontal'`        | `vertical` |
| maxCheckedCount  | 最多选中个数                          | `number`                            | -          |
| disabled         | 是否禁用所有复选框                    | `boolean`                           | `false`    |
| iconSize         | 所有复选框的图标大小，默认单位为 `px` | `string \| number`                  | -          |
| iconShape        | 所有复选框的图标形状                  | `'square' \| 'round' \| 'plain'`    | `square`   |
| labelDisabled    | 所有复选框禁用文本点击                | `boolean`                           | `false`    |
| iconPosition     | 设置所有图标位置                      | `'left' \| 'right'`                 | `left`     |
| iconCheckedColor | 设置所有选中状态颜色                  | `string`                            | -          |
| icon             | 设置所有自定未选中图标                | `ReactNode`                         | -          |
| checkedIcon      | 设置所有自定义选中图标                | `ReactNode`                         | -          |

## checkboxGroup 事件

| 事件名   | 说明                     | 回调参数                               |
| -------- | ------------------------ | -------------------------------------- |
| onChange | 当绑定值变化时触发的事件 | `v: string[] \| number[] \| boolean[]` |

### checkboxGroupRef 实例方法

| 名称        | 描述                                                             | 参数                                  |
| ----------- | ---------------------------------------------------------------- | ------------------------------------- |
| toggleAll() | 切换选中状态，传 `true` 为选中，`false` 为取消选中，不传参为取反 | `(options?: { checkAll?: boolean })}` |

### checkboxRef 实例方法

| 名称     | 描述               | 参数 |
| -------- | ------------------ | ---- |
| toggle() | 切换 checkbox 状态 | -    |
