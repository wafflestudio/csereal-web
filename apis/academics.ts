import { FETCH_TAG_CURRICULUM, FETCH_TAG_DEGREE, FETCH_TAG_GUIDE } from '@/constants/network';

import {
  Course,
  CourseChange,
  Curriculum,
  DegreeRequirements,
  GeneralStudiesRequirements,
  Guide,
  Scholarship,
  ScholarshipList,
  StudentType,
} from '@/types/academics';

import { getRequest, postRequest, putRequest } from '.';

// TODO: language 쿼리 추가
export const getAcademicsGuide = (type: 'undergraduate' | 'graduate') =>
  getRequest(`/academics/${type}/guide`, undefined, {
    next: { tags: [FETCH_TAG_GUIDE] },
  }) as Promise<Guide>;

export const getCourses = (type: 'undergraduate' | 'graduate') =>
  getRequest(`/academics/${type}/courses`) as Promise<Course[]>;

export const getCurriculum = () =>
  getRequest('/academics/undergraduate/curriculum', undefined, {
    next: { tags: [FETCH_TAG_CURRICULUM] },
  }) as Promise<Curriculum[]>;

export const getCourseChanges = (type: 'undergraduate' | 'graduate') =>
  getRequest(`/academics/${type}/course-changes`) as Promise<CourseChange[]>;

export const getScholarshipList = (type: string) =>
  getRequest<ScholarshipList>(`/academics/${type}/scholarship`);

export const getScholarship = (id: number) =>
  getRequest<Scholarship>(`/academics/scholarship/${id}`);

export const getDegreeRequirements = () =>
  getRequest<DegreeRequirements>(`/academics/undergraduate/degree-requirements`, undefined, {
    next: { tags: [FETCH_TAG_DEGREE] },
  });

export const getGeneralStudiesRequirements = () =>
  getRequest<GeneralStudiesRequirements>(`/academics/indergraduate/general-studies-requirements`);

export const putAcademicsGuide = (type: StudentType, formData: FormData) =>
  putRequest(`/academics/${type}/guide`, { body: formData, jsessionID: true });

export const putDegreeRequirements = (formData: FormData) =>
  putRequest(`/academics/undergraduate/degree-requirements`, { body: formData, jsessionID: true });

export const postCurriculum = (data: Curriculum) =>
  postRequest(`/academics/undergraduate/curriculum`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, name: '전공 이수 표준 형태' }),
    jsessionID: true,
  });

export const putCurriculum = (data: Curriculum) =>
  putRequest(`/academics/undergraduate/curriculum/${data.year}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description: data.description }),
    jsessionID: true,
  });
