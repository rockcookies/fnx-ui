# Field

The user can enter or edit text in the text box.

## Basic Usage

Use `value` prop to bind input value.

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

## Custom Type

Use `type` prop to custom different type fields.

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

## Disabled

Use `readOnly` prop to set input element readonly, and use `disabled` to set input element disabled.

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

## Display Icon

You can add extra icons to the right or left or even both side of Field.

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

## Error Help

Use `help` prop to show help info.

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

## Prefix / Suffix

Use `controlSuffix` to add element at the end of the input, and use `controlPrefix` to add element at the head of the input box.

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

Textarea can be auto resize when has `autoSize` prop.

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

## Display Count

Use `maxlength` and `showCount` props to display word count at the bottom.

```tsx
import { Field } from 'fnx-ui';

ReactDOM.render(
    <Field label="Label">
			<Field.TextArea placeholder="Message" showCount rows={2} maxLength={50} autoSize />
		</Field>
  mountNode,
);
```

## Input Align

Use `inputAlign` prop to align the input value.

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

Field extends type [CellProps](#/en-US/components/cell), And add the following props:

| Name          | Description                                  | Type                                | Default  | Version |
| ------------- | -------------------------------------------- | ----------------------------------- | -------- | ------- |
| label         | Left content of input box                    | `ReactNode`                         | -        |         |
| labelWidth    | Left content width of input box              | `string` \| `number`                | -        |         |
| labelAlign    | Left content alignment of input box          | `'left'` \| `'center'` \| `'right'` | `'left'` |         |
| labelProps    | Properties on the left side of the input box | `HTMLAttributes<HTMLDivElement>`    | -        |         |
| controlPrefix | Input box header insert content              | `ReactNode`                         | -        |         |
| controlSuffix | Insert content at the end of the input box   | `ReactNode`                         | -        |         |
| controlProps  | Input box insert content properties          | `HTMLAttributes<HTMLDivElement>`    | -        |         |
| colon         | Display colon after label                    | `boolean`                           | `true`   |         |
| required      | Show form required asterisks                 | `boolean`                           | `false`  |         |
| disabled      | Disable input box                            | `boolean`                           | `false`  |         |
| help          | Help messages                                | `string` \| `string[]`              | -        |         |
| helpAlign     | Help messages alignment                      | `'left'` \| `'center'` \| `'right'` | `'left'` |         |

### Field.Input Props

| Name         | Description                                                                                                                                         | Type                                                           | Default | Version |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | ------- | ------- |
| value        | Input value                                                                                                                                         | `string`                                                       | -       |         |
| defaultValue | Input default value                                                                                                                                 | `string`                                                       | -       |         |
| type         | Input type                                                                                                                                          | `'text'` \| `'tel'` \| `'digit'` \| `'number'` \| `'password'` | `text`  |         |
| inputAlign   | Input value alignment                                                                                                                               | `'left'` \| `'center'` \| `'right'`                            | `left`  |         |
| clearable    | Whether to be clearable                                                                                                                             | `boolean`                                                      | `false` |         |
| clearIcon    | Custom clear icon                                                                                                                                   | `ReactNode`                                                    | -       |         |
| clearTrigger | When to display the clear icon, `always` means to display the icon when value is not empty, `focus` means to display the icon when input is focused | `'focus'` \| `'always'`                                        | `focus` |         |

## Field.Input Events

| Event Name | Description                              | Type                      | Version |
| ---------- | ---------------------------------------- | ------------------------- | ------- |
| onChange   | Triggered when the value changes         | `(value: string) => void` |         |
| onFocus    | Triggered when the input box gets focus  | `(value: string) => void` |         |
| onBlur     | Triggered when the input box loses focus | `(value: string) => void` |         |

## Field.TextArea Props

| Name         | Description                | Type                                                                           | Default | Version |
| ------------ | -------------------------- | ------------------------------------------------------------------------------ | ------- | ------- |
| value        | Textarea value             | `string`                                                                       | -       |         |
| defaultValue | Textarea default value     | `string`                                                                       | -       |         |
| rows         | Textarea height            | `number`                                                                       | `1`     |         |
| autoSize     | Textarea auto resize       | `boolean` \| `{ minHeight?: number \| string; maxHeight?: number \| string; }` | `false` |         |
| showCount    | Whether to show word limit | `boolean` \| `(params: { count: number; maxLength?: number; }) => string`      | `false` |         |

## Field.TextArea Events

| Event Name | Description                              | Type                      | Version |
| ---------- | ---------------------------------------- | ------------------------- | ------- |
| onChange   | Triggered when the value changes         | `(value: string) => void` |         |
| onFocus    | Triggered when the input box gets focus  | `(value: string) => void` |         |
| onBlur     | Triggered when the input box loses focus | `(value: string) => void` |         |
