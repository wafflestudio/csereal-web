import {
  courseChangesData,
  courseData1,
  courseData2,
  courseData3,
  courseData4,
  graduateGuideData,
  undergraduateGuideData,
} from '@/data/academics';

import { Course, CourseChange, Guide } from '@/types/academics';

import { getRequest } from '.';

type StudentType = 'undergraduate' | 'graduate';

// export const getAcademicsGuide = (type: StudentType) =>
//   getRequest(`/academics/${type}/guide`) as Promise<Guide>;

export const getAcademicsGuide = async (type: 'undergraduate' | 'graduate') => {
  return { description: type === 'undergraduate' ? undergraduateGuideData : graduateGuideData };
};

// export const getCourses = async (type: StudentType) =>
//   getRequest(`/academics/${type}/courses`) as Promise<Course[]>;

export const getCourses = async (type: StudentType): Promise<Course[]> => [
  ...Array(10)
    .fill(0)
    .map((_, i) => ({ ...courseData1, id: i })),
  ...Array(10)
    .fill(0)
    .map((_, i) => ({ ...courseData2, id: i + 10 })),
  ...Array(10)
    .fill(0)
    .map((_, i) => ({ ...courseData3, id: i + 20 })),
  ...Array(10)
    .fill(0)
    .map((_, i) => ({ ...courseData4, id: i + 30 })),
];

export const getCourseChanges = async (): Promise<CourseChange[]> => courseChangesData;
