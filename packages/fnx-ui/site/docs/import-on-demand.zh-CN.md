# 按需引入

FNX UI 支持 tree shaking，组件、语言、均可 tree-shaking。

默认情况组件语言为英文，无需额外导入。

## 按需引入 LESS/CSS

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。

```bash
# 安装插件
$ npm i babel-plugin-import -D
```

在.babelrc 或 babel.config.js 中添加配置。

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "fnx-ui",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}
```

接着你可以在代码中直接引入 FNX UI 组件，插件会自动将代码转化为按需引入的形式。

```tsx
// 原始代码
import { Button } from 'fnx-ui';

// 编译后代码
import Button from 'fnx-ui/es/button';
import 'fnx-ui/es/button/style';
```
