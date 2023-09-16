import { CreateAction, EditAction } from './common/ActionButtons';

export type PostEditorFile = LocalFile | UploadedFile;

export interface LocalFile {
  type: 'LOCAL_FILE';
  file: File;
}

export interface UploadedFile {
  type: 'UPLOADED_FILE';
  file: {
    name: string;
    url: string;
    bytes: number;
  };
}

export const isLocalFile = (file: PostEditorFile): file is LocalFile => file.type === 'LOCAL_FILE';

export const isUploadedFile = (file: PostEditorFile): file is UploadedFile =>
  file.type === 'UPLOADED_FILE';

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

export interface PostEditorContent {
  title: string;
  titleForMain: string;
  description: string;
  mainImage: PostEditorImage;
  attachments: PostEditorFile[];
  tags: string[];
  isPublic: boolean;
  isPinned: boolean;
  isImportant: boolean;
  isSlide: boolean;
}

export interface PostEditorProps {
  tags: string[];
  showMainImage?: boolean;
  showIsPinned?: boolean;
  showIsImportant?: boolean;
  showIsSlide?: boolean;
  actions: EditAction<PostEditorContent> | CreateAction<PostEditorContent>;
  initialContent?: PostEditorContent;
}

export const postEditorDefaultValue: PostEditorContent = {
  title: '',
  titleForMain: '',
  description: '',
  mainImage: null,
  attachments: [],
  tags: [],
  isPublic: true,
  isPinned: false,
  isImportant: false,
  isSlide: false,
};
