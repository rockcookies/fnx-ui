# Picker 选择器

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

### 选项配置

`Picker` 组件通过 `data` 属性配置选项数据，`data` 是一个对象数组或者字符数组。

### 顶部栏

设置 `toolbar` 属性后会展示顶部操作栏，确认按钮和取消按钮，点击确认按钮触发 `onConfirm` 事件，点击取消按钮触发 `onCancel` 事件。

## 基础用法

```tsx
import { Picker } from 'fnx-ui';

const pickerData = [
  'China',
  'United States',
  'United Kingdom',
  'Germany',
  'France',
  'Italy',
  'Japan',
  'Spain',
];

ReactDOM.render(
  <>
    <Picker toolbar data={pickerData} />
  </>,
  mountNode,
);
```

## 默认选中项

单列选择时，可以通过 `defaultValue` 属性设置初始选中项的索引。

```tsx
import { Picker } from 'fnx-ui';

const data = [
  'China',
  'United States',
  'United Kingdom',
  'Germany',
  'France',
  'Italy',
  'Japan',
  'Spain',
];

ReactDOM.render(
  <>
    <Picker data defaultValue={data[2]} />
  </>,
  mountNode,
);
```

## 多列选择

`Picker.Multi` 可以配置多列选择，

```tsx
import { Picker } from 'fnx-ui';

const data = [
  [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  ['Morning', 'Afternoon', 'Evening'],
];

ReactDOM.render(
  <>
    <Picker.Multi data defaultValue={[data[0][2], data[1][1]]} title="Multi" />
  </>,
  mountNode,
);
```

## 级联选择

`Picker.Multi` 可以配置多列选择，

```tsx
import { Picker } from 'fnx-ui';

const data = [
  {
    label: 'China',
    children: [
      {
        label: 'Beijing',
        children: [{ label: 'Haidian' }, { label: 'Chaoyang' }],
      },
      {
        label: 'Shanghai',
        children: [{ label: 'Zhabei' }, { label: 'Jingan' }],
      },
    ],
  },
  {
    label: 'United State',
    children: [
      {
        label: 'New York',
        children: [{ label: 'Manhattan' }, { label: 'Brooklyn' }],
      },
      {
        label: 'California',
        children: [{ label: 'Los Angeles' }, { label: 'San Francisco' }],
      },
    ],
  },
];

ReactDOM.render(
  <>
    <Picker.Cascade
      data
      title="Cascade"
      dataNames={{ value: 'label', children: 'child' }}
    />
  </>,
  mountNode,
);
```

## 禁用选项

选项可以为对象结构，通过设置 `disabled` 来禁用该选项。

```tsx
import { Picker } from 'fnx-ui';

const data = [
  [
    'Monday',
    'Tuesday',
    { disabled: true, label: 'Wednesday', value: 'Wednesday' },
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  ['Morning', 'Afternoon', 'Evening'],
];

ReactDOM.render(
  <>
    <Picker.Multi data defaultValue={[data[0][2], data[1][1]]} title="Multi" />
  </>,

  mountNode,
);
```

## 自定义 data 结构

选项可以为对象结构，通过设置 `disabled` 来禁用该选项。

```tsx
import { Picker } from 'fnx-ui';

const data = [
  {
    label: 'China',
    child: [
      {
        label: 'Beijing',
        child: [{ label: 'Haidian' }, { label: 'Chaoyang' }],
      },
      {
        label: 'Shanghai',
        child: [{ label: 'Zhabei' }, { label: 'Jingan' }],
      },
    ],
  },
  {
    label: 'United State',
    child: [
      {
        label: 'New York',
        child: [{ label: 'Manhattan' }, { label: 'Brooklyn' }],
      },
      {
        label: 'California',
        child: [{ label: 'Los Angeles' }, { label: 'San Francisco' }],
      },
    ],
  },
];

ReactDOM.render(
  <>
    <Picker.Cascade
      data
      cascadeSize={4}
      title="Custom Structure"
      dataNames={{
        label: 'label',
        value: 'label',
        children: 'child',
      }}
    />
  </>,
  mountNode,
);
```

## 加载状态

若选择器数据是异步获取的，可以通过 `loading` 属性显示加载提示。

```tsx
import { Picker } from 'fnx-ui';

const pickerData = [
  [
    'Monday',
    'Tuesday',
    { disabled: true, label: 'Wednesday', value: 'Wednesday' },
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  ['Morning', 'Afternoon', 'Evening'],
];

ReactDOM.render(
  <>
    <Picker.Multi
      data={pickerData}
      loading
      defaultValue={[pickerData[0][2], pickerData[1][1]]}
      title="Multi"
    />
  </>,
  mountNode,
);
```

