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
  CourseChange,
  Curriculum,
  DegreeRequirements,
  GeneralStudiesRequirement,
  GeneralStudiesRequirements,
  Guide,
  Scholarship,
  ScholarshipList,
  StudentType,
} from '@/types/academics';
import { Language, WithLanguage } from '@/types/language';

import { deleteRequest, getRequest, postRequest, putRequest } from '.';

/** 학부/대학원 안내 */

export const getAcademicsGuide = (type: StudentType) =>
  getRequest<Guide>(`/v1/academics/${type}/guide`, undefined, {
    next: { tags: [FETCH_TAG_GUIDE] },
  });

export const putAcademicsGuide = (type: StudentType, formData: FormData) =>
  putRequest(`/v1/academics/${type}/guide`, { body: formData, jsessionID: true });

/** 교과과정 */

export const getCourses = (type: StudentType, language: Language) =>
  getRequest<Course[]>(`/v2/academics/courses?studentType=${type}&sort=${language}`, undefined, {
    next: { tags: [FETCH_TAG_COURSE] },
  });

export const postCourse = (data: Course) =>
  postRequest(`/v2/academics/courses`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const putCourse = (data: Course) =>
  putRequest(`/v2/academics/courses`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const deleteCourse = async (code: string) =>
  deleteRequest(`/v2/academics/courses/${code}`, { jsessionID: true });

/* 전공 이수 표준 형태 */

const curriculumUrl = '/v1/academics/undergraduate/curriculum';

export const getCurriculum = () =>
  getRequest<Curriculum[]>(curriculumUrl, undefined, {
    next: { tags: [FETCH_TAG_CURRICULUM] },
  });

export const postCurriculum = (data: Curriculum) =>
  postRequest(curriculumUrl, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, name: '전공 이수 표준 형태' }),
    jsessionID: true,
  });

export const putCurriculum = (data: Curriculum) =>
  putRequest(`${curriculumUrl}/${data.year}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description: data.description }),
    jsessionID: true,
  });

export const deleteCurriculum = async (year: number) =>
  deleteRequest(`${curriculumUrl}/${year}`, { jsessionID: true });

/* 필수 교양 과목 */

const generalStudiesUrl = '/v1/academics/undergraduate/general-studies-requirements';

export const getGeneralStudies = () =>
  getRequest<GeneralStudiesRequirements>(generalStudiesUrl, undefined, {
    next: { tags: [FETCH_TAG_GENERAL_STUDIES] },
  });

export const postGeneralStudies = (data: GeneralStudiesRequirement) =>
  postRequest(generalStudiesUrl, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, name: '필수 교양 과목' }),
    jsessionID: true,
  });

export const putGeneralStudies = (data: GeneralStudiesRequirement) =>
  putRequest(`${generalStudiesUrl}/${data.year}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description: data.description }),
    jsessionID: true,
  });

export const deleteGeneralStudies = async (year: number) =>
  deleteRequest(`${generalStudiesUrl}/${year}`, {
    jsessionID: true,
  });

/** 졸업 규정 */

export const getDegreeRequirements = () =>
  getRequest<DegreeRequirements>(`/v1/academics/undergraduate/degree-requirements`, undefined, {
    next: { tags: [FETCH_TAG_DEGREE] },
  });

export const putDegreeRequirements = (formData: FormData) =>
  putRequest(`/v1/academics/undergraduate/degree-requirements`, {
    body: formData,
    jsessionID: true,
  });

/** 교과목 변경 내역 */

export const getCourseChanges = (type: StudentType) =>
  getRequest<CourseChange[]>(`/v1/academics/${type}/course-changes`, undefined, {
    next: { tags: [FETCH_TAG_COURSE_CHANGES] },
  });

export const postCourseChanges = (type: StudentType, data: CourseChange) =>
  postRequest(`/v1/academics/${type}/course-changes`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, name: '교과목 변경 내역' }),
    jsessionID: true,
  });

export const putCourseChanges = (type: StudentType, data: CourseChange) =>
  putRequest(`/v1/academics/${type}/course-changes/${data.year}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description: data.description }),
    jsessionID: true,
  });

export const deleteCourseChanges = async (type: StudentType, year: number) =>
  deleteRequest(`/v1/academics/${type}/course-changes/${year}`, {
    jsessionID: true,
  });

/** 장학 제도 */

export const getScholarshipList = (type: StudentType) =>
  getRequest<ScholarshipList>(`/v1/academics/${type}/scholarship`, undefined, {
    next: { tags: [FETCH_TAG_SCHOLARSHIP] },
  });

export const putScholarshipGuide = (type: StudentType, description: string) =>
  putRequest(`/v2/academics/${type}/scholarship`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description }),
    jsessionID: true,
  });

export const getScholarship = async (id: number): Promise<WithLanguage<Scholarship>> => {
  const res = await getRequest<{ first: Scholarship; second: Scholarship }>(
    `/v2/academics/scholarship/${id}`,
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
  postRequest(`/v2/academics/${type}/scholarship`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const putScholarship = async (id: number, data: WithLanguage<Scholarship>) =>
  putRequest(`/v2/academics/scholarship`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const deleteScholarship = async (id: number) =>
  deleteRequest(`/v2/academics/scholarship/${id}`, { jsessionID: true });
