# Grid

The patrigger can separate the page into the equal width block in the horizontal direction, for displaying the content or performing the page navigation.

## Basic Usage

Set the palace content by `grid.Item` child element

```tsx
import { Grid, Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Grid>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
    </Grid>
  </>,
  mountNode,
);
```

## Custom Column

The default line shows four plaids, which can be custom columns through `columnsize`

```tsx
import { Grid, Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Grid columnSize={3}>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
    </Grid>
  </>,
  mountNode,
);
```

## Square

After setting the `Square` property, the height of the lattice will be consistent with the width.

```tsx
import { Grid, Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Grid square>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
    </Grid>
  </>,
  mountNode,
);
```

## Gutter

Set the distance between the plaids via the `gutter` property.

```tsx
import { Grid, Image } from 'fnx-ui';

ReactDOM.render(
  <>
    <Grid gutter="5">
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
      </Grid.Item>
    </Grid>
  </>,
  mountNode,
);
```

## API

| Parameter  | Description                                          | Type               | Default value |
| ---------- | ---------------------------------------------------- | ------------------ | ------------- |
| columnSize | Column number                                        | `number \| string` | `4`           |
| clickable  | Whether to open a plaid click feedback               | `boolean`          | `false`       |
| gutter     | The spacing between plaids, the default unit is `px` | `number \| string` | -             |
| border     | Whether to display the border                        | `boolean`          | `true`        |
| square     | Whether the plaid is fixed to square                 | `boolean`          | `false`       |

## GridItem API

| Parameter | Description                                 | Type      | Default value |
| --------- | ------------------------------------------- | --------- | ------------- |
| clickable | Whether to open all lattices Click Feedback | `boolean` | `false`       |
| square    | Do you fix all plaids as a square?          | `boolean` | `false`       |

```

```
