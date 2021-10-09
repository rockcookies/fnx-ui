# Import on demand

FNX UI support tree shaking for components and locales.

By default the component locale is enUS, no extra imports is needed.

## Demand import LESS/CSS

Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) to import components on demand.

```bash
# Install plugin
$ npm i babel-plugin-import -D
```

Set babel config in .babelrc or babel.config.js.

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

Then you can import components from fnx-ui.

```tsx
// Input
import { Button } from 'fnx-ui';

// Output
import Button from 'fnx-ui/es/button';
import 'fnx-ui/es/button/style';
```
