# Form

High performance Form component with data scope management. Including data collection, verification, and styles.

## Basic Usage

Basic Form data control. Includes layout, initial values, validation and submit.

```tsx
import { Form, Field, Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Form>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Username is required',
          },
        ]}
      >
        <Field.Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Password is required',
          },
        ]}
      >
        <Field.Input type="password" placeholder="Password" />
      </Form.Item>

      <Button type="primary" htmlType="submit" shape="round" block>
        Submit
      </Button>
    </Form>
  </>,
  mountNode,
);
```

## Validate Rules

Use `rules` prop to set validate rules.

```tsx
import { Form, Field, Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Form
      onFinish={(values) => console.log(values)}
      onFinishFailed={(values) => console.log(values)}
    >
      <Form.Item
        label="Pattern"
        name="name"
        rules={[
          {
            required: true,
            pattern: /\d{6}/,
            message: 'please enter six number',
          },
        ]}
      >
        <Field.Input placeholder="Name" />
      </Form.Item>
      <Form.Item
        label="Validator"
        name="validator"
        rules={[
          {
            required: true,
            validator: (_, val) => {
              if (/\d{6}/.test(val)) {
                return Promise.resolve();
              } else {
                return Promise.reject('please enter six number');
              }
            },
          },
        ]}
      >
        <Field.Input placeholder="Validator" />
      </Form.Item>
      <Form.Item
        label="AsyncValidator"
        name="asyncValidator"
        validateTrigger="onBlur"
        rules={[
          {
            required: true,
            validator: (_, val) => {
              return new Promise((resolve, reject) => {
                setValidating(true);

                setTimeout(() => {
                  setValidating(false);

                  /\d{6}/.test(val)
                    ? resolve(/\d{6}/.test(val))
                    : reject('please enter six number');
                }, 1000);
              });
            },
          },
        ]}
      >
        <Field.Input placeholder="AsyncValidator" />
      </Form.Item>

      <Button type="primary" htmlType="submit" shape="round" block>
        Submit
      </Button>
    </Form>
  </>,
  mountNode,
);
```

## Dynamic Form Item

Add or remove form items dynamically. `add` function support config initial value.

```tsx
import { ReactNode } from 'react';
import { Form, Field, Button, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Form
      initialValues={{
        list: [{}],
      }}
      onFinish={(values) => console.log(values)}
      onFinishFailed={(values) => console.log(values)}
    >
      <Form.List name="list">
        {(
          fields: FormListField[],
          { add, remove }: FormListOperations,
        ): ReactNode => (
          <>
            {fields.map<ReactNode>(({ key, name, ...restFields }) => {
              return (
                <Form.Item
                  {...restFields}
                  key={key}
                  name={[name, 'username']}
                  label="Username"
                  rules={[
                    {
                      required: true,
                      message: 'Username is required',
                    },
                  ]}
                  rightIcon={<Icon name="cross" onClick={() => remove(name)} />}
                >
                  <Field.Input />
                </Form.Item>
              );
            })}
            <div className={bem('actions')}>
              <Button
                type="success"
                shape="round"
                block
                disabled={fields.length >= 3}
                htmlType="button"
                onClick={() => {
                  add({});
                }}
              >
                Add Field
              </Button>
              <Button type="primary" htmlType="submit" shape="round" block>
                Submit
              </Button>
            </div>
          </>
        )}
      </Form.List>
    </Form>
  </>,
  mountNode,
);
```

## API

### Form Props

| Name             | Description                                                                                                    | Type                                                                  | Default      | Version |
| ---------------- | -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------ | ------- |
| colon            | Configure the default value of `colon` for Form.Item. Indicates whether the colon after the label is displayed | `boolean`                                                             | `true`       |         |
| component        | Set the Form rendering element. Do not create a DOM node for `false`                                           | `false` \| `string` \| `React.FC<any>` \| `React.ComponentClass<any>` | `'form'`     |         |
| form             | Form control instance created by `Form.useForm()`. Automatically created when not provide                      | `FormInstance`                                                        | -            |         |
| initialValues    | Set value by Form initialization or reset                                                                      | `object`                                                              | -            |         |
| labelAlign       | Label align                                                                                                    | `'left'` \| `'center'` \| `'right'`                                   | `'left'`     |         |
| labelWidth       | Label width                                                                                                    | `number` \| `string`                                                  | `'6.2em'`    |         |
| preserve         | Keep field value even when field removed                                                                       | `boolean`                                                             | -            |         |
| requiredMark     | Required mark style. Can use required mark or optional mark.                                                   | `boolean` \| `'auto'`                                                 | `'auto'`     |         |
| validateMessages | Validation prompt template                                                                                     | `FormValidateMessages`                                                | -            |         |
| validateTrigger  | Config field validate trigger                                                                                  | `string` \| `string\[]`                                               | `'onChange'` |         |

### FormValidateMessages

Form provides[default verification error messages](https://github.com/react-component/field-form/blob/master/src/utils/messages.ts). You can modify the template by configuring validateMessages property. A common usage is to configure localization:

```tsx
const validateMessages = {
  required: "'${name}' is required!",
  // ...
};

<Form validateMessages={validateMessages} />;
```

### Form Events

| Event name     | Description                                                       | Type                                                   | Version |
| -------------- | ----------------------------------------------------------------- | ------------------------------------------------------ | ------- |
| onFieldsChange | Trigger when field updated                                        | `function(changedFields, allFields) => void`           |         |
| onFinish       | Trigger after submitting the form and verifying data successfully | `function(values) => void`                             |         |
| onFinishFailed | Trigger after submitting the form and verifying data failed       | `function({ values, errorFields, outOfDate }) => void` |         |
| onValuesChange | Trigger when value updated                                        | `function(changedValues, allValues) => void`           |         |

### Form.Item Props

Form.Item extends [`FieldProps`](#/en-US/components/field), and add the following props:

| Name         | Description                                                         | Type                  | Default  | Version |
| ------------ | ------------------------------------------------------------------- | --------------------- | -------- | ------- |
| colon        | Used with `label`, whether to display `:` after label text          | `boolean`             | `true`   |         |
| requiredMark | Display required style. It will be generated by the validation rule | `boolean` \| `'auto'` | `'auto'` |         |
| disabled     | Whether to disable Form.Item                                        | `boolean`             | -        |         |
| plain        | Plain for `true`, used as a pure field control                      | `boolean`             | `false`  |         |

More props references to [Antd - Form.Item](https://ant.design/components/form/#Form.Item)。

### Form.List Props

Provides array management for fields.

| Name         | Description                                                                      | Type                                                                                       | Default | Version |
| ------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------- | ------- |
| children     | Render function                                                                  | `(fields: Field[], operation: { add, remove, move }, meta: { errors }) => React.ReactNode` | -       |         |
| initialValue | Config sub default value. Form `initialValues` get higher priority when conflict | `any[]`                                                                                    | -       |         |
| name         | Field name, support array                                                        | `NamePath`                                                                                 | -       |         |
