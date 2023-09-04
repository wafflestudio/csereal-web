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

export interface PostEditorContent {
  title: string;
  description: string;
  mainImage: File | null;
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
  description: '',
  mainImage: null,
  attachments: [],
  tags: [],
  isPublic: true,
  isPinned: false,
  isImportant: false,
  isSlide: false,
};
