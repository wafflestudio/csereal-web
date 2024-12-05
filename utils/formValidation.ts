import { CareerCompanyEditorContent } from '@/app/[locale]/about/future-careers/CareerCompanies';
import { BasicEditorContent } from '@/components/editor/BasicEditor';
import { ResearchCenterEditorContent } from '@/components/editor/ResearchCenterEditor';
import { ResearchLabEditorContent } from '@/components/editor/ResearchLabEditor';
import { Course } from '@/types/academics';
import { Language, WithLanguage } from '@/types/language';
import { SimpleFaculty } from '@/types/people';

export const validateCourseForm = (content: Course) => {
  const { code, ko, en } = content;

  if (!ko.name || !ko.description) {
    throw new Error('교과목명과 설명을 입력해주세요');
  }
  if (!code) {
    throw new Error('교과목 번호를 입력해주세요');
  }
  if (!en.name || !en.description) {
    throw new Error('영어 정보를 입력해주세요');
  }
};

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

export const validateResearchCenterForm = (content: WithLanguage<ResearchCenterEditorContent>) => {
  if (!content.ko.name) {
    throw new Error('센터명을 입력해주세요');
  }
  if (!content.ko.description) {
    throw new Error('내용을 입력해주세요');
  }
  if (!content.en.name || !content.en.description) {
    throw new Error('영문 정보를 입력해주세요');
  }
};

export const validateResearchLabForm = (
  content: WithLanguage<ResearchLabEditorContent>,
  professors: WithLanguage<SimpleFaculty[]>,
  labId?: WithLanguage<number>,
) => {
  if (!content.ko.name) {
    throw new Error('제목을 입력해주세요');
  }

  const isValidProfessor = (profId: number, language: Language) => {
    const prof = professors[language].find((p) => p.id === profId);
    if (!prof) throw new Error('존재하지 않는 교수입니다');
    const isValid = prof.labId === null || prof.labId === labId?.[language];
    return isValid;
  };

  if (content.ko.professorIds.some((id) => !isValidProfessor(id, 'ko'))) {
    throw new Error('해당 교수의 연구실은 이미 존재합니다');
  }
  if (content.ko.groupId === null) {
    throw new Error('소속 연구·교육 스트림을 선택해주세요');
  }
  if (!content.ko.description) {
    throw new Error('연구실 설명을 입력해주세요');
  }
  if (!content.en.name || !content.en.description || content.en.groupId === null) {
    throw new Error('영문 정보를 입력해주세요');
  }
  if (content.en.professorIds.some((id) => !isValidProfessor(id, 'en'))) {
    throw new Error('해당 교수(영문 정보)의 연구실은 이미 존재합니다');
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
