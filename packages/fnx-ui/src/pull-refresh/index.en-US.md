# PullRefresh

## Basic Usage

The drop-down refreshing will trigger the `onRefresh` event, you can synchronize or asynchronously in the callback function of the event, and then set the `refreshing` to `false` after the operation is complete, indicating that the load is complete.

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

## Successful Reminder

Through `slots`, you can set the top printed copy of the refresh success.

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

### Custom Prompt

Through `slots`, you can customize the prompt content in the new process.

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

| Parameter          | Description                              | Type               | Default value |
| ------------------ | ---------------------------------------- | ------------------ | ------------- |
| refreshing         | Is it in the load?                       | `boolean`          | -             |
| successDuration    | Refresh success prompt showing time (MS) | `number`           | `500`         |
| transitionDuration | Animation time (MS)                      | `number`           | `300`         |
| indicatorHeight    | Top content height                       | `number`           | `300`         |
| disabled           | Whether to disable the drop-down brush   | `boolean`          | `false`       |
| slots              | Custom prompt content                    | `PullRefreshSlots` | -             |

## Events

| Event Name | Description             | Callback Arguments |
| ---------- | ----------------------- | ------------------ |
| onRefresh  | Dressing and triggering | -                  |

### Slots Data Structure

| Parameter | Description                            | Type                                              | Remark                               |
| --------- | -------------------------------------- | ------------------------------------------------- | ------------------------------------ |
| loading   | Loading the top content                | `ReactNode` \| `(distance: number) => ReactNode;` | distance: Current pull-down distance |
| loosing   | Top content during the release process | `ReactNode` \| `(distance: number) => ReactNode;` | distance: Current pull-down distance |
| pulling   | Top content during the drop            | `ReactNode` \| `(distance: number) => ReactNode;` | distance: Current pull-down distance |
| success   | Refresh success reminder content       | `ReactNode` \| `(distance: number) => ReactNode;` | distance: Current pull-down distance |
