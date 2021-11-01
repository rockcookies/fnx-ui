# Circle

Ring shaped progress bar component, support progress gradient animation

## Basic usage

The rate attribute represents the target progress of the progress bar, and the currentrate represents the real-time progress in the animation process. When the rate changes, the attribute represents the target progress of the progress bar, and the current rate will change at the speed of speed until it reaches the value set by the rate.

```tsx
import { Circle } from 'fnx-ui';

ReactDOM.render(
  <>
    <Circle currentRate={currentRate} text={<div>70%</div>}></Circle>
  </>,
  mountNode,
);
```

## Width customization

The width of progress bar is controlled by strokeWidth attribute.

```tsx
import { Circle } from 'fnx-ui';

ReactDOM.render(
  <>
    <Circle
      currentRate={currentRate}
      strokeWidth={80}
      text={'Width customization'}
    ></Circle>
  </>,
  mountNode,
);
```

## Color customization

The color attribute is used to control the color of the progress bar, and the layercolor attribute is used to control the color of the track.

```tsx
import { Sticky, Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Collapse>
      <CollapseItem disabled title={'title'}></CollapseItem>
      <CollapseItem disabled title={'title'}></CollapseItem>
      <CollapseItem title={'title'}></CollapseItem>
    </Collapse>
  </>,
  mountNode,
);
```

## Gradient color

The color property supports incoming object formats to define gradients.

```tsx
import { Circle } from 'fnx-ui';

ReactDOM.render(
  <>
    <Circle
      currentRate={currentRate}
      color={gradientColor}
      text={'Gradient color'}
    ></Circle>
  </>,
  mountNode,
);
```

## counter-clockwise direction

If clockwise is set to false, the progress will start counterclockwise.

```tsx
import { Circle } from 'fnx-ui';

ReactDOM.render(
  <>
    <Circle
      clockwise={false}
      currentRate={currentRate}
      text={'counter-clockwise direction'}
    ></Circle>
  </>,
  mountNode,
);
```

## Size customization

Set the circle diameter through the size property.

```tsx
import { Circle } from 'fnx-ui';

ReactDOM.render(
  <>
    <Circle size={200} text={'Size customization'}></Circle>
  </>,
  mountNode,
);
```

## API

| Parameter   | description                                                                  | type            | default value |
| ----------- | ---------------------------------------------------------------------------- | --------------- | ------------- |
| currentRate | current progress                                                             | `number`        | -             |
| rate        | target progress                                                              | `number string` | 100           |
| size        | ring diameter, the default unit is px                                        | `number string` | 100px         |
| color       | progress bar color. The incoming object format can define the gradient color | `string object` | #1989fa       |
| layerColor  | track color                                                                  | `string`        | -             |
| fill        | fill color                                                                   | `string`        | 0             |
| speed       | animation speed (rate / s)                                                   | `number string` | -             |
| text        | fill color                                                                   | `string`        | -             |
| strokeWidth | progress bar width                                                           | `string`        | -             |
| clockWise   | Does it increase clockwise                                                   | `string`        | -             |
