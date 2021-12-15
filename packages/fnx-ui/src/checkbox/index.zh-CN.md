# Checkbox 复选框

用于在选中和非选中状态之间进行切换。

## 基础用法

通过 `checked` 绑定复选框的勾选状态。

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox checked>Option</Checkbox>
  </>,
  mountNode,
);
```

## 禁用状态

通过设置 `disabled` 属性可以禁用复选框。

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox checked disabled>
      Option A
    </Checkbox>
    <Checkbox checked={false} disabled>
      Option B
    </Checkbox>
  </>,
  mountNode,
);
```

## 自定义形状颜色

将 `iconShape` 属性设置为 `square` ，复选框的形状会变成方形。

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox iconShape="square">Option</Checkbox>
  </>,
  mountNode,
);
```

## 自定义颜色

通过 `iconCheckedColor` 属性设置选中状态的图标颜色。

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox iconCheckedColor="red">Option</Checkbox>
  </>,
  mountNode,
);
```

## 自定义大小

通过 `iconSize` 属性可以自定义图标的大小。

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox iconSize="24px">Option</Checkbox>
  </>,
  mountNode,
);
```

## 自定义图标

通过 `icon` 自定义未选中图标，`checkedIcon` 自定义选中图标。

```tsx
import { Checkbox, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox
      icon={<Icon name="circle" />}
      checkedIcon={<Icon name="success" />}
      iconShape="plain"
    >
      Option
    </Checkbox>
  </>,
  mountNode,
);
```

## 禁用文本点击

设置 `labelDisabled` 属性后，点击图标以外的内容不会触发复选框切换。

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox labelDisabled>Option</Checkbox>
  </>,
  mountNode,
);
```

## 复选框组

复选框可以与复选框组一起使用，复选框组通过 `value` 数组绑定复选框的勾选状态。

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox.Group value={['a']}>
      <Checkbox value="a">Option A</Checkbox>
      <Checkbox value="b">Option B</Checkbox>
    </Checkbox.Group>
  </>,
  mountNode,
);
```

## 水平排列

将 `direction` 属性设置为 `horizontal` 后，复选框组会变成水平排列。

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox.Group direction="horizontal">
      <Checkbox value="a">Option A</Checkbox>
      <Checkbox value="b">Option B</Checkbox>
    </Checkbox.Group>
  </>,
  mountNode,
);
```

## 限制最大可选数

通过 `maxCheckedCount` 属性可以限制复选框组的最大可选数。

```tsx
import { Checkbox } from 'fnx-ui';

ReactDOM.render(
  <>
    <Checkbox.Group maxCheckedCount={2}>
      <Checkbox value="a">Option A</Checkbox>
      <Checkbox value="b">Option B</Checkbox>
      <Checkbox value="c">Option C</Checkbox>
    </Checkbox.Group>
  </>,
  mountNode,
);
```

## 全选与反选

通过 Checkbox.Group 实例上的 `toggleAll` 方法可以实现全选与反选。

```tsx
import { Checkbox, Button } from 'fnx-ui';

function App() {
  const checkboxGroupRef = useRef<CheckboxGroupRef | null>(null);

  return (
    <div>
      <Checkbox.Group ref={checkboxGroupRef}>
        <Checkbox value="a">Option A</Checkbox>
        <Checkbox value="b">Option B</Checkbox>
      </Checkbox.Group>

      <Button
        onClick={() => {
          checkboxGroupRef.current?.toggleAll({ checkAll: true });
        }}
      >
        Select All
      </Button>
      <Button
        onClick={() => {
          checkboxGroupRef.current?.toggleAll({ checkAll: false });
        }}
      >
        Unselect All
      </Button>
    </div>
  );
}

ReactDOM.render(
  <>
    <App />
  </>,
  mountNode,
);
```

## 搭配单元格使用

搭配 Cell 使用时，需要通过 Checkbox 实例上的 `toggle` 方法触发切换。

