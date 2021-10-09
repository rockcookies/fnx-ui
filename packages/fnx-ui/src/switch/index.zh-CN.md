# Switch 开关

用于在打开和关闭状态之间进行切换。

## 基础用法

通过 `checked` 绑定开关的选中状态，`true` 表示开，`false` 表示关。`defaultChecked`表示开关默认的状态。

```tsx
import { Switch } from 'fnx-ui';

ReactDOM.render(
  <>
    <Switch defaultChecked={false} />
    <Switch checked />
  </>,
  mountNode,
);
```

## 禁用状态

通过 `disabled` 属性来禁用开关，禁用状态下开关不可点击。

```tsx
import { Switch } from 'fnx-ui';

ReactDOM.render(
  <>
    <Switch disabled />
  </>,
  mountNode,
);
```

## 加载状态

通过 `loading` 属性设置开关为加载状态，加载状态下开关不可点击。

```tsx
import { Switch } from 'fnx-ui';

ReactDOM.render(
  <>
    <Switch loading />
  </>,
  mountNode,
);
```

## 自定义大小

通过 `size` 属性自定义开关的大小。

```tsx
import { Switch } from 'fnx-ui';

ReactDOM.render(
  <>
    <Switch />
    <Switch size={40} />
  </>,
  mountNode,
);
```

## 自定义颜色

`activeColor` 属性表示打开时的背景色，`inactiveColor` 表示关闭时的背景色。

```tsx
import { Switch } from 'fnx-ui';

ReactDOM.render(
  <>
    <Switch activeColor="#ee0a24" inactiveColor="#0000ff" />
  </>,
  mountNode,
);
```

## 文字与图标

设置文字与图标

```tsx
import { Switch } from 'fnx-ui';

ReactDOM.render(
  <>
    <Switch checkedChildren="NO" unCheckedChildren="OFF" />
  </>,
  mountNode,
);
```

## 异步控制

需要异步控制开关时可在事件回调函数中手动处理开关状态。

```tsx
import { Switch } from 'fnx-ui';

const [syncChecked, setSyncChecked] = useState(true);

const handleSyncChange = () => {
  setSyncChecked(!syncChecked);
};

ReactDOM.render(
  <>
    <Switch checked={syncChecked} onClick={handleSyncChange} />
    <Button onClick={handleSyncChange}>Content</Button>
  </>,
  mountNode,
);
```

## API

| 参数              | 说明                      | 类型               | 默认值  |
| ----------------- | ------------------------- | ------------------ | ------- |
| size              | 开关尺寸，默认单位为 `px` | `string \| number` | `30`    |
| disabled          | 是否为禁用状态            | `boolean`          | `false` |
| checked           | 开关选中状态              | `boolean`          | -       |
| defaultChecked    | 是否默认选中              | `boolean`          | `false` |
| loading           | 是否为加载状态            | `boolean`          | `false` |
| checkedColor      | 打开时的背景色            | `string`           | -       |
| unCheckedColor    | 关闭时的背景色            | `string`           | -       |
| checkedChildren   | 选中时的内容              | `ReactNode`        | -       |
| unCheckedChildren | 非选中时的内容            | `ReactNode`        | -       |

## 事件

| 事件名   | 说明               | 回调参数                                                |
| -------- | ------------------ | ------------------------------------------------------- |
| onClick  | 点击开关时触发     | `(checked: boolean)`                                    |
| onChange | 开关状态切换时触发 | `(checked: boolean, event: MouseEvent<HTMLDivElement>)` |
