# Toast

Black translucent prompts are pop-up in the middle of the page for message notifications, load prompts, and operation results prompts.

## Text Prompt

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

## Loading Prompt

Use the `Toast.loading` method to display the load prompt, you can disable the background click via `forbidClick` property.

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

## Success / Fail Prompt

Use the `Toast.success` method to show the success reminder, use the `Toast.fail` method to show failed prompts.

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

## Custom Icon

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

## Custom Location

`Toast` default rendering on the screen, pass the `position` property can control the position of the `toast` display.

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

## Dynamic Tips

When the `toast` method is executed, the corresponding` toast` instance is returned, and the effect of dynamic update prompt can be realized by modifying the `update` property instance.

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

| Parameter           | Description                                                                        | Type                                 | Default value |
| ------------------- | ---------------------------------------------------------------------------------- | ------------------------------------ | ------------- |
| message             | Text content, support passing `\ n`                                                | `string`                             | -             |
| icon                | Custom icon                                                                        | `ReactNode`                          | -             |
| duration            | Animation                                                                          | `number`                             | `2000`        |
| forbidClick         | Whether to ban the background, click (when the `loading` is the default is` true`) | `boolean`                            | `false`       |
| clickCloseable      | Is it close after clicking                                                         | `boolean_`                           | `false`       |
| duration            | During the display, the value is 0, `toast` does not disappear                     | `number`                             | `2000`        |
| className           | Custom class name                                                                  | `string`                             | -             |
| visible             | Whether it is displayed                                                            | `boolean`                            | `false`       |
| round               | Whether to show the fillet                                                         | `boolean`                            | `false`       |
| position            | Location                                                                           | `` top` \| `bottom` \| `middle ``    | `middle`      |
| overlay             | Whether to display a mask layer                                                    | `boolean`                            | `fill`        |
| overlayClassName    | Mask layer class name                                                              | `string`                             | -             |
| overlayStyle        | Mask layer style                                                                   | `string`                             | -             |
| overlayCloseable    | Whether to click the mask layer close                                              | `boolean`                            | `true`        |
| renderOnShow        | Whether to render load                                                             | `boolean`                            | `true`        |
| destroyOnHide       | Whether to close the destruction                                                   | `boolean`                            | `false`       |
| mountTo             | Specify a mounted node                                                             | `boolean \| element \| ()=>element ` | -             |
| transitionDuration  | Transition animation                                                               | `number`                             | -             |
| transitionName      | Transition animation name                                                          | `string`                             | -             |
| lockScroll          | Whether it is forbidden to scroll                                                  | `boolean`                            | `true`        |
| safeAreaInsetBottom | Do you open the bottom security area adaptation                                    | `boolean`                            | `false`       |

## <Toast /> Events

| Event name     | Description                                              | Callback Arguments |
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

### Toast Method

| Event name          | Description             | Callback Arguments              | Return Value |
| ------------------- | ----------------------- | ------------------------------- | ------------ |
| Toast.show          | Display loading prompt  | `(props: string \| ToastProps)` | `toast`      |
| Toast.loading       | Display loading prompt  | `(props: string \| ToastProps)` | `toast`      |
| Toast.success       | Show success reminder   | `(props: string \| ToastProps)` | `toast`      |
| Toast.fail          | Show failed prompt      | `(props: string \| ToastProps)` | `toast`      |
| Toast.clearAll      | Close prompt            | -                               | `void`       |
| Toast.allowMultiple | Allows multiple `toast` | `(allow: boolean)`              | `void`       |

### Toast Instance Method

Create an instance: const toast = Toast.show({message:'Message'});

| Method Name    | Description           | Parameter    | Return Value   |
| -------------- | --------------------- | ------------ | -------------- |
| Toast.update() | Update display prompt | `ToastProps` | toast instance |
| Toast.clear()  | Destroy `toast`       | -            | toast instance |
