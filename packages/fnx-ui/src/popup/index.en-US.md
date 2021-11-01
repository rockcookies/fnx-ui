# Popup

Used to display popup windows, information prompts, etc., and supports multiple popup layers to display.

## Basic Usage

Use `visible` property to control the popup layer is displayed.

```tsx
import React, { useState } from 'react';
import { Popup, Cell } from 'fnx-ui';

const App = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const showPopup = () => {
    setIsPopupVisible(true);
  };

  const handleClose = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <Cell
        title="Open Popup"
        rightIcon={<Icon name="arrow-right" />}
        onClick={showPopup}
        clickable
      />
      <Popup visible={isPopupVisible} onClose={handleClose}>
        Content
      </Popup>
    </>
  );
};

ReactDOM.render(<App />, mountNode);
```

## Position

Use `position` property to set popup position, which can be set to `top`, `bottom`,`left`,`right` or `center`.

```tsx
import { Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup visible position="top" style={{ height: '30%' }}></Popup>
  </>,
  mountNode,
);
```

## Round

Use `round` property to set popup rounded style, The popup will add different rounded patterns based on the popup position.

```tsx
import { Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup visible round position="top">
      Content
    </Popup>
  </>,
  mountNode,
);
```

## MountTo

Use `mountTo` property to specified mount dom node.

```tsx
import { Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup visible mountTo={() => document.body}></Popup>
    <Popup visible mountTo={() => document.getElementById('app')}></Popup>
  </>,
  mountNode,
);
```

## Use with Popup.Select

```tsx
import { Popup, Cell, Icon, Picker } from 'fnx-ui';

const options = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

ReactDOM.render(
  <>
    <Popup.Select<string>
      select={<Picker data={options} title="Select date" />}
    >
      {(value) => (
        <Cell
          clickable
          title={value || 'Select date'}
          rightIcon={<Icon name="arrow-right" />}
        />
      )}
    </Popup.Select>
  </>,
  mountNode,
);
```

## API

### Popup Props

| Name                | Description                                            | Type                                                | Default               |
| ------------------- | ------------------------------------------------------ | --------------------------------------------------- | --------------------- |
| visible             | Whether to show popup                                  | `boolean`                                           | `false`               |
| renderOnShow        | Whether to render util appeared                        | `boolean`                                           | `true`                |
| destroyOnHide       | Whether to unmount child components on hide            | `boolean`                                           | `false`               |
| mountTo             | Specifies a target element where Popup will be mounted | `HTMLElement \| () => HTMLElement \| false`         | `() => document.body` |
| transitionDuration  | Transition duration, unit millisecond                  | `number`                                            | `300`                 |
| transitionName      | Transition class name                                  | `string`                                            | -                     |
| lockScroll          | Whether to lock background scroll                      | `boolean`                                           | `true`                |
| position            | Popup position                                         | `'top' \| 'bottom' \| 'left' \| 'right' \|'center'` | `'center'`            |
| round               | Whether to show round corner                           | `boolean`                                           | `false`               |
| safeAreaInsetBottom | Whether to enable bottom safe area adaptation          | `boolean`                                           | `false`               |
| overlay             | Whether to show overlay                                | `boolean`                                           | `true`                |
| overlayClassName    | Custom overlay class                                   | `string`                                            | -                     |
| overlayStyle        | Custom overlay style                                   | `CSSProperties`                                     | -                     |
| overlayCloseable    | Whether to close when overlay is clicked               | `boolean`                                           | `true`                |

#### Note

- The state of Popup will be preserved at it's component lifecycle by default, if you wish to open it with a brand new state everytime, set `destroyOnClose` on it.

## Events

| Event name     | Description                            | Callback Arguments |
| -------------- | -------------------------------------- | ------------------ |
| onOverlayClick | Emitted when overlay is clicked        | -                  |
| onClose        | Emitted when Popup is closing          | -                  |
| onBeforeHide   | Emitted when before the hide animation | -                  |
| onHide         | Emitted when popup hiding              | -                  |
| onAfterHide    | Emitted when after the hide animation  | -                  |
| onBeforeShow   | Emitted when before the show animation | -                  |
| onShow         | Execute when popup showing             | -                  |
| onAfterShow    | Emitted when after the show animation  | -                  |

## Popup.Select Props

Popup.Select extends Popup props and add the following props:

| Name                       | Description          | Type                                      | Default value  |
| -------------------------- | -------------------- | ----------------------------------------- | -------------- |
| disabled                   | Is it disabled?      | `boolean`                                 | `false`        |
| value                      | Option value         | `any`                                     | -              |
| defaultValue               | Default option value | `any`                                     | -              |
| select                     | popup layer content  | `ReactNode`                               | -              |
| selectDefaultValuePropName | Default name         | `string`                                  | `defaultValue` |
| selectConfirmTrigger       | Confirm button name  | `string`                                  | `onConfirm`    |
| selectCancelTrigger        | Cancel button name   | `string`                                  | `onCancel`     |
| trigger                    | Trigger behavior     | `string`                                  | `onClick`      |
| children                   | Child element        | `ReactNode \| (value?: any) => ReactNode` | -              |

## PopupSelect Events

Popup.Select extends Popup events and add the following events:

| Event Name | Description            | Callback Arguments     |
| ---------- | ---------------------- | ---------------------- |
| onChange   | `value` 发生改变时触发 | `(value: any) => void` |
