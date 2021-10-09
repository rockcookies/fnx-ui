# Divider

Segmentation lines of the content of the content.

## Basic Usage

A horizontal division line is rendered by default.

```tsx
import { Divider } from 'antd';

ReactDOM.render(
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
    <Divider />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
  </>,
  mountNode,
);
```

## Show text

The content can be inserted in the middle of the line through the sub-elements.

```tsx
import { Divider } from 'antd';

ReactDOM.render(
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
    <Divider>Children</Divider>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
  </>,
  mountNode,
);
```

## Content Location

The location of the content is specified by `contentposition`

```tsx
import { Divider } from 'antd';

ReactDOM.render(
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
    <Divider contentPosition="right" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
  </>,
  mountNode,
);
```

## Dashed

Add the `dashed` property to render the split line to a dotted line.

```tsx
import { Divider } from 'antd';

ReactDOM.render(
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
    <Divider dashed />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
      merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
      quo modo.
    </p>
  </>,
  mountNode,
);
```

## API

| Parameter       | Description                 | Type                            | Default value |
| --------------- | --------------------------- | ------------------------------- | ------------- |
| dashed          | Do you use a dashed line?   | `boolean`                       | `false`       |
| hairline        | Whether to use `0.5px` line | `boolean`                       | `true`        |
| contentPosition | Content location            | `'left' \| 'right' \| 'center'` | `center`      |
