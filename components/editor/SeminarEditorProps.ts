import { CreateAction, EditAction } from './common/ActionButtons';

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
  image: File | null;
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
    image: null,
  },
  attachments: [],
  isPublic: true,
};
