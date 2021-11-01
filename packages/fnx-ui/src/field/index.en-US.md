# Field

The user can enter or edit text in the text box.

## Basic Usage

You can bind the value of the input box through `value` and set the placeholder prompt text through `placeholder`.

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

## Custom Type

Define different types of input boxes according to the `type` attribute. The default value is text.

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

## Disbaled

Set the input box to read-only status through `readOnly`, and set the input box to disabled status through `disabled`.

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

## Display Icon

Configure the icons on both sides of the `Cell` cell through `leftIcon` and `rightIcon`, and display the clear icon during input by setting `clearable`.

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

## Error Prompt

Setting the `required` attribute indicates that this is a required item, and the corresponding error prompt can be displayed in combination with the `help` attribute.

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

## Insert Button

Use `controlSuffix` to insert buttons at the end of the input box and `controlPrefix` to insert buttons at the head of the input box.

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

## Highly Adaptive

For `< Field. TextArea / >`, you can set a high degree of adaptation through the `autosize` attribute.

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

## Display Count

After setting the `maxlength` and `showCount` properties, word count will be displayed at the bottom.

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

## Alignment Content

You can set the alignment of the contents of the input box through the `inputAlign` attribute. The optional values are left, center and right.

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

| Parameter        | Description                                                           | Type                              | Default value |
| ---------------- | --------------------------------------------------------------------- | --------------------------------- | ------------- |
| label            | Left content of input box                                             | `ReactNode`                       | -             |
| labelWidth       | Left content width of input box                                       | `string \| number`                | -             |
| labelAlign       | Left content alignment of input box                                   | `'left' \| 'center' \| 'right'`   | `left`        |
| labelProps       | Properties on the left side of the input box                          | `HTMLAttributes<HTMLDivElement>`  | -             |
| controlPrefix    | Input box header insert content                                       | `ReactNode`                       | -             |
| controlSuffix    | Insert content at the end of the input box                            | `ReactNode`                       | -             |
| controlProps     | Input box insert content properties                                   | `HTMLAttributes<HTMLDivElement>`  | -             |
| colon            | Display colon after label                                             | `boolean>`                        | `true`        |
| required         | Show form required asterisks                                          | `boolean`                         | `false`       |
| disabled         | Disable input box                                                     | `boolean`                         | `false`       |
| help             | The error prompt copy at the bottom is not displayed when it is empty | `string \| string[]`              | -             |
| helpAlign        | Bottom error prompt text alignment                                    | `'left' \| 'center' \| 'right'`   | `left`        |
| title            | Title                                                                 | `ReactNode`                       | -             |
| titleProps       | Title Properties                                                      | `ReactNode`                       | -             |
| content          | Right content                                                         | `ReactNode`                       | -             |
| contentProps     | Right content properties                                              | `HTMLAttributes<HTMLDivElement>`  | -             |
| description      | Description below the title                                           | `ReactNode`                       | -             |
| descriptionProps | Description properties below the title                                | `HTMLAttributes<HTMLDivElement`   | -             |
| leftIcon         | Left custom icon                                                      | `ReactNode`                       | -             |
| leftIconProps    | Left custom icon properties                                           | `HTMLAttributes<HTMLSpanElement>` | -             |
| rightIcon        | Custom icon on the right                                              | `ReactNode`                       | -             |
| rightIconProps   | Right custom icon properties                                          | `HTMLAttributes<HTMLSpanElement>` | -             |
| border           | Cell border                                                           | `boolean`                         | `true`        |
| itemsAlign       | Alignment                                                             | `'top' \| 'middle' \| 'bottom'`   | -             |
| clickable        | Can I click                                                           | `boolean`                         | `false`       |

## FieldInput API

| Parameter    | Description                         | Type                                                   | Default value |
| ------------ | ----------------------------------- | ------------------------------------------------------ | ------------- |
| value        | Enter the contents of the input box | `string`                                               | -             |
| defaultValue | Default input box content           | `string`                                               | -             |
| type         | Time of initialization              | `'text' \| 'tel' \| 'digit' \| 'number' \| 'password'` | `text`        |
| inputAlign   | Alignment of input box contents     | `'left' \| 'center' \| 'right'`                        | `left`        |
| clearable    | Show clear button                   | `boolean`                                              | `false`       |
| clearIcon    | Custom clear button                 | `ReactNode`                                            | -             |
| clearTrigger | When to display the clear Icon      | `'focus' \| 'always'`                                  | `focus`       |

## FieldTextArea API

| Parameter    | Description                         | Type                                     | Default value |
| ------------ | ----------------------------------- | ---------------------------------------- | ------------- |
| value        | Enter the contents of the input box | `string`                                 | -             |
| defaultValue | Default input box content           | `string`                                 | -             |
| rows         | Input box Height                    | `number`                                 | `1`           |
| autoSize     | Highly adaptive                     | `boolean`                                | `false`       |
| showCount    | Show word count                     | `boolean \| FieldTextAreaCountFormatter` | `false`       |

## Events

| Event Name | Description                              | Callback parameter |
| ---------- | ---------------------------------------- | ------------------ |
| onChange   | Event triggered when the value changes   | `(value: string)`  |
| onFocus    | Triggered when the input box gets focus  | `(value: string)`  |
| onBlur     | Triggered when the input box loses focus | `(value: string)`  |
