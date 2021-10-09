# Form

High performance form controls.

## Basic Usage

Basic form data domain control show, including layout, initialization, verification, and submission.

```tsx
import { Form } from 'fnx-ui';

ReactDOM.render(
 <>
  <Form>
    <Form.Item label="Username">
      <Field.Input placeholder="Placeholder" />
    </Form.Item>
    <Form.Item label="Password">
      <Field.Input placeholder="Placeholder" />
    </Form.Item>
  </Form>,
 </>
  mountNode,
);
```

## Form Call

Interacting the form data field via `form.useform`

```tsx
import { Form } from 'fnx-ui';

const [form] = Form.useForm();

const handleReset = () => {
  form.resetFields();
};

const handleFill = () => {
  form.setFieldsValue({
    Name: 'Hello World!',
  });
};

ReactDOM.render(
  <>
    <Form form={form}>
      <Form.Item
        label="Username"
        name="Name"
        rules={[
          {
            required: true,
            message: 'Please input your userName!',
          },
        ]}
      >
        <Form.Input placeholder="Please input your name"></Form.Input>
      </Form.Item>
      <div>
        <p onClick={handleReset}>Reset</p>
        <p onClick={handleFill}>Fill</p>
      </div>
    </Form>
  </>,
  mountNode,
);
```

## Dynamic Increase or Decrease

Dynamically increased, reduce form items, `add` method parameters can be used to set the initial value.

```tsx
import { Form, Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Form>
      <Form.List name="form">
        {(fields, { add, remove }) => (
          <>
            <Form.Item label="Password">
              <Field.Input placeholder="Placeholder" />
            </Form.Item>
            {fields.map((field, index) => {
              return (
                <Form.Item key={index} label="Password">
                  <Field.Input placeholder="Placeholder" />
                </Form.Item>
              );
            })}
            <Button onClick={() => add()}>Add Field</Button>
            <Button onClick={() => remove(1)}>Remove Field</Button>
          </>
        )}
      </Form.List>
    </Form>
  </>,
  mountNode,
);
```

## Rules

Pass the `rules` verification rules.

```tsx
import { Form } from 'fnx-ui';

const handleFinish = (e) => {
  console.log(e);
};

ReactDOM.render(
  <>
    <Form
      colon
      name="rulesName"
      validateTrigger={['onBlur']}
      initialValues={{
        switch: true,
      }}
      onFinish={handleFinish}
    >
      <Form.Item label="Label" name="switch" valuePropName="checked">
        <Switch size={20} />
      </Form.Item>
      <Form.Item
        label="Required Label"
        name="requiredName"
        rules={[
          {
            required: true,
            whitespace: true,
            message: 'Please input required',
          },
        ]}
      >
        <Form.Item></Form.Item>
      </Form.Item>
      <Form.Item
        label="Min Label"
        name="minName"
        rules={[
          {
            required: true,
            min: 2,
            message: 'Please input min 2.',
          },
        ]}
      >
        <Form.Item></Form.Item>
      </Form.Item>
      <Form.Item
        label="Max Label"
        name="maxName"
        rules={[
          {
            required: true,
            max: 2,
            message: 'Please input max 2.',
          },
        ]}
      ></Form.Item>
      <Button>Submit</Button>
    </Form>
  </>,
  mountNode,
);
```

## API

Type `formprops` inherited` rc-field-form` of `FormProps`;

