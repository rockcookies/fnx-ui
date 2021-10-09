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

We provide a `createfromiconcontcn` method to facilitate developers to call it in [iconfont. Cn]（ http://iconfont.cn/ ）Self managed icons on.

> See [iconfont. Cn] for details（ http://iconfont.cn/ ）See how to generate the JS address of the symbol code.

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

| Parameter | Description                                                                                      | Type                                     | Default value |
| --------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------- |
| name      | Icon name                                                                                        | `string`                                 | -             |
| size      | Icon size, such as `20px` `2em`, the default unit is `px`                                        | `number \| string`                       | -             |
| color     | Icon color                                                                                       | `string`                                 | -             |
| spin      | Is there a rotation animation                                                                    | `boolean`                                | `false`       |
| component | Controls how icons are rendered, usually a `React` component with a render root label of `<svg>` | `ComponentType<SVGProps<SVGSVGElement>>` | -             |
| viewBox   | SVG viewBox                                                                                      | `string`                                 | -             |

## IconSpinner

| Parameter | Description                                               | Type               | Default value |
| --------- | --------------------------------------------------------- | ------------------ | ------------- |
| size      | Icon size, such as `20px` `2em`, the default unit is `px` | `number \| string` | -             |
| color     | Icon color                                                | `string`           | -             |

### Custom font Icon

| Parameter | Description                                                 | Type                 | Default value |
| --------- | ----------------------------------------------------------- | -------------------- | ------------- |
| scriptUrl | Custom font icon address                                    | `string`             | -             |
| options   | Set additional properties for SVG icon `<icon/>` components | `SVGAttributes<any>` | -             |
