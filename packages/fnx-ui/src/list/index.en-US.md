# List

A list component to show items and control loading status.

## Basic Usage

The List component will be triggered when the component scrolls to the bottom via `status` controls the `onLoad` event. At this point, you can initiate an asynchronous operation and update the data. After the data is updated, set the `status` to `default` If the data has been loaded, the `status` is set directly to `finished`.

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

      setList(newList);

      if (newList.length >= 40) {
        setListStatus('finished');
      } else {
        setListStatus('default');
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

## Error Message

If the list data loading error, set the `status` to `error`, then you can display an error message, and the user will re-trigger the `onLoad` event after clicking the error message.

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
        error: <span onClick={onLoad}>Request failed. Click to reload</span>,
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

## PullRefresh

List component can be used in conjunction with `<PullRefresh />` component to achieve a drop-down refreshing effect.

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

| Parameter      | Description                                                                                                 | Type                                                             | Default value |
| -------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------- |
| status         | List status                                                                                                 | `'default' \| 'loading' \| 'finished' \| 'error'`                | `'default'`   |
| offset         | The `onLoad` event is triggered when the distance between the scroll bar and the bottom is less than offset | `number`                                                         | `50`          |
| slots          | List slots                                                                                                  | `ListSlots`                                                      | -             |
| direction      | Scroll direction，can be set to `up`                                                                        | ` 'up' \| 'down'`                                                | `'down'`      |
| immediateCheck | Whether to check loading position immediately after mounted                                                 | `boolean`                                                        | `true`        |
| scrollListenTo | Trigger the elements that monitor scroll                                                                    | `HTMLElement \| Window \| (() => HTMLElement \| Window) \| null` | `null`        |

## Events

| Event Name | Description                                                                        | Callback Arguments |
| ---------- | ---------------------------------------------------------------------------------- | ------------------ |
| onLoad     | Emitted when the distance between the scrollbar and the bottom is less than offset | -                  |

### ListSlots

| Parameter | Description          | Type        | Default value |
| --------- | -------------------- | ----------- | ------------- |
| default   | List content         | `ReactNode` | -             |
| loading   | Custom loading tips  | `ReactNode` | -             |
| finished  | Custom finished tips | `ReactNode` | -             |
| error     | Custom error tips    | `ReactNode` | -             |

### ListRef Instance

You can get the List instance and call the instance method through `ref`.

| Method Name | Description           | Parameter | Return Value |
| ----------- | --------------------- | --------- | ------------ |
| check()     | Check scroll position | -         | -            |
