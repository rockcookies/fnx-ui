# Button 按钮

按钮用于开始一个即时操作。

## 按钮主题

按钮支持 `default`、`primary`、`success`、`warning`、`danger` 五种主题，默认为 `default`。

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="default">Default</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button>
  </>,
  mountNode,
);
```

## 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

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

通过 `loading` 属性设置按钮为加载状态，加载状态下默认会隐藏按钮文字，可以通过 `loadingText` 设置加载状态下的文字。

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" loading />
    <Button type="primary" loading>
      Content
    </Button>
    <Button type="success" loading loadingText="Loading...">
      Content
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
      Content
    </Button>
    <Button type="success" shape="radius">
      Content
    </Button>
    <Button type="warning" shape="round">
      Content
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
      Content
    </Button>
  </>,
  mountNode,
);
```

## 按钮尺寸

按钮尺寸 `size`，支持 `lg`、`md`、`sm`、`xs` 四种尺寸，默认为 `md`。

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button type="primary" size="lg">
      LG
    </Button>
    <Button type="primary" size="md">
      MD
    </Button>
    <Button type="primary" size="sm">
      SM
    </Button>
    <Button type="primary" size="xs">
      XS
    </Button>
  </>,
  mountNode,
);
```

## 块级按钮

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮的元素类型设置为块级元素。

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

```tsx
import { Button } from 'fnx-ui';

ReactDOM.render(
  <>
    <Button color="#7232dd">Button</Button>
    <Button color="#7232dd" plain>
      Button
    </Button>
    <Button color="linear-gradient(to right, #ff6034, #ee0a24)">Button</Button>
  </>,
  mountNode,
);
```

## API

| 参数            | 说明                                      | 类型                                                           | 默认值    |
| --------------- | ----------------------------------------- | -------------------------------------------------------------- | --------- |
| type            | 按钮类型                                  | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'default'` | `default` |
| size            | 尺寸，可选值为 large small mini           | `'lg' \|'md' \|'sm' 'xs'`                                      | `md`      |
| iconPosition    | 图标展示位置                              | `'left' \| 'right'`                                            | `left`    |
| loading         | 是否显示为加载状态                        | `boolean`                                                      | `false`   |
| disabled        | 是否禁用按钮                              | `boolean`                                                      | `false`   |
| hairline        | 是否使用 0.5px 边框                       | `boolean`                                                      | `false`   |
| plain           | 是否为朴素按钮                            | `boolean`                                                      | `false`   |
| shape           | 按钮形状                                  | `'rect' \| 'radius' \| 'round'`                                | `radius`  |
| block           | 是否为块级元素                            | `boolean`                                                      | `false`   |
| loadingIcon     | 加载状态图标                              | `ReactNode`                                                    | -         |
| loadingChildren | 加载状态中显示内容                        | `ReactNode`                                                    | -         |
| color           | 按钮颜色，支持传入 linear-gradient 渐变色 | `string`                                                       | -         |
| htmlType        | 按钮 type                                 | `ButtonHTMLAttributes<HTMLButtonElement>['type']`              | -         |

## 事件

| 事件名  | 说明                                     | 回调参数            |
| ------- | ---------------------------------------- | ------------------- |
| onClick | 点击按钮，且按钮状态不为加载或禁用时触发 | `event: MouseEvent` |
