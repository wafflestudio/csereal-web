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

export interface SeminarEditorContent {
  title: string;
  description: string;
  location: string;
  schedule: SeminarSchedule;
  host: string;
  speaker: SeminarSpeaker;
  attachments: File[];
  isPublic: boolean;
}

export interface SeminarSchedule {
  allDay: boolean;
  showEndDate: boolean;
  startDate: Date;
  endDate: Date;
}

export interface SeminarSpeaker {
  name: string;
  nameURL: string;
  // 직함
  title: string;
  organization: string;
  organizationURL: string;
  description: string;
  imageURL?: File;
}

export interface PostEditorProps {
  tags: string[];
  showMainImage?: boolean;
  showIsPinned?: boolean;
  showIsSlide?: boolean;
  actions: EditAction<PostEditorContent> | CreateAction<PostEditorContent>;
  initialContent?: PostEditorContent;
}

export interface SeminarEditorProps {
  actions: EditAction<SeminarEditorContent> | CreateAction<SeminarEditorContent>;
  initialContent?: SeminarEditorContent;
}

export const postEditorPlaceholder: PostEditorContent = {
  title: '',
  description: '',
  attachments: [],
  tags: [],
  isPublic: true,
  isPinned: false,
  isSlide: false,
};

export const seminarEditorPlaceholder: SeminarEditorContent = {
  title: '',
  description: '',
  location: '',
  schedule: {
    allDay: false,
    showEndDate: false,
    startDate: new Date(),
    endDate: new Date(),
  },
  host: '',
  speaker: {
    name: '',
    nameURL: '',
    title: '',
    organization: '',
    organizationURL: '',
    description: '',
  },
  attachments: [],
  isPublic: true,
};
