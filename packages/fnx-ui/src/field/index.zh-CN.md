# Field 输入框

用户可以在文本框内输入或编辑文字。

## 基础用法

可以通过 `value` 绑定输入框的值，通过 `placeholder` 设置占位提示文字。

```tsx
import { Field } from 'fnx-ui';

ReactDOM.render(
  <>
    <Field label="Label">
      <Field.Input placeholder="Please enter text" />
    </Field>
  </>,
  mountNode,
);
```

## 自定义类型

根据 `type` 属性定义不同类型的输入框，默认值为 `text`。

```tsx
import { Cell, Field } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell.Group inset>
      <Field label="Text">
        <Field.Input type="text" placeholder="Please enter text" />
      </Field>
      <Field label="Phone">
        <Field.Input type="tel" placeholder="Please enter phone number" />
      </Field>
      <Field label="Digit">
        <Field.Input type="digit" placeholder="Please enter digit number" />
      </Field>
      <Field label="Number">
        <Field.Input type="number" placeholder="Please enter number" />
      </Field>
      <Field label="Password">
        <Field.Input type="password" placeholder="Please enter password" />
      </Field>
    </Cell.Group>
  </>,
  mountNode,
);
```

## 禁用输入框

通过 `readOnly` 将输入框设置为只读状态，通过 `disabled` 将输入框设置为禁用状态。

```tsx
import { Cell, Field } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell.Group inset>
      <Field label="Label">
        <Field.Input readOnly value="Input Readonly" />
      </Field>
      <Field label="Label" disabled>
        <Field.Input placeholder="Input Disabled" />
      </Field>
    </Cell.Group>
  </>,

  mountNode,
);
```

## 显示图标

通过 `leftIcon` 和 `rightIcon` 配置 `Cell` 单元格内两侧的图标，通过设置 `clearable` 在输入过程中展示清除图标。

```tsx
import { Cell, Field, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell.Group inset>
      <Field
        label="Label"
        leftIcon={<Icon name="file-o" />}
        rightIcon={<Icon name="star" />}
      >
        <Field.Input placeholder="Show Icon" />
      </Field>
      <Field label="Label" leftIcon={<Icon name="file-o" />}>
        <Field.Input placeholder="Show Clean Icon" clearable />
      </Field>
    </Cell.Group>
  </>,
  mountNode,
);
```

## 错误提示

设置 `required` 属性表示这是一个必填项，可以配合 `help` 属性显示对应的错误提示。

```tsx
import { Field } from 'fnx-ui';

ReactDOM.render(
  <>
    <Field label="Phone" required help="Invalid phone">
      <Field.Input placeholder="Phone" defaultValue="123" />
    </Field>
  </>,
  mountNode,
);
```

## 前置/后置按钮

通过 `controlSuffix` 可以在输入框尾部插入按钮 ,`controlPrefix` 可以在输入框头部插入按钮。

```tsx
import { Field } from 'fnx-ui';

ReactDOM.render(
  <>
    <Field
      label="SMS"
      controlSuffix={
        <Button size="sm" type="primary">
          Send SMS
        </Button>
      }
      itemsAlign="middle"
    >
      <Field.Input placeholder="SMS" />
    </Field>
  </>,
  mountNode,
);
```

## Auto Size

对于 Field.TextArea，可以通过 autoSize 属性设置高度自适应。

```tsx
import { Field } from 'fnx-ui';

ReactDOM.render(
  <>
    <Field label="Label">
      <Field.TextArea placeholder="Message" autoSize />
    </Field>
  </>,
  mountNode,
);
```

## 显示字数统计

设置 `maxlength` 和 `showCount` 属性后会在底部显示字数统计。

```tsx
import { Field } from 'fnx-ui';

ReactDOM.render(
    <Field label="Label">
			<Field.TextArea placeholder="Message" showCount rows={2} maxLength={50} autoSize />
		</Field>
  mountNode,
);
```

## 输入框内容对齐

通过 `inputAlign` 属性可以设置输入框内容的对齐方式，可选值为 `left`、`center`、`right`。

