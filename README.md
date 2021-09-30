<p align="center">
    <img alt="logo" src="https://user-images.githubusercontent.com/3498265/135194949-3846c80f-c81b-41a5-98fe-6fc5a06be37a.png" width="120" style="margin-bottom: 10px;">
</p>

<h1 align="center">FNX-UI</h1>

<p align="center">Lightweight Mobile UI Components built in React</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/fnx-ui?style=flat-square" alt="npm version" />
    <!-- <img src="https://img.shields.io/github/workflow/status/Rockcookies/fnx-ui/CI/dev?style=flat-square" alt="CI Status" />
    <img src="https://img.shields.io/codecov/c/github/Rockcookies/fnx-ui/dev.svg?style=flat-square&color=#4fc08d" alt="Coverage Status" /> -->
    <img src="https://img.shields.io/npm/dm/fnx-ui.svg?style=flat-square&color=#4fc08d" alt="downloads" />
    <img src="https://img.shields.io/jsdelivr/npm/hm/fnx-ui?style=flat-square" alt="Jsdelivr Hits">
    <img src="https://img.badgesize.io/https://unpkg.com/fnx-ui/dist/fnx.min.js?compression=gzip&style=flat-square&label=gzip%20size&color=#4fc08d" alt="Gzip Size" />
</p>

<p align="center">
  <a href="https://rockcookies.github.io/fnx-ui">Website（GitHub）</a>
  &nbsp;
  <a href="https://rockcookies.gitee.io/fnx-ui">文档网站（国内）</a>
  &nbsp;
  <a href="./README.zh-CN.md">中文版介绍</a>
</p>

---

## Introduction

Lightweight Mobile UI Components built in React.

## Features

- There are more than 30 components, Hope they can help you write less code
- 1kb Component average size (min+gzip)
- 90%+ Unit test coverage
- All the staff in FNX UI is written in TypeScript, It can work with your TypeScript project seamlessly
- Support i18n
- Support dark mode and custom theme

## Install

Use npm or yarn to install.

```bash
# npm
$ npm i fnx-ui -S

# yarn
$ yarn add fnx-ui
```

## Quick Start

```tsx
import ReactDOM from 'react-dom';
import { Button } from 'fnx-ui';

import 'fnx-ui/dist/fnx.css';

// light mode
import 'fnx-ui/dist/fnx-theme-light.css';

// dark mode
// import 'fnx-ui/dist/fnx-theme-dark.css';

function App() {
  return <Button>Default Button</Button>;
}

ReactDOM.render(<App />, mountNode);
```

## Browser Support

Supports modern browsers and Chrome >= 51、Android >= 5.0、iOS >= 10.0.

## Contributing

We welcome all contributions. You can submit any ideas as [pull requests](https://github.com/Rockcookies/fnx-ui/pulls) or as GitHub [issues](https://github.com/Rockcookies/fnx-ui/issues).

## Preview

You can scan the following QR code to access the demo：

<img src="https://user-images.githubusercontent.com/3498265/135195333-a7065ceb-3a63-4f02-b360-31fafcfd8838.png" width="220" height="220" >

## LICENSE

[MIT](https://en.wikipedia.org/wiki/MIT_License)
