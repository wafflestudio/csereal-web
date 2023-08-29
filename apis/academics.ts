import {
  getMockAcademicsGuide,
  getMockCourseChanges,
  getMockCourses,
  getMockDegreeRequirements,
} from '@/data/academics';

import { Course, CourseChange, DegreeRequirements, Guide } from '@/types/academics';

import { getRequest } from '.';

type StudentType = 'undergraduate' | 'graduate';

export const getAcademicsGuide = getMockAcademicsGuide;

export const getCourses = getMockCourses;

export const getCourseChanges = getMockCourseChanges;

export const getDegreeRequirements = getMockDegreeRequirements;

// export const getAcademicsGuide = (type: StudentType) =>
//   getRequest(`/academics/${type}/guide`) as Promise<Guide>;

// export const getCourses = (type: StudentType) =>
//   getRequest(`/academics/${type}/courses`) as Promise<Course[]>;

// export const getCourseChanges = (): Promise<CourseChange[]> => courseChangesData;

// export const getDegreeRequirements = () =>
//   getRequest(`/academics/undergraduate/degree-requirements`) as Promise<DegreeRequirements[]>;