| Parameter    | Description                                                                                                     | Type                            | Default value |
| ------------ | --------------------------------------------------------------------------------------------------------------- | ------------------------------- | ------------- |
| colon        | Indicates whether the colon is displayed behind` Label`                                                         | `boolean`                       | `true`        |
| requiredMark | Must choose, you can switch to a must or optional display style                                                 | `boolean \| 'auto'`             | `auto`        |
| labelAlign   | `Label` label text alignment                                                                                    | `'left' \| 'center' \| 'right'` | `left`        |
| labelWidth   | `Label` label width                                                                                             | `string \| number`              | -             |
| helpAlign    | Tip information text alignment                                                                                  | `'left' \| 'center' \| 'right'` | `left`        |
| form         | The `form` control instance created by` form.useform (), will be created automatically when it is not available | `FormInstance`                  | `left`        |

## FormItem API

Type `formprops` inherited` rc-field-form` of `FormProps`;

| Parameter     | Description                                                     | Type                                                          | Default value |
| ------------- | --------------------------------------------------------------- | ------------------------------------------------------------- | ------------- |
| children      | Rendering function                                              | `((context: FormInstance<Values>) => ReactNode) \| ReactNode` | -             |
| label         | Label text                                                      | `ReactNode`                                                   | -             |
| labelWidth    | `label` label width                                             | `string \| number`                                            | -             |
| labelAlign    | `label` label text alignment                                    | ` HTMLAttributes<HTMLDivElement>`                             | `left`        |
| labelProps    | `label` Label properties                                        | `'left' \| 'center' \| 'right'`                               | `left`        |
| controlPrefix | Input box head insertion                                        | `ReactNode`                                                   | -             |
| controlSuffix | Input frame                                                     | `ReactNode`                                                   | -             |
| controlProps  | Insert the content properties                                   | `HTMLAttributes<HTMLDivElement>`                              | -             |
| colon         | Indicates whether the colon is displayed behind` Label`         | `boolean`                                                     | `true`        |
| disabled      | Whether to disable forms                                        | `boolean`                                                     | `true`        |
| requiredMark  | Must choose, you can switch to a must or optional display style | `boolean \| 'auto'`                                           | `auto`        |
| helpAlign     | Tip information text alignment                                  | `'left' \| 'center' \| 'right'`                               | `left`        |
| help          | Tip information                                                 | `string \| string[]`                                          | -             |
| border        | `Cell` Border                                                   | `boolean`                                                     | `true`        |
| itemsAlign    | Alignment                                                       | `'top' \| 'middle' \| 'bottom'`                               | -             |
| clickable     | Will it click?                                                  | `boolean`                                                     | `false`       |
| plain         | Pattern style                                                   | `boolean`                                                     | `false`       |
| fieldProps    | Enter box properties                                            | `FieldProps`                                                  | `false`       |

## Events

| Event Name     | Description                                                        | Callback Arguments           |
| -------------- | ------------------------------------------------------------------ | ---------------------------- |
| onValuesChange | Trigger when the form content changes                              | Corresponding to `form.item` |
| onFieldsChange | Trigger when the form content changes                              | Corresponding to `form.item` |
| onFinish       | Form submission trigger (the default submission button is `button) | Form binding value           |
| onFinishFailed | Trigger when submitting a form failure                             | Corresponding to `form.item` |

## FormList API

| Parameter       | Description                                                                       | Type                                                                                        | Default value |
| --------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------- |
| children        | Rendering function                                                                | `(fields: Field\[], operation: { add, remove, move }, meta: { errors }) => React.ReactNode` | -             |
| initialValue    | Set sub-element default, if conflict with Form is accurate                        | `any[]`                                                                                     | -             |
| name            | Field name, support array                                                         | `string \| string[] \| number \| number[]`                                                  | -             |
| validateTrigger | Set trigger verification timing, must be form set` ValidateTrigger``` Morechange` | ``string \| string[] \|false`                                                               | -             |
| rules           | Verification rules only support custom rules                                      | `ValidatorRule[]`                                                                           | -             |

### Rules Data Structure

类型 `Validator` 是 `(rule: RuleObject, value: StoreValue, callback: (error?: string) => void) => Promise<void | any> | void`;

| Parameter   | Description                                                                          | Type                  | Default value |
| ----------- | ------------------------------------------------------------------------------------ | --------------------- | ------------- |
| message     | Tip information                                                                      | `string \| ReactNode` | -             |
| warningOnly | Warning only, does not block form                                                    | `boolean`             | -             |
| validator   | (Required to fill the property) custom verification, receive promise as return value | `Validator`           | -             |

### Form Instance Method

`const [form] = Form.useForm(); form.resetFields();`
refer to `FormInstance` in `rc-field-form` Details: `https://github.com/react-component/field-form`

| Method Name      | Description                                               | Parameter        | Return Value |
| ---------------- | --------------------------------------------------------- | ---------------- | ------------ |
| resetFields()    | Reset form                                                | -                | -            |
| setFieldsValue() | Custom form content`Name needs to be with`from.Item name` | `{name:string }` | -            |
| getFieldValue()  | Get form content` Name` Needs to be with `from.Item name` | `{name:string }` | -            |

### FormList Method

`Form.list` Render form related operation functions.

| Method Name | Description      | Parameter                              | Return Value |
| ----------- | ---------------- | -------------------------------------- | ------------ |
| add()       | New form item    | `(defaultValue?: any, index?: number)` | -            |
| remove()    | Delete form item | `(index: number \| number[])`          | -            |
| move()      | Mobile form      | `(from: number, to: number)`           | -            |
