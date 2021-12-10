# Layout

24 grid layout.

## Basic Usage

Set the width percentage of the column by adding the `span` attribute to Col. In addition, adding the `offset` attribute can set the offset width of the column, and the calculation method is the same as that of `span`.

```tsx
import { Row, Col } from 'fnx-ui';

ReactDOM.render(
  <>
    <Row>
      <Col span={8}>span: 8</Col>
      <Col span={8}>span: 8</Col>
      <Col span={8}>span: 8</Col>
    </Row>
    <Row>
      <Col span={4}>span: 4</Col>
      <Col span={10} offset={4}>
        offset: 4, span: 10
      </Col>
    </Row>
    <Row>
      <Col offset={12} span={12}>
        offset: 12, span: 12
      </Col>
    </Row>
  </>,
  mountNode,
);
```

## Column Spacing

You can set the spacing between column elements through the `gutter` attribute. The default spacing is 0.

```tsx
import { Row, Col } from 'fnx-ui';

ReactDOM.render(
  <>
    <Row gutter={20}>
      <Col span={8}>span: 8</Col>
      <Col span={8}>span: 8</Col>
      <Col span={8}>span: 8</Col>
    </Row>
  </>,
  mountNode,
);
```

## Alignment

You can set the alignment of content on the spindle through the `justify` attribute, which is equivalent to the `justify-content` attribute in flex layout.

```tsx
import { Row, Col } from 'fnx-ui';

ReactDOM.render(
  <>
    <Row justify="center">
      <Col span={6}>span: 6</Col>
      <Col span={6}>span: 6</Col>
      <Col span={6}>span: 6</Col>
    </Row>

    <Row justify="end">
      <Col span={6}>span: 6</Col>
      <Col span={6}>span: 6</Col>
      <Col span={6}>span: 6</Col>
    </Row>

    <Row justify="space-between">
      <Col span={6}>span: 6</Col>
      <Col span={6}>span: 6</Col>
      <Col span={6}>span: 6</Col>
    </Row>

    <Row justify="space-around">
      <Col span={6}>span: 6</Col>
      <Col span={6}>span: 6</Col>
      <Col span={6}>span: 6</Col>
    </Row>
  </>,
  mountNode,
);
```

## API

### Col Props

| Name   | Description                    | Type     | Default | Version |
| ------ | ------------------------------ | -------- | ------- | ------- |
| span   | Column element width           | `number` | -       |         |
| offset | Column element offset distance | `number` | -       |         |

### Row Props

| Name    | Description                                    | Type                                                                       | Default | Version |
| ------- | ---------------------------------------------- | -------------------------------------------------------------------------- | ------- | ------- |
| gutter  | The spacing between column elements is in `px` | `number`                                                                   | -       |         |
| justify | Spindle alignment                              | `'start'` \| `'end'` \| `'center'` \| `'pace-around'` \| `'space-between'` | -       |         |
| align   | Cross axis alignment                           | `'top'` \| `'middle'` \| `'bottom'` \| `'stretch'`                         | -       |         |
