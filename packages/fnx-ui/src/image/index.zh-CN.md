# Image 图片

增强版的 `img` 标签，提供多种图片填充模式、加载中提示、加载失败提示。

## 基础用法

基础用法与原生 `img` 标签一致，可以设置 `src`、`width`、`height`、`alt` 等原生属性。

```tsx
import { Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Image
      width="100"
      height="100"
      src="https://dummyimage.com/100x100/000/fff.jpg"
    />
  </>,
  mountNode,
);
```

## 填充模式

通过 `fit` 属性可以设置图片填充模式，可选值见下方表格。

```tsx
import { Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Image
      width="10rem"
      height="10rem"
      fit="contain"
      src="https://dummyimage.com/100x100/000/fff.jpg"
    />
  </>,
  mountNode,
);
```

## 圆形图片

通过 `round` 属性可以设置图片变圆，注意当图片宽高不相等或 `fit` 为 `contain` 或 `scale-down` 时，将无法填充一个完整的圆形。

```tsx
import { Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Image
      round
      width="10rem"
      height="10rem"
      fit="contain"
      src="https://dummyimage.com/100x100/000/fff.jpg"
    />
  </>,
  mountNode,
);
```

## 圆角

通过 `radius` 属性可以设置图片圆角。

```tsx
import { Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Image
      radius="10"
      width="10rem"
      height="10rem"
      fit="contain"
      src="https://dummyimage.com/100x100/000/fff.jpg"
    />
  </>,
  mountNode,
);
```

## 图片懒加载

通过 `lazy` 属性来开启图片懒加载。

```tsx
import { Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Image
      radius="10"
      width="10rem"
      height="10rem"
      fit="contain"
      src="https://dummyimage.com/100x100/000/fff.jpg"
      lazy
    />
  </>,
  mountNode,
);
```

## 加载中提示

Image 提供了默认的加载中提示，支持通过 `indicator.loading` 自定义加载中内容。

```tsx
import { Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Image
      width="10rem"
      height="10rem"
      fit="contain"
      src="https://dummyimage.com/100x100/000/fff.jpg"
      indicator={{
        loading: 'Loading...',
      }}
    />
  </>,
  mountNode,
);
```

## 加载失败提示

Image 提供了默认的加载失败提示，支持通过 `slots.error` 自定义加载失败内容。

```tsx
import { Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Image
      width="10rem"
      height="10rem"
      fit="contain"
      src="illegal src"
      slots={{
        error: 'Error',
      }}
    />
  </>,
  mountNode,
);
```

## API

### Image Props

| 名称   | 说明                     | 类型                                                               | 默认值   | 版本   |
| ------ | ------------------------ | ------------------------------------------------------------------ | -------- | ------ |
| src    | 图片链接                 | `string`                                                           | -        |        |
| fit    | 图片填充模式             | `'contain'` \| `'cover'` \| `'fill'` \| `'none'` \| `'scale-down'` | `'fill'` |        |
| alt    | 替代文本                 | `string`                                                           | -        |        |
| width  | 宽度，默认单位为`px`     | `number` \| `string`                                               | -        |        |
| height | 高度，默认单位为`px`     | `number` \| `string`                                               | -        |        |
| radius | 圆角大小，默认单位为`px` | `number` \| `string`                                               | `0`      |        |
| round  | 是否显示为圆形           | `boolean`                                                          | `false`  |        |
| lazy   | 是否开启图片懒加载       | `boolean`                                                          | `false`  | 0.0.10 |
| slots  | 图片插槽                 | `ImageSlots`                                                       | -        |        |

### ImageSlots

| 名称    | 说明                       | 类型        | 默认值 | 版本 |
| ------- | -------------------------- | ----------- | ------ | ---- |
| loading | 自定义加载中的提示内容     | `ReactNode` | -      |      |
| error   | 自定义加载失败时的提示内容 | `ReactNode` | -      |      |

### 图片填充模式

| 名称       | 说明                                                   |
| ---------- | ------------------------------------------------------ |
| contain    | 保持宽高缩放图片，使图片的长边能完全显示出来           |
| cover      | 保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边 |
| fill       | 拉伸图片，使图片填满元素                               |
| none       | 保持图片原有尺寸                                       |
| scale-down | 取 `none` 或 `contain` 中较小的一个                    |
