# Toast 轻提示

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

## 基础用法

```tsx
import { Toast } from 'fnx-ui';

Toast.show('Message');
```

## 加载提示

使用 `Toast.loading` 方法展示加载提示，通过 `forbidClick` 属性可以禁用背景点击。

```tsx
import { Toast } from 'fnx-ui';

Toast.loading({
  message: 'Message',
  forbidClick: true,
});
```

## 成功/失败提示

使用 `Toast.success` 方法展示成功提示，使用 `Toast.fail` 方法展示失败提示。

```tsx
import { Toast } from 'fnx-ui';

Toast.success('Success');
Toast.fail('Failed');
```

## 自定义图标

通过 `icon` 选项可以自定义图标。

```tsx
import { Toast, Icon } from 'fnx-ui';

Toast.show({
  message: 'Custom Icon',
  icon: <Icon name="star" spin />,
});

Toast.show({
  message: 'Custom Icon.Spinner',
  icon: <Icon.Spinner />,
});
```

## 自定义位置

Toast 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 Toast 展示的位置。

```tsx
import { Toast, Icon } from 'fnx-ui';

Toast.show({
  message: 'Display on top',
  position: 'top',
});

Toast.show({
  message: 'Display on bottom',
  position: 'bottom',
});
```

## 动态更新提示

执行 Toast 中方法时会返回对应的 Toast 实例，通过修改 `update` 方法实例上的 `message` 属性可以实现动态更新提示的效果。

```tsx
import { Toast } from 'fnx-ui';

const toast = Toast.loading({
  duration: 0,
  message: '倒计时 3 秒',
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.update({ message: `倒计时 ${second} 秒` });
  } else {
    clearInterval(timer);
    toast.clear();
  }
}, 1000);
```

## 单例模式

Toast 默认采用单例模式，即同一时间只会存在一个 Toast，如果需要在同一时间弹出多个 Toast，可以参考下面的示例：

```tsx
import { Toast } from 'fnx-ui';

Toast.allowMultiple(true);

const toast1 = Toast.show('First Toast');
const toast2 = Toast.success('Second Toast');

toast1.clear();
toast2.clear();
```

## API

### Toast Props

Toast 继承了 [Popup](#/zh-CN/components/popup) 的属性并新增了如下属性：

| 名称           | 说明                                    | 类型                                | 默认值     | 版本 |
| -------------- | --------------------------------------- | ----------------------------------- | ---------- | ---- |
| position       | 展示位置                                | `'top'` \| `'bottom'` \| `'middle'` | `'middle'` |      |
| message        | 文本内容，支持通过 `\n` 换行            | `string`                            | -          |      |
| icon           | 自定义图标                              | `ReactNode`                         | -          |      |
| duration       | 展示时长(ms)，值为 0 时，Toast 不会消失 | `number`                            | `2000`     |      |
| forbidClick    | 是否禁止背景点击                        | `boolean`                           | `false`    |      |
| clickCloseable | 是否在点击后关闭                        | `boolean`                           | -          |      |

### Toast 全局方法

| 方法名              | 说明                               | 类型                                             | 版本 |
| ------------------- | ---------------------------------- | ------------------------------------------------ | ---- |
| Toast.show          | 展示提示                           | `(props: string \| ToastProps) => ToastInstance` |      |
| Toast.loading       | 展示加载提示                       | `(props: string \| ToastProps) => ToastInstance` |      |
| Toast.success       | 展示成功提示                       | `(props: string \| ToastProps) => ToastInstance` |      |
| Toast.fail          | 展示失败提示                       | `(props: string \| ToastProps) => ToastInstance` |      |
| Toast.clearAll      | 关闭所有提示                       | `() => void`                                     |      |
| Toast.allowMultiple | 是否在页面中允许同时存在多个 Toast | `(allow: boolean) => void`                       |      |

### Toast 实例方法

| 方法名 | 说明            | 类型                          | 版本 |
| ------ | --------------- | ----------------------------- | ---- |
| update | 更新展示提示    | `(props: ToastProps) => void` |      |
| clear  | 销毁 Toast 实例 | `() => void`                  |      |
