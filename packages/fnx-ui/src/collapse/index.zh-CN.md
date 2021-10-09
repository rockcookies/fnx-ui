# Collapse 折叠面板

将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。

## 基础用法

通过 `defaultActiveKey` 表示默认控制展开的面板列表。

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

## 手风琴

通过 `accordion` 可以设置为手风琴模式，最多展开一个面板。

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

## 幽灵模式

通过控制属性 `ghost` 实现是否显示内边框。

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

## 禁用状态

通过 `disabled` 属性来禁用单个面板。

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

`title` 是 `ReactNode` 类型，`headerProps` 属性里面的 `leftIcon` 和 `content` 也是 `ReactNode` 类型，`leftIcon` 表示是左侧图标，`content` 是默认右侧的内容。

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

| 参数             | 说明                   | 类型                 | 默认值  |
| ---------------- | ---------------------- | -------------------- | ------- |
| ghost            | 实现是否显示内边框     | `boolean`            | `false` |
| accordion        | 是否开启手风琴模式     | `boolean`            | `false` |
| defaultActiveKey | 初始化选中面板的 `key` | `string \| string[]` | `[]`    |
| activeKey        | 当前激活面板的 `key`   | `string \| string[]` | `[]`    |

## CollapseItem API

| 参数               | 说明                      | 类型                             | 默认值  |
| ------------------ | ------------------------- | -------------------------------- | ------- |
| title              | 标题                      | `ReactNode`                      | -       |
| titleProps         | 实现是否显示内边框        | `HTMLAttributes<HTMLDivElement>` | -       |
| headerProps        | 是否开启手风琴模式        | `CellProps`                      | -       |
| disabled           | 是否禁用单个面板          | `boolean`                        | `false` |
| ghost              | 实现是否单个显示内边框    | `boolean`                        | `false` |
| transitionDuration | 过渡动画时间，单位默认 `ms` | `number`                         | `300`   |

## 事件

| 事件名   | 说明           | 回调参数          |
| -------- | -------------- | ----------------- |
| onChange | 切换面板时触发 | `(key: string[])` |

### headerProps 数据结构

| 参数             | 说明                   | 类型                              | 默认值  |
| ---------------- | ---------------------- | --------------------------------- | ------- |
| title            | 标题                   | `ReactNode`                       | -       |
| titleProps       | 标题属性               | `ReactNode`                       | -       |
| content          | 右侧内容               | `ReactNode`                       | -       |
| contentProps     | 右侧内容属性           | `HTMLAttributes<HTMLDivElement>`  | -       |
| description      | 标题下方的描述信息     | `ReactNode`                       | -       |
| descriptionProps | 标题下方的描述信息属性 | `HTMLAttributes<HTMLDivElement`   | -       |
| leftIcon         | 左侧自定义图标         | `ReactNode`                       | -       |
| leftIconProps    | 左侧自定义图标属性     | `HTMLAttributes<HTMLSpanElement>` | -       |
| rightIcon        | 右侧自定义图标         | `ReactNode`                       | -       |
| rightIconProps   | 右侧自定义图标属性     | `HTMLAttributes<HTMLSpanElement>` | -       |
| border           | `Cell` 边框            | `boolean`                         | `true`  |
| itemsAlign       | 对齐方式               | `'top' \| 'middle' \| 'bottom'`   | -       |
| clickable        | 是否可点击             | `boolean`                         | `false` |
