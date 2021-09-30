<p align="center">
    <img alt="logo" src="https://user-images.githubusercontent.com/3498265/135194949-3846c80f-c81b-41a5-98fe-6fc5a06be37a.png" width="120" style="margin-bottom: 10px;">
</p>

<h1 align="center">FNX-UI</h1>

<p align="center">轻量、可靠的移动端 React 组件库</p>

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
</p>

---

## 介绍

FNX UI 是一个基于 React 研发的一款适用于企业级的移动端 UI 组件库。

## 特性

- 提供 30 多个高质量组件，未来还会持续新增
- 性能优秀，组件平均体积不到 1kb （min+gzip）
- 单元测试覆盖率 90%+，提供稳定性保障
- 全量使用 TypeScript 编写，和你的 TypeScript 项目无缝衔接
- 提供国际化解决方案，多语言支持
- 支持暗黑模式，主题定制

## 安装

使用 npm 或 yarn 进行安装。

```bash
# npm
$ npm i fnx-ui -S

# yarn
$ yarn add fnx-ui
```

## 快速上手

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

## 浏览器支持

支持现代浏览器以及 Chrome >= 51、Android >= 5.0、iOS >= 10.0。

## 贡献代码

使用过程中发现任何问题都可以提 [Issue](https://github.com/Rockcookies/fnx-ui/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/Rockcookies/fnx-ui/pulls)。

## 手机预览

可以手机扫码以下二维码访问手机端 demo：

<img src="https://user-images.githubusercontent.com/3498265/135195333-a7065ceb-3a63-4f02-b360-31fafcfd8838.png" width="220" height="220" >

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
