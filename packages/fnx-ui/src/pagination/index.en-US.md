# Pagination

## Basic Usage

```tsx
import { Pagination } from 'fnx-ui';

ReactDOM.render(
  <>
    <Pagination total="80" />
  </>,
  mountNode,
);
```

## Simple

Set the `mode` Set to `simple` to switch to simple mode, at which point the paging device does not show the specific page number button.

```tsx
import { Pagination } from 'fnx-ui';

ReactDOM.render(
  <>
    <Pagination total={60} mode="simple" />
  </>,
  mountNode,
);
```

## ForceEllipses

Set up `forcellipses`, you will show the omitted button, click to quickly jump.

```tsx
import { Pagination } from 'fnx-ui';

ReactDOM.render(
  <>
    <Pagination
      total={125}
      forceEllipses
      defaultCurrent={8}
      pageItemCount={3}
    />
  </>,
  mountNode,
);
```

## Custom Button

Content from the paging button via `prev`,` next`, etc..

```tsx
import { Pagination } from 'fnx-ui';

ReactDOM.render(
  <>
    <Pagination
      total={80}
      slots={{
        prev: <Icon name="arrow-left" />,
        next: <Icon name="arrow-right" />,
      }}
    />
  </>,
  mountNode,
);
```

## API

| Parameter        | Description                                   | Type                  | Default value |
| ---------------- | --------------------------------------------- | --------------------- | ------------- |
| defaultCurrent   | Default selection page number                 | `number`              | -             |
| current          | Current page number                           | `number`              | -             |
| mode             | Display mode                                  | `'multi' \| 'simple'` | `multi`       |
| slots            | Customized Previous, next page button content | `PaginationSlots`     | `{}`          |
| total            | total                                         | `number`              | `82`          |
| pageSize         | Number of records per page                    | `number`              | `10`          |
| pageItemCount    | Displayed page number                         | `number`              | `5`           |
| forceEllipses    | Do you show an omitted number?                | `boolean`             | `false`       |
| hideOnSinglePage | Is there only one page, is it hidden?         | `boolean`             | `false`       |

## Events

| Event Name | Description                          | Callback Arguments                    |
| ---------- | ------------------------------------ | ------------------------------------- |
| onChange   | Trigger when the page number changes | `(current: number, pageSize: number)` |

### Slots Data Structure

| Parameter | Description             | Type        | Default value |
| --------- | ----------------------- | ----------- | ------------- |
| prev      | Customized Previous     | `ReactNode` | -             |
| next      | Customize the next page | `ReactNode` | -             |