## 搭配弹出层使用

在实际场景中，`Picker` 通常作为用于辅助表单填写，可以搭配 `Popup` 和 `Field` 实现该效果。

```tsx
import { Picker, Popup, Field } from 'fnx-ui';

const pickerData = [
  [
    'Monday',
    'Tuesday',
    { disabled: true, label: 'Wednesday', value: 'Wednesday' },
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  ['Morning', 'Afternoon', 'Evening'],
];

ReactDOM.render(
  <>
    <Popup.Select select={<Picker data={pickerData} title="Title" />}>
      {(value) => (
        <Field clickable label="Label">
          <Field.Input readOnly value={value || 'Please Select !'} />
        </Field>
      )}
    </Popup.Select>
  </>,
  mountNode,
);
```

## PickerProps API

类型 `PickerProps` 继承类型 `PickerBaseProps` ，`PickerBaseProps` 是组件基础的类型。

| 参数         | 说明         | 类型                                | 默认值 |
| ------------ | ------------ | ----------------------------------- | ------ |
| defaultValue | 默认的选中项 | `string \| number`                  | -      |
| data         | 所有的数据   | `PickerOption[] \| string \| numbe` | -      |

## 事件

| 事件名    | 说明                   | 回调参数                |
| --------- | ---------------------- | ----------------------- |
| onConfirm | 全部选项选择完成后触发 | `value: T \| undefined` |
| onCancel  | 点击关闭图标时触发     | -                       |
| onChange  | 选中项变化时触发       | `value: T \| undefined` |

### PickerCascade API

类型 `PickerCascade` 继承类型 `PickerBaseProps`。

| 参数         | 说明         | 类型                   | 默认值 |
| ------------ | ------------ | ---------------------- | ------ |
| defaultValue | 默认的选中项 | `string[] \| number[]` | -      |
| data         | 所有的数据   | `PickerOption[]`       | -      |

### PickerMulti API

类型 `PickerMulti` 继承类型 `PickerBaseProps`。

| 参数         | 说明         | 类型                                            | 默认值 |
| ------------ | ------------ | ----------------------------------------------- | ------ |
| defaultValue | 默认的选中项 | `string[] \| number[]`                          | -      |
| data         | 所有的数据   | `Array<PickerOption[] \| string[] \| number[]>` | -      |

### PickerBaseProps API

| 参数                | 说明                       | 类型                | 默认值    |
| ------------------- | -------------------------- | ------------------- | --------- |
| title               | 自定义顶部栏标题           | `ReactNode`         | -         |
| optionHeight        | 选项高度,默认 `px`         | `number`            | `44`      |
| visibleOptionsCount | 可见的选项个数             | `number`            | -         |
| transitionDuration  | 动画时长，单位 `ms`        | `number`            | `0`       |
| toolbar             | 自定义顶部栏               | `ReactNode`         | -         |
| toolbarPosition     | 自定义顶部栏位置           | `'top' \| 'bottom'` | `true`    |
| confirmButton       | 确认按钮                   | `ReactNode`         | `Confirm` |
| cancelButton        | 取消按钮                   | `ReactNode`         | `Cancel`  |
| loading             | 是否显示为加载状态         | `boolean`           | `false`   |
| dataNames           | 自定义 `data` 结构中的字段 | `PickerDataNames`   | -         |

### data 数据结构

| 参数     | 说明       | 类型               | 默认值 |
| -------- | ---------- | ------------------ | ------ |
| label    | 选项文本   | `ReactNode`        | -      |
| value    | 选择选择   | `string \| number` | -      |
| disabled | 选项禁用   | `boolean`          | -      |
| children | 选项子元素 | `PickerOption[]`   | -      |

### dataNames 数据结构

| 参数     | 说明         | 类型                  | 默认值       |
| -------- | ------------ | --------------------- | ------------ |
| label    | 选项文字     | `string \| string[] ` | `'label'`    |
| value    | 选项选中内容 | `string \| string[]`  | `'value'`    |
| children | 选项子元素   | `string \| string[]`  | `'children'` |
| disabled | 选项禁用     | `string \| string[]`  | `'disabled'` |

### PickerMultiRef 和 PickerCascadeRef 实例方法

| 方法名       | 说明                 | 参数 | 返回值                  |
| ------------ | -------------------- | ---- | ----------------------- |
| getValue()   | 获取组件当前选中的值 | -    | `PickerValue[]`         |
| getOptions() | 获取组件当前选中的值 | -    | `PickerOptionOrValue[]` |
