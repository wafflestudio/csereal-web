import {
  courseData1,
  courseData2,
  courseData3,
  courseData4,
  graduateGuideData,
  undergraduateGuideData,
} from '@/data/academics';

import { Course, Guide } from '@/types/academics';

import { getRequest } from '.';

type StudentType = 'undergraduate' | 'graduate';

// export const getAcademicsGuide = (type: StudentType) =>
//   getRequest(`/guide/${type}`) as Promise<Guide>;

export const getAcademicsGuide = async (type: 'undergraduate' | 'graduate') => {
  return { description: type === 'undergraduate' ? undergraduateGuideData : graduateGuideData };
};

// export const getCourses = async (type: StudentType) =>
//   getRequest(`/courses/${type}`) as Promise<Course[]>;

export const getCourses = async (type: StudentType): Promise<Course[]> => [
  ...Array(10)
    .fill(0)
    .map((_, i) => courseData1),
  ...Array(10)
    .fill(0)
    .map((_, i) => courseData2),
  ...Array(10)
    .fill(0)
    .map((_, i) => courseData3),
  ...Array(10)
    .fill(0)
    .map((_, i) => courseData4),
];
