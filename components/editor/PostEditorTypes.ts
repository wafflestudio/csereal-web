// 첨부파일

export type PostEditorFile = LocalFile | UploadedFile;

export interface LocalFile {
  type: 'LOCAL_FILE';
  file: File;
}

export interface UploadedFile {
  type: 'UPLOADED_FILE';
  file: {
    id: number;
    name: string;
    url: string;
    bytes: number;
  };
}

export const isLocalFile = (file: PostEditorFile): file is LocalFile => file.type === 'LOCAL_FILE';

export const isUploadedFile = (file: PostEditorFile): file is UploadedFile =>
  file.type === 'UPLOADED_FILE';

// 이미지

export type PostEditorImage = LocalImage | UploadedImage | null;

export interface LocalImage {
  type: 'LOCAL_IMAGE';
  file: File;
}

export interface UploadedImage {
  type: 'UPLOADED_IMAGE';
  url: string;
}

export const isLocalImage = (image: LocalImage | UploadedImage): image is LocalImage =>
  image.type === 'LOCAL_IMAGE';
