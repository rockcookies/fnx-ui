# Dialog

The map is pop-up, which is often used for message prompts, messages confirm, or complete specific interactions within the current page.

The pop-up frame component support function calls and components call two ways.

## Function Call

`Dialog.show` as a function, the corresponding modal frame is popped up directly to the page.

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

## Component Call

When you call the `Dialog by the component, you can display hidden via` Visible` control.

```tsx
import { Dialog } from 'fnx-ui';

ReactDOM.render(
  <>
    <Dialog visible title="Dialog" message="Message" />
  </>,
  mountNode,
);
```

## Asynchronous close

Through `onConfirm`,`onCancel` property can be passed into a callback function, you need to perform it to turn it off, and return to `false`.

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

## Customize

`Children` type is `ReactNode`, accept custom content.

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

## Dynamically Loading

The corresponding `Dialog` instance will be returned when performing a `Dialog` method, modify the `message` attribute on the instance via the` update` method to realize the effect of dynamic update prompts.

```tsx
import { Dialog, Button } from 'fnx-ui';
import React, { useRef } from 'react';

const dialog = Dialog.useDialog(); //DialogContext

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

`Buttonprops` Type Reference` Button` components.

| Parameter           | Description                                     | Type                                 | Default value |
| ------------------- | ----------------------------------------------- | ------------------------------------ | ------------- |
| title               | title                                           | `ReactNode`                          | -             |
| footer              | Footage                                         | `ReactNode`                          | -             |
| width               | width                                           | `number \| string`                   | -             |
| message             | content                                         | `ReactNode`                          | -             |
| messageAlign        | Content alignment                               | `'left' \| 'right'`                  | `center`      |
| confirmButton       | Confirm button                                  | `ReactNode`                          | -             |
| confirmText         | Confirm button                                  | `string`                             | -             |
| confirmLoading      | Click to confirm if the load icon is displayed. | `boolean`                            | -             |
| confirmButtonProps  | Confirm button properties                       | `ButtonProps`                        | `{}`          |
| cancelButton        | Cancel button                                   | `ReactNode`                          | -             |
| cancelText          | Cancel button                                   | `string`                             | -             |
| cancelLoading       | Confirm that the load is completed              | `boolean`                            | -             |
| cancelButtonProps   | Cancel button properties                        | `ButtonProps`                        | `{}`          |
| bodyProps           | Content package layer properties                | `HTMLAttributes`                     | -             |
| visible             | Whether it is displayed                         | `boolean`                            | `false`       |
| round               | Whether to show the fillet                      | `boolean`                            | `false`       |
| position            | Location                                        | `` top` \| `bottom` \| `middle ``    | `middle`      |
| overlay             | Whether to display a mask layer                 | `boolean`                            | `fill`        |
| overlayClassName    | Mask layer class name                           | `string`                             | -             |
| overlayStyle        | Mask layer style                                | `string`                             | -             |
| overlayCloseable    | Whether to click the mask layer close           | `boolean`                            | `true`        |
| renderOnShow        | Whether to render load                          | `boolean`                            | `true`        |
| destroyOnHide       | Whether to close the destruction                | `boolean`                            | `false`       |
| mountTo             | Specify a mounted node                          | `boolean \| element \| ()=>element ` | -             |
| transitionDuration  | Transition animation                            | `number`                             | -             |
| transitionName      | Transition animation name                       | `string`                             | -             |
| lockScroll          | Whether it is forbidden to scroll               | `boolean`                            | `true`        |
| safeAreaInsetBottom | Do you open the bottom security area adaptation | `boolean`                            | `false`       |

## <Dialog /> Events

| Method Name    | Description                                       | Parameter                                        | Return Value |
| -------------- | ------------------------------------------------- | ------------------------------------------------ | ------------ |
| onConfirm      | Confirm callback                                  | -                                                | -            |
| onCancel       | Cancel                                            | -                                                | -            |
| onShow         | Trigger when opening the pop-up layer             | -                                                | -            |
| onOverlayClick | Click on the mask layer trigger                   | `(e: React.MouseEvent<HTMLElement, MouseEvent>)` | -            |
| onClose        | Mask layer can click on the mask layer to trigger | -                                                | -            |
| onBeforeHide   | Executive trigger before the animation            | -                                                | -            |
| onHide         | Executive trigger in the animation                | -                                                | -            |
| onAfterHide    | Executive trigger after the animation             | -                                                | -            |
| onBeforeShow   | Execute trigger before entering the field         | -                                                | -            |
| onShow         | Implementing triggers in the input animation      | -                                                | -            |
| onAfterShow    | Imported animation                                | -                                                | -            |

## Dialog Method

`Dialogprops` Type as component API.

| Method Name       | Description            | Parameter     | Return Value    |
| ----------------- | ---------------------- | ------------- | --------------- |
| Dialog.show()     | Display pop-up window  | `DialogProps` | Dialog Instance |
| Dialog.clearAll() | Destroy pop-up example | -             | -               |

### Dialog Instance Method

```
const useDialog = Dialog.useDialog();
const dialog=useDialog.show()
dialog.update();
dialog.clear();

```

| Method Name     | Description           | Parameter                                        | Return Value   |
| --------------- | --------------------- | ------------------------------------------------ | -------------- |
| dialog.update() | Update display prompt | `({ visible: boolean \| undefined, ...props }) ` | toast instance |
| dialog.clear()  | Destruction example   | -                                                | toast instance |
