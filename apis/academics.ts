import { FETCH_TAG_DEGREE, FETCH_TAG_GUIDE, FETCH_TAG_SCHOLARSHIP } from '@/constants/network';

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
  getRequest('/academics/undergraduate/curriculum') as Promise<Curriculum[]>;

export const getCourseChanges = (type: 'undergraduate' | 'graduate') =>
  getRequest(`/academics/${type}/course-changes`) as Promise<CourseChange[]>;

export const getScholarshipList = (type: StudentType) =>
  getRequest<ScholarshipList>(`/academics/${type}/scholarship`, undefined, {
    next: { tags: [FETCH_TAG_SCHOLARSHIP] },
  });

export const getScholarship = (id: number) =>
  getRequest<Scholarship>(`/academics/scholarship/${id}`);

export const getDegreeRequirements = () =>
  getRequest<DegreeRequirements>(`/academics/undergraduate/degree-requirements`, undefined, {
    next: { tags: [FETCH_TAG_DEGREE] },
  });

export const getGeneralStudiesRequirements = (type: 'undergraduate' | 'graduate') =>
  getRequest<GeneralStudiesRequirements>(`/academics/${type}/general-studies-requirements`);

export const putAcademicsGuide = (type: StudentType, formData: FormData) =>
  putRequest(`/academics/${type}/guide`, { body: formData, jsessionID: true });

export const putDegreeRequirements = (formData: FormData) =>
  putRequest(`/academics/undergraduate/degree-requirements`, { body: formData, jsessionID: true });

export const putScholarshipGuide = (type: StudentType, description: string) =>
  putRequest(`/academics/${type}/scholarship`, {
    body: JSON.stringify({ description }),
    jsessionID: true,
  });

export const postScholarship = (type: StudentType, description: string) =>
  postRequest(`/academics/${type}/scholarship`, {
    body: JSON.stringify({ description }),
    jsessionID: true,
  });
