# Cascader

The cascader component is used for the selection of multi-level data. The typical scene is the selection of provinces and cities.

## Basic Usage

Cascader can be used with Field and Popup.

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

## Custom Color

Set `activeColor` prop to change active color.

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

## Async Options

Set `onLoadData` prop to handle async options loading.

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

## Custom Data Names

Set `dataNames` prop to specify custom options field.

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

| Name         | Description                                                  | Type                     | Default   | Version |
| ------------ | ------------------------------------------------------------ | ------------------------ | --------- | ------- |
| defaultValue | Default value                                                | `number[]` \| `string[]` | `[]`      |         |
| data         | Options                                                      | `CascaderOption[]`       | `[]`      |         |
| dataNames    | Custom the fields of options                                 | `CascaderDataNames`      | -         |         |
| title        | Title                                                        | `ReactNode`              | -         |         |
| placeholder  | Placeholder of unselected tab                                | `ReactNode`              | `Select`  |         |
| activeColor  | Active color                                                 | `string`                 | `#2196F3` |         |
| swipeable    | Whether to enable gestures to slide left and right `boolean` | `false`                  |           |         |
| closeIcon    | Custom close icon                                            | `ReactNode`              | -         |         |
| slots        | Slots                                                        | `CascaderSlots`          | -         |         |

### CascaderDataNames

| Name     | Description               | Type               | Default | Version |
| -------- | ------------------------- | ------------------ | ------- | ------- |
| label    | Option label              | `ReactNode`        | -       |         |
| value    | Option value              | `CascaderValue`    | -       |         |
| loading  | Whether option is loading | `boolean`          | -       |         |
| disabled | Whether to disable option | `boolean`          | -       |         |
| children | Cascade children          | `CascaderOption[]` | -       |         |

### CascaderSlots

| Name          | Description                          | Type                                                     | Version |
| ------------- | ------------------------------------ | -------------------------------------------------------- | ------- |
| option        | Custom option text                   | `(option: T, state: { selected: boolean }) => ReactNode` |         |
| optionsTop    | Custom the content above the options | `(tabIndex: number) => ReactNode`                        |         |
| optionsBottom | Custom the content below the options | `(tabIndex: number) => ReactNode`                        |         |

## Cascader Events

| Event Name | Description                              | Type                                                               | Version |
| ---------- | ---------------------------------------- | ------------------------------------------------------------------ | ------- |
| onLoadData | Triggered when loading asynchronously    | `(options: CascaderOption[]) => void`                              |         |
| onConfirm  | Triggered when all options are selected  | `(value: string[] \| number[], options: CascaderOption[]) => void` |         |
| onCancel   | Triggered when the close icon is clicked | `() => void`                                                       |         |
| onChange   | Triggered when the active option changes | `(value: string[] \| number[], options: CascaderOption[]) => void` |         |
