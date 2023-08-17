export interface EditorContent {
  title: string;
  description: string;
  mainImage?: File;
  attachments: File[];
  tags: string[];
  isPublic: boolean;
  isPinned: boolean;
  isSlide: boolean;
}

export interface EditAction {
  type: 'EDIT';
  onDelete: () => Promise<void>;
  onComplete: (content: EditorContent) => Promise<void>;
}

export interface CreateAction {
  type: 'CREATE';
  onComplete: (content: EditorContent) => Promise<void>;
}

export interface EditorProps {
  title: string;
  tags: string[];
  showMainImage?: boolean;
  showIsPinned?: boolean;
  showIsSlide?: boolean;
  actions: EditAction | CreateAction;
  initialContent?: EditorContent;
}
