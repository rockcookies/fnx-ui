# Popup 弹出层

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

## 基础用法

通过 `visible` 控制弹出层是否显示。

```tsx
import React, { useState } from 'react';
import { Popup, Cell } from 'fnx-ui';

const App = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClose = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <Cell
        title="Open Popup"
        rightIcon={<Icon name="arrow-right" />}
        onClick={showPopup}
        clickable
      />
      <Popup visible={isPopupVisible} onClose={handleClose}>
        Content
      </Popup>
    </>
  );
};

ReactDOM.render(<App />, mountNode);
```

## 弹出位置

通过 `position` 属性设置弹出位置，默认居中弹出，可以设置为 `top`、`bottom`、`left`、`right` 或 `center`。

```tsx
import { Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup visible position="top" style={{ height: '30%' }}></Popup>
  </>,
  mountNode,
);
```

## 圆角弹窗

设置 `round` 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```tsx
import { Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup visible round position="bottom" style={{ height: '30%' }}></Popup>
  </>,
  mountNode,
);
```

## 指定挂载位置

弹出层可以通过 `mountTo` 属性指定挂载位置。

```tsx
import { Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup visible mountTo={() => document.body}></Popup>
    <Popup visible mountTo={() => document.getElementById('app')}></Popup>
  </>,
  mountNode,
);
```

## 使用 Popup.Select

```tsx
import { Popup, Cell, Icon, Picker } from 'fnx-ui';

const options = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

ReactDOM.render(
  <>
    <Popup.Select<string>
      select={<Picker data={options} title="Select date" />}
    >
      {(value) => (
        <Cell
          clickable
          title={value || 'Select date'}
          rightIcon={<Icon name="arrow-right" />}
        />
      )}
    </Popup.Select>
  </>,
  mountNode,
);
```

## API

### Popup Props

| 名称                | 说明                       | 类型                                                         | 默认值                | 版本 |
| ------------------- | -------------------------- | ------------------------------------------------------------ | --------------------- | ---- |
| visible             | 是否显示弹出层             | `boolean`                                                    | `false`               |      |
| renderOnShow        | 是否在显示弹层时才渲染节点 | `boolean`                                                    | `true`                |      |
| destroyOnHide       | 是否在关闭弹层时销毁节点   | `boolean`                                                    | `false`               |      |
| mountTo             | 指定挂载的节点             | `HTMLElement` \| `() => HTMLElement` \| `false`              | `() => document.body` |      |
| transitionDuration  | 过渡动画时常，单位毫秒     | `number`                                                     | `300`                 |      |
| transitionName      | 过渡动画类名               | `string`                                                     | -                     |      |
| lockScroll          | 是否锁定背景滚动           | `boolean`                                                    | `true`                |      |
| position            | 遮罩层位置                 | `'top'` \| `'bottom'` \| `'left'` \| `'right'` \| `'center'` | `'center'`            |      |
| round               | 是否展示圆角               | `boolean`                                                    | `false`               |      |
| safeAreaInsetBottom | 是否开启底部安全区适配     | `boolean`                                                    | `false`               |      |
| overlay             | 是否显示遮罩层             | `boolean`                                                    | `true`                |      |
| overlayClassName    | 遮罩层 Class 类名          | `string`                                                     | -                     |      |
| overlayStyle        | 遮罩层样式                 | `CSSProperties`                                              | -                     |      |
| overlayCloseable    | 是否点击遮罩层关闭         | `boolean`                                                    | `true`                |      |

**Popup 默认关闭后状态不会自动清空, 如果希望每次打开都是新内容，请设置 `destroyOnHide`。**

### Popup Events

| 事件名         | 说明             | 类型         | 版本 |
| -------------- | ---------------- | ------------ | ---- |
| onOverlayClick | 点击遮罩层触发   | `() => void` |      |
| onClose        | 关闭事件触发     | `() => void` |      |
| onBeforeHide   | 关闭动画之前触发 | `() => void` |      |
| onHide         | 关闭动画时触发   | `() => void` |      |
| onAfterHide    | 关闭动画后触发   | `() => void` |      |
| onBeforeShow   | 显示动画前触发   | `() => void` |      |
| onShow         | 显示动画中触发   | `() => void` |      |
| onAfterShow    | 显示动画后触发   | `() => void` |      |

### Popup.Select Props

Popup.Select 继承了 Popup 的属性并新增了如下属性：

| 名称                       | 说明               | 类型                                        | 默认值         | 版本 |
| -------------------------- | ------------------ | ------------------------------------------- | -------------- | ---- |
| disabled                   | 是否禁用           | `boolean`                                   | `false`        |      |
| value                      | 选项值             | `any`                                       | -              |      |
| defaultValue               | 默认选项值         | `any`                                       | -              |      |
| select                     | 弹出层内容         | `ReactNode`                                 | -              |      |
| selectDefaultValuePropName | 默认值名字         | `string`                                    | `defaultValue` |      |
| selectConfirmTrigger       | 确认事件回调名称   | `string`                                    | `onConfirm`    |      |
| selectCancelTrigger        | 取消事件回调名称   | `string`                                    | `onCancel`     |      |
| trigger                    | 子元素触发事件名称 | `string`                                    | `onClick`      |      |
| children                   | 子元素             | `ReactNode` \| `(value?: any) => ReactNode` | -              |      |

### Popup.Select Events

Popup.Select 继承了 Popup 的事件并新增了如下事件：

| 事件名   | 说明                   | 类型                   | 版本 |
| -------- | ---------------------- | ---------------------- | ---- |
| onChange | `value` 发生改变时触发 | `(value: any) => void` |      |
