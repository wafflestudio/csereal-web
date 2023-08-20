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

export interface SeminarEditorContent {
  title: string;
  description: string;
  location: string;

  host: string;
  speaker: {
    name: string;
    nameURL: string;
    // 직함
    title: string;
    organization: string;
    organizationURL: string;
    description: string;
    imageURL?: File;
  };
  attachments: File[];
  isPublic: boolean;
}

export interface EditAction<T> {
  type: 'EDIT';
  onDelete: () => Promise<void>;
  onComplete: (content: T) => Promise<void>;
}

export interface CreateAction<T> {
  type: 'CREATE';
  onComplete: (content: T) => Promise<void>;
}
