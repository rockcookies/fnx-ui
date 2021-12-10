# Toast

Black semi-transparent pop-up hint in the middle of the page, used for message notification, loading hint, operation result hint and other scenarios.

## Basic Usage

```tsx
import { Toast } from 'fnx-ui';

Toast.show('Message');
```

## Loading

Use the `Toast.loading` method to display the loading toast, you can disable the background click via `forbidClick` property.

```tsx
import { Toast } from 'fnx-ui';

Toast.loading({
  message: 'Message',
  forbidClick: true,
});
```

## Success / Fail

Use the `Toast.success` method to show success toast or the `Toast.fail` method to show failed toast.

```tsx
import { Toast } from 'fnx-ui';

Toast.success('Success');
Toast.fail('Failed');
```

## Custom Icon

Use `icon` property to custom icon style.

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

## Custom Position

Use the `position` property to set the position of the toast display.

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

## Update Message

Call the Toast function will return a Toast Instance, You can call the `update` of the Toast Instance to update toast.

```tsx
import { Toast } from 'fnx-ui';

const toast = Toast.loading({
  duration: 0,
  message: '3 seconds',
});

let second = 3;
const timer = setInterval(() => {
  second--;
  if (second) {
    toast.update({ message: `${second} seconds` });
  } else {
    clearInterval(timer);
    toast.clear();
  }
}, 1000);
```

## API

### Toast Props

Toast extends [Popup](#/en-US/components/popup) props and add the following props:

| Name           | Description                                       | Type                                | Default    | Version |
| -------------- | ------------------------------------------------- | ----------------------------------- | ---------- | ------- |
| position       | Toast location                                    | `'top'` \| `'bottom'` \| `'middle'` | `'middle'` |         |
| message        | Text content, support passing `\n`                | `string`                            | -          |         |
| icon           | Custom icon                                       | `ReactNode`                         | -          |         |
| duration       | Toast duration(ms), won't disappear if value is 0 | `number`                            | `2000`     |         |
| forbidClick    | Whether to forbid click background                | `boolean`                           | `false`    |         |
| clickCloseable | Whether to close when click                       | `boolean`                           | -          |         |

### Toast Method

| Event name          | Description                           | Type                                             | Version |
| ------------------- | ------------------------------------- | ------------------------------------------------ | ------- |
| Toast.show          | Display toast                         | `(props: string \| ToastProps) => ToastInstance` |         |
| Toast.loading       | Display loading toast                 | `(props: string \| ToastProps) => ToastInstance` |         |
| Toast.success       | Display success toast                 | `(props: string \| ToastProps) => ToastInstance` |         |
| Toast.fail          | Display failed toast                  | `(props: string \| ToastProps) => ToastInstance` |         |
| Toast.clearAll      | Close toast                           | `() => void`                                     |         |
| Toast.allowMultiple | Allow multiple toast at the same time | `(allow: boolean) => void`                       |         |

### Toast Instance Methods

| Method Name | Description            | Type                          | Version |
| ----------- | ---------------------- | ----------------------------- | ------- |
| update      | Update toast instance  | `(props: ToastProps) => void` |         |
| clear       | Destroy toast instance | `() => void`                  |         |
