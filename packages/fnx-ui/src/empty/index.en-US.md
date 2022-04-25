# Empty

Empty state placeholder.

## Basic Usage

```tsx
import { Empty } from 'fnx-ui';

ReactDOM.render(
  <>
    <Empty description="Description" />
  </>,
  mountNode,
);
```

## Custom Title

```tsx
import { Empty } from 'fnx-ui';

ReactDOM.render(
  <>
    <Empty title="Title" description="Description" />
  </>,
  mountNode,
);
```

## Custom Image

Use `image` prop to custom image, Will treat as image url when string provided.

```tsx
import { Empty } from 'fnx-ui';

ReactDOM.render(
  <>
    <Empty
      image="https://dummyimage.com/200x200/000/fff.jpg"
      description="Description"
    />
  </>,
  mountNode,
);
```

## Custom Image Props

Using `imageProps` prop to custom the props of image.

```tsx
import { Button, Empty } from 'fnx-ui';

ReactDOM.render(
  <>
    <Empty
      image="https://dummyimage.com/200x200/000/fff.jpg"
      imageProps={{
        style: {
          borderRadius: '50%',
        },
      }}
      description="Description"
    />
  </>,
  mountNode,
);
```

## Custom

Use `children` prop to custom extra content.

```tsx
import { Button, Empty } from 'fnx-ui';

ReactDOM.render(
  <>
    <Empty description="Description">
      <Button type="primary">Button</Button>
    </Empty>
  </>,
  mountNode,
);
```

## API

### Empty Props

| Name        | Description                                                   | Type        | Default | Version |
| ----------- | ------------------------------------------------------------- | ----------- | ------- | ------- |
| image       | Customize image. Will treat as image url when string provided | `ReactNode` | -       |         |
| title       | Custom title                                                  | `ReactNode` | -       |         |
| description | Custom description                                            | `ReactNode` | -       |         |
| children    | Custom extra content                                          | `ReactNode` | -       |         |
