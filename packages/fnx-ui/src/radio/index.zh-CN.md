# Radio 单选框

用于在多个备选项中选中单个状态。

## 基础用法

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue={1}>
      <Radio value={1}>Content</Radio>
      <Radio value={2}>Content</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## 禁用状态

通过 `disabled` 属性禁止选项切换，在 `Radio` 上设置 `disabled` 可以禁用单个选项，`Radio.Group`可以禁用组选项。

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue={2} disabled>
      <Radio value={1}>Content</Radio>
      <Radio value={2}>Content</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## 自定义形状与颜色

通过 `iconShape` 改变形状；通过 `iconCheckedColor` 改变颜色。

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue={1}>
      <Radio value={1} iconShape="square" iconCheckedColor="blue">
        Content
      </Radio>
      <Radio value={2}>Content</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## 自定义大小

`iconSize`传入数字类型，设置字体大小，单位 `px`。

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio iconSize={20} defaultChecked>
      Content
    </Radio>
  </>,
  mountNode,
);
```

## 自定义图标

`icon` 为 `ReactNode` 类型，自定义图标。

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group
      defaultValue={2}
      iconShape="plain"
      icon={
        <img src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      }
      checkedIcon={
        <img src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      }
    >
      <Radio value={1}>Content</Radio>
      <Radio value={2}>Content</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## 禁用文本点击

设置 `labelDisabled` 属性，禁用文本点击。

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio labelDisabled defaultChecked>
      Content
    </Radio>
  </>,
  mountNode,
);
```

## 水平排列

`direction` 控制文本跟选框的显示方向。

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Radio.Group defaultValue={2} direction="horizontal">
      <Radio value={1}>Content</Radio>
      <Radio value={2}>Content</Radio>
    </Radio.Group>
  </>,
  mountNode,
);
```

## 搭配单元格组件使用

```tsx
import { Radio } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell.Group>
      {[1, 2, 3].map((key) => {
        return (
          <Cell
            key={key}
            clickable
            title="Radio Cell"
            rightIcon={<Radio checked={radio === key} />}
          />
        );
      })}
    </Cell.Group>
  </>,
  mountNode,
);
```

## Radio API

| 参数             | 说明                                | 类型                             | 默认值   |
| ---------------- | ----------------------------------- | -------------------------------- | -------- |
| value            | 根据 `value` 进行比较，判断是否选中 | `string \| number \| boolean`    | -        |
| defaultChecked   | 初始化是否选中                      | `boolean`                        | `false`  |
| skipGroup        | 是否接受 `RadioGroup Props`         | `boolean`                        | `false`  |
| checked          | 指定当前是否选中                    | `boolean`                        | `false`  |
| disabled         | 是否禁用所有复选框                  | `boolean`                        | `false`  |
| iconSize         | 复选框的图标大小，默认单位为 `px`   | `string \| number`               | -        |
| iconShape        | 复选框的图标形状                    | `'square' \| 'round' \| 'plain'` | `square` |
| labelDisabled    | 复选框禁用文本点击                  | `boolean`                        | `false`  |
| iconPosition     | 设置图标位置                        | `'left' \| 'right'`              | `left`   |
| iconCheckedColor | 设置选中状态颜色                    | `string`                         | -        |
| icon             | 设置自定未选中图标                  | `ReactNode`                      | -        |
| checkedIcon      | 设置自定义选中图标                  | `ReactNode`                      | -        |

## RadioGroup API

| 参数             | 说明                                | 类型                             | 默认值     |
| ---------------- | ----------------------------------- | -------------------------------- | ---------- |
| value            | 根据 `value` 进行比较，判断是否选中 | `string \| number \| boolean`    | -          |
| defaultChecked   | 初始化是否选中                      | `boolean`                        | `false`    |
| direction        | 控制排列方向                        | `'vertical' \| 'horizontal'`     | `vertical` |
| disabled         | 是否禁用所有复选框                  | `boolean`                        | `false`    |
| iconSize         | 所有复选框的图标大小，默认单位为 px | `string \| number`               | -          |
| iconShape        | 所有复选框的图标形状                | `'square' \| 'round' \| 'plain'` | `square`   |
| labelDisabled    | 所有复选框禁用文本点击              | `boolean`                        | `false`    |
| iconPosition     | 设置所有图标位置                    | `'left' \| 'right'`              | `left`     |
| iconCheckedColor | 设置所有选中状态颜色                | `string`                         | -          |
| icon             | 设置所有自定未选中图标              | `ReactNode`                      | -          |
| checkedIcon      | 设置所有自定义选中图标              | `ReactNode`                      | -          |

## 事件

| 事件名   | 说明               | 回调参数             |
| -------- | ------------------ | -------------------- |
| onChange | 选中状态改变时触发 | `(checked: boolean)` |

## RadioGroup 事件

| 事件名   | 说明                                    | 回调参数 |
| -------- | --------------------------------------- | -------- |
| onChange | 值改变时触发，类型取决于 `value` 的类型 | `(v: T)` |
