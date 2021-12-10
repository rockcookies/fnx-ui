# Layout 布局

24 栅格布局。

## 基础用法

通过在 Col 上添加 `span` 属性设置列所占的宽度百分比。此外添加 `offset` 属性可以设置列的偏移宽度，计算方式与 `span` 相同。

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

## 设置列元素间距

通过 `gutter` 属性可以设置列元素之间的间距，默认间距为 0。

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

## 对齐方式

通过 `justify` 属性可以设置主轴上内容的对齐方式，等价于 flex 布局中的 `justify-content` 属性。

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

| 名称   | 说明           | 类型     | 默认值 | 版本 |
| ------ | -------------- | -------- | ------ | ---- |
| span   | 列元素宽度     | `number` | -      |      |
| offset | 列元素偏移距离 | `number` | -      |      |

### Row Props

| 名称    | 说明                         | 类型                                                                       | 默认值 | 版本 |
| ------- | ---------------------------- | -------------------------------------------------------------------------- | ------ | ---- |
| gutter  | 列元素之间的间距 单位为 `px` | `number`                                                                   | -      |      |
| justify | 主轴对齐方式                 | `'start'` \| `'end'` \| `'center'` \| `'pace-around'` \| `'space-between'` | -      |      |
| align   | 交叉轴对齐方式               | `'top'` \| `'middle'` \| `'bottom'` \| `'stretch'`                         | -      |      |
