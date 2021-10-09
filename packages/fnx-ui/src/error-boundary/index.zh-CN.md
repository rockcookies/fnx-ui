# ErrorBoundary 错误边界

默认情况下，若一个组件在渲染期间（render）发生错误，会导致整个组件树全部被卸载。

错误边界：是一个组件，该组件会捕获到渲染期间（render）子组件发生的错误，并有能力阻止错误继续传播。

## 基本用法

```tsx
import { ErrorBoundary } from 'fnx-ui';

const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>();

  const handleClick = () => {
    setError(new Error('ERROR'));
  };

  if (error) {
    throw error;
  }

  return (
    <Button type="danger" onClick={handleClick}>
      Content
    </Button>
  );
};

ReactDOM.render(
  <>
    <ErrorBoundary>
      <ThrowError />
    </ErrorBoundary>
  </>,
  mountNode,
);
```

## 自定义错误标题

```tsx
import { ErrorBoundary } from 'fnx-ui';

const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>();

  const handleClick = () => {
    setError(new Error('ERROR'));
  };

  if (error) {
    throw error;
  }

  return (
    <Button type="danger" onClick={handleClick}>
      Content
    </Button>
  );
};

ReactDOM.render(
  <>
    <ErrorBoundary message={<div>Message</div>}>
      <ThrowError />
    </ErrorBoundary>
  </>,
  mountNode,
);
```

## API

| 参数        | 说明                                         | 类型        | 默认值 |
| ----------- | -------------------------------------------- | ----------- | ------ |
| message     | 自定义错误标题，如果未指定会展示原生报错信息 | `ReactNode` | -      |
| description | 自定义错误内容，如果未指定会展示报错堆栈     | `ReactNode` | -      |
