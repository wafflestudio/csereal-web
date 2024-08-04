import {
  Course,
  CourseChange,
  Curriculum,
  DegreeRequirements,
  GeneralStudiesRequirements,
  Guide,
  Scholarship,
  ScholarshipList,
} from '@/types/academics';

import { getRequest } from '.';

// TODO: language 쿼리 추가
export const getAcademicsGuide = (type: 'undergraduate' | 'graduate') =>
  getRequest(`/academics/${type}/guide`) as Promise<Guide>;

export const getCourses = (type: 'undergraduate' | 'graduate') =>
  getRequest(`/academics/${type}/courses`) as Promise<Course[]>;

export const getCurriculum = () =>
  getRequest('/academics/undergraduate/curriculum') as Promise<Curriculum[]>;

export const getCourseChanges = (type: 'undergraduate' | 'graduate') =>
  getRequest(`/academics/${type}/course-changes`) as Promise<CourseChange[]>;

export const getScholarshipList = (type: string) =>
  getRequest<ScholarshipList>(`/academics/${type}/scholarship`);

export const getScholarship = (id: number) =>
  getRequest<Scholarship>(`/academics/scholarship/${id}`);

export const getDegreeRequirements = () =>
  getRequest<DegreeRequirements>(`/academics/undergraduate/degree-requirements`);

export const getGeneralStudiesRequirements = (type: 'undergraduate' | 'graduate') =>
  getRequest<GeneralStudiesRequirements>(`/academics/${type}/general-studies-requirements`);
