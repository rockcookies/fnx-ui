# Overlay

Create a mask layer to emphasize a specific page element and prevent the user from making other operations.

## Basic usagec Usage

```tsx
import { Overlay } from 'fnx-ui';

ReactDOM.render(
  <>
    <Overlay visible />
  </>,
  mountNode,
);
```

## Embedding

An arbitrary content can be embedded on the mask layer.

```tsx
import { Overlay } from 'fnx-ui';

ReactDOM.render(
  <>
    <Overlay visible>
      <div>Content</div>
    </Overlay>
  </>,
  mountNode,
);
```

## API

| Parameter          | Description                                                                                  | Type               | Default value |
| ------------------ | -------------------------------------------------------------------------------------------- | ------------------ | ------------- |
| visible            | Whether to show a mask layer                                                                 | `boolean`          | `false`       |
| zIndex             | Z-index hierarchy                                                                            | `number`           | `1`           |
| lockScroll         | Whether to lock the background scroll, the content in the mashed in the lock will not scroll | `boolean`          | `true`        |
| transitionDuration | Animation time, unit second, set to 0 can disable animation                                  | `number \| string` | `300`         |
