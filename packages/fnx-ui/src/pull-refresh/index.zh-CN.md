# PullRefresh 下拉刷新

用于提供下拉刷新的交互操作。

## 基础用法

下拉刷新时会触发 `onRefresh` 事件，在事件的回调函数中可以进行同步或异步操作，操作完成后将 `refreshing` 设置为 `false` ，表示加载完成。

```tsx
import { PullRefresh } from 'fnx-ui';

const [count, setCount] = useState(0);
const [refreshing, setRefreshing] = useState(false);

const setDelay = () => {
  return new Promise((resolve, reject) => {
    setRefreshing(true);
    setTimeout(() => {
      resolve(false);
    }, 2000);
  }).then(() => setRefreshing(false));
};

ReactDOM.render(
  <>
    <PullRefresh refreshing={refreshing} onRefresh={setDelay}>
      <div>{count}</div>
    </PullRefresh>
  </>,
  mountNode,
);
```

## 成功提示

通过 `slots` 可以设置刷新成功后的顶部提示文案。

```tsx
import { PullRefresh } from 'fnx-ui';

const [count, setCount] = useState(0);
const [refreshing, setRefreshing] = useState(false);

const setDelay = () => {
  return new Promise((resolve, reject) => {
    setRefreshing(true);
    setTimeout(() => {
      resolve(false);
    }, 2000);
  }).then(() => setRefreshing(false));
};

ReactDOM.render(
  <>
    <PullRefresh
      refreshing={refreshing}
      onRefresh={setDelay}
      slots={{ success: 'I am success' }}
    >
      <div>{count}</div>
    </PullRefresh>
  </>,
  mountNode,
);
```

### 自定义提示

通过 `slots` 可以自定义下拉刷新过程中的提示内容。

```tsx
import { PullRefresh } from 'fnx-ui';

import demoDogeReverse from '/doge-reverse.png';
import demoDoge from 'doge.png';

const [count, setCount] = useState(0);
const [refreshing, setRefreshing] = useState(false);

const setDelay = () => {
  return new Promise((resolve, reject) => {
    setRefreshing(true);
    setTimeout(() => {
      resolve(false);
    }, 2000);
  }).then(() => setRefreshing(false));
};

ReactDOM.render(
  <>
    <PullRefresh
      refreshing={refreshing}
      onRefresh={setDelay}
      indicatorHeight={80}
      slots={{
        pulling: (distance) => (
          <img
            src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg"
            style={{ transform: `scale(${distance / 80})` }}
          />
        ),
        loosing: (
          <img src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
        ),
        loading: (
          <img src="https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg" />
        ),
      }}
    >
      <div>{count}</div>
    </PullRefresh>
  </>,
  mountNode,
);
```

## API

| 名称               | 说明                     | 类型               | 默认值  | 版本 |
| ------------------ | ------------------------ | ------------------ | ------- | ---- |
| refreshing         | 是否处于加载中状态       | `boolean`          | -       |      |
| successDuration    | 刷新成功提示展示时长(ms) | `number`           | `500`   |      |
| transitionDuration | 动画时长(ms)             | `number`           | `300`   |      |
| indicatorHeight    | 顶部内容高度             | `number`           | `300`   |      |
| disabled           | 是否禁用下拉刷新         | `boolean`          | `false` |      |
| slots              | 自定义提示内容           | `PullRefreshSlots` | -       |      |

## 事件

| 事件名    | 说明           | 类型                                            | 版本 |
| --------- | -------------- | ----------------------------------------------- | ---- |
| onRefresh | 下拉刷新时触发 | `() => void`                                    |      |
| onChange  | 状态改变时触发 | `(data: { status: PullRefreshStatus }) => void` |      |

### slots 数据结构

| 参数    | 说明               | 类型                                              | 备注                   |
| ------- | ------------------ | ------------------------------------------------- | ---------------------- |
| loading | 加载过程中顶部内容 | `ReactNode` \| `(distance: number) => ReactNode;` | distance: 当前下拉距离 |
| loosing | 释放过程中顶部内容 | `ReactNode` \| `(distance: number) => ReactNode;` | distance: 当前下拉距离 |
| pulling | 下拉过程中顶部内容 | `ReactNode` \| `(distance: number) => ReactNode;` | distance: 当前下拉距离 |
| success | 刷新成功提示内容   | `ReactNode` \| `(distance: number) => ReactNode;` | distance: 当前下拉距离 |