```tsx
import { Field } from 'fnx-ui';

ReactDOM.render(
  <>
    <Field label="Label">
      <Field.Input inputAlign="left" placeholder="Please enter text" />
    </Field>
  </>,
  mountNode,
);
```

## API

### Field Props

Field 继承类型 [CellProps](#/zh-CN/components/cell)，并新增了如下属性：

| 名称          | 说明                           | 类型                                | 默认值   | 版本 |
| ------------- | ------------------------------ | ----------------------------------- | -------- | ---- |
| label         | 输入框左侧内容                 | `ReactNode`                         | -        |      |
| labelWidth    | 输入框左侧内容宽度             | `string` \| `number`                | -        |      |
| labelAlign    | 输入框左侧内容对齐方式         | `'left'` \| `'center'` \| `'right'` | `'left'` |      |
| labelProps    | 输入框左侧属性                 | `HTMLAttributes<HTMLDivElement>`    | -        |      |
| controlPrefix | 输入框头部插入内容             | `ReactNode`                         | -        |      |
| controlSuffix | 输入框尾部插入内容             | `ReactNode`                         | -        |      |
| controlProps  | 输入框插入内容属性             | `HTMLAttributes<HTMLDivElement>`    | -        |      |
| colon         | 是否显示 label 后面的冒号      | `boolean`                           | `true`   |      |
| required      | 是否显示表单必填星号           | `boolean`                           | `false`  |      |
| disabled      | 是否禁用输入框                 | `boolean`                           | `false`  |      |
| help          | 底部错误提示文案，为空时不展示 | `string` \| `string[]`              | -        |      |
| helpAlign     | 底部错误提示文案对齐方式       | `'left'` \| `'center'` \| `'right'` | `'left'` |      |

### Field.Input Props

| 名称         | 说明                 | 类型                                                           | 默认值  | 版本 |
| ------------ | -------------------- | -------------------------------------------------------------- | ------- | ---- |
| value        | 输入输入框内容       | `string`                                                       | -       |      |
| defaultValue | 默认输入框内容       | `string`                                                       | -       |      |
| type         | 初始化的时间         | `'text'` \| `'tel'` \| `'digit'` \| `'number'` \| `'password'` | `text`  |      |
| inputAlign   | 输入框内容的对齐方式 | `'left'` \| `'center'` \| `'right'`                            | `left`  |      |
| clearable    | 是否显示清除按钮     | `boolean`                                                      | `false` |      |
| clearIcon    | 自定义清除按钮       | `ReactNode`                                                    | -       |      |
| clearTrigger | 显示清除图标的时机   | `'focus'` \| `'always'`                                        | `focus` |      |

### Field.Input 事件

| 事件名   | 说明                 | 类型                      | 版本 |
| -------- | -------------------- | ------------------------- | ---- |
| onChange | 当值变化时触发的事件 | `(value: string) => void` |      |
| onFocus  | 输入框获得焦点时触发 | `(value: string) => void` |      |
| onBlur   | 输入框失去焦点时触发 | `(value: string) => void` |      |

## Field.TextArea Props

| 名称         | 说明           | 类型                                                                           | 默认值  | 版本 |
| ------------ | -------------- | ------------------------------------------------------------------------------ | ------- | ---- |
| value        | 输入输入框内容 | `string`                                                                       | -       |      |
| defaultValue | 默认输入框内容 | `string`                                                                       | -       |      |
| rows         | 输入框高度     | `number`                                                                       | `1`     |      |
| autoSize     | 高度自适应     | `boolean` \| `{ minHeight?: number \| string; maxHeight?: number \| string; }` | `false` |      |
| showCount    | 是否展示字数   | `boolean` \| `(params: { count: number; maxLength?: number; }) => string`      | `false` |      |

### Field.TextArea 事件

| 事件名   | 说明                 | 类型                      | 版本 |
| -------- | -------------------- | ------------------------- | ---- |
| onChange | 当值变化时触发的事件 | `(value: string) => void` |      |
| onFocus  | 输入框获得焦点时触发 | `(value: string) => void` |      |
| onBlur   | 输入框失去焦点时触发 | `(value: string) => void` |      |
