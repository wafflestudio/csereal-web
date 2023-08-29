import { Course, CourseChange, Curriculum, DegreeRequirements } from '@/types/academics';

import {
  CurriculumData,
  DegreeRequirementsData,
  courseChangesData,
  courseData1,
  courseData2,
  courseData3,
  courseData4,
  graduateGuideData,
  undergraduateGuideData,
} from './objects';

export const getMockAcademicsGuide = async (type: 'undergraduate' | 'graduate') => {
  return { description: type === 'undergraduate' ? undergraduateGuideData : graduateGuideData };
};

export const getMockCourses = async (type: 'undergraduate' | 'graduate'): Promise<Course[]> => [
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

export const getMockCourseChanges = async (
  type: 'undergraduate' | 'graduate',
): Promise<CourseChange[]> => courseChangesData;

export const getMockDegreeRequirements = async (): Promise<DegreeRequirements[]> =>
  DegreeRequirementsData;

export const getMockCurriculum = async (): Promise<Curriculum[]> => CurriculumData;
