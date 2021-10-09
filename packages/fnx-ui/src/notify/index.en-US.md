# Notify

In the top of the page, the message prompt is displayed, support function calls, and component calls.

## Function call

`Notify` is a function that will pop up the corresponding message prompt after calling.

```tsx
import { Cell, Notify } from 'fnx-ui';

ReactDOM.render(
  <>
    <Cell onClick={() => Notify.show('Message')}>Content</Cell>
  </>,
  mountNode,
);
```

## Component call

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

## Notification Type

Support `primary`, `sucssess`,` warning`, `danger`, default to` danger`.

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

## Custom Notice

Customize the color and presentation of the call notification.

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

## Dynamic Tips

When the `Notify` method, the corresponding `Notify` instance is returned, and the `message` property to modify the instance via the `update` method You can realize the effect of dynamic update prompts.

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

| Parameter           | Description                                     | Type                                              | Default value |
| ------------------- | ----------------------------------------------- | ------------------------------------------------- | ------------- |
| type                | type                                            | `'primary' \| 'success' \| 'warning' \| 'danger'` | `danger`      |
| message             | Text content, support passing `\ n`             | `string`                                          | `danger`      |
| duration            | Animation                                       | `number`                                          | `danger`      |
| color               | colour                                          | `string`                                          | `danger`      |
| background          | background color                                | `string`                                          | `danger`      |
| visible             | Whether it is displayed                         | `boolean`                                         | `false`       |
| round               | Whether to show the fillet                      | `boolean`                                         | `false`       |
| position            | Location                                        | `` top` \| `bottom` \| `middle  ``                | `middle`      |
| overlay             | Whether to display a mask layer                 | `boolean`                                         | `false`       |
| overlayClassName    | Mask layer class name                           | `string`                                          | -             |
| overlayStyle        | Mask layer style                                | `string`                                          | -             |
| overlayCloseable    | Whether to click the mask layer close           | `boolean`                                         | `true`        |
| renderOnShow        | Whether to render load                          | `boolean`                                         | `true`        |
| destroyOnHide       | Whether to close the destruction                | `boolean`                                         | `false`       |
| mountTo             | Specify a mounted node                          | `boolean \| element \| ()=>element `              | -             |
| transitionDuration  | Transition animation                            | `number`                                          | -             |
| transitionName      | Transition animation name                       | `string`                                          | -             |
| lockScroll          | Whether it is forbidden to scroll               | `boolean`                                         | `true`        |
| safeAreaInsetBottom | Do you open the bottom security area adaptation | `boolean`                                         | `false`       |

## <Notify /> Events

| Event Name     | Description                                              | Callback Arguments |
| -------------- | -------------------------------------------------------- | ------------------ |
| onShow         | Trigger when opening the pop-up layer                    | -                  |
| onOverlayClick | Click on the mask layer trigger                          | -                  |
| onClose        | (Mask layer can be clicked) Click the mask layer trigger | -                  |
| onBeforeHide   | Executive trigger before the animation                   | -                  |
| onHide         | Executive trigger in the animation                       | -                  |
| onAfterHide    | Executive trigger after the animation                    | -                  |
| onBeforeShow   | Execute trigger before entering the field                | -                  |
| onShow         | Implementing triggers in the input animation             | -                  |
| onAfterShow    | Imported animation                                       | -                  |

### Notify Method

| Method Name         | Description             | Parameter                                                   | Return Value |
| ------------------- | ----------------------- | ----------------------------------------------------------- | ------------ |
| Toast.show          | Display loading prompt  | `(message: string \| NotifyProps, container?: HTMLElement)` | `toast 实例` |
| Toast.clearAll      | Close prompt            | -                                                           | `void`       |
| Toast.allowMultiple | Allows multiple `Toast` | `(allow: boolean)`                                          | `void`       |

### Notify Instance Method

```
const notify = Notify.useNotify();
const loading=notify.show()
loading.update();
loading.clear();

```

| Method Name    | Description           | Parameter    | Return Value   |
| -------------- | --------------------- | ------------ | -------------- |
| Toast.update() | Update display prompt | `ToastProps` | toast instance |
| Toast.clear()  | Destroy `toast`       | -            | toast instance |
