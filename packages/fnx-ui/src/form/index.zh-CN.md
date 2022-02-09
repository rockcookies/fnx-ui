# Form 表单

高性能表单控件，自带数据域管理。包含数据录入、校验以及对应样式。

## 基础用法

基本的表单数据域控制展示，包含布局、初始化、验证、提交。

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

## 校验规则

通过 `rules` 定义表单校验规则。

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

## 动态增减表单项

动态增加、减少表单项。`add` 方法参数可用于设置初始值。

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

| 名称             | 说明                                                              | 类型                                                                  | 默认值       | 版本 |
| ---------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------- | ------------ | ---- |
| colon            | 配置 Form.Item 的 `colon` 的默认值。表示是否显示 label 后面的冒号 | `boolean`                                                             | `true`       |      |
| component        | 设置 Form 渲染元素，为 `false` 则不创建 DOM 节点                  | `false` \| `string` \| `React.FC<any>` \| `React.ComponentClass<any>` | `'form'`     |      |
| form             | 经 `Form.useForm()` 创建的 form 控制实例，不提供时会自动创建      | `FormInstance`                                                        | -            |      |
| initialValues    | 表单默认值，只有初始化以及重置时生效                              | `object`                                                              | -            |      |
| labelAlign       | label 标签的对齐方式                                              | `'left'` \| `'center'` \| `'right'`                                   | `'left'`     |      |
| labelWidth       | label 标签的的宽度                                                | `number` \| `string`                                                  | `'6.2em'`    |      |
| preserve         | 当字段被删除时保留字段值                                          | `boolean`                                                             | -            |      |
| requiredMark     | 必选样式，可以切换为必选或者可选展示样式                          | `boolean` \| `'auto'`                                                 | `'auto'`     |      |
| validateMessages | 验证提示模板                                                      | `FormValidateMessages`                                                | -            |      |
| validateTrigger  | 统一设置字段触发验证的时机                                        | `string` \| `string\[]`                                               | `'onChange'` |      |

### FormValidateMessages

Form 为验证提供了[默认的错误提示信息](https://github.com/react-component/field-form/blob/master/src/utils/messages.ts)，你可以通过配置 `validateMessages` 属性，修改对应的提示模板。一种常见的使用方式，是配置国际化提示信息：

```tsx
const validateMessages = {
  required: "'${name}' 是必选字段",
  // ...
};

<Form validateMessages={validateMessages} />;
```

### Form 事件

| 名称           | 说明                             | 类型                                                   | 版本 |
| -------------- | -------------------------------- | ------------------------------------------------------ | ---- |
| onFieldsChange | 字段更新时触发回调事件           | `function(changedFields, allFields) => void`           |      |
| onFinish       | 提交表单且数据验证成功后回调事件 | `function(values) => void`                             |      |
| onFinishFailed | 提交表单且数据验证失败后回调事件 | `function({ values, errorFields, outOfDate }) => void` |      |
| onValuesChange | 字段值更新时触发回调事件         | `function(changedValues, allValues) => void`           |      |

### Form.Item Props

Form.Item 继承类型 [`FieldProps`](#/zh-CN/components/field)，并新增了如下属性：

| 名称         | 说明                                                   | 类型                  | 默认值   | 版本 |
| ------------ | ------------------------------------------------------ | --------------------- | -------- | ---- |
| colon        | 配合 `label` 属性使用，表示是否显示 `label` 后面的冒号 | `boolean`             | `true`   |      |
| requiredMark | 必选样式，可以切换为必选或者可选展示样式               | `boolean` \| `'auto'` | `'auto'` |      |
| disabled     | 是否禁用                                               | `boolean`             | -        |      |
| plain        | 为 `true` 时不带样式，作为纯字段控件使用               | `boolean`             | `false`  |      |

详细属性请参考 [Antd - Form.Item](https://ant.design/components/form-cn/#Form.Item)。

### Form.List Props

为字段提供数组化管理。

| 名称         | 说明                                                                | 类型                                                                                       | 默认值 | 版本 |
| ------------ | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------ | ---- |
| children     | 渲染函数                                                            | `(fields: Field[], operation: { add, remove, move }, meta: { errors }) => React.ReactNode` | -      |      |
| initialValue | 设置子元素默认值，如果与 Form 的 `initialValues` 冲突则以 Form 为准 | `any[]`                                                                                    | -      |      |
| name         | 字段名，支持数组                                                    | `NamePath`                                                                                 | -      |      |
