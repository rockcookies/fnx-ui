# Form 表单

高性能表单控件。

## 基础用法

基本的表单数据域控制展示，包含布局、初始化、验证、提交。

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

## 表单方式调用

通过 `Form.useForm` 对表单数据域进行交互。

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

## 动态增减表单

动态增加、减少表单项，`add` 方法参数可用于设置初始值。

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

## 验证规则

通过 `rules` 校验规则。

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

类型 `FormProps` 继承 `rc-field-form` 中的 `FormProps`；

| 参数         | 说明                                                           | 类型                            | 默认值 |
| ------------ | -------------------------------------------------------------- | ------------------------------- | ------ |
| colon        | 表示是否显示 `label` 后面的冒号                                | `boolean`                       | `true` |
| requiredMark | 必选样式，可以切换为必选或者可选展示样式                       | `boolean \| 'auto'`             | `auto` |
| labelAlign   | `label` 标签的文本对齐方式                                     | `'left' \| 'center' \| 'right'` | `left` |
| labelWidth   | `label` 标签的宽度                                             | `string \| number`              | -      |
| helpAlign    | 提示信息文本对齐方式                                           | `'left' \| 'center' \| 'right'` | `left` |
| form         | 经 `Form.useForm()` 创建的 `form` 控制实例，不提供时会自动创建 | `FormInstance`                  | `left` |

## FormItem API

类型 `FormProps` 继承 `rc-field-form` 中的 `FormProps`；

| 参数          | 说明                                     | 类型                                                          | 默认值  |
| ------------- | ---------------------------------------- | ------------------------------------------------------------- | ------- |
| children      | 渲染函数                                 | `((context: FormInstance<Values>) => ReactNode) \| ReactNode` | -       |
| label         | 标签文本                                 | `ReactNode`                                                   | -       |
| labelWidth    | `label` 标签的宽度                       | `string \| number`                                            | -       |
| labelAlign    | `label` 标签的文本对齐方式               | ` HTMLAttributes<HTMLDivElement>`                             | `left`  |
| labelProps    | `label` 标签的属性                       | `'left' \| 'center' \| 'right'`                               | `left`  |
| controlPrefix | 输入框头部插入内容                       | `ReactNode`                                                   | -       |
| controlSuffix | 输入框尾部插入内容                       | `ReactNode`                                                   | -       |
| controlProps  | 输入框插入内容属性                       | `HTMLAttributes<HTMLDivElement>`                              | -       |
| colon         | 表示是否显示 `label` 后面的冒号          | `boolean`                                                     | `true`  |
| disabled      | 是否禁用表单                             | `boolean`                                                     | `true`  |
| requiredMark  | 必选样式，可以切换为必选或者可选展示样式 | `boolean \| 'auto'`                                           | `auto`  |
| helpAlign     | 提示信息文本对齐方式                     | `'left' \| 'center' \| 'right'`                               | `left`  |
| help          | 提示信息                                 | `string \| string[]`                                          | -       |
| border        | `cell` 边框                              | `boolean`                                                     | `true`  |
| itemsAlign    | 对齐方式                                 | `'top' \| 'middle' \| 'bottom'`                               | -       |
| clickable     | 是否可点击                               | `boolean`                                                     | `false` |
| plain         | 平素的样式                               | `boolean`                                                     | `false` |
| fieldProps    | 输入框属性                               | `FieldProps`                                                  | `false` |

## 事件

| 事件名         | 说明                                  | 回调参数                |
| -------------- | ------------------------------------- | ----------------------- |
| onValuesChange | 表单内容改变时触发                    | 对应`Form.Item`内容的值 |
| onFieldsChange | 表单内容改变时触发                    | 对应`Form.Item`内容的值 |
| onFinish       | 表单提交触发 (默认提交按钮是`Button`) | 表单绑定的值            |
| onFinishFailed | 提交表单失败时触发                    | 对应`Form.Item`内容的值 |

## FormList API

| 参数            | 说明                                                                                     | 类型                                                                                        | 默认值 |
| --------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------ |
| children        | 渲染函数                                                                                 | `(fields: Field\[], operation: { add, remove, move }, meta: { errors }) => React.ReactNode` | -      |
| initialValue    | 设置子元素默认值，如果与 Form 的 `initialValues` 冲突则以 Form 为准                      | `any[]`                                                                                     | -      |
| name            | 字段名，支持数组                                                                         | `string \| string[] \| number \| number[]`                                                  | -      |
| validateTrigger | 设置触发验证时机，必须是 Form.Item 的 `validateTrigger` 的子集 常用有`onBlur` `onChange` | ``string \| string[] \|false`                                                               | -      |
| rules           | 校验规则，仅支持自定义规则                                                               | `ValidatorRule[]`                                                                           | -      |

### rules 数据结构

类型 `Validator` 是 `(rule: RuleObject, value: StoreValue, callback: (error?: string) => void) => Promise<void | any> | void`;

| 参数        | 说明                                          | 类型                  | 默认值 |
| ----------- | --------------------------------------------- | --------------------- | ------ |
| message     | 提示信息                                      | `string \| ReactNode` | -      |
| warningOnly | 仅警告，不阻塞表单提交                        | `boolean`             | -      |
| validator   | (必填属性)自定义校验，接收 Promise 作为返回值 | `Validator`           | -      |

### Form 实例方法

`const [form] = Form.useForm(); form.resetFields();`

参考`rc-field-form` 中的 `FormInstance` 详情访问 `https://github.com/react-component/field-form`

| 方法名           | 说明                                               | 参数             | 返回值 |
| ---------------- | -------------------------------------------------- | ---------------- | ------ |
| resetFields()    | 重置表单                                           | -                | -      |
| setFieldsValue() | 自定义表单内容 `name` 需要与 `From.Item name` 相同 | `{name:string }` | -      |
| getFieldValue()  | 获取表单内容 `name` 需要与 `From.Item name` 相同   | `{name:string }` | -      |

### FormList 方法

`Form.List` 渲染表单相关操作函数。

| 方法名   | 说明       | 参数                                   | 返回值 |
| -------- | ---------- | -------------------------------------- | ------ |
| add()    | 新增表单项 | `(defaultValue?: any, index?: number)` | -      |
| remove() | 删除表单项 | `(index: number \| number[])`          | -      |
| move()   | 移动表单项 | `(from: number, to: number)`           | -      |
