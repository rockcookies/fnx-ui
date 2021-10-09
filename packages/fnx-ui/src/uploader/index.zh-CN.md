# Uploader 文件上传

用于将本地的图片或文件上传，并在上传过程中展示预览图和上传进度。

## 基本用法

```tsx
import { Uploader } from 'fnx-ui';

ReactDOM.render(
  <>
    <Uploader />
  </>,
  mountNode,
);
```

## 文件预览

通过 `value` 可以绑定已经上传的文件列表,并展示文件列表的预览图。`showFileList` 为 `false` 隐藏预览图。

```tsx
import { Uploader } from 'fnx-ui';

const statusValue = [
  {
    status: 'failed',
    name: 'leaf',
    url: 'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg',
  },
  {
    status: 'done',
    name: 'leaf',
    url: 'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg',
  },
];

ReactDOM.render(
  <>
    <Uploader value={statusValue} showFileList={false} />
  </>,
  mountNode,
);
```

## 上传状态

通过 `status` 属性可以标识上传状态，`uploading` 表示上传中，`failed` 表示上传失败，`done` 表示上传完成。

```tsx
import { Uploader } from 'fnx-ui';

const statusValue: detailFileProps[] = [
  {
    status: 'failed',
    name: '1',
    url: 'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg',
  },
  {
    status: 'uploading',
    name: '2',
    url: 'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg',
  },
  {
    status: 'done',
    name: '3',
    url: 'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg',
  },
];

ReactDOM.render(
  <>
    <Uploader defaultValue={statusValue} />
  </>,
  mountNode,
);
```

## 限制上传数量

通过 `maxCount` 属性可以限制上传文件的数量，上传数量达到限制后，会自动隐藏上传区域。

```tsx
import { Uploader } from 'fnx-ui';

ReactDOM.render(
  <>
    <Uploader maxCount={3} />
  </>,
  mountNode,
);
```

## 自定义上传样式

通过子元素可以自定义上传区域的样式。

```tsx
import { Uploader } from 'fnx-ui';

ReactDOM.render(
  <>
    <Uploader>Custom Upload</Uploader>
  </>,
  mountNode,
);
```

## 自定义预览样式

通过 `slots` 插槽可以自定义覆盖在预览区域上方的内容。

```tsx
import { Uploader } from 'fnx-ui';

const statusValue = [
  {
    status: 'failed',
    name: 'leaf',
    url: 'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg',
  },
  {
    status: 'done',
    name: 'leaf',
    url: 'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg',
  },
];

ReactDOM.render(
  <>
    <Uploader
      defaultValue={statusValue}
      slots={{
        filePreviewCover: ({ file }) => <div>{file && file.name}</div>,
        fileList: <div>Custom Upload</div>,
      }}
    />
  </>,
  mountNode,
);
```

## 上传前置处理

通过传入 `onRead` 函数可以在上传前进行校验和处理，返回 `file[]` 表示校验通过，返回 `[]` 表示校验失败。支持返回 `Promise` 对 `file` 对象进行自定义处理，例如压缩图片，判断文件类型是否符合要求。

```tsx
import { Uploader } from 'fnx-ui';

const defaultValue = [
  {
    url: 'https://img17.fn-mart.com/pic/2a021346939822ebb66f/B26n221z_2fdhMZdKz/7imyeafa3yKGj9/CsmRtmA3RAuAVmgsAAKtgt1PF3s715.jpg',
    status: 'done',
  },
];
const [value, setValue] = useState(defaultValue);

const handleBeforeChange = (fileList) => {
  return new Promise((resolve, reject) => {
    return false;
  });
};

const handleChange = (e) => {
  const file = e.file;
  file.url = url;
  setChange([...change, e.file]);
};

ReactDOM.render(
  <>
    <Uploader
      value={value}
      onRead={handleBeforeChange}
      onChange={handleChange}
    />
  </>,
  mountNode,
);
```

## API

组件`<Uploader/>` 类型是`UploaderProps`，继承 `UploaderFile`。

| 参数         | 说明                                             | 类型                | 默认值  |
| ------------ | ------------------------------------------------ | ------------------- | ------- |
| accept       | 允许上传的文件类型                               | `string \|string[]` | -       |
| multiple     | 是否开启图片多选，部分安卓机型不支持             | `boolean`           | `false` |
| disabled     | 是否禁用文件上传                                 | `boolean`           | `false` |
| showFileList | 是否支持预览图                                   | `boolean`           | `true`  |
| maxCount     | 文件上传数量限制                                 | `number \| string`  | -       |
| value        | 文件列表                                         | `T[]`               | -       |
| defaultValue | 默认文件列表                                     | `T[]`               | -       |
| capture      | 图片选取模式，可选值为 `camera` (直接调起摄像头) | `string \| boolean` | -       |
| slots        | 自定义上传列表项                                 | `UploaderSlots`     | -       |

## 事件

类型 `UploaderFileItem` 继承 `UploaderFile` 且除去 `uid` 属性。
类型 `UploaderMarkedFile` 继承 `UploaderFile` 且除去 `uid`，`file` 属性。

| 事件名    | 说明                           | 回调参数                 |
| --------- | ------------------------------ | ------------------------ |
| onChange  | 上传文件之前触发               | `(e:UploaderMarkedFile)` |
| onRead    | 点击上传文件时触发(已获取文件) | `(e:UploaderFileItem)`   |
| onUpload  | 上传文件时触发(已上传)         | `(e:UploaderFileItem)`   |
| onPreview | 点击预览图时触发               | `(e:UploaderMarkedFile)` |
| onRemove  | 删除文件预览时触发             | `(e:UploaderMarkedFile)` |

### Slots 数据结构

类型 `UploaderSlots` 继承 `UploaderFile。`

| 参数             | 说明         | 类型                                         | 默认值 |
| ---------------- | ------------ | -------------------------------------------- | ------ |
| filePreviewCover | 预览文件备注 | `(item: UploaderMarkedFile<T>) => ReactNode` | -      |
| fileList         | 预览内容     | `ReactNode`                                  | -      |

### UploaderFile 数据结构

类型 `UploaderFileStatus` 中 `uploading` 表示上传中，`failed` 表示上传失败，`done` 表示上传完成。

| 参数         | 说明                           | 类型                 | 默认值 |
| ------------ | ------------------------------ | -------------------- | ------ |
| uid          | 唯一标识符，不设置时会自动生成 | `string`             | -      |
| name         | 文件名                         | `string`             | -      |
| size         | 文件大小                       | `number`             | -      |
| type         | 文件类型                       | `string`             | -      |
| lastModified | 文件最后修改                   | `number`             | -      |
| removable    | 是否可移除                     | `boolean`            | -      |
| content      | 内容                           | `string`             | -      |
| status       | 文件状态                       | `UploaderFileStatus` | -      |
| thumbnail    | 缩略图地址                     | `boolean`            | -      |
| message      | 信息                           | `string`             | -      |
| file         | 文件                           | `File`               | -      |
| url          | 下载地址                       | `string`             | -      |
