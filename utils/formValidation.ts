import { PostEditorContent } from '@/components/editor/PostEditorTypes';
import { SeminarEditorContent } from '@/components/editor/SeminarEditorTypes';

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
