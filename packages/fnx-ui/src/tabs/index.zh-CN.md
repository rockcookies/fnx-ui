# Tabs 标签页

## 基础用法

通过 `activeKey` 绑定当前激活标签对应的索引值，默认情况下启用第一个标签。

```tsx
ReactDOM.render(
  <>
    <Tabs defaultActiveKey="1">
      <Tabs.Panel title="Life is like all kinds of chocolate">1</Tabs.Panel>
      <Tabs.Panel title="Title">2</Tabs.Panel>
      <Tabs.Panel title="Title">3</Tabs.Panel>
    </Tabs>
  </>,
  mountNode,
);
```

## 通过名称匹配

在标签指定 `name` 属性的情况下，`activeKey` 的值为当前标签的 `name`（此时无法通过索引值来匹配标签）。

```tsx
const [activeKey, setActiveKey] = useState('key2');
const onActiveKeyChange = (key) => {
  setActiveKey(key);
};

ReactDOM.render(
  <>
    <Tabs activeKey={activeKey} onChange={onActiveKeyChange}>
      <Tabs.Panel title="Title 1" name="key1">
        1
      </Tabs.Panel>
      <Tabs.Panel title="Title 2" name="key2">
        2
      </Tabs.Panel>
      <Tabs.Panel title="Title 3" name="key3">
        3
      </Tabs.Panel>
    </Tabs>
  </>,
  mountNode,
);
```

## 标签栏滚动

默认标签数量超过 4 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。

```tsx
ReactDOM.render(
  <>
    <Tabs>
      <Tabs.Panel title="Title 1">1</Tabs.Panel>
      <Tabs.Panel title="Title 2">2</Tabs.Panel>
      <Tabs.Panel title="Title 3">3</Tabs.Panel>
      <Tabs.Panel title="Title 4">4</Tabs.Panel>
      <Tabs.Panel title="Title 5">5</Tabs.Panel>
    </Tabs>
  </>,
  mountNode,
);
```

## 禁用标签

设置 `disabled` 属性即可禁用标签。

```tsx
ReactDOM.render(
  <>
    <Tabs>
      <Tabs.Panel title="Title 1">1</Tabs.Panel>
      <Tabs.Panel title="Title 2" disabled>
        2
      </Tabs.Panel>
      <Tabs.Panel title="Title 3">3</Tabs.Panel>
    </Tabs>
  </>,
  mountNode,
);
```

## 点击事件

可以在 `<Tabs></Tabs>` 上绑定 `onTabClick` 事件。

```tsx
const onTabClick = (index) => {
  console.log(index);
};

ReactDOM.render(
  <>
    <Tabs onTabClick={onTabClick}>
      <Tabs.Panel title="Title 1">1</Tabs.Panel>
      <Tabs.Panel title="Title 2">2</Tabs.Panel>
      <Tabs.Panel title="Title 3">3</Tabs.Panel>
    </Tabs>
  </>,
  mountNode,
);
```

## 粘性布局

通过 `sticky` 属性可以开启粘性布局，粘性布局下，标签页滚动到顶部时会自动吸顶。

```tsx
ReactDOM.render(
  <>
    <Tabs sticky>
      <Tabs.Panel title="Title 1">1</Tabs.Panel>
      <Tabs.Panel title="Title 2">2</Tabs.Panel>
      <Tabs.Panel title="Title 3">3</Tabs.Panel>
    </Tabs>
  </>,
  mountNode,
);
```

## 自定义标签

通过 `title` 插槽可以自定义标签内容。

```tsx
ReactDOM.render(
  <>
    <Tabs>
      <Tabs.Panel title="Title 1">1</Tabs.Panel>
      <Tabs.Panel title={<div>Title 2</div>}>2</Tabs.Panel>
    </Tabs>
  </>,
  mountNode,
);
```

## 切换动画

通过 `animated` 属性可以开启切换标签内容时的转场动画。

```tsx
ReactDOM.render(
  <>
    <Tabs animated>
      <Tabs.Panel title="Title 1">1</Tabs.Panel>
      <Tabs.Panel title="Title 2">2</Tabs.Panel>
      <Tabs.Panel title="Title 3">3</Tabs.Panel>
    </Tabs>
  </>,
  mountNode,
);
```

## 滑动切换

通过 `swipeable` 属性可以开启滑动切换标签页。

