# List 列表

瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。

## 基础用法

List 组件通过 `status` 控制加载状态，当组件滚动到底部时，会触发 `onLoad` 事件。此时可以发起异步操作并更新数据，数据更新完毕后，将 `status` 设置成 `default` 即可。若数据已全部加载完毕，则直接将 `status` 设置成 `finished` 即可。

```tsx | pure
import { List } from 'fnx-ui';

const getList = (count) => {
  return new Array(count).fill(0).map((_, i) => {
    return <div key={i}>{i + 1}</div>;
  });
};

const [status, setStatus] = useState('default');
const [count, setCount] = useState(1);
const [listItems, setListItem] = useState([]);

const onLoad = () => {
  return new Promise((resolve, reject) => {
    setStatus('loading');
    setCount(count + 1);
    setTimeout(() => {
      resolve(true);
    }, 2000);
  }).then(() => {
    setListItem(getList(10 * count));
    if (count > 4) {
      setStatus('finished');
    } else {
      setStatus('default');
    }
  });
};

ReactDOM.render(
  <>
    <List status={status} onLoad={onLoad}>
      {listItems}
    </List>
  </>,
  mountNode,
);
```

## 错误提示

若列表数据加载失败，将 `status` 设置成 `error` 即可显示错误提示，用户点击错误提示后会重新触发 `onLoad` 事件。

```tsx | pure
const errorIndicator = () => {
  return <div>Error</div>;
};

const ListRef = useRef<ListRef>(null);

ReactDOM.render(
  <>
    <List
      status="error"
      direction="up"
      indicator={{ error: errorIndicator }}
      ref={ListRef}
    >
      <button
        onClick={() => {
          ListRef.current?.check();
        }}
      >
        Instance Trigger
      </button>
    </List>
  </>,
  mountNode,
);
```

## 下拉刷新

`List` 组件可以与 `<PullRefresh />` 组件结合使用，实现下拉刷新的效果。

```tsx | pure
const [refreshing, setRefreshing] = useState(false);
const [refreshStatus, setRefreshStatus] = useState();
const [refreshListItems, setRefreshListItem] = useState([]);
const refreshCountRef = useRef(0);

const onRefresh = () => {
  setRefreshing(true);
  refreshCountRef.current = 0;
  onLoadRefresh();
};

const onLoadRefresh = () => {
  setRefreshStatus('loading');
  refreshCountRef.current = refreshCountRef.current + 1;

  setTimeout(() => {
    setRefreshListItem(getList(10 * refreshCountRef.current));
    if (refreshCountRef.current > 3) {
      setRefreshStatus('finished');
    } else {
      setRefreshStatus('default');
    }
    setRefreshing(false);
  }, 1000);
};

ReactDOM.render(
  <>
    <PullRefresh onRefresh={onRefresh} refreshing={refreshing}>
      <List status={refreshStatus} onLoad={onLoadRefresh}>
        {refreshListItems}
      </List>
    </PullRefresh>
  </>,
  mountNode,
);
```

## API

| 参数           | 说明                                             | 类型                                                              | 默认值                               |
| -------------- | ------------------------------------------------ | ----------------------------------------------------------------- | ------------------------------------ |
| status         | 列表状态                                         | `'default' \| 'loading' \| 'finished' \| 'error'`                 | `default`                            |
| offset         | 滚动条与底部距离小于 `offset` 时触发`onLoad`事件 | `number`                                                          | `50`                                 |
| slots          | 加载过程中不同状态的提示                         | `ListSlots`                                                       | `{loading: '',finished:'',error:''}` |
| direction      | 滚动触发加载的方向，可选值为`up`                 | ` 'up' \| 'down'`                                                 | `down`                               |
| immediateCheck | 是否在初始化时立即执行滚动位置检查               | `boolean`                                                         | `true`                               |
| scrollListenTo | 是否在初始化时立即执行滚动位置检查               | ` HTMLElement \| Window \| (() => HTMLElement \| Window) \| null` | -                                    |

## 事件

| 事件名 | 说明                                 | 回调参数 |
| ------ | ------------------------------------ | -------- |
| onLoad | 滚动条与底部距离小于 `offset` 时触发 | -        |

### slots 数据结构

| 参数     | 说明                       | 类型        | 默认值 |
| -------- | -------------------------- | ----------- | ------ |
| default  | 列表内容                   | `ReactNode` | -      |
| loading  | 自定义底部加载中提示       | `ReactNode` | -      |
| finished | 自定义加载完成后的提示文案 | `ReactNode` | -      |
| error    | 自定义加载失败后的提示文案 | `ReactNode` | -      |

### ListRef 实例方法

通过 `ref` 可以获取到 `List` 实例并调用实例方法。

| 方法名  | 说明                                                                                      | 参数 | 返回值 |
| ------- | ----------------------------------------------------------------------------------------- | ---- | ------ |
| check() | 当 `status` 不等于 `false` 时 检查当前的滚动位置，若已滚动至底部，则会触发 `onLload` 事件 | -    | -      |
