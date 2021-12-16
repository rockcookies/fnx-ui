# ConfigProvider 全局化配置

为组件提供统一的全局化配置。

## 基础用法

ConfigProvider 使用 React 的 [context](https://facebook.github.io/react/docs/context.html) 特性，只需在应用外围包裹一次即可全局生效。

```tsx
import { ConfigProvider } from 'fnx-ui';

export default () => {
  return (
    <ConfigProvider transitionDuration={1000}>
      <App />
    </ConfigProvider>
  );
};
```

## 国际化

使用 ConfigProvider 设置语言。

```tsx
import { ConfigProvider } from 'fnx-ui';
import zhCN from 'fnx-ui/lib/locale/zh-CN';

export default () => {
  return (
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  );
};
```

## API

### ConfigProvider Props

| 名称                | 说明                                                                                              | 类型                | 默认值                | 版本 |
| ------------------- | ------------------------------------------------------------------------------------------------- | ------------------- | --------------------- | ---- |
| locale              | 语言包配置，语言包可到 [fnx-ui/lib/locale](https://unpkg.com/browse/fnx-ui/lib/locale) 目录下寻找 | `object`            | -                     |      |
| safeAreaInsetBottom | 是否开启底部安全区适配                                                                            | `boolean`           | `false`               |      |
| transitionDuration  | 动画时长                                                                                          | `number`            | `300`                 |      |
| mountTo             | 弹出框（Popup, Toast, Dialog 等等）渲染父节点，默认渲染到 body 上                                 | `() => HTMLElement` | `() => document.body` |      |
