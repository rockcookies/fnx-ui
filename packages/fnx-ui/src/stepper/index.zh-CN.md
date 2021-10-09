# Stepper 步进器

步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。

## 基础用法

```tsx | pure
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper defaultValue={3}></Stepper>
  </>,
  mountNode,
);
```

## 监听事件

可以通过 `onChange` 事件监听到输入值的变化。

```tsx | pure
import { Stepper } from 'fnx-ui';

const [value, setValue] = useState(5);
const onChange = (v) => {
  setValue(v);
};

ReactDOM.render(
  <>
    <Stepper value={value} onChange={onChange}></Stepper>
  </>,
  mountNode,
);
```

## 步长设置

通过 `step` 属性设置每次点击增加或减少按钮时变化的值，默认为 `1`。

```tsx | pure
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper step={2}></Stepper>
  </>,
  mountNode,
);
```

## 限制输入范围

通过 `min` 和 `max` 属性限制输入值的范围。

```tsx | pure
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper min={3} max={100}></Stepper>
  </>,
  mountNode,
);
```

## 限制输入整数

设置 `integer` 属性后，输入框将限制只能输入整数。

```tsx | pure
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper integer></Stepper>
  </>,
  mountNode,
);
```

## 禁用状态

通过设置 `disabled` 属性来禁用步进器，禁用状态下无法点击按钮或修改输入框。

```tsx | pure
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper disabled></Stepper>
  </>,
  mountNode,
);
```

## 禁用输入框

通过设置 `disableInput` 属性来禁用输入框，此时按钮仍然可以点击。

```tsx | pure
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper disableInput></Stepper>
  </>,
  mountNode,
);
```

## 固定小数位数

通过设置 `precision` 属性可以保留固定的小数位数。

```tsx | pure
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper precision={2}></Stepper>
  </>,
  mountNode,
);
```

## 自定义大小

通过 `inputWidth` 属性设置输入框宽度，通过 `buttonSize` 属性设置按钮大小和输入框高度。

```tsx | pure
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper inputWidth="80" buttonSize="40"></Stepper>
  </>,
  mountNode,
);
```

## 圆角风格

将 `theme` 设置为 `round` 来展示圆角风格的步进器。

```tsx | pure
import { Stepper } from 'fnx-ui';

ReactDOM.render(
  <>
    <Stepper theme="round"></Stepper>
  </>,
  mountNode,
);
```

## API

| 参数         | 说明                                    | 类型                       | 默认值     |
| ------------ | --------------------------------------- | -------------------------- | ---------- |
| min          | 最小值                                  | `number \| string \| null` | `1`        |
| max          | 最大值                                  | `number \| string`         | -          |
| defaultValue | 初始值                                  | `number \| string`         | `1`        |
| value        | 当前值                                  | `number \| string`         | -          |
| mode         | 计步器模式，类型是字符串                | `'number' \| 'string'`     | `'string'` |
| step         | 步长，每次点击时改变的值                | `number \| string`         | `1`        |
| inputWidth   | 输入框宽度，默认单位为 `px`             | `number \| string`         | `32px`     |
| buttonSize   | 按钮大小以及输入框高度，默认单位为 `px` | `number \| string`         | `28`       |
| precision    | 固定小数位数                            | `number`                   | `1`        |
| disabled     | 是否禁用步进器                          | `boolean`                  | `false`    |
| disablePlus  | 是否禁用增加按钮                        | `boolean`                  | `false`    |
| disableMinus | 是否禁用减少按钮                        | `boolean`                  | `false`    |
| disableInput | 是否禁用输入框                          | `boolean`                  | `false`    |
| showPlus     | 是否显示增加按钮                        | `boolean`                  | `true`     |
| showMinus    | 是否显示减少按钮                        | `boolean`                  | `true`     |
| allowEmpty   | 是否允许输入的值为空                    | `boolean`                  | `false`    |
| longPress    | 是否开启长按手势                        | `boolean`                  | `true`     |
| showInput    | 是否显示输入框                          | `boolean`                  | `true`     |

## 事件

| 事件名   | 说明               | 回调参数                                                             |
| -------- | ------------------ | -------------------------------------------------------------------- |
| onChange | 监听输入值的变化   | `(value: string \| number \| null)`                                  |
| onStep   | 点击加减按钮的回调 | `(value: T,info: { offset: StepperValue; type: 'minus' \| 'plus' })` |
