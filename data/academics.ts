import { CourseChange } from '@/types/academics';

import {
  courseChangesData,
  graduateCourses,
  graduateGuideData,
  undergraduateCourses,
  undergraduateGuideData,
} from './objects';

export const getMockAcademicsGuide = async (type: 'undergraduate' | 'graduate') => {
  return {
    description: type === 'undergraduate' ? undergraduateGuideData : graduateGuideData,
  };
};

export const getMockCourses = async (type: 'undergraduate' | 'graduate') => {
  return type === 'undergraduate' ? undergraduateCourses : graduateCourses;
};

export const getMockCourseChanges = async (
  type: 'undergraduate' | 'graduate',
): Promise<CourseChange[]> => courseChangesData;
