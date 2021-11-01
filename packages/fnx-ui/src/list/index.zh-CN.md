# List 列表

瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。

## 基础用法

List 组件通过 `status` 控制加载状态，当组件滚动到底部时，会触发 `onLoad` 事件。此时可以发起异步操作并更新数据，数据更新完毕后，将 `status` 设置成 `default` 即可。若数据已全部加载完毕，则直接将 `status` 设置成 `finished` 即可。

```tsx
import { Cell, List } from 'fnx-ui';
import { ListStatus } from 'fnx-ui/es/list';
import React, { useState } from 'react';

const App = () => {
  const [list, setList] = useState<number[]>([]);
  const [listStatus, setListStatus] = useState<ListStatus>('default');

  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  const onLoad = () => {
    setListStatus('loading');

    setTimeout(() => {
      const newList = [...list];

      for (let i = 0; i < 10; i++) {
        newList.push(newList.length + 1);
      }

      setList(newList);

      if (newList.length >= 40) {
        setListStatus('finished'); // 数据全部加载完成
      } else {
        setListStatus('default'); // 加载状态结束
      }
    }, 1000);
  };

  return (
    <List onLoad={onLoad} status={listStatus}>
      {list.map((item) => (
        <Cell title={item} key={item} />
      ))}
    </List>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## 错误提示

若列表数据加载失败，将 `status` 设置成 `error` 即可显示错误提示，用户点击错误提示后会重新触发 `onLoad` 事件。

```tsx
import { Cell, List } from 'fnx-ui';
import { ListStatus } from 'fnx-ui/es/list';
import React, { useState } from 'react';

const App = () => {
  const [list, setList] = useState<number[]>([]);
  const [listStatus, setListStatus] = useState<ListStatus>('default');

  const onLoad = () => {
    setListStatus('loading');

    setTimeout(() => {
      const newList = [...list];

      for (let i = 0; i < 10; i++) {
        newList.push(newList.length + 1);
      }

      try {
        if (list.length === 10) {
          throw new Error('Error');
        }
      } catch (e) {
        setListStatus('error');
        return;
      }

      setList(newList);
      setListStatus('default');
    }, 1000);
  };

  return (
    <List
      onLoad={onLoad}
      status={listStatus}
      slots={{
        error: <span onClick={onLoad}>请求失败，点击重新加载</span>,
      }}
    >
      {list.map((item) => (
        <Cell title={item} key={item} />
      ))}
    </List>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## 下拉刷新

List 组件可以与 `<PullRefresh />` 组件结合使用，实现下拉刷新的效果。

```tsx
import { Cell, List, PullRefresh } from 'fnx-ui';
import { ListStatus } from 'fnx-ui/es/list';
import React, { useState } from 'react';

const App = () => {
  const [list, setList] = useState<number[]>([]);
  const [listStatus, setListStatus] = useState<ListStatus>('default');
  const [listRefreshing, setListRefreshing] = useState(false);

  const onLoad = (refreshing: boolean) => {
    if (refreshing) {
      setListRefreshing(true);

      if (listStatus === 'loading') {
        return;
      }
    }

    setListStatus('loading');

    setTimeout(() => {
      const newList = [...(refreshing ? [] : list)];

      for (let i = 0; i < 10; i++) {
        newList.push(newList.length + 1);
      }

      setList(newList);
      setListRefreshing(false);

      if (newList.length >= 40) {
        setListStatus('finished');
      } else {
        setListStatus('default');
      }
    }, 1000);
  };

  return (
    <PullRefresh refreshing={listRefreshing} onRefresh={() => onLoad(true)}>
      <List onLoad={() => onLoad(false)} status={listStatus}>
        {list.map((item) => (
          <Cell title={item} key={item} />
        ))}
      </List>
    </PullRefresh>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

## API

### Props

| 名称           | 说明                                               | 类型                                                             | 默认值      |
| -------------- | -------------------------------------------------- | ---------------------------------------------------------------- | ----------- |
| status         | 列表状态                                           | `'default' \| 'loading' \| 'finished' \| 'error'`                | `'default'` |
| offset         | 滚动条与底部距离小于 `offset` 时触发 `onLoad` 事件 | `number`                                                         | `50`        |
| slots          | 列表插槽                                           | `ListSlots`                                                      | -           |
| direction      | 滚动触发加载的方向                                 | `'up' \| 'down'`                                                 | `'down'`    |
| immediateCheck | 是否在初始化时立即执行滚动位置检查                 | `boolean`                                                        | `true`      |
| scrollListenTo | 触发监听滚动的元素                                 | `HTMLElement \| Window \| (() => HTMLElement \| Window) \| null` | `null`      |

## Events

| 事件名 | 说明                                 | 回调参数 |
| ------ | ------------------------------------ | -------- |
| onLoad | 滚动条与底部距离小于 `offset` 时触发 | -        |

### ListSlots 插槽

| 名称     | 说明                       | 类型        | 默认值 |
| -------- | -------------------------- | ----------- | ------ |
| default  | 列表内容                   | `ReactNode` | -      |
| loading  | 自定义底部加载中提示       | `ReactNode` | -      |
| finished | 自定义加载完成后的提示文案 | `ReactNode` | -      |
| error    | 自定义加载失败后的提示文案 | `ReactNode` | -      |

### ListRef 实例方法

通过 `ref` 可以获取到 List 实例并调用实例方法。

| 名称    | 说明                                                       | 参数 | 返回值 |
| ------- | ---------------------------------------------------------- | ---- | ------ |
| check() | 检查当前的滚动位置，若已滚动至底部，则会触发 `onLoad` 事件 | -    | -      |
