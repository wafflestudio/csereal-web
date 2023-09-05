import { CreateAction, EditAction } from './common/ActionButtons';
import { PostEditorFile, PostEditorImage } from './PostEditorProps';

export interface SeminarEditorContent {
  title: string;
  description: string;
  location: string;
  schedule: SeminarSchedule;
  host: string | null;
  speaker: SeminarSpeaker;
  attachments: PostEditorFile[];
  isPublic: boolean;
  isImportant: boolean;
}

export interface SeminarSchedule {
  startDate: Date;
  endDate: Date;
}

export interface SeminarSpeaker {
  name: string;
  nameURL: string | null;
  // 직함
  title: string | null;
  organization: string;
  organizationURL: string | null;
  description: string;
  image: PostEditorImage | null;
}

export interface SeminarEditorProps {
  actions: EditAction<SeminarEditorContent> | CreateAction<SeminarEditorContent>;
  initialContent?: SeminarEditorContent;
}

export const seminarEditorPlaceholder: SeminarEditorContent = {
  title: '',
  description: '',
  location: '',
  schedule: {
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
    image: null,
  },
  attachments: [],
  isPublic: true,
  isImportant: false,
};