```tsx
import { Cell, Checkbox } from 'fnx-ui';
import { CheckboxRef } from 'fnx-ui/lib/checkbox';
import { useRef } from 'react';

function App() {
  const checkboxRefs = useRef<Record<string, CheckboxRef | null>>({});

  return (
    <Checkbox.Group>
      <Cell.Group inset>
        {['A', 'B'].map((item, idx) => (
          <Cell
            key={item}
            clickable
            title={`option ${item}`}
            rightIcon={
              <Checkbox
                value={item}
                onClick={(e) => {
                  e.stopPropagation();
                }}
                ref={(r) => {
                  checkboxRefs.current[idx] = r;
                }}
              />
            }
            onClick={() => {
              checkboxRefs.current[idx]?.toggle();
            }}
          />
        ))}
      </Cell.Group>
    </Checkbox.Group>
  );
}

ReactDOM.render(
  <>
    <App />
  </>,
  mountNode,
);
```

## API

### Checkbox Basic Props

| 名称             | 说明                      | 类型                                 | 默认值       | 版本 |
| ---------------- | ------------------------- | ------------------------------------ | ------------ | ---- |
| disabled         | 是否禁用复选框            | `boolean`                            | `false`      |      |
| direction        | 选项排列方向              | `'vertical'` \| `'horizontal'`       | `'vertical'` |      |
| checkedIcon      | 自定义选中图标            | `ReactNode`                          | -            |      |
| icon             | 自定未选中图标            | `ReactNode`                          | -            |      |
| iconSize         | 图标大小，默认单位为 `px` | `string` \| `number`                 | -            |      |
| iconPosition     | 图标位置                  | `'left'` \| `'right'`                | `'left'`     |      |
| iconShape        | 图标形状                  | `'square'` \| `'round'` \| `'plain'` | `'square'`   |      |
| iconCheckedColor | 选中状态颜色              | `string`                             | -            |      |
| labelDisabled    | 禁用文本点击              | `boolean`                            | `false`      |      |

### Checkbox Props

Checkbox Props 继承自 Checkbox Basic Props，并新增了如下 Props。

| 名称           | 说明               | 类型                              | 默认值  | 版本 |
| -------------- | ------------------ | --------------------------------- | ------- | ---- |
| value          | 选项标识           | `string` \| `number` \| `boolean` | -       |      |
| checked        | 指定当前是否选中   | `boolean`                         | -       |      |
| defaultChecked | 初始是否选中       | `boolean`                         | `false` |      |
| skipGroup      | 是否与复选框组绑定 | `boolean`                         | `true`  |      |

### Checkbox 事件

| 事件名   | 说明                     | 类型                         | 版本 |
| -------- | ------------------------ | ---------------------------- | ---- |
| onChange | 当绑定值变化时触发的事件 | `(checked: boolean) => void` |      |

### Checkbox 实例方法

| 名称   | 描述         | 类型         | 版本 |
| ------ | ------------ | ------------ | ---- |
| toggle | 切换选中状态 | `() => void` |      |

### Checkbox.Group Props

Checkbox.Group Props 继承自 Checkbox Basic Props，并新增了如下 Props。

| 参数            | 说明           | 类型                                    | 默认值 | 版本 |
| --------------- | -------------- | --------------------------------------- | ------ | ---- |
| value           | 指定选中的选项 | `string[]` \| `number[]` \| `boolean[]` | -      |      |
| defaultValue    | 默认选中的选项 | `string[]` \| `number[]` \| `boolean[]` | `[]`   |      |
| maxCheckedCount | 最多选中个数   | `number`                                | -      |      |

### Checkbox.Group 事件

| 事件名   | 说明                     | 类型                                                 | 版本 |
| -------- | ------------------------ | ---------------------------------------------------- | ---- |
| onChange | 当绑定值变化时触发的事件 | `(value: string[] \| number[] \| boolean[]) => void` |      |

### Checkbox.Group 实例方法

| 名称      | 描述                                                             | 类型                                         | 版本 |
| --------- | ---------------------------------------------------------------- | -------------------------------------------- | ---- |
| toggleAll | 切换选中状态，传 `true` 为选中，`false` 为取消选中，不传参为取反 | `(options?: { checkAll?: boolean }) => void` |      |
