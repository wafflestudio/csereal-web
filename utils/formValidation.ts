import { CareerCompanyEditorContent } from '@/app/[locale]/about/future-careers/CareerCompanies';
import { BasicEditorContent } from '@/components/editor/BasicEditor';
import { FacilityEditorContent } from '@/components/editor/FacilityEditor';
import { FacultyEditorContent } from '@/components/editor/FacultyEditor';
import { PostEditorContent } from '@/components/editor/PostEditorTypes';
import { ResearchCenterEditorContent } from '@/components/editor/ResearchCenterEditor';
import { ResearchLabEditorContent } from '@/components/editor/ResearchLabEditor';
import { SeminarEditorContent } from '@/components/editor/SeminarEditorTypes';
import { StaffEditorContent } from '@/components/editor/StaffEditor';
import { Course } from '@/types/academics';
import { Language, WithLanguage } from '@/types/language';
import { SimpleFaculty } from '@/types/people';

import { ValueOf } from './type';

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
    throw new Error('영문 정보를 입력해주세요');
  }
};

export const validateStaffForm = (content: WithLanguage<StaffEditorContent>) => {
  const isValueEmpty = (value: ValueOf<StaffEditorContent>) =>
    !value || (Array.isArray(value) && value.length === 0);

  if (Object.entries(content.ko).some(([key, value]) => key !== 'image' && isValueEmpty(value))) {
    throw new Error('모든 정보를 입력해주세요');
  }
  if (Object.entries(content.en).some(([key, value]) => key !== 'image' && isValueEmpty(value))) {
    throw new Error('영문 정보를 입력해주세요');
  }
};

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

export const validateFacilityForm = (content: WithLanguage<FacilityEditorContent>) => {
  const isValueEmpty = (value: ValueOf<FacilityEditorContent>) =>
    !value || (Array.isArray(value) && value.length === 0);

  if (
    Object.entries(content.ko).some(([key, value]) => key !== 'mainImage' && isValueEmpty(value))
  ) {
    throw new Error('모든 정보를 입력해주세요');
  }
  if (
    Object.entries(content.en).some(([key, value]) => key !== 'mainImage' && isValueEmpty(value))
  ) {
    throw new Error('영문 정보를 입력해주세요');
  }
};

export const validateBasicForm = (
  content: BasicEditorContent,
  option: { titleRequired?: boolean; engRequired?: boolean } = {
    titleRequired: false,
    engRequired: true,
  },
) => {
  if (option?.titleRequired && !content.title.ko) {
    throw new Error('제목을 입력해주세요');
  }
  if (!content.description.ko) {
    throw new Error('내용을 입력해주세요');
  }
  if (
    option?.engRequired &&
    ((option?.titleRequired && !content.title.en) || !content.description.en)
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
