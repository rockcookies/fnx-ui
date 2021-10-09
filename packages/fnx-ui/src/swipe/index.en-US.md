# Swipe

Used to loop play a set of pictures or content.

## Basic Usage

```tsx | pure
import { Swipe } from 'fnx-ui';

ReactDOM.render(
  <>
    <Swipe>
      <Swipe.Item>1</Swipe.Item>
      <Swipe.Item>2</Swipe.Item>
      <Swipe.Item>3</Swipe.Item>
    </Swipe>
  </>,
  mountNode,
);
```

## Vertical

Set the `vertical` property After the slider is arranged vertically, you need to specify the height of the slider container.

```tsx
import { Swipe } from 'fnx-ui';

ReactDOM.render(
  <>
    <Swipe height="150" vertical>
      <Swipe.Item>1</Swipe.Item>
      <Swipe.Item>2</Swipe.Item>
      <Swipe.Item>3</Swipe.Item>
    </Swipe>
  </>,
  mountNode,
);
```

## Indicator

The style of the indicator can be customized via `indicator`.

```tsx
import { Swipe } from 'fnx-ui';

const indicator = () => {
  return (
    <div>
      {Array(...Array(3)).map((v, i) => {
        return <span key={i}>{i + 1}</span>;
      })}
    </div>
  );
};

ReactDOM.render(
  <>
    <Swipe indicator={indicator()}>
      <Swipe.Item>1</Swipe.Item>
      <Swipe.Item>2</Swipe.Item>
      <Swipe.Item>3</Swipe.Item>
    </Swipe>
  </>,
  mountNode,
);
```

## OnActiveIndexChange

After each page of round broadcast, you will trigger the `onactiveIndexchange` event.

```tsx
import { Swipe } from 'fnx-ui';

const onActiveIndexChange = (current) => {
  console.log(current);
};

ReactDOM.render(
  <>
    <Swipe onActiveIndexChange={onActiveIndexChange}>
      <Swipe.Item>1</Swipe.Item>
      <Swipe.Item>2</Swipe.Item>
      <Swipe.Item>3</Swipe.Item>
    </Swipe>
  </>,
  mountNode,
);
```

## Custom Size

The default width of the slider is 100%, and the width of a single slider can be set via the `width` property. In the longitudinal scroll mode, you can set the height of a single slider through the `height` property.

```tsx
import { Swipe } from 'fnx-ui';

ReactDOM.render(
  <>
    <Swipe width="200">
      <Swipe.Item>1</Swipe.Item>
      <Swipe.Item>2</Swipe.Item>
      <Swipe.Item>3</Swipe.Item>
    </Swipe>
  </>,
  mountNode,
);
```

## Component InstIance Method

```tsx
import { Swipe } from 'fnx-ui';

const swipeRef = useRef(null);

ReactDOM.render(
  <>
    <Swipe ref={swipeRef} autoplay="0">
      <Swipe.Item>1</Swipe.Item>
      <Swipe.Item>2</Swipe.Item>
      <Swipe.Item>3</Swipe.Item>
    </Swipe>
    <button onClick={() => swipeRef.current?.prev()}>Previous</button>
    <button onClick={() => swipeRef.current?.next()}>Next</button>
    <button onClick={() => swipeRef.current?.reset()}>Reset</button>
    <button onClick={() => swipeRef.current?.swipeTo(1)}>Appoint</button>
  </>,
  mountNode,
);
```

## API

| Parameter          | Description                                     | Type               | Default value |
| ------------------ | ----------------------------------------------- | ------------------ | ------------- |
| autoplay           | Automatic round broadcast, unit is `ms`         | `number`           | `3000`        |
| duration           | Animation time, unit is `ms`                    | `number`           | `500`         |
| defaultActiveIndex | Initial location index value                    | `number \| string` | `0`           |
| width              | Slider width, unit is `px`                      | `number`           | -             |
| height             | Slider height, unit is `px`                     | `number`           | -             |
| loop               | Whether to turn on loop play                    | `boolean`          | `true`        |
| stopPropagation    | Whether to prevent sliding events from bubbling | `boolean`          | `true`        |
| vertical           | Is it longitudinally scrolling?                 | `boolean`          | `false`       |
| touchable          | Can you slide through gestures?                 | `boolean`          | `true`        |
| indicator          | Custom indicator                                | `ReactNode`        | -             |

## Events

| Event Name          | Description                                    | Callback Arguments  |
| ------------------- | ---------------------------------------------- | ------------------- |
| onActiveIndexChange | Trigger after each page of the round broadcast | `(current: number)` |

### SwipeRef Instance Method

You can get the `Swipe` instance through `ref`, and call the instance method.

| Method Name | Description                        | Parameter                                            | Return Value |
| ----------- | ---------------------------------- | ---------------------------------------------------- | ------------ |
| prev()      | Switch to previous round broadcast | -                                                    | -            |
| next()      | Switch to next round broadcast     | -                                                    | -            |
| reset()     | Reset round broadcast              | -                                                    | -            |
| swipeTo()   | Switch to the specified location   | `(index: number, options?: { animation?: boolean })` | -            |
