// 첨부파일

export type EditorFile = LocalFile | UploadedFile;

export interface LocalFile {
  type: 'LOCAL_FILE';
  file: File;
}

interface UploadedFile {
  type: 'UPLOADED_FILE';
  file: {
    id: number;
    name: string;
    url: string;
    bytes: number;
  };
}

export const isLocalFile = (file: EditorFile): file is LocalFile => file.type === 'LOCAL_FILE';

export const isUploadedFile = (file: EditorFile): file is UploadedFile =>
  file.type === 'UPLOADED_FILE';

// 이미지

export type EditorImage = LocalImage | UploadedImage | null;

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

export const isUploadedImage = (image: LocalImage | UploadedImage): image is LocalImage =>
  image.type === 'UPLOADED_IMAGE';
