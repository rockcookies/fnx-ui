# ConfigProvider

ConfigProvider provides a uniform configuration support for components.

## Basic Usage

This component provides a configuration to all React components underneath itself via the [context API](https://facebook.github.io/react/docs/context.html). In the render tree all components will have access to the provided config.

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

## Locale

Use ConfigProvider config locale.

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

| Name                | Description                                                                                                            | Type      | Default             | Version               |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------- | ------------------- | --------------------- |
| locale              | Language package setting, you can find the packages in [fnx-ui/lib/locale](https://unpkg.com/browse/fnx-ui/lib/locale) | `object`  | -                   |                       |
| safeAreaInsetBottom | Whether to enable bottom safe area adaptation                                                                          | `boolean` | `false`             |                       |
| transitionDuration  | Animation transition duration                                                                                          | `number`  | `300`               |                       |
| mountTo             | To set the container of the popup element. The default is to create a `div` element in `body`                          |           | `() => HTMLElement` | `() => document.body` |
