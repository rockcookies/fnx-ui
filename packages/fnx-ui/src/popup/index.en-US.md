# Popup

The pop-up layer container is used to show the population, information prompt, and the like, support multiple pop-ups overlay display.

## Basic Usage

Control the pop-up layer is displayed via `visible`

```tsx
import { Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup visible />
  </>,
  mountNode,
);
```

## Position

The pop-up position is set by `position` property, the default is popped, which can be set to `top、bottom、left、right、center`.

```tsx
import { Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup position="center" />
  </>,
  mountNode,
);
```

## Round

After setting the `round` property, the pop-up will add different rounded patterns based on the pop-up position.

```tsx
import { Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup round />
  </>,
  mountNode,
);
```

## MountTo

The pop-up layer is mounted to the location where the component is mounted, and the mount position can be specified by `mounttTo` property.

```tsx
import { Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup mountTo={() => document.body}>Content</Popup>
  </>,
  mountNode,
);
```

## `<Popup.Select>` Use

```tsx
import { Popup } from 'fnx-ui';

const renderCell = (title, content) => {
  return (
    <Cell
      title={title}
      content={content}
      clickable
      rightIcon={<Icon name="arrow-right" />}
    />
  );
};

const formatDate = (date) => {
  if (date) {
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }
};

const formatFullDate = (date) => {
  if (date) {
    return `${date.getFullYear()}/${formatDate(date)}`;
  }
};

ReactDOM.render(
  <>
    <Popup.Select select={<Calendar />}>
      {(value) => renderCell('Title', formatFullDate(value))}
    </Popup.Select>
  </>,
  mountNode,
);
```

## API

| Parameter           | Description                                  | Type                                                | Default value |
| ------------------- | -------------------------------------------- | --------------------------------------------------- | ------------- |
| visible             | Show pop-up layer                            | `boolean`                                           | `false`       |
| round               | Show fillet                                  | `boolean`                                           | `false`       |
| position            | Mask layer location                          | `'top' \| 'bottom' \| 'left' \| 'right' \|'center'` | `center`      |
| overlay             | Show mask layer                              | `boolean`                                           | `fill`        |
| overlayClassName    | Mask layer class name                        | `string`                                            | -             |
| overlayStyle        | Mask layer style                             | `string`                                            | -             |
| overlayCloseable    | Click mask layer to close                    | `boolean`                                           | `true`        |
| renderOnShow        | Render load                                  | `boolean`                                           | `true`        |
| destroyOnHide       | Close destroy                                | `boolean`                                           | `false`       |
| mountTo             | Specify the node to mount                    | `boolean \| element \| ()=>element `                | -             |
| transitionDuration  | Transition animation                         | `number`                                            | -             |
| transitionName      | Transition animation class name              | `string`                                            | -             |
| lockScroll          | Disable scrolling                            | `boolean`                                           | `true`        |
| safeAreaInsetBottom | Is the bottom safety zone adaptation enabled | `boolean`                                           | `false`       |

## PopupSelect API

| Parameter                  | Description                    | Type                                       | Default value |
| -------------------------- | ------------------------------ | ------------------------------------------ | ------------- |
| disabled                   | Is it disabled?                | `boolean`                                  | `false`       |
| value                      | Option value                   | `T`                                        | -             |
| defaultValue               | Default option value           | `T`                                        | -             |
| select                     | Pop-up layer content           | `ReactNode`                                | -             |
| selectDefaultValuePropName | `name` of default `props`      | `string`                                   | -             |
| selectConfirmTrigger       | Confirm button name properties | `string`                                   | -             |
| selectCancelTrigger        | Cancel button name properties  | `string`                                   | -             |
| trigger                    | Child element properties       | `string`                                   | -             |
| children                   | Custom attribute sub-elements  | ` ReactNode \| ((value?: T) => ReactNode)` | -             |

## Events

| Event name     | Description                                                         | Callback Arguments |
| -------------- | ------------------------------------------------------------------- | ------------------ |
| onShow         | Triggered when the pop-up layer is turned on                        | -                  |
| onOverlayClick | Click the mask layer to trigger                                     | -                  |
| onClose        | When the mask layer can be clicked, click the mask layer to trigger | -                  |
| onBeforeHide   | Execute trigger before exit animation                               | -                  |
| onHide         | Execute trigger in exit animation                                   | -                  |
| onAfterHide    | Execute trigger after exit animation                                | -                  |
| onBeforeShow   | Execute trigger before entering animation                           | -                  |
| onShow         | Execute trigger in approach animation                               | -                  |
| onAfterShow    | Execute trigger after approach animation                            | -                  |

## PopupSelect Events

| Event Name | Description                              | Callback Arguments |
| ---------- | ---------------------------------------- | ------------------ |
| onChange   | Triggers when the value changes changing | `(v: T=any)`       |
