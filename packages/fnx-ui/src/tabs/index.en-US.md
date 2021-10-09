# Tabs

## Basic Usage

Bind the index value corresponding to the currently active tag through `activekey`. The first tag is enabled by default.

```tsx | pure
ReactDOM.render(
  <>
    <Tabs defaultValue="1">
      <Tabs.Panel title="Life is like all kinds of chocolate">1</Tabs.Panel>
      <Tabs.Panel title="Title">2</Tabs.Panel>
      <Tabs.Panel title="Title">3</Tabs.Panel>
    </Tabs>
  </>,
  mountNode,
);
```

## Name

When the label specifies the `name` attribute, the value of the `activeKey` is the `name` of the current label (the label cannot be matched by the index value at this time).

```tsx | pure
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

## Label Scroll

When the default number of labels exceeds 4, the label bar can scroll horizontally, and the current label will be automatically centered during switching.

```tsx | pure
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

## Disable

Set the `disabled` attribute to disable the label.

```tsx | pure
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

## Click Event

You can bind the `onTabClick` event on `< Tabs > < / Tabs >`.

```tsx | pure
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

## Viscous Layout

The sticky layout can be turned on through the `sticky` attribute. Under the sticky layout, the tab will automatically attract the top when it scrolls to the top.

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

## Custom Label

The label content can be customized through the `title` slot.

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

## Toggle Animation

The `animated` attribute enables the transition animation when switching label content.

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

## Sliding Switching

You can turn on the slide switch tab through the `swipeable` attribute.

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

## Scroll Navigation

The `tabSwipeThreshold` attribute enables the scroll navigation mode, in which the content will be displayed in tiles.

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

| Parameter          | Description                                                                                                                                               | Type               | Default value |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------- |
| activeKey          | Bind the identifier of the currently selected label                                                                                                       | `number \| string` | -             |
| defaultActiveKey   | The identifier of the default selected label                                                                                                              | `number \| string` | -             |
| animated           | Turn on transition animation when switching label content                                                                                                 | `boolean`          | `false`       |
| background         | Label bar background color                                                                                                                                | `string`           | `white`       |
| transitionDuration | Animation time in `ms`                                                                                                                                    | `number \| string` | `300`         |
| trackWidth         | Bottom bar width, default unit ` px`                                                                                                                      | `number \| string` | `40`          |
| trackColor         | Bottom bar color                                                                                                                                          | `string`           | -             |
| trackHeight        | Bottom bar height, default unit ` px`                                                                                                                     | `number \| string` | `3`           |
| border             | Show label bar outer border                                                                                                                               | `boolean`          | `false`       |
| ellipsis           | Omit long title text                                                                                                                                      | `boolean`          | `true`        |
| sticky             | Use sticky positioning layout                                                                                                                             | `boolean`          | `false`       |
| stickyProps        | Custom sticky anchor layout                                                                                                                               | `StickyProps`      | -             |
| swipeable          | Whether to enable sliding switching                                                                                                                       | `boolean`          | `false`       |
| slots              | Custom content                                                                                                                                            | `TabsSlots`        | -             |
| tabSwipeThreshold  | Scrolling threshold: when the number of labels exceeds the threshold and the total width exceeds the width of the label bar, start scrolling horizontally | `number`           | `5`           |

## TabsPanel API

| Parameter   | Description                                           | Type        | Default value |
| ----------- | ----------------------------------------------------- | ----------- | ------------- |
| title       | Title                                                 | `ReactNode` | -             |
| disabled    | Disable                                               | `boolean`   | `false`       |
| forceRender | Whether to render the DOM structure when it is hidden | `boolean`   | `false`       |

## Events

| Event name | Description                                     | Callback parameter                                                                     |
| ---------- | ----------------------------------------------- | -------------------------------------------------------------------------------------- |
| onChange   | Triggered when the currently active tag changes | `(key: string)`                                                                        |
| onTabClick | Triggered when a tag is clicked                 | `(e: MouseEvent<HTMLDivElement>, option:{disabled:boolean;key:string; index:number })` |

### Slots Data Dtructure

| Parameter | Description                                            | Type        | Default value |
| --------- | ------------------------------------------------------ | ----------- | ------------- |
| navLeft   | Space occupying content on the left side of the label  | `ReactNode` | -             |
| navRight  | Space occupying content on the right side of the label | `ReactNode` | -             |
| navBottom | Space occupying content at the bottom of the label     | `ReactNode` | -             |

### StickyProps Data Dtructure

| Parameter    | Description                                        | Type                                                | Default value |
| ------------ | -------------------------------------------------- | --------------------------------------------------- | ------------- |
| zIndex       | Z-index at ceiling                                 | `string \| number`                                  | -             |
| container    | HTML node corresponding to container               | `Element \| (() => Element undefined null) \| null` | -             |
| offsetTop    | Distance from the top when absorbing the top       | `string \| number`                                  | `0`           |
| offsetBottom | Distance from the bottom when absorbing the bottom | `string \| number`                                  | `0`           |
| position     | Adsorption position                                | `'top' \| 'bottom'`                                 | `top`         |

### StickyProps Events

| Event name | Description                              | Callback parameter                              |
| ---------- | ---------------------------------------- | ----------------------------------------------- |
| onChange   | Triggered when the ceiling state changes | `option: { fixed: boolean }`                    |
| onScroll   | Triggered when scrolling                 | `option: { fixed: boolean; scrollTop: number }` |
