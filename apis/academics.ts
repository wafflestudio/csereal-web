import {
  FETCH_TAG_COURSE_CHANGES,
  FETCH_TAG_CURRICULUM,
  FETCH_TAG_DEGREE,
  FETCH_TAG_GENERAL_STUDIES,
  FETCH_TAG_GUIDE,
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

import { deleteRequest, getRequest, postRequest, putRequest } from '.';

// TODO: language 쿼리 추가

/** 학부/대학원 안내 */
export const getAcademicsGuide = (type: 'undergraduate' | 'graduate') =>
  getRequest(`/academics/${type}/guide`, undefined, {
    next: { tags: [FETCH_TAG_GUIDE] },
  }) as Promise<Guide>;

export const putAcademicsGuide = (type: StudentType, formData: FormData) =>
  putRequest(`/academics/${type}/guide`, { body: formData, jsessionID: true });

/** 교과과정 */
export const getCourses = (type: 'undergraduate' | 'graduate') =>
  getRequest(`/academics/${type}/courses`) as Promise<Course[]>;

/* 전공 이수 표준 형태 */
const curriculumUrl = '/academics/undergraduate/curriculum';

export const getCurriculum = () =>
  getRequest(curriculumUrl, undefined, {
    next: { tags: [FETCH_TAG_CURRICULUM] },
  }) as Promise<Curriculum[]>;

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
const generalStudiesUrl = '/academics/undergraduate/general-studies-requirements';

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
  deleteRequest(`${generalStudiesUrl}${year}`, {
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
  getRequest(`/academics/${type}/course-changes`, undefined, {
    next: { tags: [FETCH_TAG_COURSE_CHANGES] },
  }) as Promise<CourseChange[]>;

export const postCourseChanges = (type: StudentType, data: CourseChange) =>
  postRequest(`/academics/${type}/course-changes`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, name: '교과목 변경 내역' }),
    jsessionID: true,
  });

export const putCourseChanges = (type: StudentType, data: CourseChange) =>
  putRequest(`/academics/${type}/course-changes/${data.year}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description: data.description }),
    jsessionID: true,
  });

export const deleteCourseChanges = async (type: StudentType, year: number) =>
  deleteRequest(`/academics/${type}/course-changes/${year}`, {
    jsessionID: true,
  });

/** 장학 제도 */
export const getScholarshipList = (type: string) =>
  getRequest<ScholarshipList>(`/academics/${type}/scholarship`);

export const getScholarship = (id: number) =>
  getRequest<Scholarship>(`/academics/scholarship/${id}`);
