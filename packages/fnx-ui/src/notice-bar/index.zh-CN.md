# notice-bar 通知栏

用于循环播放展示一组消息通知，默认不循环播放。

## 基础用法

通过子元素设置通知栏的内容，通过 `leftIcon` 属性设置通知栏左侧的图标。

```tsx | pure
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

## 滚动播放

`marquee` 为 `'auto'` 通知栏的内容长度溢出时会自动开启滚动播放。

```tsx | pure
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

## 多行展示

默认多行展示，文字较长时，可以通过设置 `ellipsis` 属性在一行显示。

```tsx | pure
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

## 自定义样式

通过 `color` 属性设置文本颜色，通过 `background` 属性设置背景色。

```tsx | pure
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

## 垂直滚动

搭配 `NoticeBar` 和 `Swipe` 组件可以实现垂直滚动的效果。

```tsx | pure
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

| 参数         | 说明              | 类型                | 默认值  |
| ------------ | ----------------- | ------------------- | ------- |
| color        | 通知文本颜色      | `string`            | -       |
| background   | 滚动条背景        | `string`            | -       |
| leftIcon     | 左侧图标          | `ReactNode`         | -       |
| rightIcon    | 右侧图标          | `ReactNode`         | -       |
| marqueeDelay | 动画延迟时间 (ms) | `number`            | `1000`  |
| marqueeSpeed | 滚动速率 (px/ms)  | `number`            | `0.06`  |
| marquee      | 是否开启滚动播放  | `boolean \| 'auto'` | `false` |
| ellipsis     | 是否开启文本换行  | `boolean`           | -       |

### NoticeBarRef 实例方法

| 事件名  | 说明                         | 回调参数 |
| ------- | ---------------------------- | -------- |
| reset() | 每当滚动栏重新开始滚动时触发 | -        |
