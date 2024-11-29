import {
  FETCH_TAG_COURSE,
  FETCH_TAG_COURSE_CHANGES,
  FETCH_TAG_CURRICULUM,
  FETCH_TAG_DEGREE,
  FETCH_TAG_GENERAL_STUDIES,
  FETCH_TAG_GUIDE,
  FETCH_TAG_SCHOLARSHIP,
} from '@/constants/network';
import {
  Course,
  DegreeRequirements,
  GeneralStudiesRequirements,
  Guide,
  Scholarship,
  ScholarshipList,
  StudentType,
  TimelineContent,
} from '@/types/academics';
import { Language, WithLanguage } from '@/types/language';

import {
  deleteRequest,
  deleteRequestV2,
  getRequest,
  getRequestV2,
  postRequest,
  postRequestV2,
  putRequest,
  putRequestV2,
} from '.';

/** 학부/대학원 안내 */

export const getAcademicsGuide = (type: StudentType) =>
  getRequest<Guide>(`/academics/${type}/guide`, undefined, {
    next: { tags: [FETCH_TAG_GUIDE] },
  });

export const putAcademicsGuide = (type: StudentType, formData: FormData) =>
  putRequest(`/academics/${type}/guide`, { body: formData, jsessionID: true });

/** 교과과정 */

export const getCourses = (type: StudentType, language: Language) =>
  getRequestV2<Course[]>(`/academics/courses?studentType=${type}&sort=${language}`, undefined, {
    next: { tags: [FETCH_TAG_COURSE] },
  });

export const postCourse = (data: Course) =>
  postRequestV2(`/academics/courses`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const putCourse = (data: Course) =>
  putRequestV2(`/academics/courses`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const deleteCourse = async (code: string) =>
  deleteRequestV2(`/academics/courses/${code}`, { jsessionID: true });

/* 전공 이수 표준 형태 */

const curriculumUrl = '/academics/undergraduate/curriculum';

export const getCurriculum = () =>
  getRequest<TimelineContent[]>(curriculumUrl, undefined, {
    next: { tags: [FETCH_TAG_CURRICULUM] },
  });

export const postCurriculum = (formData: FormData) =>
  postRequest(curriculumUrl, { body: formData, jsessionID: true });

export const putCurriculum = (year: number, formData: FormData) =>
  putRequest(`${curriculumUrl}/${year}`, { body: formData, jsessionID: true });

export const deleteCurriculum = async (year: number) =>
  deleteRequest(`${curriculumUrl}/${year}`, { jsessionID: true });

/* 필수 교양 과목 */

const generalStudiesUrl = '/academics/undergraduate/general-studies-requirements';

export const getGeneralStudies = () =>
  getRequest<GeneralStudiesRequirements>(generalStudiesUrl, undefined, {
    next: { tags: [FETCH_TAG_GENERAL_STUDIES] },
  });

export const postGeneralStudies = (formData: FormData) =>
  postRequest(generalStudiesUrl, { body: formData, jsessionID: true });

export const putGeneralStudies = (year: number, formData: FormData) =>
  putRequest(`${generalStudiesUrl}/${year}`, { body: formData, jsessionID: true });

export const deleteGeneralStudies = async (year: number) =>
  deleteRequest(`${generalStudiesUrl}/${year}`, {
    jsessionID: true,
  });

/** 졸업 규정 */

export const getDegreeRequirements = () =>
  getRequest<DegreeRequirements>(`/academics/undergraduate/degree-requirements`, undefined, {
    next: { tags: [FETCH_TAG_DEGREE] },
  });

export const putDegreeRequirements = (formData: FormData) =>
  putRequest(`/academics/undergraduate/degree-requirements`, { body: formData, jsessionID: true });

/** 교과목 변경 내역 */

export const getCourseChanges = (type: StudentType) =>
  getRequest<TimelineContent[]>(`/academics/${type}/course-changes`, undefined, {
    next: { tags: [FETCH_TAG_COURSE_CHANGES] },
  });

export const postCourseChanges = (type: StudentType, formData: FormData) =>
  postRequest(`/academics/${type}/course-changes`, { body: formData, jsessionID: true });

export const putCourseChanges = (type: StudentType, year: number, formData: FormData) =>
  putRequest(`/academics/${type}/course-changes/${year}`, { body: formData, jsessionID: true });

export const deleteCourseChanges = async (type: StudentType, year: number) =>
  deleteRequest(`/academics/${type}/course-changes/${year}`, {
    jsessionID: true,
  });

/** 장학 제도 */

export const getScholarshipList = (type: StudentType) =>
  getRequest<ScholarshipList>(`/academics/${type}/scholarship`, undefined, {
    next: { tags: [FETCH_TAG_SCHOLARSHIP] },
  });

export const putScholarshipGuide = (type: StudentType, description: string) =>
  putRequestV2(`/academics/${type}/scholarship`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description }),
    jsessionID: true,
  });

export const getScholarship = async (id: number): Promise<WithLanguage<Scholarship>> => {
  const res = await getRequestV2<{ first: Scholarship; second: Scholarship }>(
    `/academics/scholarship/${id}`,
    undefined,
    {
      next: { tags: [FETCH_TAG_SCHOLARSHIP] },
    },
  );
  const isFirstKo = res.first.language === 'ko';
  return isFirstKo ? { ko: res.first, en: res.second } : { ko: res.second, en: res.first };
};

export const postScholarship = (
  type: StudentType,
  data: { koName: string; koDescription: string; enName: string; enDescription: string },
) =>
  postRequestV2(`/academics/${type}/scholarship`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const putScholarship = async (id: number, data: WithLanguage<Scholarship>) =>
  putRequestV2(`/academics/scholarship`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const deleteScholarship = async (id: number) =>
  deleteRequestV2(`/academics/scholarship/${id}`, { jsessionID: true });
