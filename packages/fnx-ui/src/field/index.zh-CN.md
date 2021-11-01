# Field 输入框

用户可以在文本框内输入或编辑文字。

## 基础用法

可以通过 `value` 绑定输入框的值，通过 `placeholder` 设置占位提示文字。

```tsx
import { Field } from 'fnx-ui';

ReactDOM.render(
  <>
    <Field value="Basic Usage">
      <Field.Input placeholder="Please enter text" />
    </Field>
  </>,
  mountNode,
);
```

## 自定义类型

根据 `type` 属性定义不同类型的输入框，默认值为 text 。

```tsx
import { Field } from 'fnx-ui';

ReactDOM.render(
  <>
    <Field label="Input Label">
      <Field.Input type="text" placeholder="Please enter text" />
      <Field.Input type="tel" placeholder="Please enter tel" />
      <Field.Input type="password" placeholder="Please enter password" />
    </Field>
  </>,
  mountNode,
);
```

## 禁用输入框

通过 `readOnly` 将输入框设置为只读状态，通过 `disabled` 将输入框设置为禁用状态。

```tsx
import { Field } from 'fnx-ui';

ReactDOM.render(
  <>
    <Field label="Input Label">
      <Field.Input readOnly placeholder="Please enter text" />
      <Field.Input disabled placeholder="Please enter text" />
    </Field>
  </>,

  mountNode,
);
```

## 显示图标

通过 `leftIcon` 和 `rightIcon` 配置 `Cell` 单元格内两侧的图标，通过设置 `clearable` 在输入过程中展示清除图标。

```tsx
import { Field } from 'fnx-ui';

ReactDOM.render(
  <>
    <Field label="Input Label">
      <Field.Input
        leftIcon="Left Icon"
        placeholder="Please enter text"
        clearable
      />
      <Field.Input
        rightIcon="Right Icon"
        placeholder="Please enter text"
        clearable
      />
    </Field>
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
    <Field label="Input Label" required help="Error Prompt">
      <Field.Input placeholder="Please enter text" />
    </Field>
  </>,
  mountNode,
);
```

## 插入按钮

通过 `controlSuffix` 可以在输入框尾部插入按钮 ,`controlPrefix` 可以在输入框头部插入按钮。

```tsx
import { Field } from 'fnx-ui';

ReactDOM.render(
    <>
    <Field
        label="Label"
        controlSuffix={
            <Button size="sm" type="primary">Button</Button>
        }
        itemsAlign="middle"
    >
    <Field
  label="Label"
  controlPrefix={
      <Button size="sm" type="primary">Button</Button>
  }
  itemsAlign="middle"
    >
    </Field>
    </>
  mountNode,
);
```

## 高度自适应

对于 `<Field.TextArea />`，可以通过 `autosize` 属性设置高度自适应。

```tsx
import { Field } from 'fnx-ui';

ReactDOM.render(
  <>
    <Field label="Textarea label">
      <Field.TextArea placeholder="Please enter text" autoSize />
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
        <Field.TextArea
            placeholder="Please enter text"
            showCount
            rows={2}
            maxLength={50}
            autoSize
        />
    </Field>
  mountNode,
);
```

## 输入框内容对齐

通过 `inputAlign` 属性可以设置输入框内容的对齐方式，可选值为 `left、center、right`。

```tsx
import { Field } from 'fnx-ui';

ReactDOM.render(
  <>
    <Field label="Label" inputAlign="right">
      <Field.Input placeholder="Please enter text" />
    </Field>
  </>,
  mountNode,
);
```

## API

| 参数             | 说明                           | 类型                              | 默认值  |
| ---------------- | ------------------------------ | --------------------------------- | ------- |
| label            | 输入框左侧内容                 | `ReactNode`                       | -       |
| labelWidth       | 输入框左侧内容宽度             | `string \| number`                | -       |
| labelAlign       | 输入框左侧内容对齐方式         | `'left' \| 'center' \| 'right'`   | `left`  |
| labelProps       | 输入框左侧属性                 | `HTMLAttributes<HTMLDivElement>`  | -       |
| controlPrefix    | 输入框头部插入内容             | `ReactNode`                       | -       |
| controlSuffix    | 输入框尾部插入内容             | `ReactNode`                       | -       |
| controlProps     | 输入框插入内容属性             | `HTMLAttributes<HTMLDivElement>`  | -       |
| colon            | 是否显示 label 后面的冒号      | `boolean>`                        | `true`  |
| required         | 是否显示表单必填星号           | `boolean`                         | `false` |
| disabled         | 是否禁用输入框                 | `boolean`                         | `false` |
| help             | 底部错误提示文案，为空时不展示 | `string \| string[]`              | -       |
| helpAlign        | 底部错误提示文案对齐方式       | `'left' \| 'center' \| 'right'`   | `left`  |
| title            | 标题                           | `ReactNode`                       | -       |
| titleProps       | 标题属性                       | `ReactNode`                       | -       |
| content          | 右侧内容                       | `ReactNode`                       | -       |
| contentProps     | 右侧内容属性                   | `HTMLAttributes<HTMLDivElement>`  | -       |
| description      | 标题下方的描述信息             | `ReactNode`                       | -       |
| descriptionProps | 标题下方的描述信息属性         | `HTMLAttributes<HTMLDivElement`   | -       |
| leftIcon         | 左侧自定义图标                 | `ReactNode`                       | -       |
| leftIconProps    | 左侧自定义图标属性             | `HTMLAttributes<HTMLSpanElement>` | -       |
| rightIcon        | 右侧自定义图标                 | `ReactNode`                       | -       |
| rightIconProps   | 右侧自定义图标属性             | `HTMLAttributes<HTMLSpanElement>` | -       |
| border           | cell 边框                      | `boolean`                         | `true`  |
| itemsAlign       | 对齐方式                       | `'top' \| 'middle' \| 'bottom'`   | -       |
| clickable        | 是否可点击                     | `boolean`                         | `false` |

## FieldInput API

| 参数         | 说明                 | 类型                                                   | 默认值  |
| ------------ | -------------------- | ------------------------------------------------------ | ------- |
| value        | 输入输入框内容       | `string`                                               | -       |
| defaultValue | 默认输入框内容       | `string`                                               | -       |
| type         | 初始化的时间         | `'text' \| 'tel' \| 'digit' \| 'number' \| 'password'` | `text`  |
| inputAlign   | 输入框内容的对齐方式 | `'left' \| 'center' \| 'right'`                        | `left`  |
| clearable    | 是否显示清除按钮     | `boolean`                                              | `false` |
| clearIcon    | 自定义清除按钮       | `ReactNode`                                            | -       |
| clearTrigger | 显示清除图标的时机   | `'focus' \| 'always'`                                  | `focus` |

## FieldTextArea API

| 参数         | 说明           | 类型                                     | 默认值  |
| ------------ | -------------- | ---------------------------------------- | ------- |
| value        | 输入输入框内容 | `string`                                 | -       |
| defaultValue | 默认输入框内容 | `string`                                 | -       |
| rows         | 输入框高度     | `number`                                 | `1`     |
| autoSize     | 高度自适应     | `boolean`                                | `false` |
| showCount    | 是否展示字数   | `boolean \| FieldTextAreaCountFormatter` | `false` |

## 事件

| 事件名   | 说明                 | 回调参数          |
| -------- | -------------------- | ----------------- |
| onChange | 当值变化时触发的事件 | `(value: string)` |
| onFocus  | 输入框获得焦点时触发 | `(value: string)` |
| onBlur   | 输入框失去焦点时触发 | `(value: string)` |
