import { CareerCompanyEditorContent } from '@/app/[locale]/about/future-careers/CareerCompanies';
import { BasicEditorContent } from '@/components/editor/BasicEditor';

export const validateBasicForm = (
  content: BasicEditorContent,
  option: { titleRequired?: boolean; engRequired?: boolean } = {
    titleRequired: false,
    engRequired: true,
  },
) => {
  if (option.titleRequired && !content.title.ko) {
    throw new Error('제목을 입력해주세요');
  }
  if (!content.description.ko) {
    throw new Error('내용을 입력해주세요');
  }
  if (
    option.engRequired &&
    ((option.titleRequired && !content.title.en) || !content.description.en)
  ) {
    throw new Error('영문 정보를 입력해주세요');
  }
};

export const validateCareerCompanyForm = (content: CareerCompanyEditorContent) => {
  if (!content.name) {
    throw new Error('기업명을 입력해주세요');
  }
  if (!content.year) {
    throw new Error('창업 연도를 입력해주세요');
  }
};
