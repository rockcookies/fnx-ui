# Grid

Used to divide the page into blocks of equal width in the horizontal direction for displaying content or page navigation.

## Basic Usage

A basic Grid.

```tsx
import { Grid } from 'fnx-ui';

ReactDOM.render(
  <>
    <Grid>
      <Grid.Item>Content</Grid.Item>
      <Grid.Item>Content</Grid.Item>
      <Grid.Item>Content</Grid.Item>
      <Grid.Item>Content</Grid.Item>
    </Grid>
  </>,
  mountNode,
);
```

## Custom Column

Use `columnSize` property to set the grid column size.

```tsx
import { Grid } from 'fnx-ui';

ReactDOM.render(
  <>
    <Grid columnSize={3}>
      <Grid.Item>Content</Grid.Item>
      <Grid.Item>Content</Grid.Item>
      <Grid.Item>Content</Grid.Item>
    </Grid>
  </>,
  mountNode,
);
```

## Square

Use `square` property to set square grid item.

```tsx
import { Grid } from 'fnx-ui';

ReactDOM.render(
  <>
    <Grid square>
      <Grid.Item>
        <Image src="https://dummyimage.com/100x100/000/fff.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://dummyimage.com/100x100/000/fff.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://dummyimage.com/100x100/000/fff.jpg" />
      </Grid.Item>
      <Grid.Item>
        <Image src="https://dummyimage.com/100x100/000/fff.jpg" />
      </Grid.Item>
    </Grid>
  </>,
  mountNode,
);
```

## Gutter

Set the distance between the Grid.Item via the `gutter` property.

```tsx
import { Grid } from 'fnx-ui';

ReactDOM.render(
  <>
    <Grid gutter="5">
      <Grid.Item>Content</Grid.Item>
      <Grid.Item>Content</Grid.Item>
      <Grid.Item>Content</Grid.Item>
      <Grid.Item>Content</Grid.Item>
    </Grid>
  </>,
  mountNode,
);
```

## With Badge

```tsx
import { Grid, Image, Badge, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Grid columnSize={2}>
      <Grid.Item>
        <Badge dot>
          <Icon size="30px" name="file-o" />
          <p>Content</p>
        </Badge>
      </Grid.Item>
      <Grid.Item>
        <Badge count={100} max={99}>
          <Icon size="30px" name="photo" />
          <p>Content</p>
        </Badge>
      </Grid.Item>
    </Grid>
  </>,
  mountNode,
);
```

## API

### Props

| Name       | Description                                         | Type               | Default value |
| ---------- | --------------------------------------------------- | ------------------ | ------------- |
| columnSize | Column size                                         | `number \| string` | `4`           |
| clickable  | Whether to show click feedback when clicked         | `boolean`          | `false`       |
| gutter     | The spacing between items, the default unit is `px` | `number \| string` | `0`           |
| border     | Whether to display the border                       | `boolean`          | `true`        |
| square     | Whether to be square shape                          | `boolean`          | `false`       |

## Grid.Item Props

| Name      | Description                                 | Type      | Default value |
| --------- | ------------------------------------------- | --------- | ------------- |
| clickable | Whether to show click feedback when clicked | `boolean` | `false`       |
| square    | Whether to be square shape                  | `boolean` | `false`       |
