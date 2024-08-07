import { FacultyEditorContent } from '@/components/editor/FacultyEditor';
import { PostEditorContent } from '@/components/editor/PostEditorTypes';
import { SeminarEditorContent } from '@/components/editor/SeminarEditorTypes';
import { StaffEditorContent } from '@/components/editor/StaffEditor';

import { WithLanguage } from '@/types/language';

export const validateNoticeForm = (content: PostEditorContent) => {
  if (content.title === '') {
    throw new Error('제목을 입력해주세요');
  }
  if (content.description === '') {
    throw new Error('내용을 입력해주세요');
  }
};

export const validateNewsForm = (content: PostEditorContent) => {
  if (content.title === '') {
    throw new Error('제목을 입력해주세요');
  }
  if (content.description === '') {
    throw new Error('내용을 입력해주세요');
  }
};

export const validateSeminarForm = (content: SeminarEditorContent) => {
  if (content.title === '') {
    throw new Error('제목을 입력해주세요');
  }
  if (content.location === '') {
    throw new Error('장소를 입력해주세요');
  }
  if (content.speaker.name === '') {
    throw new Error('이름을 입력해주세요');
  }
  if (content.speaker.organization === '') {
    throw new Error('소속을 입력해주세요');
  }
};

export const validateFacultyForm = (content: WithLanguage<FacultyEditorContent>) => {
  if (!(content.ko.name && content.ko.academicRank)) {
    throw new Error('필수 입력을 완료해주세요');
  }
  if (!(content.en.name && content.en.academicRank)) {
    throw new Error('영문 정보도 입력해주세요');
  }
};

export const validateStaffForm = (content: WithLanguage<StaffEditorContent>) => {
  const isValueEmpty = (value: StaffEditorContent[keyof StaffEditorContent]) =>
    !value || (Array.isArray(value) && value.length < 1);

  if (Object.entries(content.ko).some(([key, value]) => key !== 'image' && isValueEmpty(value))) {
    throw new Error('모든 정보를 입력해주세요');
  }
  if (Object.entries(content.en).some(([key, value]) => key !== 'image' && isValueEmpty(value))) {
    throw new Error('영문 정보도 입력해주세요');
  }
};
