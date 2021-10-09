# Image

The enhanced version of the `img` tag provides a variety of picture filling modes、loading prompt and loading failure prompt.

## Basic Usages

The basic usage is consistent with the native `img` tag. You can set `src`, `width`, `height`, `alt` and other native attributes.

```tsx
import { Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Image
      width="100"
      height="100"
      src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg"
    />
  </>,
  mountNode,
);
```

## Fit Mode

You can set the picture filling mode through the `fit` attribute. The optional values are shown in the table below.

```tsx
import { Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Image
      width="10rem"
      height="10rem"
      fit="contain"
      src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg"
    />
  </>,
  mountNode,
);
```

## Round

Through the `round` attribute, you can set the picture to round. Note that when the width and height of the picture are unequal or the `fit` is `contain` or `scale-down`, a complete circle cannot be filled.

```tsx
import { Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Image
      round
      width="10rem"
      height="10rem"
      fit="contain"
      src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg"
    />
  </>,
  mountNode,
);
```

## Radius

You can set the fillet of the picture through the `radius` attribute.

```tsx
import { Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Image
      radius="10"
      width="10rem"
      height="10rem"
      fit="contain"
      src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg"
    />
  </>,
  mountNode,
);
```

## Loading

`Image`component provides the default loading prompt, and supports customizing the loading content through `indicator.loading`.

```tsx
import { Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Image
      width="10rem"
      height="10rem"
      fit="contain"
      src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg"
      indicator={{
        loading: 'Loading...',
      }}
    />
  </>,
  mountNode,
);
```

## Error

`Image` component provides the default loading failure prompt, and supports custom loading failure content through `slots.error`.

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

| Parameter | Description                       | Type                                                       | Default value |
| --------- | --------------------------------- | ---------------------------------------------------------- | ------------- |
| src       | Pictures linking                  | `string`                                                   | -             |
| fit       | Picture fill mode                 | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `fill`        |
| alt       | Alternate text                    | `string`                                                   | -             |
| width     | Width, default unit `px`          | `number \| string`                                         | -             |
| height    | Height, default unit `px`         | `number \| string`                                         | -             |
| radius    | Fillet size, default unit is `px` | `number \| string`                                         | `0`           |
| round     | Is it displayed as a circle       | `boolean`                                                  | `false`       |
| slots     | Custom load failed content        | `{ loading?: ReactNode; error?: ReactNode; }`              | -             |

### Picture Fill Mode

| Name       | Description                                                                                                                        |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| contain    | Keep the width and height of the zoom image so that the long edge of the image can be fully displayed                              |
| cover      | Keep the width and height to zoom the picture, so that the short edge of the picture can be fully displayed, and cut the long edge |
| fill       | Stretch the picture to fill it with yuan                                                                                           |
| none       | Keep the original size of the picture                                                                                              |
| scale-down | Take the smaller of `none` or `contain`                                                                                            |
