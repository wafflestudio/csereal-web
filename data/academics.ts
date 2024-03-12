import { CourseChange } from '@/types/academics';

import {
  undergraduateCourseChangesData,
  graduateCourses,
  undergraduateCourses,
  graduateCourseChangesData,
} from './objects';

export const getMockCourses = async (type: 'undergraduate' | 'graduate') => {
  return type === 'undergraduate' ? undergraduateCourses : graduateCourses;
};

export const getMockCourseChanges = async (
  type: 'undergraduate' | 'graduate',
): Promise<CourseChange[]> => {
  if (type === 'undergraduate') {
    return undergraduateCourseChangesData;
  } else {
    return graduateCourseChangesData;
  }
};
