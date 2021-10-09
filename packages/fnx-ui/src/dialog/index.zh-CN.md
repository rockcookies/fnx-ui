# Dialog 对话框

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。

弹出框组件支持函数调用和组件调用两种方式。

## 函数调用

`Dialog.show` 作为函数，调用后会直接在页面中弹出相应的模态框。

```tsx
import { Dialog } from 'fnx-ui';

Dialog.show({
  title: 'Dialog',
  message: 'Dialog Content',
  messageAlign: 'Left',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
})；

```

## 组件调用

通过组件调用 `Dialog` 时，可以通过 `visible` 控制显示隐藏。

```tsx
import { Dialog } from 'fnx-ui';

ReactDOM.render(
  <>
    <Dialog visible title="Dialog" message="Message" />
  </>,
  mountNode,
);
```

## 异步关闭

通过 `onConfirm` ，`onCancel` 属性可以传入一个回调函数，需要执行完才会关闭，不关闭则返回 `false`。

```tsx
import { Dialog } from 'fnx-ui';

function sleep(timeoutsMs) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeoutsMs);
  });
}

Dialog.show({
  title: 'Dialog',
  message: 'Dialog Content',
  messageAlign: 'Left',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  onConfirm: async () => {
    await sleep(1000);
  },
  onCancel: async () => {
    await sleep(1000);
    Toast.show('Stopped!');

    return false;
  },
});
```

## 自定义内容

`children` 类型是 `ReactNode`，接受自定义内容。

```tsx
import { Dialog } from 'fnx-ui';

Dialog.show({
  title: 'Dialog',
  message: 'Dialog Content',
  messageAlign: 'Left',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  children: (
    <img src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
  ),
});
```

## 动态加载

执行 `Dialog` 方法时会返回对应的 `Dialog` 实例，通过 `update` 方法修改实例上的 `message` 属性可以实现动态更新提示的效果。

```tsx
import { Dialog, Button } from 'fnx-ui';
import React, { useRef } from 'react';

const dialog = Dialog.useDialog();

const timerRef = useRef<NodeJS.Timeout>();

const handleCountdown = () => {
  let second = 3;
  const toast = dialog.show({
    message: `Now it is ${second}`,
  });

  timerRef.current = setInterval(() => {
    second--;

    if (second) {
      toast.update({
        message: `Now it is ${second}`,
      });
    } else {
      toast.clear();
    }
  }, 1000);
};

ReactDOM.render(
  <>
    <Button onClick={handleCountdown}>Dynamic Loading</Button>
  </>,
  mountNode,
);
```

## API

`ButtonProps` 类型参考 `Button` 组件。

| 参数                | 说明                     | 类型                                 | 默认值   |
| ------------------- | ------------------------ | ------------------------------------ | -------- |
| title               | 标题                     | `ReactNode`                          | -        |
| footer              | 页脚                     | `ReactNode`                          | -        |
| width               | 宽度                     | `number \| string`                   | -        |
| message             | 内容                     | `ReactNode`                          | -        |
| messageAlign        | 内容对齐方式             | `'left' \| 'right'`                  | `center` |
| confirmButton       | 确认按钮                 | `ReactNode`                          | -        |
| confirmText         | 确认按钮文案             | `string`                             | -        |
| confirmLoading      | 点击确认是否显示加载图标 | `boolean`                            | -        |
| confirmButtonProps  | 确认按钮属性             | `ButtonProps`                        | `{}`     |
| cancelButton        | 取消按钮                 | `ReactNode`                          | -        |
| cancelText          | 取消按钮文案             | `string`                             | -        |
| cancelLoading       | 确认加载完毕             | `boolean`                            | -        |
| cancelButtonProps   | 取消按钮属性             | `ButtonProps`                        | `{}`     |
| bodyProps           | 内容包裹层属性           | `HTMLAttributes`                     | -        |
| visible             | 是否显示弹出层           | `boolean`                            | `false`  |
| round               | 是否展示圆角             | `boolean`                            | `false`  |
| position            | 位置                     | `` top` \| `bottom` \| `middle ``    | `middle` |
| overlay             | 是否显示遮罩层           | `boolean`                            | `fill`   |
| overlayClassName    | 遮罩层类名               | `string`                             | -        |
| overlayStyle        | 遮罩层样式               | `string`                             | -        |
| overlayCloseable    | 是否点击遮罩层关闭       | `boolean`                            | `true`   |
| renderOnShow        | 是否渲染加载             | `boolean`                            | `true`   |
| destroyOnHide       | 是否关闭销毁             | `boolean`                            | `false`  |
| mountTo             | 指定挂载的节点           | `boolean \| element \| ()=>element ` | -        |
| transitionDuration  | 过渡动画                 | `number`                             | -        |
| transitionName      | 过渡动画类名             | `string`                             | -        |
| lockScroll          | 是否禁止滚动             | `boolean`                            | `true`   |
| safeAreaInsetBottom | 是否开启底部安全区适配   | `boolean`                            | `false`  |

## <Dialog /> 事件

| 方法名         | 说明                         | 参数                                             | 返回值 |
| -------------- | ---------------------------- | ------------------------------------------------ | ------ |
| onConfirm      | 确认回调                     | -                                                | -      |
| onCancel       | 取消回调                     | -                                                | -      |
| onShow         | 打开弹出层时触发             | -                                                | -      |
| onOverlayClick | 点击遮罩层触发               | `(e: React.MouseEvent<HTMLElement, MouseEvent>)` | -      |
| onClose        | 遮罩层可点击时点击遮罩层触发 | -                                                | -      |
| onBeforeHide   | 出场动画前执行触发           | -                                                | -      |
| onHide         | 出场动画中执行触发           | -                                                | -      |
| onAfterHide    | 出场动画后执行触发           | -                                                | -      |
| onBeforeShow   | 进场动画前执行触发           | -                                                | -      |
| onShow         | 进场动画中执行触发           | -                                                | -      |
| onAfterShow    | 进场动画后执行触发           | -                                                | -      |

## Dialog 方法

`DialogProps`类型为组件 API。

| 方法名            | 说明         | 参数          | 返回值   |
| ----------------- | ------------ | ------------- | -------- |
| Dialog.show()     | 展示弹窗     | `DialogProps` | 弹窗示例 |
| Dialog.clearAll() | 销毁弹窗实例 | -             | -        |

### Dialog 实例方法

```
const useDialog = Dialog.useDialog();
const dialog=useDialog.show()
dialog.update();
dialog.clear();

```

| 方法名          | 说明         | 参数                                             | 返回值     |
| --------------- | ------------ | ------------------------------------------------ | ---------- |
| dialog.update() | 更新展示提示 | `({ visible: boolean \| undefined, ...props }) ` | toast 实例 |
| dialog.clear()  | 销毁实例     | -                                                | toast 实例 |
