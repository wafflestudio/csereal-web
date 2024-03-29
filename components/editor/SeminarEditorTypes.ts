import { CreateAction, EditAction } from './common/ActionButtons';
import { PostEditorFile, PostEditorImage } from './PostEditorTypes';

export interface SeminarEditorContent {
  title: string;
  titleForMain: string;
  description: string;
  location: string;
  schedule: SeminarSchedule;
  host: string | null;
  speaker: SeminarSpeaker;
  attachments: PostEditorFile[];
  isPrivate: boolean;
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

  return {
    title: '',
    titleForMain: '',
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
    isPrivate: false,
    isImportant: false,
  };
};
