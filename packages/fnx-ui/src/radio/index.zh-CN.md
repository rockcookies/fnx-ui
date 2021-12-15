# Radio 单选框

用于在多个备选项中选中单个状态。

## 基础用法

通过 `value` 绑定单选框勾选状态。

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue="A">
      <Radio value="A">Option A</Radio>
      <Radio value="B">Option B</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## 禁用状态

通过设置 `disabled` 属性可以禁用单选框。

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue="A" disabled>
      <Radio value="A">Option A</Radio>
      <Radio value="B">Option B</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## 自定义形状与颜色

将 `iconShape` 属性设置为 `square` ，单选框的形状会变成方形。

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue="A" iconShape="square">
      <Radio value="A">Option A</Radio>
      <Radio value="B">Option B</Radio>
      <Radio value="C" iconShape="round">
        Option C
      </Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## 自定义颜色

通过 `iconCheckedColor` 属性设置选中状态的图标颜色。

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue="A" iconCheckedColor="red">
      <Radio value="A">Option A</Radio>
      <Radio value="B">Option B</Radio>
      <Radio value="C">Option C</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## 自定义大小

通过 `iconSize` 属性可以自定义图标的大小。

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue="A" iconSize={20}>
      <Radio value="A" iconSize={14}>
        Option A
      </Radio>
      <Radio value="B">Option B</Radio>
      <Radio value="C">Option C</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## 自定义图标

通过 `icon` 自定义未选中图标，`checkedIcon` 自定义选中图标。

```tsx
import { Radio, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group
      defaultValue="A"
      icon={<Icon name="circle" />}
      checkedIcon={<Icon name="success" />}
      iconShape="plain"
    >
      <Radio value="A">Option A</Radio>
      <Radio value="B">Option B</Radio>
      <Radio value="C">Option C</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## 禁用文本点击

设置 `labelDisabled` 属性后，点击图标以外的内容不会触发单选框切换。

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue="A" labelDisabled>
      <Radio value="A">Option A</Radio>
      <Radio value="B">Option B</Radio>
      <Radio value="C">Option C</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## 水平排列

将 `direction` 属性设置为 `horizontal` 后，单选框组会变成水平排列。

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue="A" labelDisabled direction="horizontal">
      <Radio value="A">Option A</Radio>
      <Radio value="B">Option B</Radio>
      <Radio value="C">Option C</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## 搭配单元格组件使用

```tsx
import { Cell, Radio } from 'fnx-ui';
import { useState } from 'react';

function App() {
  const [radio, setRadio] = useState('A');

  return (
    <Cell.Group>
      {['A', 'B', 'C'].map((key) => {
        return (
          <Cell
            key={key}
            clickable
            title={`Option ${key}`}
            rightIcon={<Radio checked={radio === key} />}
            onClick={() => {
              setRadio(key);
            }}
          />
        );
      })}
    </Cell.Group>
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

### Radio Basic Props

| 名称             | 说明                      | 类型                                 | 默认值       | 版本 |
| ---------------- | ------------------------- | ------------------------------------ | ------------ | ---- |
| disabled         | 是否禁用单选框            | `boolean`                            | `false`      |      |
| direction        | 选项排列方向              | `'vertical'` \| `'horizontal'`       | `'vertical'` |      |
| checkedIcon      | 自定义选中图标            | `ReactNode`                          | -            |      |
| icon             | 自定未选中图标            | `ReactNode`                          | -            |      |
| iconSize         | 图标大小，默认单位为 `px` | `string` \| `number`                 | -            |      |
| iconPosition     | 图标位置                  | `'left'` \| `'right'`                | `'left'`     |      |
| iconShape        | 图标形状                  | `'square'` \| `'round'` \| `'plain'` | `'square'`   |      |
| iconCheckedColor | 选中状态颜色              | `string`                             | -            |      |
| labelDisabled    | 禁用文本点击              | `boolean`                            | `false`      |      |

### Radio Props

Radio Props 继承自 Radio Basic Props，并新增了如下 Props。

| 名称           | 说明               | 类型                              | 默认值  | 版本 |
| -------------- | ------------------ | --------------------------------- | ------- | ---- |
| value          | 选项标识           | `string` \| `number` \| `boolean` | -       |      |
| checked        | 指定当前是否选中   | `boolean`                         | -       |      |
| defaultChecked | 初始是否选中       | `boolean`                         | `false` |      |
| skipGroup      | 是否与复选框组绑定 | `boolean`                         | `true`  |      |

### Radio 事件

| 事件名   | 说明                     | 类型                         | 版本 |
| -------- | ------------------------ | ---------------------------- | ---- |
| onChange | 当绑定值变化时触发的事件 | `(checked: boolean) => void` |      |

### Radio.Group Props

Radio.Group Props 继承自 Radio Basic Props，并新增了如下 Props。

| 参数         | 说明           | 类型                              | 默认值 | 版本 |
| ------------ | -------------- | --------------------------------- | ------ | ---- |
| value        | 指定选中的选项 | `string` \| `number` \| `boolean` | -      |      |
| defaultValue | 默认选中的选项 | `string` \| `number` \| `boolean` | -      |      |

### Radio.Group 事件

| 事件名   | 说明                     | 类型                                           | 版本 |
| -------- | ------------------------ | ---------------------------------------------- | ---- |
| onChange | 当绑定值变化时触发的事件 | `(value: string \| number \| boolean) => void` |      |
