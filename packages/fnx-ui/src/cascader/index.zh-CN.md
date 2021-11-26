# Cascader 级联选择

级联选择框，用于多层级数据的选择，典型场景为省市区选择。

## 基础用法

级联选择组件可以搭配 Field 和 Popup 组件使用。

```tsx
import { Cascader, Icon, Field, Popup } from 'fnx-ui';
import { useState } from 'react';

const options = [
  {
    label: 'Hubei',
    value: '420000',
    children: [
      { label: 'Wuhan', value: '420100' },
      { label: 'Yichang', value: '420500' },
    ],
  },
  {
    label: 'Jiangxi',
    value: '360000',
    children: [
      { label: 'Nanchang', value: '360100' },
      { label: 'Jingdezhen', value: '360200' },
    ],
  },
];

function App() {
  const [fields, setFields] = useState<string>();

  return (
    <Popup.Select
      round
      select={
        <Cascader
          data={options}
          title="Select Area"
          onConfirm={(_, options) => {
            setFields(options.map((option) => option.label).join(' / '));
          }}
        />
      }
    >
      <Field label="Area" clickable rightIcon={<Icon name="arrow-right" />}>
        <Field.Input readOnly placeholder="Select Area" value={fields} />
      </Field>
    </Popup.Select>
  );
}

ReactDOM.render(
  <>
    <App />
  </>,
  mountNode,
);
```

## 自定义颜色

通过 `activeColor` 属性来设置选中状态的高亮颜色。

```tsx
import { Cascader } from 'fnx-ui';

const options = [
  {
    label: 'Hubei',
    value: '420000',
    children: [
      { label: 'Wuhan', value: '420100' },
      { label: 'Yichang', value: '420500' },
    ],
  },
  {
    label: 'Jiangxi',
    value: '360000',
    children: [
      { label: 'Nanchang', value: '360100' },
      { label: 'Jingdezhen', value: '360200' },
    ],
  },
];

ReactDOM.render(
  <>
    <Cascader data={options} title="Select Area" activeColor="#1989fa" />
  </>,
  mountNode,
);
```

## 异步加载选项

可以监听 `onLoadData` 事件并动态设置 `options`，实现异步加载选项。

```tsx
import { Popup, Cascader, Field, Icon } from 'fnx-ui';
import { useState } from 'react';

const data = [
  {
    label: 'Hubei',
    value: '420000',
    children: [
      {
        label: 'Wuhan',
        value: '420100',
        children: [
          {
            label: 'JiangAn',
            value: '420102',
          },
          {
            label: 'QiaoKou',
            value: '420104',
          },
        ],
      },
      {
        label: 'Yichang',
        value: '420500',
        children: [
          {
            label: 'XiLing',
            value: '420502',
          },
          {
            label: 'YiLing',
            value: '420506',
          },
        ],
      },
    ],
  },
  {
    label: 'Jiangxi',
    value: '360000',
    children: [
      {
        label: 'Nanchang',
        value: '360100',
        children: [
          {
            label: 'DongHu',
            value: '360102',
          },
          {
            label: 'XiHu',
            value: '360103',
          },
        ],
      },
      {
        label: 'Jingdezhen',
        value: '360200',
        children: [
          {
            label: 'ChangJiang',
            value: '360202',
          },
          {
            label: 'ZhuShan',
            value: '360203',
          },
        ],
      },
    ],
  },
];

function App() {
  const [fields, setFields] = useState<string>();

  const [asyncData, setAsyncData] = useState<CascaderOption[]>(() =>
    data.map((item) => {
      return { label: item.label, value: item.value };
    }),
  );

  const findOption = (
    tree: CascaderOption[],
    value: string,
  ): CascaderOption | undefined => {
    for (const item of tree) {
      if (item.value === value) {
        return item;
      }

      if (item.children) {
        const option = findOption(item.children, value);

        if (option) {
          return option;
        }
      }
    }
  };

  return (
    <Popup.Select
      round
      select={
        <Cascader
          data={asyncData}
          title="Select Area"
          onLoadData={(options) => {
            const option = options[options.length - 1];

            option.loading = true;
            setAsyncData((prev) => [...prev]);

            setTimeout(() => {
              const item = findOption(data, option.value);

              if (!item) {
                return;
              }

              option.loading = false;
              option.children = item.children?.map<CascaderOption>((o) => ({
                label: o.label,
                value: o.value,
                children: o.children == null ? [] : undefined,
              }));

              setAsyncData((prev) => [...prev]);
            }, 1000);
          }}
          onConfirm={(_, options) => {
            setFields(options.map((option) => option.label).join(' / '));
          }}
        />
      }
    >
      <Field label="Area" clickable rightIcon={<Icon name="arrow-right" />}>
        <Field.Input readOnly placeholder="Select Area" value={fields} />
      </Field>
    </Popup.Select>
  );
}

ReactDOM.render(
  <>
    <App />
  </>,
  mountNode,
);
```

