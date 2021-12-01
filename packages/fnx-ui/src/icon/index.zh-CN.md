# Icon 图标

语义化的矢量图标。

## 基础用法

使用 `name` 属性设置图标名称。

```tsx
import { Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Icon name="success" />
  </>,
  mountNode,
);
```

## 图标颜色

使用 `color` 属性设置图标颜色。

```tsx
import { Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Icon name="success" color="#1989fa" />
    <Icon name="fail" color="#ee0a24" />
  </>,
  mountNode,
);
```

## 图标尺寸

使用 `size` 属性设置图标尺寸。

```tsx
import { Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Icon name="arrow-right" size="40" />
    <Icon name="arrow-left" size="3rem" />
  </>,
  mountNode,
);
```

## 旋转动画

使用 `spin` 属性展示旋转动画。

```tsx
import { Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Icon name="success" spin />
  </>,
  mountNode,
);
```

## Icon.Spinner

使用 `Icon.Spinner` 组件展示加载中状态。

```tsx
import { Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Icon.Spinner />
  </>,
  mountNode,
);
```

## 自定义 font 图标

我们提供了一个 `createFromIconfontCN` 方法，方便开发者调用在 [iconfont.cn](http://iconfont.cn/) 上自行管理的图标。

> 详见 [iconfont.cn](http://iconfont.cn/) 查看如何生成 symbol 代码的 js 地址。

```tsx
import { Icon } from 'fnx-ui';

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

ReactDOM.render(
  <>
    <MyIcon name="icon-example" />
  </>,
  mountedNode,
);
```

## 自定义 SVG 图标

如果使用 `webpack`，可以通过配置 [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack) 来将 `svg` 图标作为 `React` 组件导入。`@svgr/webpack` 的 `options` 选项请参阅 [svgr 文档](https://github.com/smooth-code/svgr#options)。

```ts
// webpack.config.js
{
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
	use: [
    {
      loader: 'babel-loader',
    },
    {
      loader: '@svgr/webpack',
      options: {
        babel: false,
        icon: true,
      },
    },
  ],
}
```

```tsx
import { Icon } from 'fnx-ui';
import MessageSvg from 'path/to/message.svg';
ReactDOM.render(
  <>
    <Icon component={MessageSvg} />
  </>,
  mountNode,
);
```

## API

| 名称      | 说明                                                           | 类型                                     | 默认值  |
| --------- | -------------------------------------------------------------- | ---------------------------------------- | ------- |
| name      | 图标名称                                                       | `string`                                 | -       |
| size      | 图标大小，如 `20px` `2em`，默认单位为 `px`                     | `number \| string`                       | -       |
| color     | 图标颜色                                                       | `string`                                 | -       |
| spin      | 是否有旋转动画                                                 | `boolean`                                | `false` |
| component | 控制如何渲染图标，通常是一个渲染根标签为 `<svg>` 的 React 组件 | `ComponentType<SVGProps<SVGSVGElement>>` | -       |
| viewBox   | SVG viewBox                                                    | `string`                                 | -       |

## Icon.Spinner API

| 名称  | 说明                                       | 类型               | 默认值 |
| ----- | ------------------------------------------ | ------------------ | ------ |
| size  | 图标大小，如 `20px` `2em`，默认单位为 `px` | `number \| string` | -      |
| color | 图标颜色                                   | `string`           | -      |

### 自定义 font 图标

| 名称      | 说明                                 | 类型                 | 默认值 |
| --------- | ------------------------------------ | -------------------- | ------ |
| scriptUrl | 自定义字体图标地址                   | `string`             | -      |
| options   | 为 SVG 图标`<icon/>`组件设置附加属性 | `SVGAttributes<any>` | -      |