```tsx
ReactDOM.render(
  <>
    <Tabs swipeable>
      <Tabs.Panel title="Title 1">1</Tabs.Panel>
      <Tabs.Panel title="Title 2">2</Tabs.Panel>
      <Tabs.Panel title="Title 3">3</Tabs.Panel>
    </Tabs>
  </>,
  mountNode,
);
```

## 滚动导航

通过 `tabSwipeThreshold` 属性可以开启滚动导航模式，该模式下，内容将会平铺展示。

```tsx
ReactDOM.render(
  <>
    <Tabs tabSwipeThreshold={3} sticky>
      <Tabs.Panel title="Title 1">1</Tabs.Panel>
      <Tabs.Panel title="Title 2">2</Tabs.Panel>
      <Tabs.Panel title="Title 3">3</Tabs.Panel>
      <Tabs.Panel title="Title 4">4</Tabs.Panel>
    </Tabs>
  </>,
  mountNode,
);
```

## API

| 参数               | 说明                                                           | 类型               | 默认值  |
| ------------------ | -------------------------------------------------------------- | ------------------ | ------- |
| activeKey          | 绑定当前选中标签的标识符                                       | `number \| string` | -       |
| defaultActiveKey   | 默认选中标签的标识符                                           | `number \| string` | -       |
| animated           | 是否开启切换标签内容时的转场动画                               | `boolean`          | `false` |
| background         | 标签栏背景色                                                   | `string`           | `white` |
| transitionDuration | 动画时间，单位 `ms`                                            | `number \| string` | `300`   |
| trackWidth         | 底部条宽度，默认单位 `px`                                      | `number \| string` | `40`    |
| trackColor         | 底部条颜色                                                     | `string`           | -       |
| trackHeight        | 底部条高度，默认单位 `px`                                      | `number \| string` | `3`     |
| border             | 是否显示标签栏外边框                                           | `boolean`          | `false` |
| ellipsis           | 是否省略过长的标题文字                                         | `boolean`          | `true`  |
| sticky             | 是否使用粘性定位布局                                           | `boolean`          | `false` |
| stickyProps        | 自定义粘性定位布局                                             | `StickyProps`      | -       |
| swipeable          | 是否开启滑动切换                                               | `boolean`          | `false` |
| slots              | 自定义内容                                                     | `TabsSlots`        | -       |
| tabSwipeThreshold  | 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动 | `number`           | `5`     |

## TabsPanel API

| 参数        | 说明                      | 类型        | 默认值  |
| ----------- | ------------------------- | ----------- | ------- |
| title       | 标题                      | `ReactNode` | -       |
| disabled    | 是否禁用                  | `boolean`   | `false` |
| forceRender | 被隐藏时是否渲染 DOM 结构 | `boolean`   | `false` |

## 事件

| 事件名     | 说明                     | 回调参数                                                                               |
| ---------- | ------------------------ | -------------------------------------------------------------------------------------- |
| onChange   | 当前激活的标签改变时触发 | `(key: string)`                                                                        |
| onTabClick | 点击标签时触发           | `(e: MouseEvent<HTMLDivElement>, option:{disabled:boolean;key:string; index:number })` |

### slots 数据结构

| 参数      | 说明             | 类型        | 默认值 |
| --------- | ---------------- | ----------- | ------ |
| navLeft   | 标签左侧占位内容 | `ReactNode` | -      |
| navRight  | 标签右侧占位内容 | `ReactNode` | -      |
| navBottom | 标签底部占位内容 | `ReactNode` | -      |

### stickyProps 数据结构

| 参数         | 说明                 | 类型                                                | 默认值 |
| ------------ | -------------------- | --------------------------------------------------- | ------ |
| zIndex       | 吸顶时的 z-index     | `string \| number`                                  | -      |
| container    | 容器对应的 HTML 节点 | `Element \| (() => Element undefined null) \| null` | -      |
| offsetTop    | 吸顶时与顶部的距离   | `string \| number`                                  | `0`    |
| offsetBottom | 吸底时与底部的距离   | `string \| number`                                  | `0`    |
| position     | 吸附位置             | `'top' \| 'bottom'`                                 | `top`  |

### stickyProps 事件

| 事件名   | 说明                 | 回调参数                                        |
| -------- | -------------------- | ----------------------------------------------- |
| onChange | 当吸顶状态改变时触发 | `option: { fixed: boolean }`                    |
| onScroll | 滚动时触发           | `option: { fixed: boolean; scrollTop: number }` |
