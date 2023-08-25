import { CreateAction, EditAction } from './common/ActionButtons';

export interface PostEditorContent {
  title: string;
  description: string;
  mainImage?: File;
  attachments: File[];
  tags: string[];
  isPublic: boolean;
  isPinned: boolean;
  isSlide: boolean;
}

export interface PostEditorProps {
  tags: string[];
  showMainImage?: boolean;
  showIsPinned?: boolean;
  showIsSlide?: boolean;
  actions: EditAction<PostEditorContent> | CreateAction<PostEditorContent>;
  initialContent?: PostEditorContent;
}

export const postEditorDefaultValue: PostEditorContent = {
  title: '',
  description: '',
  attachments: [],
  tags: [],
  isPublic: true,
  isPinned: false,
  isSlide: false,
};