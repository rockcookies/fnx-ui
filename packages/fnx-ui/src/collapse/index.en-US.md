# Collapse 折叠面板

Place a set of contents in a plurality of fold panels, click on the title of the panel to expand or shrink its content.

## Basic Usage

By `defaultactivekey`, the default control expands the panel list.

```tsx | pure
import { Collapse } from 'fnx-ui';

ReactDOM.render(
  <>
    <Collapse defaultActiveKey={0}>
      <Collapse.Item>Content</Collapse.Item>
      <Collapse.Item>Content</Collapse.Item>
    </Collapse>
  </>,
  mountNode,
);
```

## Accordion

Expanded a panel with your accordion mode through `Accordion`

```tsx | pure
import { Collapse } from 'fnx-ui';

ReactDOM.render(
  <>
    <Collapse accordion defaultActiveKey={0}>
      <Collapse.Item>Content</Collapse.Item>
      <Collapse.Item>Content</Collapse.Item>
    </Collapse>
  </>,
  mountNode,
);
```

## Ghost

The inner border is displayed by controlling the property `ghost`.

```tsx | pure
import { Collapse } from 'fnx-ui';

ReactDOM.render(
  <>
    <Collapse ghost>
      <Collapse.Item>Content</Collapse.Item>
      <Collapse.Item>Content</Collapse.Item>
    </Collapse>
  </>,
  mountNode,
);
```

## Disabled

Disable a single panel via the `disabled` property.

```tsx | pure
import { Collapse } from 'fnx-ui';

ReactDOM.render(
  <>
    <Collapse>
      <Collapse.Item disabled>Content</Collapse.Item>
      <Collapse.Item>Content</Collapse.Item>
    </Collapse>
  </>,
  mountNode,
);
```

## 自定义内容

`title` is`Reactnode` type,`lefticon` and `content` in the `headerprops` attribute are also `Reactnode` types,`leftIcon` indicates that the left icon，`content` is the content of the default side。

```tsx | pure
import { Collapse, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Collapse>
      <Collapse.Item
        title="Title 1"
        headerProps={{ leftIcon: <Icon name="success" /> }}
      >
        Content
      </Collapse.Item>
      <Collapse.Item
        title="Title 2"
        headerProps={{
          leftIcon: <Icon name="success" />,
          content: 'Content',
        }}
      >
        Content
      </Collapse.Item>
    </Collapse>
  </>,
  mountNode,
);
```

## API

| Parameter        | Description                                   | Type                 | Default value |
| ---------------- | --------------------------------------------- | -------------------- | ------------- |
| ghost            | Realize whether the inner border is displayed | `boolean`            | `false`       |
| accordion        | Whether to open the accordion mode            | `boolean`            | `false`       |
| defaultActiveKey | Initializes the selected panel `key`          | `string \| string[]` | `[]`          |
| activeKey        | Current activation panel `key`                | `string \| string[]` | `[]`          |

## CollapseItem API

| Parameter          | Description                                   | Type                             | Default value |
| ------------------ | --------------------------------------------- | -------------------------------- | ------------- |
| title              | title                                         | `ReactNode`                      | -             |
| titleProps         | Realize whether the inner border is displayed | `HTMLAttributes<HTMLDivElement>` | -             |
| headerProps        | Whether to open the accordion mode            | `CellProps`                      | -             |
| disabled           | Whether to disable a single panel             | `boolean`                        | `false`       |
| ghost              | Realize whether a single display inner border | `boolean`                        | `false`       |
| transitionDuration | Transition animation time, unit default `ms`  | `number`                         | `300`         |

## Events

| Event Name | Description                  | Callback Arguments |
| ---------- | ---------------------------- | ------------------ |
| onChange   | Trigger when switching panel | `(key: string[])`  |

### HeaderProps Data Structure

| Parameter        | Description                                       | Type                              | Default value |
| ---------------- | ------------------------------------------------- | --------------------------------- | ------------- |
| title            | title                                             | `ReactNode`                       | -             |
| titleProps       | Title attribute                                   | `ReactNode`                       | -             |
| content          | Right content                                     | `ReactNode`                       | -             |
| contentProps     | Right content properties                          | `HTMLAttributes<HTMLDivElement>`  | -             |
| description      | Description information below the title           | `ReactNode`                       | -             |
| descriptionProps | Description information attribute below the title | `HTMLAttributes<HTMLDivElement`   | -             |
| leftIcon         | Custom icon on the left                           | `ReactNode`                       | -             |
| leftIconProps    | Custom icon properties on the left                | `HTMLAttributes<HTMLSpanElement>` | -             |
| rightIcon        | Right-side custom icon                            | `ReactNode`                       | -             |
| rightIconProps   | Right-side custom icon properties                 | `HTMLAttributes<HTMLSpanElement>` | -             |
| border           | `Cell` frame                                      | `boolean`                         | `true`        |
| itemsAlign       | Alignment                                         | `'top' \| 'middle' \| 'bottom'`   | -             |
| clickable        | Will it click?                                    | `boolean`                         | `false`       |
