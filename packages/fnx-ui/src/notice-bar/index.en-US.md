# notice-bar

For loop playback display a set of messages, the default is not looped.

## Basic Usage

Set the content of the notification bar through the child element, set the icon on the left side of the notification bar via the `leftIcons` property.

```tsx
import { NoticeBar } from 'fnx-ui';

ReactDOM.render(
  <>
    <NoticeBar leftIcon={<Icon size="20px" name="picture" />}>
      Life is like all kinds of chocolate. You never know which one belongs to
      you.
    </NoticeBar>
  </>,
  mountNode,
);
```

## Marquee

`marquee` is the scrolling playback when the content length overflow for `'auto'` notification bar is overflow.

```tsx
import { NoticeBar } from 'fnx-ui';
ReactDOM.render(
  <>
    <NoticeBar marquee="auto">
      Life is like all kinds of chocolate. You never know which one belongs to
      you.
    </NoticeBar>
    <NoticeBar marquee={false}>
      Life is like all kinds of chocolate. You never know which one belongs to
      you.
    </NoticeBar>
  </>,
  mountNode,
);
```

## Multi-line Display

The default is multi-line show, when the text is longer, you can display it by setting the `ellipsis` property.

```tsx
import { NoticeBar } from 'fnx-ui';

ReactDOM.render(
  <>
    <NoticeBar ellipsis>
      Life is like all kinds of chocolate. You never know which one belongs to
      you.
    </NoticeBar>
  </>,
  mountNode,
);
```

## Custom Style

Set text color through `color` attribute, set background colors via `background` attribute.

```tsx
import { NoticeBar } from 'fnx-ui';

ReactDOM.render(
  <>
    <NoticeBar color="#1989fa" background="#ecf9ff">
      Life is like all kinds of chocolate. You never know which one belongs to
      you.
    </NoticeBar>
  </>,
  mountNode,
);
```

## Vertically Scrolling

Match `NoticeBar` and `Swipe` components can achieve vertical scrolling effects.

```tsx
import { NoticeBar } from 'fnx-ui';

ReactDOM.render(
  <>
    <NoticeBar
      style={{ height: '40px', lineHeight: '40px' }}
      leftIcon={<Icon size="20px" name="picture" />}
      rightIcon={<Icon size="20px" name="success" />}
    >
      <Swipe
        indicator={false}
        style={{ height: '40px', lineHeight: '40px' }}
        vertical={true}
      >
        <Swipe.Item>1</Swipe.Item>
        <Swipe.Item>2</Swipe.Item>
        <Swipe.Item>3</Swipe.Item>
      </Swipe>
    </NoticeBar>
  </>,
  mountNode,
);
```

## API

| Parameter    | Description                 | Type                | Default value |
| ------------ | --------------------------- | ------------------- | ------------- |
| color        | Notice text color           | `string`            | -             |
| background   | Scroll bar background       | `string`            | -             |
| leftIcon     | Left icon                   | `ReactNode`         | -             |
| rightIcon    | Right icon                  | `ReactNode`         | -             |
| marqueeDelay | Animation Delay Time (ms)   | `number`            | `1000`        |
| marqueeSpeed | Rolling rate (px/ms)        | `number`            | `0.06`        |
| marquee      | Whether to open scroll play | `boolean \| 'auto'` | `false`       |
| ellipsis     | Whether to open a text      | `boolean`           | -             |

### NoticeBarRef

| Event Name | Description                                     | Callback Arguments |
| ---------- | ----------------------------------------------- | ------------------ |
| reset()    | Trigger whenever the scroll bar restarts scroll | -                  |
