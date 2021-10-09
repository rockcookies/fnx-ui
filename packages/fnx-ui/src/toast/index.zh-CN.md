# Toast 轻提示

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

## 文字提示

```tsx | pure
import { Cell, Toast } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell onClick={() => Toast.show('Message')}>Content</Cell>
    <Toast visible message="Message" />
  </>,
  mountNode,
);
```

## 加载提示

使用 `Toast.loading` 方法展示加载提示，通过 `forbidClick` 属性可以禁用背景点击。

```tsx | pure
import { Cell, Toast } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell onClick={() => Toast.loading('Message')}>Content</Cell>
    <Cell
      onClick={() =>
        Toast.loading({
          message: 'Message',
          forbidClick: true,
        })
      }
    >
      Content
    </Cell>
  </>,
  mountNode,
);
```

## 成功/失败提示

使用 `Toast.success` 方法展示成功提示，使用 `Toast.fail` 方法展示失败提示。

```tsx | pure
import { Cell, Toast } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell onClick={() => Toast.success('Message')}>Content</Cell>
    <Cell onClick={() => Toast.fail('Message')}>Content</Cell>
  </>,
  mountNode,
);
```

## 自定义图标

```tsx | pure
import { Cell, Toast, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell
      onClick={() =>
        Toast.loading({
          message: 'Message',
          forbidClick: true,
          icon: <Icon name="star-full" spin />,
        })
      }
    >
      Content
    </Cell>
    <Toast
      visible={true}
      icon={<Icon name="star-full" spin />}
      message="Message"
    />
  </>,
  mountNode,
);
```

## 自定义位置

`Toast` 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 `Toast` 展示的位置。

```tsx | pure
import { Cell, Toast, Icon } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell
      onClick={() =>
        Toast.show({
          message: 'Message',
          forbidClick: true,
          position: 'top',
          icon: <Icon name="star-full" spin />,
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

执行 `Toast` 方法时会返回对应的 `Toast` 实例，通过修改 `update` 方法实例上的 `message` 属性可以实现动态更新提示的效果。

```tsx
import { Cell, Toast, Icon } from 'fnx-ui';

const toast = Toast.useToast();

const clearCountdown = useCallback(() => {
  if (timerRef.current != null) {
    clearInterval(timerRef.current);
    timerRef.current = undefined;
  }
}, []);

const handleCountdown = () => {
  let second = 3;

  const loading = toast.loading({
    duration: 0,
    forbidClick: true,
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

## ToastProps API

| 参数                | 说明                                               | 类型                                 | 默认值   |
| ------------------- | -------------------------------------------------- | ------------------------------------ | -------- |
| message             | 文本内容，支持通过`\n`换行                         | `string`                             | -        |
| icon                | 自定义图标                                         | `ReactNode`                          | -        |
| forbidClick         | 是否禁止背景点击（当为 `loading` 是默认是 `true`） | `boolean`                            | `false`  |
| clickCloseable      | 是否在点击后关闭                                   | `boolean_`                           | `false`  |
| duration            | 展示时长(ms)，值为 0 时，`toast` 不会消失          | `number`                             | `2000`   |
| className           | 自定义类名                                         | `string`                             | -        |
| visible             | 是否显示弹出层                                     | `boolean`                            | `false`  |
| round               | 是否展示圆角                                       | `boolean`                            | `false`  |
| position            | 位置                                               | `` top` \| `bottom` \| `middle ``    | `middle` |
| overlay             | 是否显示遮罩层                                     | `boolean`                            | `fill`   |
| overlayClassName    | 遮罩层类名                                         | `string`                             | -        |
| overlayStyle        | 遮罩层样式                                         | `string`                             | -        |
| overlayCloseable    | 是否点击遮罩层关闭                                 | `boolean`                            | `true`   |
| renderOnShow        | 是否渲染加载                                       | `boolean`                            | `true`   |
| destroyOnHide       | 是否关闭销毁                                       | `boolean`                            | `false`  |
| mountTo             | 指定挂载的节点                                     | `boolean \| element \| ()=>element ` | -        |
| transitionDuration  | 过渡动画                                           | `number`                             | -        |
| transitionName      | 过渡动画类名                                       | `string`                             | -        |
| lockScroll          | 是否禁止滚动                                       | `boolean`                            | `true`   |
| safeAreaInsetBottom | 是否开启底部安全区适配                             | `boolean`                            | `false`  |

## <Toast /> 事件

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

### Toast 方法

| 方法名              | 说明                     | 参数                            | 返回值       |
| ------------------- | ------------------------ | ------------------------------- | ------------ |
| Toast.show          | 展示加载提示             | `(props: string \| ToastProps)` | `toast 实例` |
| Toast.loading       | 展示加载提示             | `(props: string \| ToastProps)` | `toast 实例` |
| Toast.success       | 展示成功提示             | `(props: string \| ToastProps)` | `toast 实例` |
| Toast.fail          | 展示失败提示             | `(props: string \| ToastProps)` | `toast 实例` |
| Toast.clearAll      | 关闭提示                 | -                               | `void`       |
| Toast.allowMultiple | 允许同时存在多个 `Toast` | `(allow: boolean)`              | `void`       |

### Toast 实例方法

```
const toast = Toast.useToast();
const loading=toast.show()
loading.update();
loading.clear();

```

| 方法名         | 说明              | 参数         | 返回值     |
| -------------- | ----------------- | ------------ | ---------- |
| Toast.update() | 更新展示提示      | `ToastProps` | toast 实例 |
| Toast.clear()  | 销毁 `Toast` 实例 | -            | toast 实例 |

```


```
