# 快速上手

这篇指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 React 全家桶的正确开发方式。如果你刚开始学习前端或者 React，将 UI 框架作为你的第一步可能不是最好的主意。

## 安装

使用 npm 或 yarn 进行安装。

```bash
# npm
$ npm i fnx-ui -S

# yarn
$ yarn add fnx-ui
```

## 使用

运行项目。

```tsx
import React from 'react';
import { render } from 'react-dom';
import { ConfigProvider, Button } from 'fnx-ui';
import zhCN from 'fnx-ui/lib/locale/zh-CN';

import 'fnx-ui/dist/fnx.css';

// light mode
import 'fnx-ui/dist/fnx-theme-light.css';

// dark mode
// import 'fnx-ui/dist/fnx-theme-dark.css';

const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div style={{ width: 400, margin: '100px auto' }}>
        <Button type="primary">Hello World!</Button>
      </div>
    </ConfigProvider>
  );
};

render(<App />, document.getElementById('root'));
```
