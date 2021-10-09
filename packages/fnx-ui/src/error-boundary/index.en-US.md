# ErrorBoundary

By default, if an error occurs during the rendering, it will cause all the entire component tree to be uninstalled.

Error boundary: is a component that captures an error that occurs during render subcaps and has the ability to prevent errors from continuing to spread.

## Basic Usage

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

## Custom error title

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

| Parameter   | Description                                                          | Type        | Default value |
| ----------- | -------------------------------------------------------------------- | ----------- | ------------- |
| message     | Custom error title, if you do not specify the original error message | `ReactNode` | -             |
| description | Custom error content, if you do not specify an error stack           | `ReactNode` | -             |
