# List

Waterfall flow rolling load, is used to show a long list, and when the list is about to scroll to the bottom, the event is triggered and the more list items are loaded.

## Basic Usage

The List component will be triggered when the component scrolls to the bottom via `status` controls the`onLoad` event. At this point, you can initiate an asynchronous operation and update the data. After the data is updated, set the `status` to `default` If the data has been loaded, the `status` is set directly to `finished`

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

## Error Message

If the list data is loaded, the `status` is set to `error`, you can display an error message, and the user will re-trigger the `onLoad` event after clicking the error message.

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

## PullRefresh

`List` component can be used in conjunction with`<pressrefresh />`component to achieve a drop-down refreshing effect.

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

| Parameter      | Description                                                                                                   | Type                                                              | Default value                        |
| -------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------ |
| status         | List status                                                                                                   | `'default' \| 'loading' \| 'finished' \| 'error'`                 | `default`                            |
| offset         | The `onLoad` event is triggered when the distance between the scroll bar and the bottom is less than `offset` | `number`                                                          | `50`                                 |
| slots          | Tips for different status during loading                                                                      | `ListSlots`                                                       | `{loading: '',finished:'',error:''}` |
| direction      | Rolling the direction of the trigger load                                                                     | ` 'up' \| 'down'`                                                 | `down`                               |
| immediateCheck | Whether to perform scrolling positions immediately at initialization                                          | `boolean`                                                         | `true`                               |
| scrollListenTo | Whether to perform scrolling positions immediately at initialization                                          | ` HTMLElement \| Window \| (() => HTMLElement \| Window) \| null` | -                                    |

## Events

| Event Name | Description                                                                | Callback Arguments |
| ---------- | -------------------------------------------------------------------------- | ------------------ |
| onLoad     | The scroll bar is triggered when the bottom distance is less than `offset` | -                  |

### Slots Data Structure

| Parameter | Description                                    | Type        | Default value |
| --------- | ---------------------------------------------- | ----------- | ------------- |
| default   | List content                                   | `ReactNode` | -             |
| loading   | Custom under load prompt                       | `ReactNode` | -             |
| finished  | Customized subsection                          | `ReactNode` | -             |
| error     | Customize the prompt copy after loading failed | `ReactNode` | -             |

### ListRef Instance

You can get the `List` instance and call the instance method through `ref`.

| Method Name | Description                                                                                                                                       | Parameter | Return Value |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------------ |
| check()     | When `status` does not equal the` false` When checking the current scroll position, if it is scrolled to the bottom, it will trigger the `onLoad` | -         | -            |