## 自定义字段名

通过 `dataNames` 属性可以自定义 `options` 里的字段名称。

```tsx
import { Cascader } from 'fnx-ui';

const options = [
  {
    text: 'Hubei',
    value: '420000',
    list: [
      { text: 'Wuhan', value: '420100' },
      { text: 'Yichang', value: '420500' },
    ],
  },
  {
    text: 'Jiangxi',
    value: '360000',
    list: [
      { text: 'Nanchang', value: '360100' },
      { text: 'Jingdezhen', value: '360200' },
    ],
  },
];

ReactDOM.render(
  <>
    <Cascader
      data={options}
      title="Select Area"
      dataNames={{ label: ['text'], children: 'list' }}
    />
  </>,
  mountNode,
);
```

## API

### Cascader Props

| 名称         | 说明                     | 类型                   | 默认值    |
| ------------ | ------------------------ | ---------------------- | --------- |
| defaultValue | 默认选中项的值           | `number[] \| string[]` | `[]`      |
| data         | 可选项数据源             | `CascaderOption[]`     | `[]`      |
| dataNames    | 自定义 data 结构中的字段 | `CascaderDataNames`    | -         |
| title        | 顶部标题                 | `ReactNode`            | -         |
| placeholder  | 未选中时的提示文案       | `ReactNode`            | `请选择`  |
| activeColor  | 选中状态的高亮颜色       | `string`               | `#2196F3` |
| swipeable    | 是否开启手势左右滑动切换 | `boolean`              | `false`   |
| closeIcon    | 自定义关闭图标           | `ReactNode`            | -         |
| slots        | 组件插槽                 | `CascaderSlots`        | -         |

## Cascader Events

| 事件名     | 说明                   | 回调参数                                                 |
| ---------- | ---------------------- | -------------------------------------------------------- |
| onLoadData | 异步加载时触发         | `options:CascaderOption[]`                               |
| onConfirm  | 全部选项选择完成后触发 | `value: string[] \| number[], options: CascaderOption[]` |
| onCancel   | 点击关闭图标时触发     | -                                                        |
| onChange   | 选中项变化时触发       | `value: string[] \| number[], options: CascaderOption[]` |

### Cascader Data Names

| 名称     | 说明                | 类型               | 默认值 |
| -------- | ------------------- | ------------------ | ------ |
| label    | 选项展示内容        | `ReactNode`        | -      |
| value    | 选项对应的值        | `CascaderValue`    | -      |
| loading  | 是否加载            | `boolean`          | -      |
| disabled | 是否禁用            | `boolean`          | -      |
| children | 子元素(类型同 data) | `CascaderOption[]` | -      |

### Cascader Slots

| 名称          | 说明                 | 参数                                                     |
| ------------- | -------------------- | -------------------------------------------------------- |
| option        | 自定义选项文字       | `(option: T, state: { selected: boolean }) => ReactNode` |
| optionsTop    | 自定义选项上方的内容 | `(tabIndex: number) => ReactNode`                        |
| optionsBottom | 自定义选项下方的内容 | `(tabIndex: number) => ReactNode`                        |
