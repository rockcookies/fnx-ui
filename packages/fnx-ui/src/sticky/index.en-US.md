# Sticky

`Sticky` component The effect of the Position: sticky property implemented in the CSS is consistent. When the component is within the screen range, it will be fixed at the top of the screen when the component rolls out the screen range.

## Basic Usage

Wrap the content in the `sticky` component.

```tsx | pure
import { Sticky, Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Sticky>
      <Button type="success">Success</Button>
    </Sticky>
  </>,
  mountNode,
);
```

## OffsetTop

Through the `offsettop` property, you can set the distance between the components and the top when the top of the ceiling is set.

```tsx | pure
import { Sticky, Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Sticky offsetTop={50}>
      <Button type="success">Offset Top</Button>
    </Sticky>
  </>,
  mountNode,
);
```

## ContainerRef

The component can be specified by the `containerref` property to specify the container of the component, and the component will always remain in the range of the container. When the component is more than the bottom of the container, it is fixed at the bottom of the container.

```tsx | pure
import { Sticky, Button } from 'fnx-ui';

const Demo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} style={{ height: '150px' }}>
      <Sticky containerRef={() => containerRef.current}>
        <Button>Offset Bottom</Button>
      </Sticky>
    </div>
  );
};

ReactDOM.render(<Demo />, mountNode);
```

## OffsetBottom

Set the bottom offset through the `offsetbottom` property.

```tsx | pure
import { Sticky, Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Sticky position="bottom" offsetBottom={50}>
      <Button>Offset Bottom</Button>
    </Sticky>
  </>,
  mountNode,
);
```

## API

| Parameter    | Description                              | Type                                                | Default value |
| ------------ | ---------------------------------------- | --------------------------------------------------- | ------------- |
| zIndex       | Z-Index at the ceiling                   | `string \| number`                                  | -             |
| container    | HTML node corresponding to the container | `Element \| (() => Element undefined null) \| null` | -             |
| offsetTop    | Distance from the top of the ceiling     | `string \| number`                                  | `0`           |
| offsetBottom | Distance from bottom to bottom           | `string \| number`                                  | `0`           |
| position     | Adsorption position                      | `'top' \| 'bottom'`                                 | `top`         |

## Events

| Event Name | Description                             | Callback Arguments                              |
| ---------- | --------------------------------------- | ----------------------------------------------- |
| onChange   | Triggers when the ceiling state changes | `option: { fixed: boolean }`                    |
| onScroll   | Trigger when scrolling                  | `option: { fixed: boolean; scrollTop: number }` |
