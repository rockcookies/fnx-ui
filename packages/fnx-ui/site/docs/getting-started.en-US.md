# Quick Start

This guide also assumes that you have intermediate knowledge about HTML, CSS, and JavaScript, and React. If you are just starting to learn front-end or React, it may not be the best idea to use the UI framework as your first step.

## Installation

Use npm or yarn to install.

```bash
# npm
$ npm i fnx-ui -S

# yarn
$ yarn add fnx-ui
```

## Usage

Run the App.

```tsx
import React from 'react';
import { render } from 'react-dom';
import { ConfigProvider, Button } from 'fnx-ui';
import enUS from 'fnx-ui/lib/locale/en-US';

import 'fnx-ui/dist/fnx.css';

// light mode
import 'fnx-ui/dist/fnx-theme-light.css';

// dark mode
// import 'fnx-ui/dist/fnx-theme-dark.css';

const App = () => {
  return (
    <ConfigProvider locale={enUS}>
      <div style={{ width: 400, margin: '100px auto' }}>
        <Button type="primary">Hello World!</Button>
      </div>
    </ConfigProvider>
  );
};

render(<App />, document.getElementById('root'));
```
