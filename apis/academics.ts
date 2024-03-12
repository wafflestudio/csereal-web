import { getMockCourseChanges, getMockCourses } from '@/data/academics';

import { Attachment } from '@/components/common/Attachments';

import { Curriculum, Scholarship, ScholarshipList } from '@/types/academics';

import { getRequest } from '.';

export const getAcademicsGuide = (type: 'undergraduate' | 'graduate') =>
  getRequest(`/academics/${type}/guide`) as Promise<{
    description: string;
    attachments: Attachment[];
  }>;

export const getCourses = getMockCourses;

export const getEngCourses = getMockCourses;

export const getCurriculum = () =>
  getRequest('/academics/undergraduate/curriculum') as Promise<Curriculum[]>;

export const getCourseChanges = getMockCourseChanges;

export const getScholarshipList = (type: string) =>
  getRequest<ScholarshipList>(`/academics/${type}/scholarship`);

export const getScholarship = (type: string, id: number) =>
  getRequest<Scholarship>(`/academics/${type}/scholarship/${id}`);
