# Button 按钮

按钮用来触发一些操作。

## 按钮主题

按钮的 `type` 分别为 `default`、`primary`、`success`、`warning` 和 `danger` 。

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="default">Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
  </>,
  mountNode,
);
```

## 朴素按钮

使用 `plain` 来使用朴素按钮。

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" plain>
      Primary
    </Button>
    <Button type="success" plain>
      Success
    </Button>
  </>,
  mountNode,
);
```

## 细边框

设置 `hairline` 属性可以展示 0.5px 的细边框。

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" plain hairline>
      {i18n.hairline}
    </Button>
    <Button type="success" plain hairline>
      {i18n.hairline}
    </Button>
  </>,
  mountNode,
);
```

## 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" disabled>
      Primary
    </Button>
    <Button type="success" disabled>
      Success
    </Button>
  </>,
  mountNode,
);
```

## 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 `loadingChildren` 设置加载状态下的文字。

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" loading />
    <Button type="primary" loading>
      Primary
    </Button>
    <Button type="success" loading loadingChildren="Loading...">
      Success
    </Button>
  </>,
  mountNode,
);
```

## 按钮形状

按钮形状支持 `rect`、`radius`、`round` 三种类型，默认为 `radius`。

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" shape="rect">
      rect
    </Button>
    <Button type="success" shape="radius">
      radius
    </Button>
    <Button type="warning" shape="round">
      round
    </Button>
  </>,
  mountNode,
);
```

## 图标按钮

通过 `icon` 属性设置按钮图标。

```tsx
import { Button, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" icon={<Icon name="plus" />} />
    <Button type="primary" icon={<Icon name="plus" />}>
      Button
    </Button>
  </>,
  mountNode,
);
```

## 按钮尺寸

有 `lg`、`md`、`sm` 和 `xs` 尺寸。

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" size="lg">
      lg
    </Button>
    <Button type="primary" size="md">
      md
    </Button>
    <Button type="primary" size="sm">
      sm
    </Button>
    <Button type="primary" size="xs">
      xs
    </Button>
  </>,
  mountNode,
);
```

## 块级按钮

`block` 属性将使按钮适合其父宽度。

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" block>
      Block Button
    </Button>
  </>,
  mountNode,
);
```

## 自定义颜色

通过 `color` 属性可以自定义按钮的颜色。

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button color="#8a2be2">#8a2be2</Button>
    <Button color="#ff69b4" plain>
      #ff69b4
    </Button>
    <Button color="linear-gradient(to right, #ff6034, #ee0a24)">
      LinearGradient
    </Button>
  </>,
  mountNode,
);
```

## API

### Button Props

| 名称            | 说明                                      | 类型                                                                   | 默认值             | 版本 |
| --------------- | ----------------------------------------- | ---------------------------------------------------------------------- | ------------------ | ---- |
| type            | 按钮类型                                  | `'primary'` \| `'success'` \| `'warning'` \| `'danger'` \| `'default'` | `'default'`        |      |
| size            | 按钮尺寸                                  | `'lg'` \| `'md'` \| `'sm'` \| `'xs'`                                   | `'md'`             |      |
| iconPosition    | 按钮中图标的位置                          | `'left'` \| `'right'`                                                  | `'left'`           |      |
| loading         | 按钮是否显示加载状态                      | `boolean`                                                              | `false`            |      |
| loadingIcon     | 按钮加载状态图标                          | `ReactNode`                                                            | `<Icon.Spinner />` |      |
| loadingChildren | 加载状态中显示内容                        | `ReactNode`                                                            | -                  |      |
| disabled        | 按钮是否禁用                              | `boolean`                                                              | `false`            |      |
| hairline        | 按钮是否使用 0.5px 边框                   | `boolean`                                                              | `false`            |      |
| plain           | 按钮是否为朴素按钮                        | `boolean`                                                              | `false`            |      |
| shape           | 按钮形状                                  | `'rect'` \| `'radius'` \| `'round'`                                    | `'radius'`         |      |
| block           | 按钮是否显示为块级                        | `boolean`                                                              | `false`            |      |
| color           | 按钮颜色，支持传入 linear-gradient 渐变色 | `string`                                                               | -                  |      |
| htmlType        | 原生 button 标签的 `type` 属性            | `ButtonHTMLAttributes<HTMLButtonElement>['type']`                      | -                  |      |

### Button Events

| 事件名  | 说明                                     | 类型                          | 版本 |
| ------- | ---------------------------------------- | ----------------------------- | ---- |
| onClick | 点击按钮，且按钮状态不为加载或禁用时触发 | `(event: MouseEvent) => void` |      |
