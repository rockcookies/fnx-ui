# Icon

Semantic vector icon.

## Basic Usage

Use the `name` attribute to set the icon name.

```tsx
import { Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Icon name="success" />
  </>,
  mountNode,
);
```

## Color

Use the `color` attribute to set the icon color.

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

## Size

Use the `size` attribute to set the icon size.

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

## Spin

Use the `spin` attribute to display the rotation animation.

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

Use the `Icon.Spinner` component to display the loading status.

```tsx
import { Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Icon.Spinner />
  </>,
  mountNode,
);
```

## Custom Font Icon

We added a `createFromIconfontCN` function to help developer use their own icons deployed at [iconfont.cn](http://iconfont.cn/) in a convenient way.

```tsx
import { Icon } from 'fnx-ui';

const MyIcon = Icon.createFromIconfontCN(
  '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
);

ReactDOM.render(
  <>
    <MyIcon name="icon-example" />
  </>,
  mountedNode,
);
```

## Custom SVG Icon

If you use `webpack`, you can configure [@ svgr / webpack]（ https://www.npmjs.com/package/ @Svgr / webpack) to import the `svg` icon as a `React` component.Please refer to [svgr documentation] for the `options` option of svgr / webpack（ https://github.com/smooth-code/svgr#options ).

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

### Icon Props

| Name      | Description                                                                                      | Type                                  | Default           | Version |
| --------- | ------------------------------------------------------------------------------------------------ | ------------------------------------- | ----------------- | ------- |
| name      | Icon name                                                                                        | `string`                              | -                 |         |
| size      | Icon size, such as `20px` `2em`, the default unit is `px`                                        | `number` \| `string`                  | -                 |         |
| color     | Icon color                                                                                       | `string`                              | -                 |         |
| spin      | Is there a rotation animation                                                                    | `boolean`                             | `false`           |         |
| component | Controls how icons are rendered, usually a `React` component with a render root label of `<svg>` | `ComponentType<SVGProps<SVGElement>>` | -                 |         |
| viewBox   | SVG viewBox                                                                                      | `string`                              | `'0 0 1024 1024'` |         |

### Icon.Spinner Props

| Name  | Description                                               | Type                 | Default | Version |
| ----- | --------------------------------------------------------- | -------------------- | ------- | ------- |
| size  | Icon size, such as `20px` `2em`, the default unit is `px` | `number` \| `string` | -       |         |
| color | Icon color                                                | `string`             | -       |         |

### Custom SVG Icon

| Name      | Description                                                 | Type                 | Default | Version |
| --------- | ----------------------------------------------------------- | -------------------- | ------- | ------- |
| scriptUrl | Custom font icon address                                    | `string`             | -       |         |
| options   | Set additional properties for SVG icon `<icon/>` components | `SVGAttributes<any>` | -       |         |
