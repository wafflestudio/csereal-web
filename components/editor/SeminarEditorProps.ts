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
  endDate: Date | null;
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

export const getSeminarEditorDefaultValue = (): SeminarEditorContent => {
  const date = new Date();
  const availableMinutes = [0, 15, 30, 45];
  date.setTime(date.getTime() + 15 * 60 * 1000 - 1);
  const minute = availableMinutes[Math.floor(date.getMinutes() / 15)];
  date.setMinutes(minute, 0, 0);

  console.log(date);

  return {
    title: '',
    description: '',
    location: '',
    schedule: {
      startDate: date,
      endDate: date,
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
};
