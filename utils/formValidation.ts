import { CareerCompanyEditorContent } from '@/app/[locale]/about/future-careers/CareerCompanies';
import { BasicEditorContent } from '@/components/editor/BasicEditor';
import { FacilityEditorContent } from '@/components/editor/FacilityEditor';
import { FacultyEditorContent } from '@/components/editor/FacultyEditor';
import { PostEditorContent } from '@/components/editor/PostEditorTypes';
import { ResearchCenterEditorContent } from '@/components/editor/ResearchCenterEditor';
import { SeminarEditorContent } from '@/components/editor/SeminarEditorTypes';
import { StaffEditorContent } from '@/components/editor/StaffEditor';
import { Course } from '@/types/academics';
import { WithLanguage } from '@/types/language';

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
    throw new Error('영문 정보도 입력해주세요');
  }
};

export const validateStaffForm = (content: WithLanguage<StaffEditorContent>) => {
  const isValueEmpty = (value: ValueOf<StaffEditorContent>) =>
    !value || (Array.isArray(value) && value.length === 0);

  if (Object.entries(content.ko).some(([key, value]) => key !== 'image' && isValueEmpty(value))) {
    throw new Error('모든 정보를 입력해주세요');
  }
  if (Object.entries(content.en).some(([key, value]) => key !== 'image' && isValueEmpty(value))) {
    throw new Error('영문 정보도 입력해주세요');
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
    throw new Error('영어 정보도 입력해주세요');
  }
};

export const validateBasicForm = (content: BasicEditorContent, titleRequired?: boolean) => {
  if (titleRequired && !content.name.ko) {
    throw new Error('제목을 입력해주세요');
  }
  if (!content.description.ko) {
    throw new Error('내용을 입력해주세요');
  }
  if ((titleRequired && !content.name.en) || !content.description.en) {
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
    throw new Error('영문 정보도 입력해주세요');
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
