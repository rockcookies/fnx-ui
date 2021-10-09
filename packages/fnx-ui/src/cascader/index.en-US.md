# Cascader

Cascade selection box is used for multi-level data selection. The typical scenario is provincial and urban selection.

## Basic Usage

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

## Custom Color

Set the highlight color of the selected state through the `activeColor` attribute.

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

## Async Load

You can listen to the `onLoadData` event and dynamically set `options` to realize asynchronous loading options.

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

## Custiom DataNames

The field names in `options` can be customized through the `dataNames` attribute.

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

| Parameter    | Description                            | Type                   | Default value |
| ------------ | -------------------------------------- | ---------------------- | ------------- |
| data         | Optional data source                   | `CascaderOption[]`     | `[]`          |
| defaultValue | The default value of the selected item | `number[] \| string[]` | `[]`          |
| title        | Top title                              | `ReactNode`            | -             |
| dataNames    | Fields in custom data structure        | `CascaderDataNames`    | -             |
| placeholder  | Prompt copy when not selected          | `ReactNode`            | `Select`      |
| swipeable    | Can touchable switch tabs              | `boolean`              | `false`       |
| activeColor  | Highlight color of the selected state  | `string`               | `#2196F3`     |
| closeIcon    | Custom close icon                      | `ReactNode`            | -             |

## Events

| Event Name | Description                              | Callback parameter                                       |
| ---------- | ---------------------------------------- | -------------------------------------------------------- |
| onLoadData | Triggered when loading asynchronously    | `options:CascaderOption[]`                               |
| onConfirm  | Triggered when all options are selected  | `value: string[] \| number[], options: CascaderOption[]` |
| onCancel   | Triggered when the close icon is clicked | -                                                        |
| onChange   | Triggered when the selected item changes | `value: string[] \| number[], options: CascaderOption[]` |

### Data Structure

| Parameter | Description                       | Type               | Default value |
| --------- | --------------------------------- | ------------------ | ------------- |
| label     | Options display content           | `ReactNode`        | -             |
| value     | Value corresponding to option     | `CascaderOption`   | -             |
| loading   | Load                              | `boolean`          | -             |
| disabled  | Disable                           | `boolean`          | -             |
| children  | Child element (same type as data) | `CascaderOption[]` | -             |

### DataNames Structure

| Parameter | Description                   | Type                | Default value |
| --------- | ----------------------------- | ------------------- | ------------- |
| label     | Options display content       | `string \|string[]` | `label`       |
| value     | Value corresponding to option | `string \|string[]` | `value`       |
| loading   | Load                          | `string \|string[]` | `loading`     |
| disabled  | Disable                       | `string \|string[]` | `disabled`    |
| children  | Child element                 | `string \|string[]` | `children`    |
