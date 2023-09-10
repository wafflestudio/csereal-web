import { Course, CourseChange } from '@/types/academics';

import {
  courseChangesData,
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
  return undergraduateCourses;
};

export const getMockCourseChanges = async (
  type: 'undergraduate' | 'graduate',
): Promise<CourseChange[]> => courseChangesData;
