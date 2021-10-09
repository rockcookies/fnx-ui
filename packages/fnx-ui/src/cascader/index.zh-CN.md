# Cascader 级联选择

级联选择框，用于多层级数据的选择，典型场景为省市区选择。

## 基础用法

```tsx
import { Toast } from 'fnx-ui';

let areaData = [
  {
    label: 'China',
    children: [
      {
        label: 'Beijing',
        disabled: true,
        children: [{ label: 'Haidian' }, { label: 'Chaoyang' }],
      },
      {
        label: 'Shanghai',
        children: [{ label: 'Zhabei' }, { label: 'Jingan' }],
      },
    ],
  },
];

ReactDOM.render(
  <>
    <Cascader
      data={areaData}
      title="Please select region"
      dataNames={{ value: 'label' }}
    />
  </>,
  mountNode,
);
```

## 自定义颜色

通过 `activeColor` 属性来设置选中状态的高亮颜色。

```tsx
import { Popup } from 'fnx-ui';

let areaData = [
  {
    label: 'China',
    children: [
      {
        label: 'Beijing',
        disabled: true,
        children: [{ label: 'Haidian' }, { label: 'Chaoyang' }],
      },
      {
        label: 'Shanghai',
        children: [{ label: 'Zhabei' }, { label: 'Jingan' }],
      },
    ],
  },
];

ReactDOM.render(
  <>
    <Cascader
      data={areaData}
      title="Please select region"
      activeColor="#1989fa"
    />
  </>,
  mountNode,
);
```

## 异步加载选项

可以监听 `onLoadData` 事件并动态设置 `options`，实现异步加载选项。

```tsx
import { Popup, Cascader, Field, Icon } from 'fnx-ui';

const areaData = [
  {
    label: 'China',
    children: [
      {
        label: 'Beijing',
        disabled: true,
        children: [{ label: 'Haidian' }, { label: 'Chaoyang' }],
      },
      {
        label: 'Shanghai',
        children: [{ label: 'Zhabei' }, { label: 'Jingan' }],
      },
    ],
  },
];

const [asyncData, setAsyncData] = useState(() =>
  areaData.map((item) => {
    return { label: item.label };
  }),
);

const findOption = (tree, label) => {
  for (const item of tree) {
    if (item.label === label) {
      return item;
    }

    if (item.children) {
      const option = findOption(item.children, label);

      if (option) {
        return option;
      }
    }
  }
};

const renderField = (value) => (
  <Field label="Field Label" clickable rightIcon={<Icon name="arrow-right" />}>
    <Field.Input
      readOnly
      placeholder="Placeholder"
      value={value && value.length > 0 ? value.join(' / ') : undefined}
    />
  </Field>
);

ReactDOM.render(
  <>
    <Popup.Select
      round
      select={
        <Cascader
          data={asyncData}
          title="Async"
          dataNames={{ value: 'label' }}
          onLoadData={(options) => {
            const option = options[options.length - 1];
            option.loading = true;
            setAsyncData((prev) => [...prev]);

            setTimeout(() => {
              const item = findOption(areaData, option.label);

              if (!item) {
                return;
              }

              option.loading = false;
              option.children = item.children?.map((o) => ({
                label: o.label,
                children: o.children == null ? [] : undefined,
              }));

              setAsyncData((prev) => [...prev]);
            }, 1000);
          }}
        />
      }
    >
      {(value) => renderField(value)}
    </Popup.Select>
  </>,
  mountNode,
);
```

## 自定义字段名

通过 `dataNames` 属性可以自定义 `options` 里的字段名称。

```tsx
import { Toast } from 'fnx-ui';

let areaData = [
  {
    label: 'China',
    list: [
      {
        label: 'Beijing',
        disabled: true,
        list: [{ label: 'Haidian' }, { label: 'Chaoyang' }],
      },
      {
        label: 'Shanghai',
        list: [{ label: 'Zhabei' }, { label: 'Jingan' }],
      },
    ],
  },
];

ReactDOM.render(
  <>
    <Cascader
      data={areaData}
      title="Please select region"
      dataNames={{ value: 'label', children: 'list' }}
    />
  </>,
  mountNode,
);
```

## API

| 参数         | 说明                         | 类型                   | 默认值    |
| ------------ | ---------------------------- | ---------------------- | --------- |
| data         | 可选项数据源                 | `CascaderOption[]`     | `[]`      |
| defaultValue | 默认选中项的值               | `number[] \| string[]` | `[]`      |
| title        | 顶部标题                     | `ReactNode`            | -         |
| dataNames    | 自定义 data 结构中的字段     | `CascaderDataNames`    | -         |
| placeholder  | 未选中时的提示文案           | `ReactNode`            | `请选择`  |
| swipeable    | 是否可以 touchable 切换 tabs | `boolean`              | `false`   |
| activeColor  | 选中状态的高亮颜色           | `string`               | `#2196F3` |
| closeIcon    | 自定义关闭图标               | `ReactNode`            | -         |

## 事件

| 事件名     | 说明                   | 回调参数                                                 |
| ---------- | ---------------------- | -------------------------------------------------------- |
| onLoadData | 异步加载时触发         | `options:CascaderOption[]`                               |
| onConfirm  | 全部选项选择完成后触发 | `value: string[] \| number[], options: CascaderOption[]` |
| onCancel   | 点击关闭图标时触发     | -                                                        |
| onChange   | 选中项变化时触发       | `value: string[] \| number[], options: CascaderOption[]` |

### data 数据结构

| 参数     | 说明                | 类型               | 默认值 |
| -------- | ------------------- | ------------------ | ------ |
| label    | 选项展示内容        | `ReactNode`        | -      |
| value    | 选项对应的值        | `CascaderOption`   | -      |
| loading  | 是否加载            | `boolean`          | -      |
| disabled | 是否禁用            | `boolean`          | -      |
| children | 子元素(类型同 data) | `CascaderOption[]` | -      |

### dataNames 数据结构

| 参数     | 说明         | 类型                 | 默认值     |
| -------- | ------------ | -------------------- | ---------- |
| label    | 选项展示内容 | `string \| string[]` | `label`    |
| value    | 选项对应的值 | `string \| string[]` | `value`    |
| loading  | 是否加载     | `string \| string[]` | `loading`  |
| disabled | 是否禁用     | `string \| string[]` | `disabled` |
| children | 子元素       | `string \| string[]` | `children` |
