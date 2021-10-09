# Popup 弹出层

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

## 基础用法

通过 `visible` 控制弹出层是否显示。

```tsx
import { Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup visible />
  </>,
  mountNode,
);
```

## 弹出位置

通过 `position` 属性设置弹出位置，默认居中弹出，可以设置为 `top、bottom、left、right、center`。

```tsx
import { Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup position="center" />
  </>,
  mountNode,
);
```

## 圆角弹窗

设置 `round` 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```tsx
import { Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup round />
  </>,
  mountNode,
);
```

## 指定挂载位置

弹出层默认挂载到组件所在位置，可以通过 `mountTo` 属性指定挂载位置。

```tsx
import { Popup } from 'fnx-ui';

ReactDOM.render(
  <>
    <Popup mountTo={() => document.body}>Content</Popup>
  </>,
  mountNode,
);
```

## `<Popup.Select>` 使用

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

| 参数                | 说明                   | 类型                                                | 默认值   |
| ------------------- | ---------------------- | --------------------------------------------------- | -------- |
| visible             | 是否显示弹出层         | `boolean`                                           | `false`  |
| round               | 是否展示圆角           | `boolean`                                           | `false`  |
| position            | 遮罩层位置             | `'top' \| 'bottom' \| 'left' \| 'right' \|'center'` | `center` |
| overlay             | 是否显示遮罩层         | `boolean`                                           | `fill`   |
| overlayClassName    | 遮罩层类名             | `string`                                            | -        |
| overlayStyle        | 遮罩层样式             | `string`                                            | -        |
| overlayCloseable    | 是否点击遮罩层关闭     | `boolean`                                           | `true`   |
| renderOnShow        | 是否渲染加载           | `boolean`                                           | `true`   |
| destroyOnHide       | 是否关闭销毁           | `boolean`                                           | `false`  |
| mountTo             | 指定挂载的节点         | `boolean \| element \| ()=>element `                | -        |
| transitionDuration  | 过渡动画               | `number`                                            | -        |
| transitionName      | 过渡动画类名           | `string`                                            | -        |
| lockScroll          | 是否禁止滚动           | `boolean`                                           | `true`   |
| safeAreaInsetBottom | 是否开启底部安全区适配 | `boolean`                                           | `false`  |

## PopupSelect API

| 参数                       | 说明                   | 类型                                       | 默认值  |
| -------------------------- | ---------------------- | ------------------------------------------ | ------- |
| disabled                   | 是否禁用               | `boolean`                                  | `false` |
| value                      | 选项值                 | `T`                                        | -       |
| defaultValue               | 默认选项值             | `T`                                        | -       |
| select                     | 弹出层内容             | `ReactNode`                                | -       |
| selectDefaultValuePropName | 默认 `props` 的 `name` | `string`                                   | -       |
| selectConfirmTrigger       | 确认按钮名字属性       | `string`                                   | -       |
| selectCancelTrigger        | 取消按钮名字属性       | `string`                                   | -       |
| trigger                    | 子元素属性             | `string`                                   | -       |
| children                   | 自定义的属性子元素     | ` ReactNode \| ((value?: T) => ReactNode)` | -       |

## 事件

| 事件名         | 说明                         | 回调参数 |
| -------------- | ---------------------------- | -------- |
| onShow         | 打开弹出层时触发             | -        |
| onOverlayClick | 点击遮罩层触发               | -        |
| onClose        | 遮罩层可点击时点击遮罩层触发 | -        |
| onBeforeHide   | 出场动画前执行触发           | -        |
| onHide         | 出场动画中执行触发           | -        |
| onAfterHide    | 出场动画后执行触发           | -        |
| onBeforeShow   | 进场动画前执行触发           | -        |
| onShow         | 进场动画中执行触发           | -        |
| onAfterShow    | 进场动画后执行触发           | -        |

## PopupSelect 事件

| 事件名   | 说明                 | 回调参数 |
| -------- | -------------------- | -------- |
| onChange | 选项值发生改变时触发 | `(v: T=any)` |
