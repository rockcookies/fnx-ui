# Uploader

Used to upload local images or files and present the preview map and upload progress during the upload process.

## Basic Usage

```tsx
import { Uploader } from 'fnx-ui';

ReactDOM.render(
  <>
    <Uploader />
  </>,
  mountNode,
);
```

## File Preview

Through `value`, you can bind a list of files that have been uploaded, and the preview of the list of files will be displayed. `showfilelist` For` false` hide preview.

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

## Upload State

Through the `status` property, you can identify the upload state,` uploading` indicating upload, `failed` indicating upload failure,` done` indicating upload completion.

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

## MaxCount

The `maxCount` attribute can limit the number of uploaded files. After the upload number reaches the limit, the upload area is automatically hidden.

```tsx
import { Uploader } from 'fnx-ui';

ReactDOM.render(
  <>
    <Uploader maxCount={3} />
  </>,
  mountNode,
);
```

## Custom Uploading

The pattern of the upload area can be customized by sub-elements.

```tsx
import { Uploader } from 'fnx-ui';

ReactDOM.render(
  <>
    <Uploader>Custom Upload</Uploader>
  </>,
  mountNode,
);
```

## Custom Preview

Customizing the content over the preview area via a `slots` slot.

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

## Before onRead

By passing the `onread` function, check and process before uploading, return to`file []`Representation verification, return to`[]`indicates that the verification failed. Support to return to `promise` to customize the` File` object, such as compressing pictures, and determine if the file type meets the requirements.

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

Component `<uploader />` type is `UploaderProps`, inheritance `Uploaderfile`.

| Parameter    | Description                                                                | Type                | Default value |
| ------------ | -------------------------------------------------------------------------- | ------------------- | ------------- |
| accept       | Allow upload file types                                                    | `string \|string[]` | -             |
| multiple     | Whether to open a picture, some Android type does not support              | `boolean`           | `false`       |
| disabled     | Whether to disable file upload                                             | `boolean`           | `false`       |
| showFileList | Do you support a preview map                                               | `boolean`           | `true`        |
| maxCount     | File upload quantity limit                                                 | `number \| string`  | -             |
| value        | document list                                                              | `T[]`               | -             |
| defaultValue | Default file list                                                          | `T[]`               | -             |
| slots        | Customized upload list item                                                | `UploaderSlots`     | -             |
| capture      | Picture selection mode, optional value is `Camera` (directly toned camera) | `string \| boolean` | -             |

## Events

Type` UploaderfileItem` Inherits `Uploaderfile` and remove the` uid` attribute.
Type` Uploadermarkedfile` Inherited `Uploaderfile` and remove` Uid`,` file` attribute.

| Event Name | Description                                           | Callback Arguments       |
| ---------- | ----------------------------------------------------- | ------------------------ |
| onChange   | Trigger before the file is uploaded                   | `(e:UploaderMarkedFile)` |
| onRead     | Trigger when you click on the upload file (available) | `(e:UploaderFileItem)`   |
| onUpload   | Trigger when uploading (uploaded)                     | `(e:UploaderFileItem)`   |
| onPreview  | Trigger when you click on the preview map             | `(e:UploaderMarkedFile)` |
| onRemove   | Trigger when deleting file preview                    | `(e:UploaderMarkedFile)` |

### Slots Data Structure

Type `Uploaderslots` Inherits `Uploaderfile`.

| Parameter        | Description       | Type                                         | Default value |
| ---------------- | ----------------- | -------------------------------------------- | ------------- |
| filePreviewCover | Preview file note | `(item: UploaderMarkedFile<T>) => ReactNode` | -             |
| fileList         | Preview           | `ReactNode`                                  | -             |

### UploaderFile Data Structure

Type `UploaderFileStatus`] UPLoading`, is uploaded,` failed`indicating upload failed,`done` indicating upload completion.

| Parameter    | Description                                                          | Type                 | Default value |
| ------------ | -------------------------------------------------------------------- | -------------------- | ------------- |
| uid          | The unique identifier is automatically generated when it is not set. | `string`             | -             |
| name         | file name                                                            | `string`             | -             |
| size         | File size                                                            | `number`             | -             |
| type         | file type                                                            | `string`             | -             |
| lastModified | Final modification                                                   | `number`             | -             |
| removable    | Is it removable?                                                     | `boolean`            | -             |
| content      | content                                                              | `string`             | -             |
| status       | File status                                                          | `UploaderFileStatus` | -             |
| thumbnail    | Thumbnail address                                                    | `boolean`            | -             |
| message      | information                                                          | `string`             | -             |
| file         | document                                                             | `File`               | -             |
| url          | download link                                                        | `string`             | -             |
