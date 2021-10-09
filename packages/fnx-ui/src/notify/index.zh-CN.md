# Notify 消息通知

在页面顶部展示消息提示，支持函数调用和组件调用两种方式。

## 函数调用

`Notify` 是一个函数，调用后会直接在页面中弹出相应的消息提示。

```tsx
import { Cell, Notify } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell onClick={() => Notify.show('Message')}>Content</Cell>
  </>,
  mountNode,
);
```

## 组件调用

```tsx
import { Cell, Notify } from 'fnx-ui';

ReactDOM.render(
  <>
    <Notify visible duration={3000}>
      Content
    </Notify>
    <Notify visible duration={3000} message="Content"></Notify>
  </>,
  mountNode,
);
```

## 通知类型

支持 `primary`、`success`、`warning`、`danger` 四种通知类型，默认为 `danger`。

```tsx
import { Cell, Notify } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell onClick={() => Notify.show({ message: 'Message' })}>Content</Cell>
    <Cell onClick={() => Notify.show({ message: 'Message', type: 'primary' })}>
      Content
    </Cell>
  </>,
  mountNode,
);
```

## 自定义通知

自定义消息通知的颜色和展示时长。

```tsx
import { Cell, Notify } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell
      onClick={() =>
        Notify.show({
          message: 'Message',
          duration: 1000,
          color: '#ad0000',
          background: '#ffe1e1',
        })
      }
    >
      Content
    </Cell>
  </>,
  mountNode,
);
```

## 动态更新提示

执行 `Notify` 方法时会返回对应的 `Notify` 实例，通过`update`方法修改实例上的 `message` 属性可以实现动态更新提示的效果。

```tsx
import { Cell, Notify, Icon } from 'fnx-ui';
import React, { useCallback } from 'react';

const notify = Notify.useToast();

const clearCountdown = useCallback(() => {
  if (timerRef.current != null) {
    clearInterval(timerRef.current);
    timerRef.current = undefined;
  }
}, []);

const handleCountdown = () => {
  let second = 3;

  const loading = notify.show({
    duration: 0,
    message: `${second}s`,
  });

  timerRef.current = setInterval(() => {
    second--;

    if (second) {
      loading.update({
        message: `${second}s`,
      });
    } else {
      clearCountdown();
      loading.clear();
    }
  }, 1000);
};

ReactDOM.render(
  <>
    <Cell onClick={() => handleCountdown}>Content</Cell>
  </>,
  mountNode,
);
```

## NotifyProps API

| 参数                | 说明                       | 类型                                              | 默认值   |
| ------------------- | -------------------------- | ------------------------------------------------- | -------- |
| type                | 类型                       | `'primary' \| 'success' \| 'warning' \| 'danger'` | `danger` |
| message             | 文本内容，支持通过`\n`换行 | `string`                                          | `danger` |
| duration            | 类型                       | `number`                                          | `danger` |
| color               | 类型                       | `string`                                          | `danger` |
| background          | 类型                       | `string`                                          | `danger` |
| visible             | 是否显示弹出层             | `boolean`                                         | `false`  |
| round               | 是否展示圆角               | `boolean`                                         | `false`  |
| position            | 位置                       | `` top` \| `bottom` \| `middle  ``                | `middle` |
| overlay             | 是否显示遮罩层             | `boolean`                                         | `false`  |
| overlayClassName    | 遮罩层类名                 | `string`                                          | -        |
| overlayStyle        | 遮罩层样式                 | `string`                                          | -        |
| overlayCloseable    | 是否点击遮罩层关闭         | `boolean`                                         | `true`   |
| renderOnShow        | 是否渲染加载               | `boolean`                                         | `true`   |
| destroyOnHide       | 是否关闭销毁               | `boolean`                                         | `false`  |
| mountTo             | 指定挂载的节点             | `boolean \| element \| ()=>element `              | -        |
| transitionDuration  | 过渡动画                   | `number`                                          | -        |
| transitionName      | 过渡动画类名               | `string`                                          | -        |
| lockScroll          | 是否禁止滚动               | `boolean`                                         | `true`   |
| safeAreaInsetBottom | 是否开启底部安全区适配     | `boolean`                                         | `false`  |

## <Notify /> 事件

| 事件名         | 说明                           | 回调参数 |
| -------------- | ------------------------------ | -------- |
| onShow         | 打开弹出层时触发               | -        |
| onOverlayClick | 点击遮罩层触发                 | -        |
| onClose        | (遮罩层可点击时)点击遮罩层触发 | -        |
| onBeforeHide   | 出场动画前执行触发             | -        |
| onHide         | 出场动画中执行触发             | -        |
| onAfterHide    | 出场动画后执行触发             | -        |
| onBeforeShow   | 进场动画前执行触发             | -        |
| onShow         | 进场动画中执行触发             | -        |
| onAfterShow    | 进场动画后执行触发             | -        |

### Notify 方法

| 方法名              | 说明                     | 参数                                                        | 返回值       |
| ------------------- | ------------------------ | ----------------------------------------------------------- | ------------ |
| Toast.show          | 展示加载提示             | `(message: string \| NotifyProps, container?: HTMLElement)` | `toast 实例` |
| Toast.clearAll      | 关闭提示                 | -                                                           | `void`       |
| Toast.allowMultiple | 允许同时存在多个 `Toast` | `(allow: boolean)`                                          | `void`       |

### Notify 实例方法

```
const notify = Notify.useNotify();
const loading=notify.show()
loading.update();
loading.clear();

```

| 方法名         | 说明              | 参数         | 返回值     |
| -------------- | ----------------- | ------------ | ---------- |
| Toast.update() | 更新展示提示      | `ToastProps` | toast 实例 |
| Toast.clear()  | 销毁 `Toast` 实例 | -            | toast 实例 |
